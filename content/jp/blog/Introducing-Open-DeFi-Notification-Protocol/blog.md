---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/bg2.jpg
blogUrl: Introducing-Open-DeFi-Notification-Protocol
date: 2021-10-21
title: Open DeFi Notification プロトコルの紹介
author:
  - /jp/blog/common/authors/TalKol.md
type:
short_description:
---

_Orbs からのアナウンスをご覧になっている方はすでにご存知のように、Orbs チームは、DeFi 分野における Orbs の可能性を引き出すことに非常に注力しています。Orbs プロジェクトは、独自のハイブリッド・アーキテクチャを採用し、資産の流動性やユーザー・エンゲージメントの点で業界をリードしている Ethereum、Binance Smart Chain、Polygon、Avalanche などの EVM 互換ブロックチェーンとの相互運用性を考慮して設計されています。_

_このプロセスの一環として、またエコシステムの大規模な拡大と並行して、Orbs は Binance と Moonstake と共に DeFi.org アクセラレータをローンチし、新しい DeFi プロジェクトやプロトコルの立ち上げを支援しています。そして、すでに素晴らしいアイデアを持った数十のチームからの応募を受け付けています。_

_DeFi.org アクセラレータより生みだされた有望なプロトコルの 1 つが、Open DeFi Notification Protocol です。これは、オンチェーンでのイベントについて、分散化された無料のモバイル通知をユーザーに提供するためのオープンな取り組みです。これは、DeFi インフラ全体の重要な一部であり、業界に大きな影響を与えると信じています。_

_Orbs は、このプロトコルの実装を支援する主要な設計パートナーです。我々は、最も人気のある DeFi プロジェクト（Sushi や Aave など）に多くの統合機能を提供しており、その実装方法の分散型アーキテクチャの設計を支援しています。Orbs は、分散型のガーディアンのネットワークにも貢献しており、Orbs ネットワーク上でアプリとしてプロトコルを実行し、Orbs ネットワーク独自のサービスとしてのコンセンサス（Consensus-as-a-service）アーキテクチャを利用して、分散型インフラを提供する予定です。_

<div class='line-separator'></div>

以下は、このプロトコルを発表した[DeFi.org の公式ブログ](https://medium.com/@defiorg/introducing-open-defi-notification-protocol-95a8712a94e0)からの抜粋です。

### 通知の設定：入金後の通知は重要です

Compound や Aave でローンを受ける際の現状の課題として、価格が変動することが挙げられます。ユーザーが注意を払わないと、相場の急変により、資産が清算されてしまう場合があります。個人的に、このような事態になった時には、誰かが夜中でも起こしてくれて、ポジション調整をする必要があると教えてくれれば、安心して眠れるのにといつも思っていました。

Sushi や PancakeSwap のような AMM でも同じことが言えます。ユーザーが新たにローンチされたばかりのムーン・ショットを購入する場合、いつその価格が暴落するかわからないというリスクを負うことになります。もし、ユーザーにストップロスを確実に知らせてくれる方法があれば、このリスクはもっと怖くなくなるはずです。また、リクイディティを提供する際、価格が大きく動いたり、TVL が上昇して自分の報酬シェアが下がったり、インパーマネント・ロスがファーミングの利益より大きくなる場合もあります。そうなると、ユーザーが損失を被る可能性が出てきます。

私が難しいと感じるもう一つの例は、タイムロックによるコントラクトのアップグレードの概念です。この一般的なパターンでは、プロジェクトのコアチームが 12 ～ 24 時間のタイムロックでコントラクトをアップグレードすることができます。これらのアップグレードは通常、ユーザーの資金を移行させることができるため、ユーザーはアップグレードを確認し、新しいコードの確信が持てるまで資金を管理することが求められます。このようなアップグレードを、通知なしに現実に監視することはできないでしょう。

DeFi の優れた点は、すべてのデータが公開されていることです。DeFi は、すべてのイベントが台帳に記録されている完全に透明な金融システムですが、信頼できるモバイル通知サービスはそう簡単には見つかりません。Orbs チームは、このニーズを満たすプロトコルを設計しました。

プロトコルの設計目標

**1. 通知はユーザーにとって無料であるべきこと ：購読料や広告なし**

DeFi ポジションのモバイル・アラートは、MetaMask や Etherscan のように、誰もが無料でアクセスできる、ブロックチェーンのコア・サービスであるべきだと考えています。

**2. 頼りになること ：アラートを見逃さない**

お金が絡み、清算されようとしている場面では、通知を見逃すことはできません。プロトコルは、夜中でも様々な段階に応じてしつこく鳴り響くアラートで起こしてくれるようなものでなければなりません。

**3. マルチネットワーク対応： イーサリアム、BSC、Polygon など**

DeFi エコシステムは、Polygon や Arbitrum のような新しいネットワークへと常に拡大しています。プロトコルはチェーンにとらわれず、プラグインを希望するあらゆるエコシステムと統合できるように設計されている必要があります。

**4. コミュニティ主導：公開・分散型アラートノード**

ブロックチェーンのコア・サービスは、可能な限り分散化されているべきです。あらゆる開発者がコードを提供し、あらゆるプロジェクトが統合し、あらゆるバリデータがノードの運営を支援できるようにするためです。

洗練されたユーザー・エクスペリエンス

清算リスクを監視するために Aave に通知を設定している様子を動画でご覧いただけます。

<iframe  src="https://www.youtube.com/embed/TNhu7YN5rIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. オープンソースのウェブ・コンポーネントを Aave のウェブ・フロントエンドに統合することで、ユーザーは Aave の UI から通知を設定することができます。これは必須ではありません。

2. ユーザーは、iOS または Android のモバイル・アプリ「DeFi Notifications」をダウンロードし、MetaMask アドレスの QR コードまたは Aave UI のポジション QR コードをスキャンします。その他の登録は必要ありません。

3. ユーザーは、受信する通知の種類を選択します 。 これらは Aave 開発者コミュニティによって提供されています。サポートされている何十もの DeFi プロジェクトがアプリ内に表示されます。プロジェクトの開発者は誰でも追加することができます。

4. ユーザーは、モバイル・デバイス上でプッシュ通知を承認します。アラート音はユーザー自身でカスタマイズできます。また、Telegram のメッセージや Twilio を選択することもできます。

5. 分散型プロトコルのアラート・ノードが、ユーザーのために新規ブロックの監視を開始し、通知の条件となるオンチェーン・イベントを検索します。ローンチ後の第 2 フェーズでは、Orbs ネットワークは、Orbs ガーディアンを通じてサービスとしてのコンセンサス（consensus-as-a-service）を提供する予定です。

### 新しいプロジェクトの統合は驚くほど簡単

### 例えば、[Alpaca Finance](https://www.alpacafinance.org/)のようなサポートされていない新しい DeFi プロジェクトの通知が来ないとします。

良いお知らせとして、Alpaca のコア・チームだけでなく、Alpaca のコントリビューターであれば誰もがアラートを統合できます。チェーン・データから通知を抽出する単純な JavaScript の web3 クラスを実装すれば OK です。

このクラスは、PR（プルリクエスト） を通してプロトコルの [Github レポ](https://github.com/open-defi-notification-protocol/projects)に提供されます。このプロジェクトのスマート・コントラクトに精通している人であれば、すべてのプロセスは 30 分ほどで完了します。バックエンドを実行したり、UI を開発したり、プロジェクトのスマート・コントラクトに変更を加えたりする必要はありません。

ここでは Aave ユーザーが、自分のポジションが 1.1 を下回ったときに通知を受けることができる統合コードを紹介します。

![code](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image1.png)

PR が承認されると、プロジェクトはすぐにこの新しい通知タイプを有効にしてモバイル・アプリ内に表示します。クラスの横に小さな JSON ファイルを追加することで、プロジェクトのラベル、ロゴ、色を変更することもできます。

![code](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image2.png)

新しいユーザーがアプリでこの通知を登録すると、プロトコルのアラート・ノードが、すべての新しいメインネット・ブロックに対して JavaScript の web3 クラスの実行を開始します。新しい通知が抽出されると、アラートノードがプッシュ通知をユーザーに送信します。

このアプリとプロトコルはベータ版であり、その使用にはリスクが伴います。アプリの使用は、以下に記載されている条件に従うものとします。

<https://defi.org/defi-notifications-terms-of-use/index.html>.

![logo](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image3.png)

プロトコルに参加して貢献する：

<https://github.com/open-defi-notification-protocol>

[Sushi での通知を設定したユーザー動画例](https://youtu.be/ecdgzJ7tA1g)

[Orbs](https://www.orbs.com/jp/)による[Defi.org アクセラレータ](http://defi.org/)への貢献

<div class='line-separator'></div>

### Orbs と DeFi.org の他プロジェクトについて

[DeFi.org](https://www.defi.org/)アクセラレータは、研究、オープンソース・ソフトウェアの開発、より良いコミュニティ作りの支援を専門としています。このアクセラレータは、公正な分配、オーナーシップを感じるコミュニティ、イノベーション、リスクに対する責任あるアプローチ、持続可能なエコノミクス、より広範なエコシステムとの統合可能性を基本として構築されたプロジェクトを募集しています。

以下に、DeFi.org のアクセラレータで開始された他のプロジェクトを紹介します。

#### MyNFT.fyi

NFT を所有していることを MyNFT.fyi で証明することができます。

MyNFT.fyi は、あなたの NFT のプロフィール画像をオンチェーンで完全に所有証明をすることができる使いやすいツールです。

[こちらよりご覧ください](https://mynft.fyi/?utm_source=japan)

![myNFT](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image4.png)

#### DeFi Twitter トレンド・ダッシュボード

この素晴らしい新ツールは、基本的に Twitter の[クローラ](https://www.weblio.jp/content/%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%A9)で、最も人気のある#（ハッシュタグ）、$（キャッシュタグ）、@（アカウント）、🔗 URL を集約し、すべてがスタイリッシュなダッシュボードにまとめられています！

この素晴らしい新ツールは、defi.org のウェブサイト、または以下のリンクからアクセスできます。

<https://twitter.defi.org/>

<div class='line-separator'></div>

ご質問はいつでも[Orbs Japan Telegram](https://t.me/joinchat/G0HZhBQssmZ05v6sp_G6jg)、[オフィシャル LINE](https://line.me/R/ti/p/%40vrf9558a)へご連絡ください。[Orbs Japan Twitter](https://twitter.com/JapanOrbs)、日本語[ Youtube チャンネル](https://www.youtube.com/channel/UCZePjhX4e6CuAe8v63Li9lg) へのご登録もお待ちしています。

![twitter](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image5.png)
