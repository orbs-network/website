---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/bg.jpeg
blogUrl: orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks-2
date: 2021-05-13
title: OrbsはChainlinkを統合し、フラッシュローン攻撃からシングルサイド・ファーミングを保護
author:
  - /jp/blog/common/authors/MayoHotta.md
type:
short_description:
---

Orbs の [Liquidity Nexus プロトコル](https://nexus.orbs.com/)は、SushiSwap のようなどの DEX でも、ETH/USDC のような人気のあるプールで ETH のみを使ったファーミングを可能にします。

これにより、60%以上の APY（年間利回り）をもたらす ETH のみの戦略への道が開かれます。

このプロトコルは Chainlink と統合されており、実利を目的とした攻撃への防御となります。ここでは、想定される攻撃と、Chainlink がそれをどのように防ぐかを見ていきます。

---

# The dream of single-sided farming

シングルサイド・ファーミングの実現

リクイディティ・ファーミングに参加したことがある方は、リクイディティには常にペアが必要であることをご存知でしょう。SushiSwap の ETH/USDC プールで SUSHI をファーミングするには、ETH と USDC が同量必要です。同様に、PancakeSwap の BNB/BUSD プールで CAKE をファーミングするには、同量の BNB と BUSD が必要です。

暗号資産を長期保有する場合は、ETH（または BNB）を保有したいと考えることでしょう。USDC のようなステーブル・コインをガチホするだけでは、ファーミングができなくなり、暗号資産による利益が減ってしまいます。ETH がまた強気になったら、半分も買えなくなるというリスクがあります。

同じ APY を得ることができるなら、ETH だけを使うことができたら素晴らしいと思いませんか？もう、すべての資産をアクティブに運用するために、ペア間でポートフォリオのバランスを取る必要はありません。

Orbs Liquidity Nexus では、これを開発しようとしています。私たちは、従来の CeFi の世界には、暗号資産のリスクを最小限にしたい USDC がたくさんあることに気づきました。ここから流動性を調達し、DeFi から新たに入金された ETH とペアにすることで、2 つの異なった参加者が一緒にファーミングを行うことができるようになります。一方の参加者が ETH を、もう一方の参加者が USDC を追加するのです。

私の過去記事を読むと、その仕組みがよくわかります。[「はじめに」](https://www.orbs.com/jp/orbs-%e3%83%aa%e3%82%af%e3%82%a4%e3%83%87%e3%82%a3%e3%83%86%e3%82%a3nexus%e3%81%ae%e7%b4%b9%e4%bb%8b-%e6%b5%81%e5%8b%95%e6%80%a7%e4%be%9b%e7%b5%a6%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9/)、[「パート 1」](https://www.orbs.com/jp/orbs%e3%81%ab%e3%82%88%e3%82%8bdex%e6%8e%a5%e7%b6%9a-%e3%82%b7%e3%83%b3%e3%82%b0%e3%83%ab%e3%82%b5%e3%82%a4%e3%83%89%e3%83%bb%e3%83%95%e3%82%a1%e3%83%bc%e3%83%9f%e3%83%b3%e3%82%b0-%e3%83%aa%e3%82%af/)、[「パート 2」](https://www.orbs.com/jp/orbs%e3%81%ab%e3%82%88%e3%82%8bdex%e6%8e%a5%e7%b6%9a-%e3%82%b7%e3%83%b3%e3%82%b0%e3%83%ab%e3%82%b5%e3%82%a4%e3%83%89%e3%83%bb%e3%83%95%e3%82%a1%e3%83%bc%e3%83%9f%e3%83%b3%e3%82%b0-%e3%83%aa%e3%82%af-2/)、[「パート 3」](https://www.orbs.com/jp/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3-2/)です。コードがお好きな方は、[Github](https://github.com/orbs-network/nexus-sushiswap)にあるコントラクトや、それを利用して ETH の高利回りを得ている[harvest.finance vault](https://github.com/orbs-network/nexus-harvestfinance/tree/master/contracts/strategies/nexus)の例をご覧ください。

# The flash loan monster

フラッシュローンというモンスター

増え続ける[DeFi の事件リスト](https://rekt.news/leaderboard/)を見ていると、最近の事件の多くがフラッシュ・ローンから始まっていることにお気づきでしょう。フラッシュ・ローンとは一体何なのか、そして、なぜそれほどまでに危険なのでしょうか。

フラッシュローンは、CeFi の世界では類を見ない、DeFi の素晴らしい仕組みです。フラッシュローンは、誰でも無担保であらゆる規模のローンを組むことができます。短期間で 3 億ドルを借りることも問題ありません。取引が終わる前に必ずローンを返済すれば良いだけです。

ここで 3 億ドルを自由に使えるような人たちは、市場を巧みに操作し始めます。例えば、SushiSwap の ETH/USDC ペアのスワップを発動して、このペアの ETH 価格を一時的に 95%下げたり、ETH の価格を一時的に 10 倍にしたりといったことができます。このような状況は、それ自体は問題を引き起こしませんが、開発者が通常は予想しないような極端な状態では、経済的脆弱性を露呈することになります。

フラッシュ・ローンの提供者というと、通常は[Aave](https://docs.aave.com/developers/guides/flash-loans)のようなレンディング・プラットフォームを思い浮かべますよね。フラッシュ・ローンは、[フラッシュ・スワップ](https://uniswap.org/docs/v2/core-concepts/flash-swaps/)と呼ばれる Uniswap のような DEX（SushiSwap も含む）でも利用することができます。

今回のブログでは、我々が注意すべきポイントである、攻撃者がフラッシュ・ローンを使って Nexus のシングルサイド・ファーミングを操作し、不正に利益を上げる方法について、順を追って見ていきます。

<div class='line-separator'></div>

シングルサイド・ファーミングには 2 つの参加グループがあります。一方は CeFi から調達し、Nexus のコントラクトに多額の USDC を事前に提供グループです。この USDC はコントラクトの中で ETH の提供者を待っています。2 つ目のグループは、ETH を提供する親愛なる DeFi プレイヤーです。この ETH はすぐにリザーブから利用可能な USDC とペアになり、ETH/USDC のファーミングを開始します。ETH 入金者が引き出しを決定すると、ETH/USDC はペアリングが解除され、USDC はリザーブに戻され、ETH は ETH 提供者に戻されます（もちろん報酬もプラスされます）。

ETH 提供者はそれぞれ分離されているため、ある ETH 提供者が別の ETH 提供者を攻撃することはできません。ここで説明する攻撃手法は、ETH 提供者が USDC のリザーブ提供者を攻撃するというものです。

# Attack 1: dump ETH price and exploit on exit

攻撃 1：ETH 価格を下げる＆出金時の悪行

まず、予想される攻撃を順を追って示します。

1.  Nexus のリザーブに大量の利用可能な USDC が入金されるのを待つ。

2.  ETH を Nexus に入金、利用可能なすべてのリザーブ USDC とペアにする（流動性を高める）。

3.  ETH を大量にフラッシュ・ローンする（数億ドル分）。

4.  SushiSwap で、ETH の巨額ローン全てを USDC にスワップして ETH/USDC ペアの ETH 価格を暴落させる。

5.  Nexus のステップ 2 で ETH を出金してペアを解消する（流動性の引出）。

6.  なんと、するとリザーブから USDC が消えてしまう！

7.  SushiSwap の ETH/USDC ペアで、ステップ 4 の USDC を ETH に戻して ETH の価格を通常に戻す。

8.  ステップ 7 の ETH を使って ETH のフラッシュ・ローンを返す。

この攻撃は、[こちらの Nexus test suite](https://github.com/orbs-network/nexus-sushiswap/blob/main/test/nexus-flashloan-test.ts)でコードの実証がされています。

分析

この攻撃は USDC のリザーブ提供者を危険にさらし、悪意のある ETH 入金者が USDC のリザーブを流出させます。なぜこのようなことが可能なのでしょうか？

経済面からの答えは、[Impermanent Loss](https://academy.binance.com/en/articles/impermanent-loss-explained) （IL、変動損失）という概念にあります。IL は、流動性プロバイダーにとっては生活の一部であり、ペアの 2 つの資産間の価格が変動するたびに発生します。IL を 2 者間で分割することは、実はシングルサイド・ファーミングの主要な革新的技術であり、[こちらの記事](https://www.orbs.com/jp/orbs%e3%81%ab%e3%82%88%e3%82%8bdex%e6%8e%a5%e7%b6%9a-%e3%82%b7%e3%83%b3%e3%82%b0%e3%83%ab%e3%82%b5%e3%82%a4%e3%83%89%e3%83%bb%e3%83%95%e3%82%a1%e3%83%bc%e3%83%9f%e3%83%b3%e3%82%b0-%e3%83%aa%e3%82%af-2/)で詳細を書いています。Nexus が実施する IL の分割戦略は、「戦略 1 - すべての IL を ETH 側に置く」です。これは、ETH 入金者が、ファーミング・リワードをより多く受け取ることと引き換えに、すべての暗号資産のボラティリティー・リスクを負うことを意味します。理論的には、USDC リザーブ提供者は IL によって損失を被ることはないということになります。

しかし、極端な状況下ではそうはいきません。ETH の価格が 75％以上急速に下落した場合、IL は非常に深刻になり、ETH 入金者は USDC 提供者に全元金を渡したとしても、全額には足りません。このような極端なケースでは、USDC 提供者が損失を被ります。このようなクラッシュが起こる可能性は低いので、日常的に心配をする必要はないかと思います。

問題なのはフラッシュローンを利用して、攻撃者が ETH の価格を 95%以上も人為的に暴落させ、USDC 提供者に大きな損失を与え、その損失を低い価格でスワップ・バックすることで巧妙に利益を得ることです。

# Attack 2: pump ETH price and exploit on enter

攻撃 2：ETH 価格を吊り上げる＆入金時の悪行

まず、予想される攻撃を順を追って説明します。

1.  Nexus のリザーブに大量の利用可能な USDC が入金されるのを待つ。

2.  USDC を大量にフラッシュ・ローンする（数億ドル分）。

3.  ETH の価格を SushiSwap ETH/USDC ペアで吊り上げ、巨額ローンの全額を USDC から ETH に交換する。

4.  ETH を Nexus に入金して、利用可能なすべてのリザーブ USDC とペアにする（流動性を高める）。ETH の価値が非常に高くなっているので、ETH はほとんど必要ないことに注意。

5.  ETH の価格を SushiSwap ETH/USDC ペアで通常の価格に戻し、ステップ 3 の ETH を USDC に戻す。

6.  なんと、するとリザーブから USDC が消えてしまう。

7.  Nexus のステップ 4 での ETH の引き出す（流動性の引出）は必要ないので、放棄してもいい。

8.  ステップ 5 の USDC を使って、USDC のフラッシュ・ローンを返す。

この攻撃は、[こちらの Nexus test suite](https://github.com/orbs-network/nexus-sushiswap/blob/main/test/nexus-flashloan-test.ts)でコードの実証がされています。

分析

この攻撃では、USDC リザーブの提供者が危険にさらされ、悪意のある ETH 入金者が USDC のリザーブを流出させることができます。この場合何が起こるのでしょうか？

IL は同様の極端な条件でもう一度攻撃を受けます。ステップ 4 の ETH の入金は、ETH の価格が操作され、極端に上昇したときに行われるため、利用可能な USDC リザーブをすべてペアにするために必要な ETH はとても少なくて済みます。ETH 価格が通常に戻ると、その価格は入金時の 95％も暴落していることになるので、ETH 提供者が USDC 提供者にスワップのペアを提供できないほど深刻な IL が発生します。また、この損失は、低い価格でスワップ・バックすることで、巧みに利益として得られます。

<div class='line-separator'></div>

Chainlink 価格フィードの活用

上記の 2 つの攻撃が可能だったのは、ETH 提供者が SushiSwap の ETH/USDC ペアそのものを操作することで、ETH 価格の極端な変動を人為的に引き起こすことができたからです。ETH 価格が一度に 75％以上下落した場合、IL スプリッティング・アルゴリズムの悪用可能なエッジ条件に達してしまいます。

このような ETH 価格の操作から身を守るにはどうすればよいのでしょうか？

その答えは、上記を見ていただければお分かりになるように、 外部の価格計算機、Chainlink を導入することです。Chainlink が生成する ETH 価格フィードは、SushiSwap のものよりも操作に対してはるかに堅牢です。

Chainlink の価格は、多くの独立したプレミアム・データ・アグリゲータ（Amberdata、BraveNewCoin、Coingecko など）から市場データを取得し、それぞれが暗号資産の取引市場全体（Binance、Coinbase、Uniswap など）のボリュームから割り出される平均価格となっています。Chainlink 価格フィードを操作するためには、攻撃者は多数の異なる取引所で市場全体の ETH 価格を操作する必要がありますが、これは非常に困難でお金もかかる作業です。

市場データはオフチェーンから取得されるため、オンチェーンのフラッシュ・ローンは ETH/USD の Chainlink 価格フィードが提供するデータに影響を与えず、上記の理論的な例で示された問題を完全に解決します。Chainlink 価格フィードを Orbs Liquidity Nexus プロトコルに統合することで、市場で広く使われたカバー率に加えて、セキュリティ面やコスト面で以下のような多くのメリットがあることがわかりました。

- 安全なノード・オペレーター ： Chainlink の価格フィードは、主要なブロックチェーン開発運用チーム、データ・プロバイダー、および従来型の企業によりセキュリティ評価されたシビル耐性のあるオラクル・ノードによって保護されています。Chainlink のノードは、ガス価格の高騰やインフラの停止時にも信頼性の高い実績を持っています。

- 分散型ネットワーク ： Chainlink の価格フィードは、データソース、オラクル・ノード、オラクル・ネットワークの各レベルで分散化されており、データ・プロバイダーやオラクル・ネットワークのいずれかによるダウンタイムや改ざんに対して強力な保護を提供します。

- レピュテーション ： Chainlink は、強固なレピュテーション・フレームワークとオンチェーン・モニタリングツールを提供しており、ユーザーはノード・オペレータやオラクルネットワークの過去のパフォーマンスを独自に検証したり、提供されているリアルタイムの価格を確認したりすることができます。

これら以外にも利点があり、Chainlink は上記の経済的悪行への明確な解決策ともなります。Chainlink の ETH/USD 価格が、SushiSwap の ETH/USDC 価格に近いかどうかを検証し、そうでない場合は元に戻すという関数修飾の形で、Nexus コントラクトに 10 行程度の Solidity コードを追加するだけで、とても簡単に Chainlink の統合が完了しました。

![](/assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/img1.png)

### どの程度近づけることができるのか？

最後に定義しなければならない定数は SPREAD_TOLERANCE で、元に戻す前に 2 つの価格がどれだけ離れているのかを制御します。2 つの価格は異なるメカニズムで更新されるため、完全に同一ではありません。SushiSwap ETH 価格は、裁定者がペアのスワップを行う際の市場価格に従います。Chainlink の ETH 価格は、[数分ごとに](https://data.chain.link/eth-usd)市場の異なるデータ・ポイントから集約されます。

先週の 2 つの ETH 価格を並べて順番に見ていきましょう。

![](/assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/img2.png)

上の表では比較のため、[Compound](https://compound.finance/)の ETH 価格も加えました。すべての価格がかなり接近していますが、実は Compound は他の 2 つに比べて少し精度が低いことがわかります（噂では Chainlink への移行も計画しているようです）。

SPREAD_TOLERANCE の値を決めるために、過去 6 ヶ月間の SushiSwap の ETH 価格と Chainlink の ETH 価格の差の割合を見ていきましょう。

![](/assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/img3.png)

この差は通常 1％以下で、極端な場合では 2％になることがわかります。今回のケースでは、攻撃には少なくとも 75%の価格操作が必要なので、75%以下であれば許容範囲であり問題ありません。75%を十分に下回ることで攻撃を防ぐことができ、通常見られる 2%の価格差をはるかに上回る 10%でも、全体的に見ると訂正な許容値であるようです。

Chainlink について

Chainlink は、いわゆるオラクルと言われる領域のサービスを提供しており、ブロックチェーン上のスマート・コントラクトとチェーン外の情報を繋ぐ、最も広く使用されている安全な方法です。Chainlink を使えば、開発者はあらゆるブロックチェーンを、他のブロックチェーンや実世界のデータからの高品質なデータソースと接続することができます。数十万人からなるグローバルな分散型コミュニティによって管理される Chainlink は、コントラクトのより公平なモデルを導入しています。そのネットワークは現在、分散型金融（DeFi）、保険、ゲームなどのエコシステムにおいて、スマート・コントラクトの価値を数十億ドル単位で保証しています。

Chainlink は、安全で信頼性の高いデータ・フィードを介して情報を提供することから、何百もの組織から信頼されています。詳しくは、[chain.link](https://chain.link/)をご覧ください。また最新情報は、[Chainlink のニュースレター](https://chn.lk/newsletter)や、[Twitter@chainlink](http://www.twitter.com/chainlink)でも配信しています。

[Docs](https://docs.chain.link/docs/getting-started) |[ ](https://www.reddit.com/r/Chainlink/)[Discord](https://discordapp.com/invite/aSK4zew) | [Reddit](https://www.reddit.com/r/Chainlink/) | [YouTube](https://www.youtube.com/channel/UCnjkrlqaWEBSnKZQ71gdyFA) | [Telegram](https://t.me/chainlinkofficial) | [Events](https://blog.chain.link/tag/events/) | [GitHub](https://github.com/smartcontractkit/chainlink) | [Price Feeds](https://feeds.chain.link/) | [DeFi](https://www.chain.link/solutions/defi) | [VRF](https://chain.link/solutions/chainlink-vrf)

## 詳細について

私たちの取り組みに興味をお持ちいただき、公開前の開発中の段階をご覧になりたい場合は、Github で Orbs をフォローしてください。

- <https://github.com/orbs-network> ---Github の Orbs プロジェクト

- <https://github.com/defi-org-code> --- DeFi.org Accelerator イノベーションラボ（アイデアは初めにここから生まれます）
