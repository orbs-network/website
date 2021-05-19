---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/talpihack-solving-challenge/bg.jpg
blogUrl: talpihack-solving-challenge
date: 2019-07-01
title: "TalpiHack: Solving the Challenge of Related Parties Dealings"
author:
  - /blog/common/authors/AndreyDulkin.md
type:
short_description: On 27-28.06.19 I participated in the Talpiot Hackathon, attempting to solve a financial challenge - creating a system to identify and analyze related parties dealings. This was a great, very well organized event, where I met many brilliant people working on some really difficult challenges.
---

On 27-28.06.19 I participated in the Talpiot Hackathon, attempting to solve a financial challenge - creating a system to identify and analyze related parties dealings. This was a great, very well organized event, where I met many brilliant people working on some really difficult challenges.

## Background

Talpiot is the IDF technological excellence program, combining academic and military studies. This year Talpiot celebrates its 40th year and, among many other activities, a Talpiot Hackathon ([TalpiHack](https://talpihack.co.il/)) was conducted, with multiple graduates trying to solve 13 challenges in fields such as health services, transportation, education, finances, civic planning, and others.

The challenges were brought and prepared by public service groups and NGOs, including the Ministry of Transportation, Sheeva Hospital, Ramon Foundation, the Public Knowledge Workshop, Financial Justice group, and others.

## The “Related Parties Dealings” Challenge

I joined Barak Gonen, Ido Bronstein, Omri Lifshitz, and Roy Mizrachi to work on the Related Parties Dealings challenge provided by the Financial Justice group. In short, we developed a system that would make it possible to analyze the behavior and votes of pension funds in public company board meetings, and to discover potentially problematic votes.

![The team](/assets/img/blog/talpihack-solving-challenge/image2.jpg)

#### Some background

The Israeli pension funds (also called _The Institutionals_) are managing over 1.7 trillion (!) NIS (~$0.5 trillion USD) in retirement savings (which are mandatory in Israel), with over a 100 billion NIS flowing in every year. A significant part of this money is invested in Israeli public companies (~350 companies).

The regulator (Israel Capital Markets, Insurance and Savings Authority at the Ministry of Finance) requires the Institutionals to participate in every board meeting and represent the interests of the investors. However, the amount of effort required to analyze every vote in every public company may seem unjustified for a pension fund, so they tend to rely on an analyst recommendation.

Currently, there is just one analyst firm in Israel, [Entropy](https://www.entropy.co.il/), and the same firm also provides consultancy services to the public companies themselves.

This situation is, potentially, ripe for abuse by related parties, such as major stakeholders, in public companies. For example, they may sell private assets to public companies, appoint relatives to management positions, conduct business with private companies under their control and more. For example, in 2018 the public construction company Aura asked to approve an ongoing legal services contract for the sum of 213 million (!) NIS with a private law firm managed by the wife of Aura majority stakeholder (the contract was cut short later, in light of significant public pushback).

## The solution

The Israel Capital Markets, Insurance and Savings Authority already requires the Institutionals to report all their votes. Unfortunately, there is no set format for reporting, so each fund reports in their own proprietary format - some in PDFs, some in Excels, each with their own set of fields. In addition, there [exists information at the Israeli Stock Exchange](https://maya.tase.co.il/reports/company) regarding every vote in a public company.

**Our solution followed 3 major steps:**

1. Collect data from the various sources and normalize it
2. Organize the data in Elastic Search
3. Provide a Kibana interface for queries

[The code is available here](https://github.com/olifshitz/TalpiHackPension).

![ Example queries showing Institutionals votes vs Entropy recommendation and Institutionals votes vs final decision.](/assets/img/blog/talpihack-solving-challenge/image1.png)

## Feedback

During the workshop we were visited by multiple parties interested in our work. These included Dorit Hizi (CEO of [Public Knowledge Workshop](https://www.hasadna.org.il/)), Tal Hefling Ludmir (Senior Advisor to Director General at [Israel Capital Markets, Insurance and Savings Authority](https://mof.gov.il/hon)), Linor Deutsch (CEO of [Lobby99](https://lobby99.org.il/), a public advocacy group), and Guy Rolnik (Founding Editor-in-Chief of [TheMarker](https://www.themarker.com/), the leading Israeli economics publication). They all expressed their high interest in this solution, highlighting their intentions to use it to analyze the Institutionals' behavior in public companies votes to detect problematic deals and address them on a regulatory, journalistic, and legislative levels.

## Future work

There are multiple enhancements planned for the solution (more data sources, connecting the Israeli Stock Exchange data, formulating relevant queries, etc.) and the Public Knowledge Workshop intends to review this project and, potentially, turn it into an actual project developed by a dedicated group of volunteers.

## Summary

Overall, this was an interesting experience and, perhaps, the result of our work will be another stepping stone in achieving transparency and accountability from those who manage our pension savings. My thanks and appreciation go to the event organizers, to the hackathon participants, and to our great teammates!
