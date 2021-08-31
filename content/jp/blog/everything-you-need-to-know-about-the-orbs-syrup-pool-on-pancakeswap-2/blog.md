---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/bg.png
blogUrl: everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap-2
date: 2021-06-24
title: PancakeSwapのOrbs Syrup Pool 操作解説

author:
  - /jp/blog/common/authors/MayoHotta.md
type:
short_description:
---

Orbs と PancakeSwap は、Orbs Syrup Pool のローンチを[発表しました](https://www.orbs.com/jp/orbs-launches-a-syrup-pool-on-pancakeswap-2/)。

PancakeSwap の Orbs Syrup Pool は、Orbs の流動性提供者が CAKE トークンをファームし、さらに CAKE トークンをステークして追加の ORBS を獲得することができます。

今回の取り組みは、Binance Smart Chain における Orbs の立ち位置をより強固なものにするための重要な最初のマイルストーンです。

キャンペーンの詳細をご覧ください。

### チュートリアル動画

こちらのショートビデオで、PancakeSwap での Orbs Syrup Pool への参加方法を解説します。

<iframe src="https://www.youtube.com/embed/hcoQPdeET1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

手順は大きく４つに分けられます。

1. イーサリアム上の ERC20 ORBS トークンを BSC 上の BEP20 に移行する(0:16 -- 0:54)

初めに、ORBS トークンをイーサリアムから BSC に移行する必要があります。これは、[multichain.xyz](https://multichain.xyz/swap)のクロスチェーン・ブリッジを使って行うことができます。詳細は[こちらのブログ](https://www.orbs.com/jp/orbs%e3%81%8cbinance-smart-chain%e3%81%a7%e5%88%a9%e7%94%a8%e5%8f%af%e8%83%bd%e3%81%a8%e3%81%aa%e3%82%8a%e3%81%be%e3%81%97%e3%81%9f/)をご覧ください。

![](/assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/img1.png)

Bridged ORBS トークンコントラクトは、こちらの BSC でご確認ください。

<https://bscscan.com/token/0xebd49b26169e1b52c04cfd19fcf289405df55f80>

サードパーティの技術を使用する際には常に注意を払い、関連するリスクについてご自身で確認し、すべての[セキュリティ監査](https://github.com/anyswap/Anyswap-Audit/blob/master/SlowMist/AnySwap%20CrossChain-Bridge%20Security%20Audit%20Report.pdf)をお読みください。

.

#### 2) ORBS-BUSD pool に流動性を追加する

(0:54 -- 3:05)

BEP20 ORBS トークンを入手すると、ORBS-BUSD プールに[流動性を追加する](https://exchange.pancakeswap.finance/#/pool)準備が整います。（ORBS トークンと同額の BUSD も提供する必要があることに注意してください）

![](/assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/img2.png)

プールに流動性を供給すると、BUSD-ORBS LP トークンを受け取れるようになります。これを次のステップで使用することができます。

#### 3) Farming CAKE with LP tokens

(3:05 -- 4:47)

3）LP トークンで CAKE をファーミングする

(3:05 - 4:47)

次に、ORBS-BUSD のプールに流動性を追加することで得られる LP トークンを使って、CAKE トークンのファーミングを行います。ファームを開始すると、CAKE トークンが蓄積され、定期的に収穫できるようになります。

![](/assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/img3.png)

4. CAKE をステーキングして ORBS を獲得

(4:47 - 6:25)

収穫した CAKE トークンを Orbs [Syrup Pool](https://pancakeswap.finance/pools)にステークすると、ORBS を獲得できるようになります。

![](/assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/img4.png)

ここまでで完了です！これであなたも DeFi Farmer です。

Orbs Syrup Pool キャンペーンは 60 日間続き、合計 673 万 ORBS トークンがファーミングに利用できます。

この素晴らしいキャンペーンへのご参加お待ちしています！

期待以上の成果

この取り組みは始まったばかりですが、すでに初期段階での評価を下すことができます。

この取り組みの 3 つの目的は、BSC の新しいユーザー層を獲得すること、Orbs の BSC への移行を促すこと、そして Orbs のプールに流動性を提供することでした。

こちらに PancakeSwap の UI トップからのスクリーン・ショットをご紹介します。

![](/assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/img5.jpeg)

![](/assets/img/blog/everything-you-need-to-know-about-the-orbs-syrup-pool-on-pancakeswap/img6.jpeg)

PancakeSwap の Farms と Syrup Pools ページのとても中心となる場所に Orbs のファームが紹介されていることがわかります。また、「PancakeSwap」では、「Orbs Syrup Pool」の開設を告知するツイートを[いくつか投稿](https://twitter.com/PancakeSwap/status/1407205473409933321)しており、注目を集めています。全体的に見て、BSC のユーザーからは、この取り組みに対する非常に積極的なコミュニティ参加が見られます。

Orbs の BSC への移行のインセンティブに関しては、BSC ネットワークに移行する ORBS トークンが劇的に増加していることがわかります。その量は、シロップキャンペーン前の約 80 万ドルから、現在では 3500 万ドル弱にまで増加しています。もう一つの注目すべきパラメータは、Orbs を保有するアドレスの数で、この期間中に 100 以下から 1,000 弱へと、10 倍もの増加を見せています。

最後に、このブログ記事を書いている時点で、ORBS-BUSD プールの TVL は 200 万ドルを超えています。これは、Ethereum と BSC の両方で、あらゆる DEX における ORBS の最も流動性の高いプールとなっています。

このように、非常に良いスタートを切ることができました。

<div class='line-separator'></div>

ご質問はいつでも[Orbs Japan Telegram](https://t.me/joinchat/G0HZhBQssmZ05v6sp_G6jg)、[オフィシャル LINE](https://line.me/R/ti/p/%40vrf9558a)へご連絡ください。[Orbs Japan twitter](https://twitter.com/JapanOrbs)、日本語[youtube チャンネル](https://www.youtube.com/channel/UCZePjhX4e6CuAe8v63Li9lg) へのご登録もお待ちしています。
