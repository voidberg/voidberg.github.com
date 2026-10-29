---
title: "Who owns the code: the footnotes"
date: 2026-10-29T09:00:00+00:00
standfirst: "The stories, caveats and links that didn't fit into a 40 minute talk about copyright, licenses and AI."
tags: ["AI", "Copyright", "Open source", "Talks"]
draft: false
---

On 29 October 2026 I gave a talk at JSMonthly London about copyright and licenses in the AI era. It's the successor to a talk I gave at meetups and conferences around 2016 to 2018, and the research for the new one produced a lot more than fits in 40 minutes. This is where the rest went.

Same disclaimer as the talk: I am not a lawyer, and this is not legal advice. I checked everything here against primary sources in October 2026 where I could, and I say so where I couldn't. Some of it will be out of date by Christmas.

## Public domain depends on where you're standing

In February 2018 a court in Frankfurt ordered Project Gutenberg to stop serving 18 books by Thomas Mann, Heinrich Mann and Alfred Döblin to Germany. The publisher, S. Fischer, had sued. The court said it was enough to make them "no longer accessible to German Internet (IP) addresses". Project Gutenberg's answer was to block [the whole site for the whole country](https://cand.pglaf.org/germany/index.html), from 28 February 2018 until a settlement in October 2021. Only the three authors' books stay blocked, "until their German copyright expires".

How can a book be public domain in one country and not in another? The US counts copyright on older works from publication. In 2018 anything published before 1923 was free, no matter when the author died. Germany counts from the author's death: life plus 70. Thomas Mann died in 1955, so *Buddenbrooks* (1901) had been public domain in the US for decades and was still protected in Germany until the end of 2025. Cornell has [a good chart](https://guides.library.cornell.edu/copyright/publicdomain) of the US rules, and they are not simple.

The 1923 cutoff is the Mickey Mouse Protection Act at work. The 1998 extension froze the US public domain for 20 years: nothing new came out of copyright between 1999 and 2018.

For code written at work, the US gives the company [95 years from publication](https://www.law.cornell.edu/uscode/text/17/302). In most of Europe the programmer stays the author even though the company owns the rights, so the clock is the programmer's life plus 70. MS-DOS came out in 1981, so in the US it goes public domain in 2077. Microsoft did publish the source of versions 1.25 and 2.0, first through the Computer History Museum in 2014 under a non-commercial license, then [on GitHub under MIT in 2018](https://opensource.com/article/18/10/microsoft-open-source-old-versions-ms-dos). Version 4.0 followed in 2024. That's licensed, not public domain.

No software has gone public domain by the clock running out yet. What is public domain got there another way: published without a copyright notice back when the US required one, written by the US federal government, or given away on purpose, like SQLite.

## Moral rights, the long version

In the talk I said the US only has moral rights for visual art. That's the federal statute, [VARA](https://www.law.cornell.edu/uscode/text/17/106A), and its definition of a "work of visual art" [excludes](https://www.law.cornell.edu/uscode/text/17/101) works made for hire and anything published electronically. So no code.

When the US joined the Berne Convention in 1989, it said its existing laws were enough: contracts, trademark law, state laws. The Copyright Office looked at it again in 2019 and wrote [a whole report](https://www.copyright.gov/policy/moralrights/) about this patchwork. The closest thing to a moral right for code is DMCA section 1202, which makes it illegal to strip author names and license notices. That was the claim in the Copilot case, and in September 2026 the Ninth Circuit [rejected it](https://www.eff.org/files/2026/09/16/doe_v_github.pdf) because Copilot writes new code rather than removing anything from a copy.

Putting something in the public domain is harder than it sounds, and in Germany it's not really moral rights that stop you. German law says copyright [can't be transferred](https://www.gesetze-im-internet.de/urhg/__29.html) at all, only licensed. It does give you a way out, sometimes called the Linux clause: "Der Urheber kann aber unentgeltlich ein einfaches Nutzungsrecht für jedermann einräumen" ([§32](https://www.gesetze-im-internet.de/urhg/__32.html)). You can give everyone a free license, but you can't make the work public domain.

That's why [CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en) is built in layers. First it waives everything it can, moral rights included. If a court says the waiver doesn't work, a fallback license kicks in: "royalty-free, non transferable, non sublicensable, non exclusive, irrevocable and unconditional". Whatever can't be waived simply stays with you.

Dying doesn't help either. The copyright passes to your heirs, and an irrevocable license you gave binds them, but they can't finish the job for you. When the copyright finally expires, the economic rights are gone everywhere. In France the moral rights [never expire](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278891). Victor Hugo's descendant took the publisher of two *Les Misérables* sequels all the way to the Cour de cassation, which ruled in 2007 that a sequel isn't automatically a violation but sent the case back to check whether Hugo's work had been distorted. (There's a [summary](https://en.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_Plon_et_autres_v._Pierre_Hugo_et_autres). I haven't read the judgment itself.)

## Author and owner are different things

In Europe, if you write code as an employee, your employer automatically gets all the economic rights. That's the [Software Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0024), Article 2(3), and in Germany [§69b](https://www.gesetze-im-internet.de/urhg/__69b.html). The company can sell the code, license it or relicense it without asking you. You're still the author, which matters for two things: when the copyright ends, and moral rights. For code written by several people, German law says copyright ends 70 years after [the last co-author](https://www.gesetze-im-internet.de/urhg/__65.html) dies. Nobody can work that date out for a real codebase, but nobody needs to either.

The rule covers employees only. Freelancers are where it gets interesting. In Germany you can't buy copyright, only usage rights, and [§31(5)](https://www.gesetze-im-internet.de/urhg/__31.html) reads vague contracts narrowly: you get the uses the contract's purpose needed. "Build us a website" might not include "sell the code as part of a product". The US has the same problem from the other side: software isn't one of the categories where commissioned work counts as work made for hire, so contractor code needs a written assignment. That's one of the first things a buyer's lawyers ask about.

## Relicensing means asking everyone

In 2011 VideoLAN moved the VLC engine from the GPL to the LGPL, partly so it could go back on the iOS App Store. VideoLAN [doesn't require copyright assignment](https://videolan.org/press/lgpl-libvlc.html), so every contributor still owned their patches and every one of them had to agree. Jean-Baptiste Kempf [wrote up how he did it](https://jbkempf.com/blog/How-to-properly-relicense-a-large-open-source-project-part-3/): about 230 agreements, plus sign-off from companies that had employed contributors, the BBC among them. The press release has my favourite line on the subject: "All the developers have agreed to the relicensing, but a famous one, who refused to answer. His code was therefore rewritten."

OpenSSL did the same in 2017, moving to Apache 2.0. It [emailed every contributor](https://mirror.openssl-library.org/post/2017-03-20-license/) and built a site to track them down. Saying that no reply would count as a yes [did not go down well](https://www.theregister.com/2017/03/24/openssl_asks_contributors_to_agree_to_apache_license/).

This is also why the Linux kernel will stay on GPLv2. There's no CLA and there are thousands of owners, some of them dead.

## The GPL and JavaScript slides I cut

I had a few more slides on JavaScript-specific gotchas. They didn't make it, so here they are.

**Your minifier deletes the MIT notice.** MIT has one condition: keep the notice "in all copies or substantial portions". [Terser](https://github.com/terser/terser), [esbuild](https://esbuild.github.io/api/#legal-comments) and [Rolldown](https://rolldown.rs/reference/OutputOptions.comments) only keep comments that start with `/*!` or contain `@license` or `@preserve`. A plain `/* Copyright ... */` header goes. Most packages keep their notice in a LICENSE file anyway, and no bundler copies that into `dist/`. Plugins like [rollup-plugin-license](https://github.com/mjeanroy/rollup-plugin-license) and [license-webpack-plugin](https://github.com/xz64/license-webpack-plugin) collect them for you.

**The "open source licenses" screen doesn't see npm.** Google's Android [oss-licenses plugin](https://developers.google.com/android/guides/opensource) reads licenses "as declared in their POM files". CocoaPods does the same for iOS. In a React Native or Capacitor app, the npm packages in your JS bundle are invisible to both. Your web app has no such screen at all unless you build one. (Chrome has `chrome://credits`, which is a nice model: it's keyed on what ships, not on what's in the repo.)

**Apache has a file you have to carry.** If a dependency ships a NOTICE file, [Apache 2.0](https://spdx.org/licenses/Apache-2.0.html) §4(d) says its contents travel with your build. No bundler does that. Apache 2.0 also mixes with GPLv3 but [not with GPLv2](https://www.apache.org/licenses/GPL-compatibility.html), which matters if both end up in one bundle.

**Fonts and icons have licenses too.** The [OFL FAQ](https://openfontlicense.org/ofl-faq/) says serving a web font with `@font-face` "is distribution", and that subsetting it is modification, which can trip the Reserved Font Name rule. [Font Awesome Free](https://github.com/FortAwesome/Font-Awesome/blob/7.x/LICENSE.txt) uses three licenses for one package: CC BY 4.0 for the SVG and JS icons, OFL for the fonts and MIT for the code. Its attribution lives in comments, which your minifier strips.

**The license belongs to the version, not the package.** React went from BSD plus patents to [MIT in 2017](https://engineering.fb.com/2017/09/22/web/relicensing-react-jest-flow-and-immutable-js/). Others went the other way: Handsontable from MIT to proprietary in 7.0.0 (2019), Kibana from Apache to [SSPL and the Elastic License](https://www.elastic.co/blog/licensing-change) (2021), Grafana from Apache to [AGPL](https://grafana.com/blog/2021/04/20/grafana-loki-tempo-relicensing-to-agplv3/) (2021), n8n to its own [Sustainable Use License](https://blog.n8n.io/announcing-new-sustainable-use-license/) (2022). Pin your versions and check licenses in CI.

**One letter.** In `package.json`, `"UNLICENSED"` means all rights reserved. `"Unlicense"` is [a public domain dedication](https://spdx.org/licenses/Unlicense.html). And until npm 12, released in July 2026, `npm init` wrote `"ISC"` on everything by default. The [commit that removed it](https://github.com/npm/cli/commit/fc80bb3595) says: "If not set, the license field will be omitted from new packages." A lot of packages are ISC because nobody changed the default.

**devDependencies don't decide what ships.** The bundler follows imports, not `package.json`. A UI library in `devDependencies` still ends up in the bundle. Generate your license list from the build output.

**Minified isn't source.** The GPL defines source as "the preferred form of the work for making modifications". The FSF calls minified JavaScript ["a bogus, useless substitute for source code"](https://www.gnu.org/philosophy/javascript-trap.html), and the Software Freedom Law Center's [2014 compliance guide](https://softwarefreedom.org/resources/2014/SFLC-Guide_to_GPL_Compliance_2d_ed.html) puts "minimized" code in the non-source column too. I couldn't find anyone authoritative saying a source map counts. The FSF's own answer is [web labels](https://www.gnu.org/licenses/javascript-labels.html), a page that links each minified script to its license and its real source. The FSF runs [one itself](https://weblabels.fsf.org/).

One small thing I tested myself: if you mark GPL code with LibreJS's `// @license` and `// @license-end` comments, `esbuild --bundle --minify` moves both comments to the end of the file. They no longer wrap the code. `--legal-comments=inline` fixes it.

**App stores and the GPL.** In 2010 the FSF complained that App Store terms [conflict with GPLv2](https://www.fsf.org/news/2010-05-app-store-compliance), and Apple removed GNU Go (the GNU project's program for playing the board game Go) rather than change them. In January 2011 VLC for iOS [was pulled](https://www.videolan.org/news.html) after a complaint from one of VLC's own developers. That's the background to the relicensing above.

## AI and copyright: what else is going on

**If you register something with the US Copyright Office,** you now have to [disclaim AI-generated material](https://www.govinfo.gov/content/pkg/FR-2023-03-16/pdf/2023-05321.pdf) that's more than trivial. The [Zarya of the Dawn](https://www.copyright.gov/docs/zarya-of-the-dawn.pdf) comic is the example everyone cites: the author got copyright for the text and the arrangement, not for the Midjourney images.

**The Copyright Office report on training** is still a "pre-publication version", [17 months on](https://www.copyright.gov/ai/). The head of the Copyright Office was removed the day after it came out, and she's still in court about it. In September 2026 the US Department of Justice took a side for the first time, arguing that training is fair use.

**The UK** protects "computer-generated works" for [50 years](https://www.legislation.gov.uk/ukpga/1988/48/section/12) from when they were made, not life plus 70. The government said in March 2026 that it wants to [remove that protection](https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence). It hasn't yet.

**China went the other way.** In 2023 the Beijing Internet Court reportedly gave copyright to a Stable Diffusion image, to the user who picked and refined the prompts. A later decision said you have to be able to prove that creative work.

**The robots.txt story has a German case behind it.** A photographer, Robert Kneschke, sued LAION over its training dataset. The Hamburg courts said building the dataset was covered by the text and data mining exception, and that his opt-out, written in plain words in a website's terms, wasn't "machine-readable" ([summary](https://www.dlapiper.com/en/insights/blogs/mse-today/2025/robert-kneschke-v-laion)).

**The EU's code of practice for model providers** commits signatories to obey robots.txt, not get around paywalls, and handle complaints. Amazon, Anthropic, Google, IBM, Microsoft, Mistral and OpenAI [signed it](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai). Meta didn't.

**On whether the GPL reaches the weights,** the OSI's [Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition) doesn't require releasing the training data, which the FSF criticised. The Software Freedom Conservancy's position is ["FOSS in, FOSS out, and FOSS throughout"](https://sfconservancy.org/news/2024/oct/25/aspirational-on-llm-generative-ai-programming/), and its 2026 [recommendations](https://sfconservancy.org/llm-gen-ai/llm-backed-generative-ai-recommendations.html) are worth reading if you maintain anything.

## How often do models copy?

GitHub's [2021 study](https://github.blog/ai-and-ml/github-copilot/github-copilot-research-recitation/) is more interesting than the headline number. About 300 employees, Python only, 453,780 suggestions. After filtering and checking by hand, 41 genuine copies. None of them appeared in fewer than 10 files in the training data, and 35 appeared in more than 100. The author says the rate is probably a lower bound.

When researchers go looking on purpose, the numbers look different. [Yang et al.](https://arxiv.org/abs/2308.09932) pulled over 40,000 memorized snippets out of 20,000 outputs from a code model. [Al-Kaswan et al.](https://arxiv.org/abs/2312.11658) extracted 47% of the samples they targeted from a 16 billion parameter model. And [Carlini et al.](https://arxiv.org/abs/2202.07646) found memorization grows with model size, with how often something appears in the data, and with prompt length.

## Clean rooms, reverse engineering and agents

The clean room is an idea from the 1980s. When Compaq and Phoenix cloned the IBM PC BIOS, one team read IBM's published documentation and wrote a specification. A second team, who had never seen IBM's code, built the new BIOS from that specification. The point was evidence: if you never saw the original, you can't have copied it.

At the start of October, a developer released [PhotoCraft](https://github.com/storytold/photocraft), FilmCraft and LightCraft: open source rebuilds of Photoshop, Premiere and Lightroom, written in Rust, reportedly with Claude ([Phoronix](https://www.phoronix.com/news/Photocraft-Filmcraft-AI), [PetaPixel](https://petapixel.com/2026/10/07/someone-rebuilt-free-open-source-versions-of-photoshop-premiere-and-lightroom-using-ai/)). The README says "Clean-room: implemented from public specs and observed behaviour only. No proprietary code, shaders or assets." So the method is Adobe's published file format specs, plus comparing the output with what Photoshop renders. Adobe has sent eight takedown notices to GitHub this year, all of them against cracks and keygens. Against these, nothing so far. Andres Guadamuz, a law professor, [told Al Jazeera](https://www.aljazeera.com/news/2026/10/14/how-ai-apps-are-offering-free-substitutes-for-big-tech-software): "We also do not know whether the claimed 'clean-room process' stands up to scrutiny."

Is any of this legal? In the US, mostly. Courts said reverse engineering to get at the functional parts of a program is fair use, first for games made to run on the Sega Genesis in 1992, then for a PlayStation emulator in [Sony v. Connectix](https://law.resource.org/pub/us/case/reporter/F3/203/203.F3d.596.99-15852.html) in 2000. The DMCA has a narrow [interoperability exemption](https://www.law.cornell.edu/uscode/text/17/1201) for getting around copy protection. And in [Google v. Oracle](https://www.supremecourt.gov/opinions/20pdf/18-956_d18f.pdf), in 2021, the Supreme Court said reimplementing the Java API was fair use. The catch in the US is contracts: in *Bowers v. Baystate* (2003), a "no reverse engineering" clause in a shrink-wrap license won. Two years later Blizzard won against the developers of bnetd, who had reverse engineered Battle.net so people could run their own game servers. By clicking through the license, the court said, they had ["expressly relinquished their rights to reverse engineer"](https://law.resource.org/pub/us/case/reporter/F3/422/422.F3d.630.04-3654.html).

Europe goes the other way on contracts. The Software Directive lets anyone licensed to use a program observe, study and test it to work out the ideas behind it, and the EU's top court said in [SAS Institute](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62010CJ0406) (2012) that functionality, programming languages and file formats aren't protected anyway. In [Top System](https://www.cuatrecasas.com/en/spain/article/decompilation-of-software-for-error-correction-cjeu-judgment-in-top-system) (2021) it added that you can decompile a program you lawfully have to fix its bugs, as far as that takes. Decompiling is allowed only for interoperability, and never to build "a program with substantially similar expression" (the German version is [§69e](https://www.gesetze-im-internet.de/urhg/__69e.html)). In the UK, a contract term that tries to stop either is [void](https://www.legislation.gov.uk/ukpga/1988/48/section/296A).

Games are greyer. The [Super Mario 64](https://github.com/n64decomp/sm64) and [Ocarina of Time](https://github.com/zeldaret/oot) decompilations have been on GitHub since 2019 and 2020, and [Ship of Harkinian](https://github.com/HarbourMasters/Shipwright), a PC port of Ocarina of Time built on that work, since 2022. None of them ship Nintendo's assets: you bring your own ROM. Take-Two went after the GTA III and Vice City decompilations with a [takedown in 2021](https://github.com/github/dmca/blob/master/2021/02/2021-02-19-take-two.md), then a lawsuit, which reportedly ended in a settlement in 2023 without a ruling. On 23 October 2026, Nintendo took down a [Rhythm Tengoku decompilation](https://github.com/github/dmca/blob/master/2026/10/2026-10-23-nintendo.md), calling it "decompiled copies" of the game's code. And this month Kotaku [reported on](https://kotaku.com/we-might-be-cooked-as-these-vibe-coded-web-browser-ports-of-halo-the-simpsons-hit-and-run-and-gta-vice-city-seem-to-work-perfectly-2000743300) browser ports of Halo and GTA: Vice City, decompiled with AI.

Then there's chardet, the Python library that guesses text encodings. In March its maintainer had Claude rewrite it from scratch and released version 7.0.0 under MIT instead of the LGPL. Mark Pilgrim, who wrote the original in 2006, opened [an issue](https://github.com/chardet/chardet/issues/327): "Adding a fancy code generator into the mix does not somehow grant them any additional rights." The maintainer, Dan Blanchard, [agreed](https://github.com/chardet/chardet/issues/327#issuecomment-4005195078) there was no clean room, since he knew the old code well. His argument was that a clean room is a means, not the end. He ran a plagiarism checker across releases: 1.29% maximum similarity between the new version and the old one, against 80% to 94% between earlier releases. Simon Willison [noticed](https://simonwillison.net/2026/Mar/5/chardet/) that Claude Code did open one of the old files during the rewrite, and that Claude was very likely trained on chardet anyway. Richard Fontana, one of the drafters of the LGPLv3, said the project didn't legally need to stay LGPL. Heather Meeker [agreed](https://heathermeeker.com/2026/04/09/the-chardet-controversy-open-source-and-the-ai-clean-room/) that was probably right as far as copyright goes. Her problem was with shipping it as the next version, under the same name. (It's 0BSD now.)

Someone also turned this into a product, or a joke about one. [Malus](https://www.404media.co/this-ai-tool-rips-off-open-source-software-without-violating-copyright/) sells "Clean Room as a Service": one set of agents reads only the docs, a second set writes the code. "No attribution. No copyleft. No problems."

The catch is the one from the talk. A clean room only works as proof that you never saw the original. A model trained on all of GitHub has seen it. Lawyers are split on how much that matters: Meeker thinks the AI can be the neutral middle step, and Reed Smith [expects](https://www.reedsmith.com/our-insights/blogs/technology-law-dispatch/102nbig/clean-room-coding-in-the-age-of-ai-who-owns-the-code/) courts to look harder at AI clean rooms. No court has ruled on it yet.

## Open source projects and AI

The Linux kernel added an `Assisted-by:` tag in early 2026 and [dropped it in October](https://lwn.net/Articles/1099594/). Only 1,884 of 18,533 commits in 7.3 carried it, about 10%, while actual use was far more widespread. Tool use now goes in the cover letter. The rule that an agent never signs off stays.

curl [ended its bug bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/) in January 2026 because of AI-generated reports. Debian [voted in August](https://www.debian.org/vote/2026/vote_002) to neither endorse nor ban AI tools. GCC [declines](https://gcc.gnu.org/ai-policy.html) significant LLM-generated contributions, and says "An LLM may not commit code".

In JavaScript, TypeScript's [CONTRIBUTING.md](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md) refuses "bulk, agent-driven contributions" and includes instructions addressed directly to coding agents. Deno [rejects PRs](https://github.com/denoland/deno/blob/main/.github/CONTRIBUTING.md) where it suspects undisclosed AI use. And Node.js's [guidelines](https://github.com/nodejs/node/blob/main/doc/contributing/ai-guidelines.md) suggest leaving brand names out of commit messages ("a closed-source coding agent"), and ban using AI to fix issues marked "good first issue". The 22,000 line pull request that started it is [#61478](https://github.com/nodejs/node/pull/61478).

## Stack Overflow, continued

The license changes didn't stop with the MIT plan. In 2018 Stack Overflow quietly moved from CC BY-SA 3.0 to 4.0, and in 2019 it announced the change applied to everything ever posted. In 2020 it [walked that back](https://meta.stackexchange.com/questions/347758/creative-commons-licensing-ui-and-data-updates). Today it depends on the date: before April 2011 it's 2.5, until May 2018 it's 3.0, after that 4.0.

The data dumps used to go to the Internet Archive. In 2024 they moved behind a login, with a checkbox saying you won't use them to train an LLM, "an attempt to put commercial pressure on LLM manufacturers" ([announcement](https://meta.stackexchange.com/questions/401324/announcing-a-change-to-the-data-dump-process)). Users argued that conflicts with CC BY-SA. The full dump [came back](https://meta.stackexchange.com/questions/419975/the-return-of-the-network-data-dump) in October 2026.

## The company side

The "Who's going to check?" section had a lot more behind it.

**SOC 2 won't find GPL in your code.** The AICPA's own criteria say practitioners ["generally do not use the trust services criteria"](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022) to report on compliance with laws or contracts. It does care that your source code went to an AI service nobody vetted.

**The standard for license compliance** is ISO/IEC 5230, from [OpenChain](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/main/Official/en/ISO-5230-2020/ISO-5230-2020.md). You certify yourself. Its sibling, ISO/IEC 18974, covers vulnerabilities, not licenses.

**The Black Duck report** has more numbers than I used: conflicts per codebase have a median of 8 and a maximum of 2,675, 8% of components had no license at all, and 17% came in outside package managers, which covers copy-paste, vendor drops and AI. The whole thing is a [free PDF](https://assets.blackduck.com/image/upload/rep-ossra.pdf). It's a vendor sample, so keep that in mind. The only quotable deal delay I found is old: a 2016 interview mentions [a 12 week delay](https://pinsentmasons.com/out-law/news/ma-deals-imperilled-by-failure-to-manage-open-source-software-risk-says-expert) on one deal, with no names.

**The investor paperwork** is the [NVCA model stock purchase agreement](https://nvca.org/model-legal-documents/). The AI clause says the company hasn't put trade secrets into AI tools, "except in cases where such Generative AI Tools do not use such information ... to train". That carve-out is the consumer and business seat split, written into a contract.

**If you ship software into the EU,** the Cyber Resilience Act's [reporting duties](https://digital-strategy.ec.europa.eu/en/policies/cra-summary) started in September 2026, and the SBOM requirement arrives in December 2027. An SBOM lists your dependencies, not the 40 lines an assistant pasted in. The US went the other way: in January 2026 a [White House memo](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf) made SBOMs optional for federal agencies. CISA's [2026 minimum elements](https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom) did add a license field, though.

**Trade secrets.** If an agent wrote most of your closed code, copyright may protect less of it, and what's left is trade secret. US law only treats something as a trade secret if the owner took ["reasonable measures"](https://www.law.cornell.edu/uscode/text/18/1839) to keep it secret, and UK and EU law say ["reasonable steps"](https://www.legislation.gov.uk/uksi/2018/597/regulation/2). No court has said that pasting code into a tool that trains on it fails that test. I wouldn't want to be the first case.

**Insurance.** Trade press reports that optional generative AI exclusions became available for US general liability policies in January 2026 and are spreading. I couldn't read the forms themselves. Ask your broker.

**"Nobody sees our code."** Slack had private repos [downloaded with stolen tokens](https://slack.com/blog/news/slack-security-update) in 2022. Twitter's source turned up on GitHub in 2023 ([DMCA notice](https://github.com/github/dmca/blob/master/2023/03/2023-03-24-twitter.md)). A former Google engineer was [convicted in January 2026](https://www.justice.gov/opa/pr/former-google-engineer-found-guilty-economic-espionage-and-theft-confidential-ai-technology) for taking confidential AI material with him. And Claude Code's [DMCA notice](https://github.com/github/dmca/blob/master/2026/03/2026-03-31-anthropic.md) initially hit 8,100 repositories before Anthropic [narrowed it](https://github.com/github/dmca/blob/master/2026/04/2026-04-01-anthropic-retraction.md) the next day.

**GPL enforcement in court** is still mostly about firmware. The Software Freedom Conservancy's case against Vizio over its TVs has been going since 2021, and the [trial is listed for late 2026](https://sfconservancy.org/copyleft-compliance/vizio.html).

**Anthropic's "Non-commercial use only"** clause is in the [UK and EEA consumer terms](https://www.anthropic.com/legal/consumer-terms), not the US ones, as far as I could check. It sits in the liability section, so it's mostly there to stop Anthropic owing a business user anything. It's still a promise you make when you sign up.

## If half your codebase was written by a model

Someone asked me what this means for a company whose closed source code is half generated. The short version: day to day, nothing. At the edges, quite a lot.

Copyright follows the human parts. In the US and the EU, the bits a model wrote on its own probably have no copyright, while your edits, choices and structure do. In practice most generated code has been prompted, reviewed, edited and fitted into a design a human made, so "half generated" isn't a clean split, and nobody can tell you where the line is. The UK still protects computer-generated works, for 50 years, until it changes its mind.

You don't need copyright to run, sell or support your own code. It only matters when someone else copies it. If you sell SaaS, customers never get the code, and your contract and your servers do the protecting. If you ship it (a desktop app, an SDK, an on-prem install, your front-end JavaScript), a competitor who lifts the generated parts is harder to stop with copyright. What's left is your license terms (which in the US can ban reverse engineering, see above), trademarks, patents if you have any, and trade secret for whatever you don't ship.

Trade secret is the interesting one, because it doesn't care who wrote the code. It cares whether the code is valuable and whether you took ["reasonable measures"](https://www.law.cornell.edu/uscode/text/18/1839) to keep it secret. For closed source, it's the protection that survives AI. It also means pasting your code into a consumer seat that trains on it works against you.

Customer contracts usually promise to defend the customer if your product infringes someone's IP. That doesn't change. What changes is "we own all the IP in the product". With half the code generated, that's a promise you might not be able to keep, and "own or have the right to use" is the safer wording. The [NVCA](https://nvca.org/model-legal-documents/) investment forms ask founders to promise they haven't used AI tools to develop proprietary IP "in a manner that it believes would materially affect the Company's ownership or rights therein". Half the codebase is exactly that question.

In the US you can't sue over a US work until you've [registered the copyright](https://www.law.cornell.edu/uscode/text/17/411), and the registration has to exclude AI-generated material that's more than trivial. So you need to know which parts those are. That's the practical case for tracking what was generated, beyond it being good hygiene.

Liability doesn't move either. From 9 December 2026, the EU's new Product Liability Directive treats software as a product, with liability without fault for defects that cause injury, damage to private property or loss of data ([UK government summary](https://www.niassembly.gov.uk/globalassets/committee-blocks/windsor-framework-democratic-scrutiny-committee/com-eu-20242853/directive-eu-20242853-em.pdf)). "The model wrote that bit" isn't a defence.

And a small irony. Anthropic says that as of May 2026, ["more than 80% of the code we merge into Anthropic's codebase was authored by Claude"](https://www.anthropic.com/institute/recursive-self-improvement). Boris Cherny, who leads Claude Code, has said in talks and posts that Claude writes all of his code, including [every line of the 259 pull requests](https://www.implicator.ai/the-accidental-architect-how-boris-cherny-built-silicon-valleys-most-talked-about-coding-tool/) he landed in 30 days at the end of 2025. Its takedown notice for the Claude Code leak, in March, said ["Anthropic is the copyright owner"](https://github.com/github/dmca/blob/master/2026/03/2026-03-31-anthropic.md). Both can be true: the human design, editing and arrangement are protected, and in the UK the generated parts are too. But it shows how little of this anyone has had to test.

## Small things

The fast inverse square root isn't Carmack's. [Beyond3D traced it](https://games.slashdot.org/story/06/12/01/184205/origin-of-quake3s-fast-invsqrt) in 2006 to Greg Walsh at Ardent Computer in the late 1980s, with Cleve Moler involved. [Armin Ronacher's tweet](https://twitter.com/mitsuhiko/status/1410886329924194309) with Copilot reproducing it is from 2 July 2021.

In the font case, the Copyright Office examiner had told Nicky Laatz that if the code "was merely generated by a font program and was not hand coded by a human author, it cannot be registered" ([order](https://storage.courtlistener.com/recap/gov.uscourts.cand.399632/gov.uscourts.cand.399632.176.0.pdf)). Matthew Butterick [wrote about](https://matthewbutterick.com/chron/the-copyrightability-of-fonts-revisited.html) how it ended.

The Sun RPC story is on LWN: [Sun's 2009 promise](https://lwn.net/Articles/319648) and [Oracle's 2010 permission](https://lwn.net/Articles/402312/).

The GitHub numbers come from GitHub's search API, which only detects a LICENSE file in the root of the repo. A license that only lives in `package.json` counts as none. The 2015 comparison is Ben Balter's [post on the GitHub blog](https://github.blog/open-source/open-source-license-usage-on-github-com/).

## Sources for the talk itself

- The monkey: the Copyright Office [Compendium](https://www.copyright.gov/comp3/) lists "a photograph taken by a monkey", and *Naruto v. Slater* went to the Ninth Circuit in 2018.
- Thaler v. Perlmutter: [D.C. Circuit opinion](https://media.cadc.uscourts.gov/opinions/docs/2025/03/23-5233.pdf), March 2025.
- The Copyright Office report on copyrightability: [Part 2](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf), January 2025.
- Munich logos: [AG München, February 2026](https://www.gesetze-bayern.de/Content/Pdf/Y-300-Z-BECKRS-B-2026-N-1513?all=False).
- Bartz v. Anthropic: the [fair use order](https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.231.0_2.pdf) and the [settlement approval](https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.680.0_5.pdf).
- Kadrey v. Meta: [the order](https://storage.courtlistener.com/recap/gov.uscourts.cand.415175/gov.uscourts.cand.415175.598.0.pdf).
- Thomson Reuters v. Ross: [Third Circuit opinion](https://www2.ca3.uscourts.gov/opinarch/252153p.pdf), September 2026.
- Getty v. Stability AI: [judgment](https://www.judiciary.uk/wp-content/uploads/2025/11/Getty-Images-v-Stability-AI.pdf). GEMA v. OpenAI: [GEMA's summary](https://www.gema.de/en/w/landmark-ruling-gema-against-openai).
- The FSF on GPL JavaScript: [GPL FAQ](https://www.gnu.org/licenses/gpl-faq.html#UnreleasedMods).
- Welte and McHardy: [gpl-violations.org](https://gpl-violations.org/news/20040519-iptables-sitecom/), [Welte on the Geniatech hearing](https://laforge.gnumonks.org/blog/20180307-mchardy-gpl/), the [enforcement principles](https://sfconservancy.org/copyleft-compliance/principles.html) and [the netfilter suspension](https://lwn.net/Articles/694890/).
- Copilot filters and code referencing: [GitHub Docs](https://docs.github.com/en/copilot/concepts/completions/code-referencing). Devin's [attribution filtering](https://docs.devin.ai/enterprise/features/attribution-filtering).
- Indemnities and "if any": [GitHub](https://github.com/customer-terms/github-generative-ai-services-terms?locale=en-US), [Microsoft](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/customer-copyright-commitment), [AWS §50.10](https://aws.amazon.com/service-terms/), [Google](https://cloud.google.com/terms/service-terms), [OpenAI](https://openai.com/policies/service-terms/), [Anthropic](https://www.anthropic.com/legal/commercial-terms), [Cursor](https://cursor.com/terms-of-service).
- Training on consumer seats: [Anthropic](https://www.anthropic.com/news/updates-to-our-consumer-terms), [GitHub](https://github.blog/changelog/2026-03-25-updates-to-our-privacy-statement-and-terms-of-service-how-we-use-your-data/), [OpenAI](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance).
- The DCO: [developercertificate.org](https://developercertificate.org/). The kernel's [current rules](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/plain/Documentation/process/coding-assistants.rst). The OpenJS [policy](https://ai-coding-assistants-policy.openjsf.org/).
- Stack Overflow's MIT plan: [announced](https://meta.stackexchange.com/questions/271080/the-mit-license-clarity-on-using-code-on-stack-overflow-and-stack-exchange) and [delayed indefinitely](https://meta.stackexchange.com/questions/272956/a-new-code-license-the-mit-this-time-with-attribution-required).
- The tools: Claude Code's [attribution setting](https://code.claude.com/docs/en/settings-reference.md), GitHub's [dependency review action](https://github.com/actions/dependency-review-action), [FOSSA snippet scanning](https://docs.fossa.com/docs/cli/features/snippet-scanning), [SCANOSS](https://scanoss.readthedocs.io/projects/scanoss-py/en/latest/).

If you spot something wrong, tell me. The law in this area changes every month, so something here is probably already out of date.
