const metrics=[
  {key:"robotsDeployed",label:"ROBOTS DEPLOYED",type:"count"},
  {key:"robotsBuilt",label:"ROBOTS BUILT",type:"count"},
  {key:"monthsSinceLaunch",label:"MONTHS DEPLOYED",type:"count"},
  {key:"price",label:"PRICE",type:"money"},
  {key:"funding",label:"FUNDING",type:"money"}
];

const metricDescriptions={
  "robotsBuilt":"Number of robots built.",
  "robotsDeployed":"Number of robots with customers.",
  "monthsSinceLaunch":"Number of months since launching robots to customers.",
  "price":"Current listed purchase price.",
  "funding":"Amount of funding raised so far."
};

const companyBadges={
  "Weave":"W",
  "Sunday":"S",
  "Almond":"A",
  "Nori":"N",
  "OS3":"O",
  "Maven":"M",
  "Eden":"E",
  "Genesis AI":"G",
  "Hello Robot":"H",
  "Kovari":"K",
  "Matic":"M",
  "Innate":"I",
  "Feather":"F",
  "Syncere":"S",
  "Dyna":"D",
  "Flourish":"F",
  "Apptronik":"A",
  "Tesla":"T",
  "Figure":"F",
  "1X":"1X"
};

const companyColors={
  "Weave":"#737b66",
  "Sunday":"#d04a3a",
  "Almond":"#d7df72",
  "Nori":"#95bf4a",
  "OS3":"#7b7168",
  "Maven":"#9aa62d",
  "Eden":"#879a82",
  "Genesis AI":"#6f747a",
  "Hello Robot":"#6f7f86",
  "Kovari":"#60656a",
  "Matic":"#006859",
  "Innate":"#4700f5",
  "Feather":"#5f6368",
  "Syncere":"#323f35",
  "Dyna":"#45484d",
  "Flourish":"#9faa62",
  "Apptronik":"#7a858f",
  "Tesla":"#e82127",
  "Figure":"#4b5563",
  "1X":"#5b8cff"
};

const estimateReasons={
  "Weave":{
    robotsBuilt:"Isaac 0 began shipping in February 2026. Weave now says it has deployed robots to homes and businesses nearly every week since launch and reports 2,000+ field hours. ~30 built is a conservative estimate that allows for roughly ~25 customer units plus internal, demo and spare hardware.",
    robotsDeployed:"Isaac 0 began shipping in February 2026, about 35 weeks before this tracker date. Weave says deployments have occurred nearly every week since launch. ~25 deployed intentionally discounts that cadence rather than assuming one new customer unit every week.",
    monthsSinceLaunch:"Weave says Isaac 0 began shipping to San Francisco Bay Area residents in February 2026. About eight months have elapsed from that launch to October 12, 2026."
  },
  "Sunday":{},
  "Almond":{
    robotsBuilt:"Almond says every unit in its first production batch shipped and that a week later its second batch was already 50% sold. The company does not disclose batch size; ~15 remains a rough small-batch production estimate, not a disclosed count.",
    robotsDeployed:"Almond says its first production batch sold out and shipped to every customer. The company does not disclose how many units were in that batch; ~10 is a rough estimate of that first customer batch."
  },
  "Nori":{},
  "OS3":{
    monthsSinceLaunch:"OS3 demonstrated HALE 1.0 publicly at YC Launch Live in July 2026 and now says the robot is deployed in hospitality. ~3 months uses that July public milestone because the exact first customer deployment date is not disclosed."
  },
  "Maven":{
    robotsBuilt:"TechCrunch reports Maven has as many as eight robots working 16-hour shifts at customer sites. ~8 built uses that public operating-fleet figure; Maven has not disclosed total units built.",
    robotsDeployed:"TechCrunch reports Maven has as many as eight robots working 16-hour shifts at 99%+ uptime. We use ~8 because the wording is an upper-end current deployment figure, not an exact fleet count."
  },
  "Eden":{
    robotsDeployed:"Eden says Eden I deliveries start Sep–Nov 2026, but we found no confirmed external customer delivery count as of Oct. 12. We therefore show 0* rather than assuming a scheduled delivery has occurred.",
    monthsSinceLaunch:"Eden’s public delivery window has started, but without a confirmed external customer delivery date we keep months deployed at 0*."
  },
  "Genesis AI":{
    robotsBuilt:[{label:"Genesis — Eno unveiled as working general-purpose robot",url:"https://www.genesis.ai/"}],
    robotsDeployed:[{label:"Genesis — targeted customer deployments planned by end of 2026",url:"https://www.genesis.ai/"}],
    monthsSinceLaunch:[{label:"Genesis — deployment timing",url:"https://www.genesis.ai/"}],
    funding:[{label:"Genesis — $105M seed funding",url:"https://www.genesis.ai/news/press-release-gene-265"}]
  },
  "Hello Robot":{
    funding:"An A3/Automate industry profile reports Hello Robot has raised about $7.7M total. We mark the total as approximate because the company does not publish a complete funding history."
  },
  "Matic":{
    monthsSinceLaunch:"Matic shipped its first customer units in 2024. ~24 months is an approximate elapsed deployment period because the exact start month is not consistently disclosed."
  },
  "Innate":{
    robotsBuilt:"Innate says its first MARS batch sold out and began shipping. ~50 assumes a small early production batch consistent with a founder-edition launch.",
    robotsDeployed:"Innate says MARS units began shipping to customers. ~40 allows for some built units remaining as demos, spares, or internal systems."
  },
  "Feather":{
    robotsBuilt:"TechCrunch reports Feather has surpassed $1M in revenue while selling the roughly $30K platform in small quantities. Dividing revenue by headline hardware price gives about 33 robot-equivalents; ~35 built is a rough proxy and may overstate or understate actual units if revenue includes different configurations or services.",
    robotsDeployed:"TechCrunch confirms Feather robots are already working as restaurant cooks and cleaning science labs, but gives no fleet count. ~30 uses the >$1M revenue signal at a ~$30K unit price and allows for some internal/demo units; it should be treated as a rough estimate.",
    monthsSinceLaunch:"TechCrunch says Feather spent roughly the last year field-testing robots and already has robots working in customer environments; the September 2026 funding announcement says the company fulfilled its first order in nine months. ~12 months is a rounded field-deployment age, not a disclosed launch date."
  },
  "Syncere":{},
  "Dyna":{},
  "Flourish":{},
  "Tesla":{
    robotsBuilt:"The Information reports Tesla ramped Optimus from a few dozen units per week in Q2 to several hundred per week by August 2026. ~3,000 is a rough cumulative estimate from that ramp through early October; Tesla has not disclosed a cumulative built total."
  },
  "Apptronik":{
    robotsBuilt:[{label:"Apptronik — operational fleets of Apollo 2",url:"https://apptronik.com/news-collection/welcome-to-robot-park-where-apptroniks-apollo-goes-to-work"}],
    robotsDeployed:[{label:"Apptronik — Apollo 2 active at customer and partner sites",url:"https://apptronik.com/news-collection/welcome-to-robot-park-where-apptroniks-apollo-goes-to-work"}],
    monthsSinceLaunch:[{label:"Apptronik — customer-site Apollo 2 fleets confirmed June 30, 2026",url:"https://apptronik.com/news-collection/welcome-to-robot-park-where-apptroniks-apollo-goes-to-work"}],
    funding:[{label:"Apptronik — $935M+ Series A",url:"https://apptronik.com/news-collection/apptronik-closes-over-935-million-series-a"}]
  },
  "Figure":{
    monthsSinceLaunch:"Figure 03 arrived at BMW Group Plant Spartanburg on June 30, 2026. About three months have elapsed to October 12, 2026; earlier Figure 02 deployments are excluded."
  },
  "1X":{}
};

const estimateSources={
  "Weave":{
    robotsBuilt:[
      {label:"Weave — nearly weekly deployments",url:"https://www.weaverobotics.com/about"},
      {label:"Weave — 2,000+ field hours",url:"https://www.weaverobotics.com/isaac-0"}
    ],
    robotsDeployed:[
      {label:"Weave — deployed nearly every week since launch",url:"https://www.weaverobotics.com/about"},
      {label:"Weave — already in real homes and businesses",url:"https://www.weaverobotics.com/isaac-0"}
    ],
    monthsSinceLaunch:[{label:"Weave — February 2026 shipping start",url:"https://www.weaverobotics.com/stories/isaac-0-announcement"}]
  },
  "Sunday":{},
  "Almond":{
    robotsBuilt:[
      {label:"Almond — first batch shipped",url:"https://www.linkedin.com/company/almondbot"},
      {label:"Almond founder — second batch 50% sold",url:"https://www.linkedin.com/posts/saba-khalilnaji_a-week-after-this-post-our-second-batch-activity-7488294175562452993-wro8"}
    ],
    robotsDeployed:[{label:"Almond — first batch shipped to every customer",url:"https://www.linkedin.com/company/almondbot"}]
  },
  "Nori":{},
  "OS3":{
    monthsSinceLaunch:[
      {label:"OS3 — deployed in hospitality today",url:"https://os3robotics.com/"},
      {label:"YC — HALE 1.0 launch",url:"https://www.ycombinator.com/companies/os3"}
    ]
  },
  "Maven":{
    robotsBuilt:[{label:"TechCrunch — Maven operating fleet",url:"https://techcrunch.com/2026/09/10/maven-robotics-wants-to-steal-your-robot-deployment-deal/"}],
    robotsDeployed:[{label:"TechCrunch — up to 8 robots working customer shifts",url:"https://techcrunch.com/2026/09/10/maven-robotics-wants-to-steal-your-robot-deployment-deal/"}]
  },
  "Eden":{
    robotsDeployed:[{label:"Eden I — Sep–Nov 2026 delivery window",url:"https://edenrobotics.ai/eden-1"}],
    monthsSinceLaunch:[{label:"Eden I — Sep–Nov 2026 delivery window",url:"https://edenrobotics.ai/eden-1"}]
  },
  "Hello Robot":{
    funding:[{label:"A3 / Automate — about $7.7M raised",url:"https://www.automate.org/robotics/industry-insights/hello-robot-is-banking-on-building-trust-with-its-home-robot/boa"}]
  },
  "Matic":{
    monthsSinceLaunch:[{label:"Matic disclosure",url:"https://maticrobots.com/blog/twice-the-intelligence-still-nothing-leaves-your-home"}]
  },
  "Innate":{
    robotsBuilt:[{label:"Innate shipping disclosure",url:"https://store.innate.bot/products/innate-mars-founders-edition"}],
    robotsDeployed:[{label:"Innate shipping disclosure",url:"https://store.innate.bot/products/innate-mars-founders-edition"}]
  },
  "Feather":{
    robotsBuilt:[
      {label:"TechCrunch — >$1M revenue, ~$30K robot",url:"https://techcrunch.com/2026/09/24/meet-feather-the-startup-building-the-android-of-robotics-for-developers/"},
      {label:"Feather — $7.6M pre-seed / first order",url:"https://www.investegate.co.uk/index.php/announcement/rns/seed-innovations-limited--seed/investee-company-update-feather-robotics-inc-/9792430"}
    ],
    robotsDeployed:[{label:"TechCrunch — robots working in restaurants and science labs",url:"https://techcrunch.com/2026/09/24/meet-feather-the-startup-building-the-android-of-robotics-for-developers/"}],
    monthsSinceLaunch:[
      {label:"TechCrunch — roughly a year of field testing",url:"https://techcrunch.com/2026/09/24/meet-feather-the-startup-building-the-android-of-robotics-for-developers/"},
      {label:"Feather — first order and customer revenue",url:"https://www.investegate.co.uk/index.php/announcement/rns/seed-innovations-limited--seed/investee-company-update-feather-robotics-inc-/9792430"}
    ]
  },
  "Syncere":{},
  "Dyna":{
    robotsDeployed:[
      {label:"Dyna — scaling customer deployments / Din Tai Fung rollout",url:"https://www.dyna.co/research/scaling-customer-deployments"},
      {label:"PR Newswire — Dyna 2.1 launch and customer deployments",url:"https://www.prnewswire.com/news-releases/dyna-robotics-launches-dyna-2-1-physical-agent-a-semi-humanoid-robot-that-completes-full-workflows-such-as-a-commercial-laundry-shift-302892411.html"},
      {label:"Dyna — Monster Laundry customer deployment",url:"https://www.dyna.co/news/monster-laundry"}
    ],
    monthsSinceLaunch:[{label:"Taku launch / deployment status",url:"https://www.dyna.co/dyna-2.1"}]
  },
  "Flourish":{},
  "Tesla":{
    robotsBuilt:[
      {label:"Tesla Q2 filing — Optimus line installation",url:"https://ir.tesla.com/_flysystem/s3/sec/000162828026049213/tsla-20260722-gen.pdf"},
      {label:"The Information — production ramp reporting",url:"https://www.theinformation.com/articles/teslas-optimus-hits-snags-hands-suppliers-scale-up-begins"},
      {label:"Electrek — summary of production-rate reporting",url:"https://electrek.co/2026/09/25/tesla-optimus-production-ramp-hands-ai-generalization-problems/"}
    ]
  },
  "Figure":{
    monthsSinceLaunch:[{label:"Figure 03 arrives at BMW — Jun. 30, 2026",url:"https://www.figure.ai/news/f-03-at-bmw"}]
  },
  "1X":{}
};

const metricSources={
  "Weave":{
    price:[{label:"Price source",url:"https://www.weaverobotics.com/isaac-0"}],
    funding:[{label:"Funding source",url:"https://www.caplight.com/company/weaverobots"}]
  },
  "Sunday":{
    robotsBuilt:[{label:"Sunday launch — dozens of prototypes",url:"https://www.techmeme.com/251120/p30"}],
    robotsDeployed:[{label:"Sunday — beta deployment starts late 2026",url:"https://www.sunday.ai/blog/series-b"}],
    monthsSinceLaunch:[{label:"Sunday — beta launching late 2026",url:"https://www.sunday.ai/"}],
    funding:[{label:"Funding source",url:"https://www.sunday.ai/blog/series-b"}]
  },
  "Almond":{
    price:[{label:"Price source",url:"https://www.almond.bot/axol"}],
    funding:[{label:"Funding source",url:"https://www.ycombinator.com/companies/almond-2"}]
  },
  "Nori":{
    robotsBuilt:[{label:"Nori / YC — first robot deployed",url:"https://www.ycombinator.com/companies/noril1"}],
    robotsDeployed:[{label:"Nori / YC — first robot deployed",url:"https://www.ycombinator.com/companies/noril1"}],
    monthsSinceLaunch:[{label:"Nori / YC — first deployment after launch",url:"https://www.ycombinator.com/companies/noril1"}],
    price:[{label:"Price source",url:"https://www.norirobotics.com/"}],
    funding:[{label:"Funding source",url:"https://www.ycombinator.com/companies/noril1"}]
  },
  "OS3":{
    robotsBuilt:[{label:"OS3 — HALE hardware",url:"https://os3robotics.com/tech/"}],
    robotsDeployed:[{label:"OS3 — deployed in hospitality today",url:"https://os3robotics.com/"}],
    price:[{label:"OS3 — developer unit pricing",url:"https://os3robotics.com/partner/"}],
    funding:[{label:"YC S26 funding tracker",url:"https://data.robo2u.com/funding"}]
  },
  "Maven":{
    funding:[{label:"Forge — Maven total funding",url:"https://forgeglobal.com/maven-robotics_stock/"}]
  },
  "Eden":{
    robotsBuilt:[{label:"Eden — first Eden I operational May 23",url:"https://edenrobotics.ai/about/our-story"}],
    price:[{label:"Eden I — $10/hour RaaS",url:"https://edenrobotics.ai/eden-1"}],
    funding:[{label:"YC / robotics funding tracker",url:"https://data.robo2u.com/funding"}]
  },
  "Hello Robot":{
    robotsBuilt:[{label:"Hello Robot — Stretch 4 ready to ship",url:"https://hello-robot.com/purchase/"}],
    robotsDeployed:[{label:"Hello Robot — Stretch 4 availability",url:"https://hello-robot.com/purchase/"}],
    monthsSinceLaunch:[{label:"Hello Robot — Stretch 4 launch / availability",url:"https://hello-robot.com/stretch-4/"}],
    price:[{label:"Hello Robot — Stretch 4 price",url:"https://hello-robot.com/purchase/"}]
  },
  "Kovari":{
    robotsBuilt:[{label:"Kovari — fleet field readiness",url:"https://www.linkedin.com/jobs/view/fabrication-technician-at-kovari-4459725868"}],
    robotsDeployed:[
      {label:"Kovari — deployed units in customer environments",url:"https://www.linkedin.com/jobs/view/fabrication-technician-at-kovari-4459725868"},
      {label:"Kovari — operators running robots across customer sites",url:"https://builtin.com/job/robot-operations-manager/11387960"}
    ],
    monthsSinceLaunch:[{label:"Kovari — live customer-site deployments",url:"https://builtin.com/job/robot-operations-manager/11387960"}],
    funding:[{label:"Kovari — over $6M raised",url:"https://builtin.com/job/robot-operations-manager/11387960"}]
  },
  "Matic":{
    price:[{label:"Price source",url:"https://maticrobots.com/product"}],
    funding:[{label:"Funding source",url:"https://maticrobots.com/company"}]
  },
  "Innate":{
    monthsSinceLaunch:[{label:"Deployment start — shipping from Oct 2025",url:"https://store.innate.bot/products/innate-mars-founders-edition"}],
    price:[{label:"Price source",url:"https://store.innate.bot/products/innate-mars-founders-edition"}],
    funding:[{label:"Funding source",url:"https://www.innate.bot/"}]
  },
  "Feather":{
    price:[{label:"Price source",url:"https://feather.dev/technology"}],
    funding:[{label:"Funding source",url:"https://www.investegate.co.uk/announcement/rns/seed-innovations-limited--seed/investee-company-update-feather-robotics-inc-/9792430"}]
  },
  "Syncere":{
    robotsBuilt:[{label:"Syncere — working Lume product / preorder page",url:"https://syncere.com/product"}],
    robotsDeployed:[
      {label:"Syncere — Batch 2 now shipping Spring 2027",url:"https://syncere.com/product"},
      {label:"Washington Post — 1,000+ orders are orders, not deployments",url:"https://www.washingtonpost.com/opinions/interactive/2026/06/08/this-ai-robot-promises-fold-your-laundry-would-you-buy-it/"}
    ],
    monthsSinceLaunch:[{label:"Syncere — current shipping schedule",url:"https://syncere.com/product"}],
    price:[{label:"Price source",url:"https://syncere.com/product"}],
    funding:[{label:"Funding source",url:"https://speedrun.a16z.com/companies/syncere"}]
  },
  "Dyna":{
    monthsSinceLaunch:[{label:"Taku launch / deployment status",url:"https://www.dyna.co/dyna-2.1"}],
    funding:[{label:"Funding source",url:"https://www.caplight.com/company/dyna-robotics"}]
  },
  "Flourish":{
    robotsBuilt:[{label:"Flourish 1 launch / working product",url:"https://www.prnewswire.com/news-releases/flourish-robots-launches-flourish-1--a-3-555-home-robot-built-to-give-people-their-potential-back-302891638.html"}],
    robotsDeployed:[{label:"Flourish — deliveries begin December 2026",url:"https://www.prnewswire.com/news-releases/flourish-robots-launches-flourish-1--a-3-555-home-robot-built-to-give-people-their-potential-back-302891638.html"}],
    monthsSinceLaunch:[{label:"Flourish — deliveries begin December 2026",url:"https://www.prnewswire.com/news-releases/flourish-robots-launches-flourish-1--a-3-555-home-robot-built-to-give-people-their-potential-back-302891638.html"}],
    price:[{label:"Price source",url:"https://www.prnewswire.com/news-releases/flourish-robots-launches-flourish-1--a-3-555-home-robot-built-to-give-people-their-potential-back-302891638.html"}]
  },
  "Figure":{
    robotsBuilt:[
      {label:"Figure — 350+ Figure 03 units by Apr. 29",url:"https://www.figure.ai/news/ramping-figure-03-production"},
      {label:"1,000th Figure 03 production milestone",url:"https://korthosrobotics.com/ecosystem/product/figure-03/operations"}
    ],
    robotsDeployed:[
      {label:"Figure 03 at BMW — confirmed external site",url:"https://www.figure.ai/news/f-03-at-bmw"},
      {label:"Figure / Catalyst commercial deployment agreement",url:"https://www.figure.ai/news/figure-signs-agreement-with-catalyst-brands"}
    ],
    funding:[{label:"Funding source",url:"https://forgeglobal.com/figure-ai_stock/"}]
  },
  "1X":{
    robotsDeployed:[
      {label:"1X — NEO Beta home R&D deployment",url:"https://www.1x.tech/discover/announcement-1x-unveils-neo-beta-a-humanoid-robot-for-the-home"},
      {label:"1X — NEO factory / planned customer deliveries",url:"https://www.1x.tech/discover/neo-factory"}
    ],
    robotsBuilt:[{label:"1X NEO factory / production status",url:"https://www.1x.tech/discover/neo-factory"}],
    monthsSinceLaunch:[{label:"1X NEO rollout timeline",url:"https://www.1x.tech/about"}],
    price:[{label:"Price source",url:"https://www.1x.tech/order"}],
    funding:[{label:"Funding source",url:"https://www.altis.vc/research/company/1x"}]
  }
};


const companies=[
  {
    name:"Weave",image:"https://www.weaverobotics.com/_next/image?q=75&url=%2Fimages%2Fproducts%2Fspecs.webp&w=3840",imageFit:"contain",productUrl:"https://www.weaverobotics.com/isaac-0",group:"SEMI-HUMANOID",product:"Isaac 0",
    robotsBuilt:30,robotsDeployed:25,monthsSinceLaunch:8,price:3999,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true},
    metricNotes:{price:"Purchase price; other subscription/financing options are offered."},
    sources:[
      {label:"Isaac 0",url:"https://www.weaverobotics.com/isaac-0"},
      {label:"Weave Robotics",url:"https://www.weaverobotics.com/about"}
    ]
  },
  {
    name:"Sunday",image:"https://bclj1gvgmsjtdkc5.public.blob.vercel-storage.com/robots/sunday-robotics-memo-1768475636236.png",imageFit:"contain",productUrl:"https://www.sunday.ai/",group:"SEMI-HUMANOID",product:"Memo",
    robotsBuilt:24,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:200000000,valuation:1150000000,
    estimate:{},
    lowerBound:{robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"Sunday’s November 2025 launch said it had built “dozens of prototypes.” 24+ is the literal minimum implied by dozens; no newer exact build count is public.",
      robotsDeployed:"Sunday says public deployment begins with its Founding Family beta in late 2026. No confirmed customer-home Memo deployment is counted yet.",
      monthsSinceLaunch:"0 until a public customer-home beta deployment is confirmed."
    },
    sources:[{label:"Sunday — Series B / beta rollout",url:"https://www.sunday.ai/blog/series-b"},{label:"Sunday — current Memo status",url:"https://www.sunday.ai/"}]
  },
  {
    name:"Almond",image:"https://www.almond.bot/render/axol_mount_mobile_kit.png",imageFit:"contain",productUrl:"https://www.almond.bot/axol",group:"SEMI-HUMANOID",product:"Axol",
    robotsBuilt:15,robotsDeployed:10,monthsSinceLaunch:1,price:8999,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{funding:true},
    metricNotes:{price:"PRICE DROP: Axol’s base price fell from $9,499 to $8,999 — a $500 reduction."},
    sources:[
      {label:"Almond",url:"https://www.almond.bot/"},
      {label:"Almond — YC",url:"https://www.ycombinator.com/companies/almond-2"}
    ]
  },
  {
    name:"Nori",image:"assets/nori.webp",imageFit:"contain",productUrl:"https://www.ycombinator.com/companies/noril1",group:"SEMI-HUMANOID",product:"Nori",
    robotsBuilt:1,robotsDeployed:1,monthsSinceLaunch:1,price:1688,funding:500000,valuation:null,
    estimate:{},
    lowerBound:{robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"Nori confirms its first robot has been deployed but does not disclose total units built. $440K+ in sales is not treated as shipped units, so 1+ is the defensible build lower bound.",
      robotsDeployed:"YC says Nori has deployed its first robot. Nori’s own site says broader shipments are Fall 2026.",
      monthsSinceLaunch:"Approximately one month since the first publicly disclosed customer deployment."
    },
    sources:[{label:"Nori — YC",url:"https://www.ycombinator.com/companies/noril1"},{label:"Nori A3 — shipping status",url:"https://www.norirobotics.com/"}]
  },
  {
    name:"OS3",image:"https://os3robotics.com/assets/hardware/robot-front-cutout.webp?dpl=dpl_CeMN68mmfoJPYVpSAKxx4GgsCijN",imageFit:"contain",productUrl:"https://os3robotics.com/",group:"SEMI-HUMANOID",product:"HALE 1.0",
    robotsBuilt:1,robotsDeployed:1,monthsSinceLaunch:3,price:14995,funding:500000,valuation:null,
    estimate:{monthsSinceLaunch:true},
    lowerBound:{robotsBuilt:true,robotsDeployed:true,funding:true},
    metricNotes:{
      robotsBuilt:"OS3 publicly shows working HALE 1.0 hardware but does not disclose a total built count; 1+ is the minimum.",
      robotsDeployed:"OS3 says HALE 1.0 is deployed in hospitality today but does not disclose the fleet count; 1+ is the minimum.",
      price:"Developer purchase price. OS3 also lists $1,800/month developer leasing and hospitality deployments from $2.50/hour.",
      funding:"YC S26 investment is the disclosed minimum; additional funding has not been publicly sized."
    },
    sources:[
      {label:"OS3 — HALE 1.0",url:"https://os3robotics.com/"},
      {label:"OS3 — technical platform",url:"https://os3robotics.com/tech/"},
      {label:"OS3 — Y Combinator",url:"https://www.ycombinator.com/companies/os3"}
    ]
  },
  {
    name:"Maven",image:"https://ml.globenewswire.com/Resource/Download/5276f26c-4a60-4049-8a6d-486a55ec0e9c",imageFit:"cover",productUrl:"https://www.mavenrobotics.ai/",group:"SEMI-HUMANOID",product:"Gen 3",
    robotsBuilt:8,robotsDeployed:8,monthsSinceLaunch:null,price:null,funding:118200000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    metricNotes:{
      monthsSinceLaunch:"Maven began working with its first major customer in 2024, but public reporting does not establish when robots first went live, so deployment age is left blank.",
      price:"No public robot purchase price found."
    },
    sources:[
      {label:"TechCrunch — Maven deployments",url:"https://techcrunch.com/2026/09/10/maven-robotics-wants-to-steal-your-robot-deployment-deal/"},
      {label:"Maven — $100M Series A announcement",url:"https://www.globenewswire.com/news-release/2026/09/10/3359782/0/en/maven-robotics-raises-100m-series-a-for-the-world-s-first-general-purpose-robotics-system-for-industrial-work.html"},
      {label:"Forge — funding history",url:"https://forgeglobal.com/maven-robotics_stock/"}
    ]
  },
  {
    name:"Eden",image:"https://edenrobotics.ai/assets/images/eden-1-1.png",imageFit:"contain",productUrl:"https://edenrobotics.ai/eden-1",group:"SEMI-HUMANOID",product:"Eden I",
    robotsBuilt:1,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:500000,valuation:null,
    estimate:{robotsDeployed:true,monthsSinceLaunch:true},
    lowerBound:{robotsBuilt:true,funding:true},
    metricNotes:{
      robotsBuilt:"Eden says the first Eden I was fully designed, manufactured and operational on May 23, 2026; no total built count is disclosed.",
      price:"Eden I is offered as robotics-as-a-service at $10/hour rather than a listed purchase price.",
      funding:"YC-backed; $0.5M is the tracked disclosed minimum."
    },
    sources:[
      {label:"Eden I product / delivery window",url:"https://edenrobotics.ai/eden-1"},
      {label:"Eden — development timeline",url:"https://edenrobotics.ai/about/our-story"},
      {label:"Eden — Y Combinator",url:"https://www.ycombinator.com/companies/eden-robotics"}
    ]
  },
  {
    name:"Genesis AI",image:"https://www.datocms-assets.com/199265/1781540929-genesis_fullbody_b_fhd_16x9.jpg?auto=format&h=1080&q=75&w=1920",imageFit:"contain",productUrl:"https://www.genesis.ai/",group:"SEMI-HUMANOID",product:"Eno",
    robotsBuilt:1,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:105000000,valuation:null,
    estimate:{},
    lowerBound:{robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"Genesis unveiled a working Eno in June 2026 but has not disclosed a production count; 1+ is the defensible lower bound.",
      robotsDeployed:"0 confirmed customer deployments counted yet. Genesis says targeted Eno customer deployments are planned by the end of 2026.",
      monthsSinceLaunch:"0 until a customer deployment is publicly confirmed.",
      price:"No public Eno purchase price has been announced."
    },
    sources:[
      {label:"Genesis AI — Eno",url:"https://www.genesis.ai/"},
      {label:"Genesis AI — Eno launch / deployment plan",url:"https://www.prnewswire.com/news-releases/introducing-eno-genesis-ais-first-general-purpose-robot-is-challenging-traditional-humanoid-design-302801103.html"},
      {label:"Genesis AI — LG CNS deployment partnership",url:"https://www.prnewswire.com/news-releases/genesis-ai-and-lg-cns-enter-industry-first-strategic-partnership-to-scale-general-purpose-robotics-across-enterprise-operations-302801102.html"}
    ]
  },
  {
    name:"Hello Robot",shortName:"Hello",image:"https://images.squarespace-cdn.com/content/v1/65789f5bc31b3c64091939a3/31563aa0-c09d-46a1-a2d1-b0193528775e/STRETCH%2B3%2BKEYSHOT%2B2024%2BFULL%2B02%2B%281%29.png?format=2500w",imageFit:"contain",productUrl:"https://hello-robot.com/",group:"SEMI-HUMANOID",product:"Stretch 4",
    robotsBuilt:1,robotsDeployed:null,monthsSinceLaunch:null,price:29950,funding:7700000,valuation:null,
    estimate:{funding:true},
    lowerBound:{robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"Stretch 4 is available and ready to ship, but Hello Robot has not disclosed a Stretch 4 production total; 1+ is the minimum.",
      robotsDeployed:"Hello Robot documents real-world Stretch deployments, but current public material does not isolate how many are the new Stretch 4 generation, so this product-specific count is left blank.",
      monthsSinceLaunch:"Stretch 4 was introduced in 2026, but without a confirmed first external Stretch 4 delivery date we leave product-specific deployment age blank.",
      price:"Current Stretch 4 list price; optional accessories are extra."
    },
    sources:[
      {label:"Hello Robot — Stretch 4",url:"https://hello-robot.com/"},
      {label:"Hello Robot — purchase / availability",url:"https://hello-robot.com/purchase/"},
      {label:"TechCrunch — real-world Stretch deployments",url:"https://techcrunch.com/2026/06/04/is-silicon-valley-ready-to-put-robots-in-peoples-homes-hello-robot-is/"},
      {label:"A3 / Automate — funding profile",url:"https://www.automate.org/robotics/industry-insights/hello-robot-is-banking-on-building-trust-with-its-home-robot/boa"}
    ]
  },
  {
    name:"Kovari",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHihnptKTG0XmuMcLcgsoRLhFT0DsWQTj2q5I0FTuqX8rlmMPIE-YdCCE&s=10",imageFit:"cover",productUrl:"https://www.instagram.com/p/Dcgf3gZmwvc/",group:"SEMI-HUMANOID",product:"Kovari Robot",
    robotsBuilt:1,robotsDeployed:1,monthsSinceLaunch:1,price:null,funding:6000000,valuation:null,
    lowerBound:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true,funding:true},
    metricNotes:{
      robotsBuilt:"Kovari describes a robot fleet and field-ready units but does not disclose how many robots it has built; 1+ is the minimum.",
      robotsDeployed:"Kovari’s current hiring materials explicitly refer to deployed units in customer environments and live deployments; exact fleet size is not public.",
      monthsSinceLaunch:"Public evidence shows live customer deployments by September 2026. The actual deployment start may be earlier, so 1+ month is a conservative lower bound.",
      funding:"Kovari says it has raised over $6M since inception."
    },
    sources:[
      {label:"Kovari",url:"https://kovari.com/"},
      {label:"Kovari — robot post",url:"https://www.instagram.com/p/Dcgf3gZmwvc/"},
      {label:"Kovari — deployed-unit / field-readiness role",url:"https://www.linkedin.com/jobs/view/fabrication-technician-at-kovari-4459725868"},
      {label:"Kovari — $6M+ funding disclosure",url:"https://www.linkedin.com/jobs/view/robot-operator-at-kovari-4402180653"}
    ]
  },
  {
    name:"Matic",image:"https://maticrobots.com/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2Fhero-view-quarter.84f6f448.webp&w=3840",imageFit:"contain",productUrl:"https://maticrobots.com/product",group:"COMPACT ROBOTS",product:"Matic",
    robotsBuilt:13000,robotsDeployed:13000,monthsSinceLaunch:24,price:1495,funding:115000000,valuation:645000000,
    estimate:{monthsSinceLaunch:true},
    lowerBound:{robotsBuilt:true,robotsDeployed:true},
    sources:[
      {label:"Matic — 13,000+ robots in homes",url:"https://maticrobots.com/blog/twice-the-intelligence-still-nothing-leaves-your-home"},
      {label:"Matic — $115M total funding",url:"https://maticrobots.com/company"},
      {label:"Matic — $1,495 price",url:"https://maticrobots.com/product"}
    ]
  },
  {
    name:"Innate",image:"https://store.innate.bot/cdn/shop/files/isometric.png?v=1756916647",imageFit:"contain",productUrl:"https://www.innate.bot/",group:"COMPACT ROBOTS",product:"MARS",
    robotsBuilt:50,robotsDeployed:40,monthsSinceLaunch:12,price:995,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{funding:true},
    metricNotes:{monthsSinceLaunch:"Innate says MARS Batch 1 began shipping in October 2025. That is about 12 months of customer deployment as of October 12, 2026."},
    sources:[
      {label:"Innate",url:"https://www.innate.bot/"},
      {label:"MARS store",url:"https://store.innate.bot/products/innate-mars-founders-edition"}
    ]
  },
  {
    name:"Feather",image:"https://framerusercontent.com/images/Qp7z38dGNF6GAP9w3hvEDaEc98.png",imageFit:"contain",productUrl:"https://feather.dev/technology",group:"SEMI-HUMANOID",product:"Feather",
    robotsBuilt:35,robotsDeployed:30,monthsSinceLaunch:12,price:29990,funding:7600000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true},
    metricNotes:{price:"Promotional listed price; regular price has been listed higher."},
    sources:[
      {label:"Feather",url:"https://feather.dev/"},
      {label:"Feather technology",url:"https://feather.dev/technology"}
    ]
  },
  {
    name:"Syncere",image:"https://framerusercontent.com/images/Z9Ez2R9njNEhAxXYLoBUCQQbns.jpeg?height=4128&width=6192",imageFit:"cover",productUrl:"https://syncere.com/product",group:"SEMI-HUMANOID",product:"Lume",
    robotsBuilt:1,robotsDeployed:0,monthsSinceLaunch:0,price:1999,funding:500000,valuation:null,
    estimate:{},
    lowerBound:{robotsBuilt:true,funding:true},
    metricNotes:{
      robotsBuilt:"Syncere has demonstrated working Lume hardware, but does not disclose a production count. 1+ is the minimum rather than guessing from preorder volume.",
      robotsDeployed:"0 confirmed customer deployments. Syncere has reported 1,000+ orders, but orders are not counted as deployments and its current product page lists Batch 2 shipping in Spring 2027.",
      monthsSinceLaunch:"0 because no customer shipment has been publicly confirmed."
    },
    sources:[
      {label:"Lume",url:"https://syncere.com/product"},
      {label:"Syncere — a16z Speedrun",url:"https://speedrun.a16z.com/companies/syncere"}
    ]
  },
  {
    name:"Dyna",image:"https://www.dyna.co/assets/we/workflow-video-poster.jpg",imageFit:"cover",productUrl:"https://www.dyna.co/dyna-2.1",group:"SEMI-HUMANOID",product:"Taku",
    robotsBuilt:null,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:143500000,valuation:600000000,
    estimate:{},
    greaterThan:{valuation:true},
    metricNotes:{
      robotsBuilt:"Dyna has not disclosed how many Taku units have been built. Earlier Dyna robots are excluded so this row stays product-specific to Taku.",
      robotsDeployed:"Taku itself is not yet counted as deployed with customers. Dyna’s earlier robot generations have customer deployments, but those are excluded here so this row stays product-specific to Taku.",
      monthsSinceLaunch:"Taku was introduced Sep. 29, 2026, 13 days before this tracker date. Dyna shows the new platform completing full workflows, but has not disclosed a confirmed external Taku customer deployment, so we still count Taku itself as 0 months deployed."
    },
    sources:[
      {label:"Dyna — Series A",url:"https://www.dyna.co/news/series-a"},
      {label:"Dyna deployments",url:"https://www.dyna.co/research/scaling-customer-deployments"}
    ]
  },
  {
    name:"Flourish",image:"https://framerusercontent.com/images/Nvi7PcAMMXmYlGZT5t4q5O0jvY.jpg?height=6464&width=4320",imageFit:"cover",productUrl:"https://flourish-robots.com/",group:"SEMI-HUMANOID",product:"Flourish 1",
    robotsBuilt:1,robotsDeployed:0,monthsSinceLaunch:0,price:3555,funding:null,valuation:null,
    estimate:{},
    lowerBound:{robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"Flourish has demonstrated a working Flourish 1 but has not disclosed how many units are built; 1+ is the minimum.",
      robotsDeployed:"0 customer deployments: the first 50-unit preorder batch was announced September 29 with deliveries beginning in December 2026.",
      monthsSinceLaunch:"0 until customer deliveries begin."
    },
    sources:[{label:"Flourish 1 launch / December delivery schedule",url:"https://www.prnewswire.com/news-releases/flourish-robots-launches-flourish-1--a-3-555-home-robot-built-to-give-people-their-potential-back-302891638.html"}]
  },
  {
    name:"Apptronik",productUrl:"https://apptronik.com/apollo/apollo-2",group:"HUMANOID",product:"Apollo 2",
    robotsBuilt:10,robotsDeployed:1,monthsSinceLaunch:3,price:null,funding:935000000,valuation:null,
    estimate:{},
    lowerBound:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true,funding:true},
    metricNotes:{
      robotsBuilt:"Apptronik says operational fleets of Apollo 2 are active across Robot Park and customer/partner sites, but gives no unit total; 1+ is the conservative lower bound.",
      robotsDeployed:"Apollo 2 is confirmed active at customer and partner sites including Mercedes-Benz and GXO, but Apptronik does not publish an external unit count; 1+ is shown.",
      monthsSinceLaunch:"Customer-site Apollo 2 fleets were publicly confirmed by June 30, 2026. 3+ months is a conservative public lower bound as of Oct. 12.",
      price:"No public Apollo 2 list price.",
      funding:"Apptronik says its Series A exceeds $935M and total capital raised is nearly $1B; the tracker uses $935M+ as the disclosed lower bound."
    },
    sources:[
      {label:"Apptronik — Apollo 2 / Robot Park deployments",url:"https://apptronik.com/news-collection/welcome-to-robot-park-where-apptroniks-apollo-goes-to-work"},
      {label:"Apptronik — Apollo 2",url:"https://apptronik.com/apollo/apollo-2"},
      {label:"Apptronik — $935M+ Series A",url:"https://apptronik.com/news-collection/apptronik-closes-over-935-million-series-a"}
    ]
  },
  {
    name:"Tesla",image:"https://upload.wikimedia.org/wikipedia/commons/2/23/Tesla_Bot_2023.jpg",imageFit:"contain",productUrl:"https://www.tesla.com/AI",group:"HUMANOID",product:"Optimus",
    robotsBuilt:3000,robotsDeployed:1,monthsSinceLaunch:0,price:null,funding:null,valuation:null,
    estimate:{robotsBuilt:true},
    lowerBound:{robotsDeployed:true},
    status:{price:"na",funding:"na",valuation:"na"},
    sources:[{label:"Tesla AI / Optimus",url:"https://www.tesla.com/AI"}]
  },
  {
    name:"Figure",image:"https://images.ctfassets.net/qx5k8y1u9drj/6rREWE2DjWe7W3AFbZYSyH/21889f6a8f17464410b45c9ae12b718a/human-form-module-figure-3-image-v3.png?fm=webp&q=70&w=3840",imageFit:"contain",productUrl:"https://www.figure.ai/figure",group:"HUMANOID",product:"Figure 03",
    robotsBuilt:1000,robotsDeployed:1,monthsSinceLaunch:3,price:null,funding:5250000000,valuation:42500000000,
    estimate:{monthsSinceLaunch:true},
    lowerBound:{robotsBuilt:true,robotsDeployed:true},
    metricNotes:{
      robotsDeployed:"Figure confirms Figure 03 at BMW and a commercial deployment agreement with Catalyst Brands, but does not disclose a current external unit count. 1+ is therefore the defensible lower bound instead of estimating a fleet size.",
      robotsBuilt:"Figure officially reported 350+ Figure 03 units by April; CEO Brett Adcock later announced the 1,000th Figure 03 manufactured in July.",
      monthsSinceLaunch:"Figure 03 arrived at BMW on June 30, 2026; this rounded month count excludes earlier Figure 02 deployments."
    },
    status:{price:"na"},
    sources:[
      {label:"Figure 03 — 1,000-unit production milestone",url:"https://korthosrobotics.com/ecosystem/product/figure-03/operations"},
      {label:"Figure 03 production ramp",url:"https://www.figure.ai/news/ramping-figure-03-production"},
      {label:"Figure",url:"https://www.figure.ai/"}
    ]
  },
  {
    name:"1X",image:"https://cdn.sanity.io/images/qka6yvsc/production/1054db069547b8a970273c62fa96fb6ae1818e8a-3665x2062.webp",imageFit:"contain",productUrl:"https://www.1x.tech/discover/neo-home-robot",group:"HUMANOID",product:"NEO",
    robotsBuilt:10,robotsDeployed:1,monthsSinceLaunch:0,price:20000,funding:136500000,valuation:820000000,
    estimate:{},
    lowerBound:{robotsDeployed:true,robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"1X has announced NEO production capacity and internal production activity but has not disclosed a cumulative NEO unit count, so no built total is shown.",
      robotsDeployed:"1+ deployed is shown as a lower bound.",
      monthsSinceLaunch:"0 months is used because there is still no verified public date for an external NEO customer-home delivery. Earlier EVE and NEO Beta/Gamma deployments are excluded.",
      price:"Also offered at $499/mo."
    },
    sources:[
      {label:"1X — NEO product / customer deliveries",url:"https://www.1x.tech/discover/neo-home-robot"},
      {label:"1X — NEO Beta home R&D deployment",url:"https://www.1x.tech/discover/announcement-1x-unveils-neo-beta-a-humanoid-robot-for-the-home"},
      {label:"1X — NEO factory / planned customer deliveries",url:"https://www.1x.tech/discover/neo-factory"}
    ]
  }
];

const today=new Date("2026-10-12T00:00:00");

let active="robotsDeployed";
let selected=null;
const groupsEl=document.querySelector("#groups");
const drawerRoot=document.querySelector("#drawerRoot");

function money(v){
  if(v==null)return"";
  if(v>=1e9)return"$"+(v/1e9).toFixed(v%1e9===0?0:2).replace(/\.00$/,"")+"B";
  if(v>=1e6)return"$"+(v/1e6).toFixed(v%1e6===0?0:1).replace(/\.0$/,"")+"M";
  if(v>=1e3)return"$"+Math.round(v/1e3)+"K";
  return"$"+v.toLocaleString();
}
function metric(){return metrics.find(m=>m.key===active)}
function statusFor(c,key=active){
  if(c.status?.[key])return c.status[key];
  if(c.estimate?.[key])return"estimated";
  return c[key]==null?"unknown":"confirmed";
}
function labelFor(c,key=active){
  const st=statusFor(c,key),m=metrics.find(x=>x.key===key),v=c[key];
  if(st==="na")return"N/A";
  if(v==null)return"";
  let out;
  if(key==="funding") out="$"+(v/1e6).toLocaleString(undefined,{maximumFractionDigits:1})+"M";
  else if(key==="price"){
    const k=v/1000;
    out="$"+k.toLocaleString(undefined,{maximumFractionDigits:k<1?3:2})+"K";
  } else out=m.type==="money"?money(v):v.toLocaleString();
  if(c.greaterThan?.[key])out=">"+out;
  if(c.lowerBound?.[key])out+="+";
  if(c.estimate?.[key])out+="*";
  return out;
}
function changeBadgeFor(c,key){
  return c.name==="Almond"&&key==="price"
    ? '<span class="change-badge">PRICE DROP</span>'
    : "";
}
function detailNoteFor(c,key){
  const notes=[];
  if(c.estimate?.[key])notes.push("Estimated from public disclosures");
  else if(c.lowerBound?.[key])notes.push("Publicly disclosed lower bound");
  else if(c.greaterThan?.[key])notes.push("Reported as greater than this value");
  else if(statusFor(c,key)==="na")notes.push("Not applicable / not publicly for sale");
  else if(c[key]==null)notes.push("Not publicly disclosed");
  else notes.push("Publicly disclosed / reported");
  if(c.metricNotes?.[key])notes.push(c.metricNotes[key]);
  return notes.join(" · ");
}
function evidenceFor(c,key){
  const reason=c.estimate?.[key]?(estimateReasons[c.name]?.[key]||""):"";
  const links=[
    ...(c.estimate?.[key]?(estimateSources[c.name]?.[key]||[]):[]),
    ...(metricSources[c.name]?.[key]||[])
  ].filter((link,i,arr)=>arr.findIndex(x=>x.url===link.url)===i);
  if(!links.length&&!reason)return"";
  return '<div class="estimate-basis">'+
    (reason?'<div class="estimate-reason">'+reason+'</div>':"")+
    (links.length?'<div class="estimate-links">'+links.map(link=>'<a href="'+link.url+'" target="_blank" rel="noreferrer">'+link.label+' ↗</a>').join("")+'</div>':"")+
    '</div>';
}

function snapshotBarHeights(){
  const snap={};
  document.querySelectorAll(".company[data-company] .bar").forEach(bar=>{
    const company=bar.closest(".company")?.dataset.company;
    if(company)snap[company]=bar.getBoundingClientRect().height;
  });
  return snap;
}

function sortedRows(group,visibleCompanies){
  return visibleCompanies
    .filter(c=>c.group===group)
    .sort((a,b)=>{
      const av=typeof a[active]==="number"?a[active]:-Infinity;
      const bv=typeof b[active]==="number"?b[active]:-Infinity;
      if(group==="HUMANOID"&&active==="robotsDeployed"&&av===bv){
        const order={"Tesla":0,"Figure":1,"1X":2};
        const ao=order[a.name]??99,bo=order[b.name]??99;
        if(ao!==bo)return ao-bo;
      }
      return (bv-av)||a.name.localeCompare(b.name);
    });
}

function render(animateFrom=null){
  const note=document.querySelector(".metric-note");
  if(note){
    note.textContent=metricDescriptions[active]||"";
  }
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.metric===active));

  const visibleCompanies=companies;
  const scaledHeight=(v,groupRows)=>{
    if(typeof v!=="number"||v<=0)return 0;
    const groupVals=groupRows.map(c=>c[active]).filter(x=>typeof x==="number"&&x>0);
    const groupMax=Math.max(...groupVals,1);
    return Math.max(8,v/groupMax*100);
  };

  groupsEl.innerHTML=["SEMI-HUMANOID","HUMANOID","COMPACT ROBOTS"].map(group=>{
    const rows=sortedRows(group,visibleCompanies);
    const count=rows.length;
    const header='<div class="group-label">'+group+'</div>';
    const cards=rows.map(c=>{
      const v=c[active],st=statusFor(c),height=scaledHeight(v,rows);
      const color=companyColors[c.name]||"#d9dee3";
      const initial=animateFrom&&animateFrom[c.name]!=null?animateFrom[c.name]+"px":height+"%";
      const chartImage=c.image?'<div class="product-strip"><img class="chart-product-image" src="'+c.image+'" alt="" loading="lazy" onerror="this.closest(\'.product-strip\').remove()"></div>':"";
      const card='<button class="company" data-company="'+c.name+'" style="--company-color:'+color+'"><div class="value">'+labelFor(c)+changeBadgeFor(c,active)+'</div><div class="bar-stage"><div class="bar '+st+'" data-target-height="'+height+'" style="height:'+initial+'"></div></div><div class="company-brand"><div class="company-name">'+(c.shortName||c.name)+'</div><div class="product-name">'+(c.product||"&nbsp;")+'</div></div>'+chartImage+'</button>';
      return card;
    }).join("");
    const estimateNote=rows.some(c=>c.estimate?.[active])?'<div class="group-estimate-note">* estimated</div>':"";
    return '<section class="group">'+header+'<div class="bars" style="--count:'+count+'">'+cards+'</div>'+estimateNote+'</section>';
  }).join("");

  document.querySelectorAll(".company").forEach(b=>b.onclick=()=>{
    selected=companies.find(c=>c.name===b.dataset.company);
    renderDrawer();
  });
  if(animateFrom){
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      document.querySelectorAll(".bar[data-target-height]").forEach(bar=>{
        bar.style.height=bar.dataset.targetHeight+"%";
      });
    }));
  }
}
function renderDrawer(){
  if(!selected){drawerRoot.innerHTML="";return}
  const color=companyColors[selected.name]||"#d9dee3";
  drawerRoot.innerHTML=`<div class="backdrop"></div><aside class="drawer" style="--company-color:${color}"><button class="drawer-close">×</button><div class="drawer-kicker">${selected.group}</div><h2>${selected.name}</h2><p class="drawer-product">${selected.product||"Product not yet recorded"}</p>${selected.image?`<div class="drawer-product-image" style="--image-fit:${selected.imageFit||"cover"}"><img src="${selected.image}" alt="${selected.name} ${selected.product||"robot"}" loading="lazy" onerror="this.closest('.drawer-product-image').remove()"></div>`:""}${selected.productUrl?`<a class="product-link" href="${selected.productUrl}" target="_blank" rel="noreferrer">View product page <span>↗</span></a>`:""}<div class="detail-grid">${metrics.map(m=>`<div class="detail-row"><span>${m.label}</span><strong>${labelFor(selected,m.key)}${changeBadgeFor(selected,m.key)}</strong><small>${detailNoteFor(selected,m.key)}${evidenceFor(selected,m.key)}</small></div>`).join("")}</div><div class="source-block"><div class="source-title">SOURCES</div>${selected.sources?.length?selected.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noreferrer">${s.label}<span>↗</span></a>`).join(""):'<div class="no-source">No verified public source added yet.</div>'}</div></aside>`;
  document.querySelector(".drawer-close").onclick=closeDrawer;
  document.querySelector(".backdrop").onclick=closeDrawer;
}
function closeDrawer(){selected=null;renderDrawer()}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{
  const snap=snapshotBarHeights();
  active=b.dataset.metric;
  render(snap);
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&selected) closeDrawer();
});
render();