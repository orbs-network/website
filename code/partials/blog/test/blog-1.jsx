import React from "react";

const Blog1 = () => {
  return (
    <div class="entry-content-wrapper clearfix">
      <div class="flex_column av_one_full flex_column_div av-zero-column-padding first avia-builder-el-7 avia-builder-el-no-sibling">
        <section
          class="av_textblock_section"
          itemscope="itemscope"
          itemtype="https://schema.org/BlogPosting"
          itemprop="blogPost"
        >
          <div class="avia_textblock" itemprop="text">
            <section class="cq ge gf cl gg">
              <div class="n p">
                <div class="aj ak al am an gh ap w">
                  <p
                    id="be4f"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    <em class="jk">The Orbs&nbsp;</em>
                    <a
                      class="cw jl"
                      href="https://medium.com/@talkol/introducing-orbs-liquidity-nexus-liquidity-as-a-service-1c022c8f2d43"
                      rel="noopener"
                    >
                      <em class="jk">Liquidity Nexus protocol</em>
                    </a>
                    <em class="jk">&nbsp;introduces CeFi liquidity to DeFi.</em>
                  </p>
                  <p
                    id="8771"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    <em class="jk">
                      Now, take any DEX, whether it’s SushiSwap or PancakeSwap,
                      and choose a popular pool like ETH/USDC or BNB/BUSD.
                    </em>
                  </p>
                  <p
                    id="f351"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    <em class="jk">
                      The CeFi capital provides the stable side — USDC or BUSD.
                      The DeFi capital provides the crypto side — ETH or BNB.
                      Now, let them farm together.
                    </em>
                  </p>
                </div>
              </div>
            </section>
            <div class="n p ca jm jn jo" role="separator">
              <div class="hr hr-short hr-center avia-builder-el-9 el_before_av_hr avia-builder-el-first">
                <span class="hr-inner">
                  <span class="hr-inner-style"></span>
                </span>
              </div>
            </div>
            <section class="cq ge gf cl gg">
              <div class="n p">
                <div class="aj ak al am an gh ap w">
                  <h2
                    id="794e"
                    class="jt ju gj au jv jw jx ir jy jz ka iv kb kc kd ke kf kg kh ki kj kk kl km kn ko em"
                  >
                    Not all liquidity is created equal
                  </h2>
                  <p
                    id="6397"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    In the Orbs project, we’ve been experimenting with the idea
                    of CeFi sourced liquidity in DeFi for a while now. One of
                    the interesting things we’ve learned is that different
                    capital providers have different risk appetites and
                    different goals.
                  </p>
                  <p
                    id="b1a9"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    We lea<span id="rmm">r</span>ned that not all liquidity is
                    created equal.
                  </p>
                  <p
                    id="4d39"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    Consider two very different typecasts of capital providers
                    that sit on opposite edges of the investor spectrum:
                  </p>
                  <ul class="">
                    <li
                      id="e4ab"
                      class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj ku kv kw em"
                      data-selectable-paragraph=""
                    >
                      <strong class="io cd">
                        <em class="jk">Type A</em>
                      </strong>
                      &nbsp;is a typical crypto ape. They are long on crypto.
                      They hold a portfolio that is primarily exposed to
                      volatile crypto assets. They hold a significant percentage
                      in BTC, a significant percentage in ETH and a significant
                      percentage in alts. For them, hodling USDC for too long
                      feels like holding a melting ice cube as the global money
                      printer goes brrr.
                    </li>
                    <li
                      id="fe7e"
                      class="im in gj io b ip kx ir is it ky iv iw ix kz iz ja jb la jd je jf lb jh ji jj ku kv kw em"
                      data-selectable-paragraph=""
                    >
                      <strong class="io cd">
                        <em class="jk">Type B</em>
                      </strong>
                      &nbsp;has a more traditional outlook. For them, high risk
                      means allocating a large percentage of their portfolio
                      towards NASDAQ. Their benchmark is fiat. Holding crypto
                      assets is something they’ve only considered after seeing
                      Tesla doing the same. But it’s a bit too avant-garde now,
                      maybe next year, and definitely not more than 3% of the
                      portfolio.
                    </li>
                  </ul>
                  <p
                    id="d4fc"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    These two personas are polar opposites but we’ve been seeing
                    a lot of both types lately.
                  </p>
                  <p
                    id="467a"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    <em class="jk">Type A</em> is the crowd you usually see
                    roaming the DeFi world. They’re already holding crypto
                    assets, so applying these assets to DeFi is a natural way to
                    push towards higher returns with crypto as a benchmark. Most
                    DeFi products are designed towards them and speak their
                    language. This crowd feels at home with MetaMask. Among all
                    DeFi products, they particularly love vaults like
                    <a
                      class="cw jl"
                      href="https://yearn.finance/"
                      rel="noopener nofollow"
                    >
                      yearn.finance
                    </a>
                    ,&nbsp;
                    <a
                      class="cw jl"
                      href="https://harvest.finance/"
                      rel="noopener nofollow"
                    >
                      harvest.finance
                    </a>
                    ,&nbsp;
                    <a
                      class="cw jl"
                      href="https://autofarm.network/"
                      rel="noopener nofollow"
                    >
                      autofarm.network
                    </a>
                    &nbsp;and&nbsp;
                    <a
                      class="cw jl"
                      href="https://acryptos.com/"
                      rel="noopener nofollow"
                    >
                      acryptos
                    </a>
                    &nbsp;because those provide the best APY with the least
                    amount of effort.
                  </p>
                  <p
                    id="89eb"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    <em class="jk">Type B</em> is the crowd you usually see
                    roaming the CeFi world — corporations, institutions, family
                    offices, classic hedge funds. They have access to large cash
                    reserves, but often limit themselves to the standard
                    instruments like bonds and securities. It’s very difficult
                    to introduce them to the marvels of DeFi, because diving
                    into DeFi requires first to dip your toes in crypto. As much
                    as we would like to think BTC is becoming mainstream, it’s
                    still held by a humblingly low amount of people. Education
                    takes time.
                  </p>
                  <p
                    id="aff3"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    The beauty of the Orbs Liquidity Nexus protocol is its
                    potential to bridge&nbsp;<em class="jk">Type A</em>
                    &nbsp;and&nbsp;<em class="jk">Type B</em>&nbsp;together and
                    allow them to pool their capital together for a joint effort
                    using trustless and decentralized smart contracts.
                  </p>
                  <h2
                    id="d53b"
                    class="jt ju gj au jv jw lc ir jy jz ld iv kb kc le ke kf kg lf ki kj kk lg km kn ko em"
                  >
                    Different appetites for risk = different rewards
                  </h2>
                  <p
                    id="8675"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    If you were to design a yield-bearing position for both
                    crowds, how would you optimize risk/reward to attract as
                    much liquidity as possible?
                  </p>
                  <ul class="">
                    <li
                      id="ffc7"
                      class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj ku kv kw em"
                      data-selectable-paragraph=""
                    >
                      If you’re designing for&nbsp;
                      <em class="jk">Type A&nbsp;</em>— High APY is probably the
                      most important metric. This crowd tends to throw its
                      capital towards positions where the yield is maximal. This
                      crowd is no stranger to risk. They often don’t even
                      consider high exposure to volatile crypto assets as a risk
                      at all (to be honest, dollars are also frightening to be
                      long on). For them, dealing with&nbsp;
                      <a
                        class="cw jl"
                        href="https://academy.binance.com/en/articles/impermanent-loss-explained"
                        rel="noopener nofollow"
                      >
                        Impermanent Loss
                      </a>
                      &nbsp;(IL) is usually not an issue and they love farm
                      rewards.
                    </li>
                    <li
                      id="65ad"
                      class="im in gj io b ip kx ir is it ky iv iw ix kz iz ja jb la jd je jf lb jh ji jj ku kv kw em"
                      data-selectable-paragraph=""
                    >
                      If you’re designing for&nbsp;<em class="jk">Type B</em> —
                      The first order of business would be to minimize the
                      exposure to crypto. They can’t have their portfolio suffer
                      if ETH jumped up or down 20% overnight. They will
                      definitely compromise on APY because they’re used to the
                      yields of the CeFi world which are much lower. The concept
                      of IL is more difficult for them to grasp because IL is
                      triggered primarily by volatility in the crypto markets
                      which they prefer not to be exposed to.
                    </li>
                  </ul>
                  <p
                    id="0c83"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    It seems that we have a match made in heaven. Two sides
                    looking for quite different things. We can play off that.
                  </p>
                  <h2
                    id="aa2d"
                    class="jt ju gj au jv jw lc ir jy jz ld iv kb kc le ke kf kg lf ki kj kk lg km kn ko em"
                  >
                    The dream of single-sided farming
                  </h2>
                  <p
                    id="bd5d"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    The DeFi community has been toying with the idea of
                    single-sided farming for quite a while now. If you’ve
                    participated in farming at any point, you’re probably aware
                    that farming usually comes in pairs. Why is that? It’s
                    because normally farming rewards go towards incentivizing
                    liquidity — and liquidity requires at least two sides.
                  </p>
                  <p
                    id="50b9"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    What were the most popular farming positions so far in the
                    short history of DeFi?
                  </p>
                  <p
                    id="82eb"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    The first that comes to mind is probably SushiSwap. Taking
                    the beautifully simple architecture of Uniswap and throwing
                    in SUSHI — the LP (liquidity provider) rewards token, which
                    was distributed to the most popular pairs on Uniswap to
                    encourage the liquidity vampire attack.
                  </p>
                  <p
                    id="3cee"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    In the second place, I’ll probably say — the Uniswap initial
                    distribution of UNI, that came as a direct response to the
                    Sushi vampire attack. These memorable four positions
                    generated hefty yields and attracted the first very
                    impressive TVL that surpassed $1B.
                  </p>
                  <p
                    id="756e"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    For the third, I’ll probably say — the initial distribution
                    of 1INCH in the pools that were previously known as
                    Mooniswap. The 1inch protocol did wonderfully and managed to
                    amass impressive TVL very quickly, beating Sushi in APY
                    simply because 2/3 of SUSHI rewards are locked for 6 months,
                    and beating Uniswap easily.. well, because UNI are no longer
                    distributed.
                  </p>
                  <p
                    id="3f31"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    These three of the most successful farming positions in
                    history are actually very similar in nature. All three are
                    based on liquidity providers in Uniswap-like DEXes. All
                    three focus on the most popular pairs on these platforms,
                    which are usually ETH/USDC, ETH/USDT and ETH/WBTC.
                  </p>
                  <p
                    id="060a"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    If you’ve participated in any of the above, you probably
                    know that the most annoying thing was allocating exactly 50%
                    of each asset in order to farm. If your long-term portfolio
                    normally has 60% BTC, 30% ETH and 10% USDC — good luck
                    trying to create equally balanced pairs and effectively
                    utilize all of your holdings.
                  </p>
                  <p
                    id="0c3d"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    This notion has made the idea of single-sided farming very
                    appealing a long time ago.
                  </p>
                  <h2
                    id="9d1c"
                    class="jt ju gj au jv jw lc ir jy jz ld iv kb kc le ke kf kg lf ki kj kk lg km kn ko em"
                  >
                    Alternatives to single-sided farming
                  </h2>
                  <p
                    id="2c40"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    Before we jump into single-sided farming, let’s explore the
                    current alternatives. Largely, there are two:
                  </p>
                  <ol class="">
                    <li
                      id="8a40"
                      class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj lh kv kw em"
                      data-selectable-paragraph=""
                    >
                      Bite the bullet and exchange some assets for the duration
                      of the farm — This approach is very simple. Instead of
                      maintaining your original portfolio distribution of 60%
                      BTC, 30% ETH, 10% USDC, just swap between them and change
                      the allocations. What’s wrong with this approach? It
                      defeats the idea of having long exposure to certain assets
                      and using DeFi to maximize yields. If you’re long on BTC
                      as a benchmark, swapping it for a whole bunch of USDC for
                      a little APY doesn’t make sense. You’re about to lose a
                      lot more if BTC were to go into another bull run. In
                      addition, this approach suffers from slippage because
                      swapping large amounts of base assets at once is the worst
                      way to get a good price.
                    </li>
                    <li
                      id="2d1c"
                      class="im in gj io b ip kx ir is it ky iv iw ix kz iz ja jb la jd je jf lb jh ji jj lh kv kw em"
                      data-selectable-paragraph=""
                    >
                      Lending — If you don’t want to buy these assets, why not
                      borrow them? Isn’t this exactly what Compound and Aave
                      were invented for? Well, they do solve a lot of the
                      problems in alternative 1, but they bring in several new
                      disadvantages. One of them is low utilization. Borrowing
                      assets introduces a wasteful collateral ratio. If you
                      place your BTC as collateral, you’ll only be able to
                      borrow a significantly smaller amount of USDC. This means
                      that much less of your capital will participate in
                      farming. Another big issue is the fear of liquidation. If
                      these assets suffer a volatile night and you sleep through
                      a 20% price change, you might find yourself liquidated in
                      the morning and be hit with losses. Nobody likes to lose
                      sleep.
                    </li>
                  </ol>
                  <h2
                    id="9823"
                    class="jt ju gj au jv jw lc ir jy jz ld iv kb kc le ke kf kg lf ki kj kk lg km kn ko em"
                  >
                    Back to single-sided farming
                  </h2>
                  <p
                    id="8a19"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    Now that we’ve agreed that there no good alternatives to
                    single-sided farming, the question arises — why is this so
                    annoying to implement?
                  </p>
                  <p
                    id="b85b"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    The answer in my eyes is much less a technology issue and
                    more of a product one. Separating the two sides of farming
                    sounds simple in theory. If you have a farming position that
                    requires equal amounts of ETH/USDC, let one side bring in
                    the ETH and the other side bring in the USDC.
                  </p>
                  <p
                    id="d61e"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    It gets tricky though when you start splitting the rewards
                    and splitting the risks — IL being the primary one.
                  </p>
                  <p
                    id="3458"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    An equal split along the middle doesn’t feel right, because
                    by bringing in fundamentally different types of assets (USDC
                    is stable for one), means the two parties are inherently
                    unequal.
                  </p>
                  <h2
                    id="5ce5"
                    class="jt ju gj au jv jw lc ir jy jz ld iv kb kc le ke kf kg lf ki kj kk lg km kn ko em"
                  >
                    Enter Liquidity Nexus
                  </h2>
                  <p
                    id="1fba"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    The beauty behind the Liquidity Nexus concept is the
                    marriage between two sides looking for different things.
                  </p>
                  <p
                    id="ac7a"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    Taking the popular ETH/USDC example from before — It becomes
                    quite natural to let&nbsp;<em class="jk">Type A</em>, the
                    native DeFi players, supply the ETH. We can reward them with
                    higher APY (not divide rewards equally), which is exactly
                    what they’re looking for. In return, we will expose them to
                    most (or even all) of the IL. It’s ok, because these are
                    risks that they understand and enjoy.
                  </p>
                  <p
                    id="70c5"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    It also becomes quite natural to let&nbsp;
                    <em class="jk">Type B</em>, the native CeFi players, supply
                    the USDC. They will happily compromise on lower APY if their
                    exposure to crypto volatility and IL was reduced as well.
                  </p>
                  <p
                    id="2e36"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    This is one example of what makes the liquidity nexus
                    exciting.
                  </p>
                  <p
                    id="4002"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    In the next posts of this series, I’ll go into the details
                    (and the code) of how we can implement single-sided farming.
                    Stay tuned.
                  </p>
                  <h2
                    id="abbe"
                    class="jt ju gj au jv jw lc ir jy jz ld iv kb kc le ke kf kg lf ki kj kk lg km kn ko em"
                  >
                    Learn more
                  </h2>
                  <p
                    id="5897"
                    class="im in gj io b ip kp ir is it kq iv iw ix kr iz ja jb ks jd je jf kt jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    If you’re curious about what we’re working on and don’t mind
                    seeing work-in-progress that hasn’t been properly announced
                    yet, feel free to follow us on Github:
                  </p>
                  <ul class="">
                    <li
                      id="c960"
                      class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj ku kv kw em"
                      data-selectable-paragraph=""
                    >
                      <a
                        class="cw jl"
                        href="https://github.com/orbs-network"
                        rel="noopener nofollow"
                      >
                        https://github.com/orbs-network
                      </a>
                      &nbsp;— The Orbs project on Github
                    </li>
                    <li
                      id="c1d0"
                      class="im in gj io b ip kx ir is it ky iv iw ix kz iz ja jb la jd je jf lb jh ji jj ku kv kw em"
                      data-selectable-paragraph=""
                    >
                      <a
                        class="cw jl"
                        href="https://github.com/defi-org-code"
                        rel="noopener nofollow"
                      >
                        https://github.com/defi-org-code
                      </a>
                      &nbsp;— DeFi.org Accelerator innovation labs (some of the
                      ideas originate there first)
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div class="n p ca jm jn jo" role="separator">
              <div class="hr hr-short hr-center avia-builder-el-10 el_after_av_hr avia-builder-el-last">
                <span class="hr-inner">
                  <span class="hr-inner-style"></span>
                </span>
              </div>
            </div>
            <section class="cq ge gf cl gg">
              <div class="n p">
                <div class="aj ak al am an gh ap w">
                  <p
                    id="b289"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    <em class="jk">Notes</em>
                  </p>
                  <p
                    id="95a7"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    This document details a project which is currently being
                    researched by the Orbs team and ecosystem contributors. The
                    project is currently in concept mode and is being portrayed
                    herein as currently envisioned by the Orbs team.
                  </p>
                  <p
                    id="8daf"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    Orbs is a decentralized project driven by community
                    contribution and guidance. The product and functionality
                    detailed in this document therefore constitute a mere
                    proposal assembled from community feedback and are subject
                    to change continuously as new requirements arrive. This
                    document provides no guarantee that any offering, product or
                    specific feature will become fully or partially developed.
                  </p>
                  <p
                    id="625b"
                    class="im in gj io b ip iq ir is it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj cq em"
                    data-selectable-paragraph=""
                  >
                    The information contained in this document shall not form
                    the basis of, or be relied upon in connection with, any
                    offer or commitment whatsoever in any jurisdiction.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog1;
