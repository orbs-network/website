---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/group-signature-schemes-with-distributed-traceability-or-how-to-open-a-signature-fairly/bg.jpeg
blogUrl: group-signature-schemes-with-distributed-traceability-or-how-to-open-a-signature-fairly
date: 2018-06-28
title: Group Signature Schemes with Distributed Traceability (or how to open a signature fairly)
author:
  - ../common/authors/MayaL.md
type:
short_description: In this post I want to discuss group signature schemes, and specifically group signatures with distributed traceability and show why this is an interesting cryptographic tool for distributed systems, using the Helix consensus protocol as an example to how these signatures can be used.
---

In this post I want to discuss group signature schemes, and specifically group signatures with distributed traceability and show why this is an interesting cryptographic tool for distributed systems, using the Helix consensus protocol as an example to how these signatures can be used.

[_Group signatures_](https://dl.acm.org/citation.cfm?id=1754897), introduced by Chaum and Van Heyst, allow a member of a group to sign anonymously on behalf of the group, while offering a possibility to trace the identity of the signer in special cases. That is, group participants can check, using verification keys, that a signature was indeed created by someone in the group but they cannot tell by whom. In case of disputes or misbehavior, a tracing authority uses its tracing key to trace back the signer.

For some use cases having a single tracing authority works. However, in many other cases there is no single authority that everyone trusts for revoking anonymity and so it makes more sense to divide responsibility between several authorities. This insight lead Benjumea et al. to design “[_Fair traceable multi-group signatures_](https://eprint.iacr.org/2008/047.pdf)”. In their scheme opening a signature is possible if multiple fairness authorities cooperate. The fairness authorities can also cooperate to reveal a tracing key of a user under suspicion. This key can be used to check if a message was signed by a certain user without revoking the anonymity of the other users.

To this day, there are several signature schemes with distributed traceability that differ slightly regarding to the functionality they offer, such as “[Democratic Group Signatures with Threshold Traceability](https://eprint.iacr.org/2008/112.pdf)” by Zheng et al., and “[Short group Signatures with Distributed Traceability](https://pdfs.semanticscholar.org/dfd3/0ee27ab7167900dbdddff11b22132f9ea5d5.pdf)” by Blomer et al., on which I will elaborate further.

### Group signatures with distributed traceability in Helix

At Orbs, we are developing [Helix](https://www.orbs.com/helix-consensus-white-paper), our original consensus protocol which is especially designed for ensuring transactions are ordered in a fair way. The key concept in Helix is that network nodes cannot manipulate which transactions are included in a new block or their ordering. In particular they cannot censor specific nodes or users, and cannot favor their own transactions in a substantial way. You can read more about Helix in this blog [post.](https://medium.com/orbs-network/helix-the-orbs-consensus-algorithm-af5e6dc08856)

A major contributor for fairness in Helix is having the users encrypt their transactions and then decrypt the original transactions only after they are appended to the blockchain. Encrypting the transactions comes at a price, in particular, it raises the need to punish users and nodes who are sending junk to the network instead of valid transactions. For this reason we need a mechanism for revealing which network nodes are responsible for problematic transactions in order to diminish their reputation.

We can do this using group signatures with distributed traceability, by having each network node serve as a fairness authority and require a threshold number of authorities to open and trace signatures.

I now turn to describing the flow a transaction makes in Helix and how group signatures with distributed traceability can be used. If you are less interested about this particular flow you can skip ahead and read about the candidate signature scheme. The flow starts when a user creates a transaction, encrypts it, and sends it to a network node that it is associated with. The network node then signs the transaction using a fair traceable group signature scheme and relays the transaction to the network. Before including the transaction in a block, the block creator checks the transaction has a valid group signature. After the block is appended to the blockchain, we initiate a process (which requires a threshold number of nodes) for decrypting the transactions in the block. If needed (for example, the decrypted transaction turns out to be invalid) a threshold number of nodes cooperate and open the signature in order to reveal which node signed this transaction.

Another possible option for the flow is to open the signatures by default in parallel to the decryption process. The advantage of opening the signature by default is that this way we do not need to initiating a special protocol for faulty transactions and instead have this process executed as part of the normal flow. Another option is to incorporate the process of revealing a tracing key (used to trace a specific misbehaving node). We also note that some group signature schemes also have claim functionality, in which signers can claim the signature as belonging to them, which we did not use in the above flow.

From our flow we deduce the **security requirements** we seek:

- Anonymity: A group signature does not reveal the identity of the member who produced it, unless more than a threshold number of fairness authorities cooperate.
- Traceability maintains anonymity: If a node claims it is the originator of a signature or its identity was revealed as part of the tracing algorithm, this does not comprise the privacy of the remaining past or future group signatures that it issues.
- Unlinkability: It is impossible to relate two or more signatures as being produced by the same signer without cooperation of a threshold number of authorities.
- Non-frameability: Even if the group and tracing managers collude with the rest of the group, they cannot frame an honest group member. A user may be framed in two different ways: the authorities and other users may construct a signature that opens or traces to an innocent user (this requirement is also called strong exculpability), or they may claim a signature that was generated by the user as their own.

Other important requirements are: supporting dynamic change of signers and tracers, and not requiring trusted setup.

### **Candidate Signature Scheme**

One of the most efficient signature scheme currently known is by Boneh, Boyen and Shacham (BBS), which they introduced in their paper “[Short group signatures.](http://crypto.stanford.edu/~dabo/papers/groupsigs.pdf)” Their signature scheme lacks a few properties required for our use. Firstly, their group signature scheme does not provide distributed traceability but rather requires a centralized tracing authority. In addition, their scheme does not satisfy “traceability maintains anonymity” property (because it does not provide CCA-anonymity, explained later on) which is crucial in our setting. Moreover, the key generation process requires a trusted dealer. Fortunately, there are follow-up papers that take care of the first two issues. The ideas can be combined to achieve a CCA-anonymous signature scheme that offers distributed traceability. Getting rid of the trusted dealer is an issue that needs to be addressed if we choose this scheme.

In a paper by Blomer et. al, “Short group signatures with distributed traceability,” the scheme of BBS is extended to support distributed traceability. This is achieved in the following way. In the BBS scheme, part of the signature is an encryption of (part of) the secret key, and opening amounts to decrypting this ciphertext. In the paper by Blomer they change the encryption to threshold encryption. Opening a signature consists of two processes, the first is producing an open share from the signature, and the second is combining a threshold number of shares to decrypt back the signer’s key. Another modification they make is adding an additional element to the secret key which is only known to the user and not to the fairness authorities. This guarantees that fairness authorities cannot sign on behalf of other members.

The scheme by BBS provides CPA-anonymity. Roughly, this means that the signatures are anonymous provided that the adversary does not get to query the trace signatures protocol. However, this assumption is not justified in our setting since an adversary may produce signed messages and send them to the blockchain, and afterwards they will be traced as part of our normal flow. Therefore, we require the signature scheme to be CCA-anonymous, which means that even an adversary which has access the open\\tracing protocol, cannot trace the signature without cooperating with a threshold number of fairness authorities. In his paper, “[Communication-efficient non-interactive proofs of knowledge with online extractors](https://link.springer.com/chapter/10.1007/11535218_10),” Fischlin introduces a method for transforming the signature scheme by BBS to be CCA-secure. This works by adding component to the signature which is generating a non-interactive zero-knowledge proof of knowledge for the random values used when encrypting. Informally, this ensures that the adversary does not gain much from interacting with the tracing protocol since in order to sign a valid message she had to know the random values used for generating the encryption in the first place.

**Size of the signature**

The length of the BBS group signature scheme under the parameters suggested by the authors is 1,533 bits. This is comparable to the size of RSA signature, which is 1,024 or 2,048 bits long for signatures with similar security. Adding distributed traceability does not make the signature longer, but complexity wise it requires calculating lagrange polynomial interpolation in order to combine shares.

As for the zero knowledge proof of knowledge , this is relatively large in size and is costly to compute. For the parameters suggested in the paper, the length of is 3,520 bits, which amounts to a signature length of 5,053 bits total.

The size of the signature shares are 340 bits per share.

...

_I would like to thank Steven Goldfeder for helpful discussions on the subject._
