const metrics=[
  {key:"robotsBuilt",label:"ROBOTS BUILT",type:"count"},
  {key:"robotsDeployed",label:"ROBOTS DEPLOYED",type:"count"},
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
  "Matic":"M",
  "Innate":"I",
  "Feather":"F",
  "Syncere":"S",
  "Dyna":"D",
  "Flourish":"F",
  "Tesla":"T",
  "Figure":"F",
  "1X":"1X"
};

const companyColors={
  "Weave":"#737b66",
  "Sunday":"#d04a3a",
  "Almond":"#d7df72",
  "Nori":"#95bf4a",
  "Matic":"#006859",
  "Innate":"#4700f5",
  "Feather":"#5f6368",
  "Syncere":"#323f35",
  "Dyna":"#45484d",
  "Flourish":"#9faa62",
  "Tesla":"#e82127",
  "Figure":"#4b5563",
  "1X":"#5b8cff"
};

const estimateReasons={
  "Weave":{
    robotsBuilt:"Weave says it has deployed robots nearly every week since launch and reports 2,000+ field hours. ~25 assumes roughly weekly deployments plus engineering / spare units.",
    robotsDeployed:"Weave says it has deployed robots to homes and businesses nearly every week since launch. ~20 is a conservative estimate from that cadence.",
    monthsSinceLaunch:"Weave says Isaac 0 began shipping to San Francisco Bay Area residents in February 2026. About eight months have elapsed from that launch to the tracker date of October 2, 2026."
  },
  "Sunday":{
    robotsBuilt:"Sunday describes having built dozens of prototypes. 30 is a conservative numeric interpretation of “dozens,” not a company-disclosed count."
  },
  "Almond":{
    robotsBuilt:"Almond says its first production batch sold out and shipped, with a second batch following. ~15 assumes a small first batch plus early second-batch production.",
    robotsDeployed:"Almond says the first production batch shipped to customers. ~10 assumes a first batch of roughly ten units."
  },
  "Nori":{
    robotsBuilt:"Nori confirms its first customer robot is deployed and reports substantial early sales, but not units built. ~10 reflects an early production run rather than converting sales directly into shipped robots."
  },
  "Matic":{
    monthsSinceLaunch:"Matic shipped its first customer units in 2024. ~24 months is an approximate elapsed deployment period because the exact start month is not consistently disclosed."
  },
  "Innate":{
    robotsBuilt:"Innate says its first MARS batch sold out and began shipping. ~50 assumes a small early production batch consistent with a founder-edition launch.",
    robotsDeployed:"Innate says MARS units began shipping to customers. ~40 allows for some built units remaining as demos, spares, or internal systems."
  },
  "Feather":{
    robotsBuilt:"Feather reports more than $1M in revenue and lists the robot at about $30K. That is roughly 33 robot-equivalents of revenue, so we round to ~35 built.",
    robotsDeployed:"Using the same revenue signal, ~30 deployed allows for a handful of demo, internal, or unsold units among ~35 built.",
    monthsSinceLaunch:"Feather says its robots have been working in the field across manufacturing, food service and other applications for the last year; its September 2026 funding announcement also says it has been selling robots to customers for over a year. ~12 months is therefore a conservative rounded deployment age."
  },
  "Syncere":{
    robotsBuilt:"Syncere reports hundreds of preorders but has not disclosed customer shipment volume. ~10 represents likely prototype / pre-production hardware, not fulfilled preorders."
  },
  "Dyna":{},
  "Flourish":{
    robotsBuilt:"Flourish has demonstrated working hardware but customer deliveries begin later. ~5 represents likely prototype / pre-production units only."
  },
  "Tesla":{
    robotsBuilt:"Recent reporting says Tesla ramped Optimus from a few dozen units per week in Q2 to several hundred per week by August 2026. ~3,000 remains a rough cumulative estimate from that ramp; Tesla has not disclosed a cumulative built total."
  },
  "Figure":{
    robotsDeployed:"Figure confirms commercial deployments including BMW, but does not publish a current external fleet total. ~20 reflects public evidence of deployments being in the tens.",
    monthsSinceLaunch:"Figure 03 arrived at BMW Group Plant Spartanburg on June 30, 2026. About three months have elapsed to the tracker date of October 2, 2026; earlier Figure 02 deployments are excluded."
  },
  "1X":{}
};

const estimateSources={
  "Weave":{
    robotsBuilt:[{label:"Weave disclosure",url:"https://www.weaverobotics.com/isaac-0"}],
    robotsDeployed:[{label:"Weave disclosure",url:"https://www.weaverobotics.com/isaac-0"}],
    monthsSinceLaunch:[{label:"Weave launch / deployment disclosure",url:"https://www.weaverobotics.com/about"}]
  },
  "Sunday":{
    robotsBuilt:[{label:"Sunday disclosure",url:"https://www.sunday.ai/blog/series-b"}]
  },
  "Almond":{
    robotsBuilt:[{label:"Almond disclosure",url:"https://www.almond.bot/"}],
    robotsDeployed:[{label:"Almond disclosure",url:"https://www.almond.bot/"}]
  },
  "Nori":{
    robotsBuilt:[{label:"Nori / YC disclosure",url:"https://www.ycombinator.com/companies/noril1"}]
  },
  "Matic":{
    monthsSinceLaunch:[{label:"Matic disclosure",url:"https://maticrobots.com/blog/twice-the-intelligence-still-nothing-leaves-your-home"}]
  },
  "Innate":{
    robotsBuilt:[{label:"Innate shipping disclosure",url:"https://store.innate.bot/products/innate-mars-founders-edition"}],
    robotsDeployed:[{label:"Innate shipping disclosure",url:"https://store.innate.bot/products/innate-mars-founders-edition"}]
  },
  "Feather":{
    robotsBuilt:[{label:"Feather disclosure",url:"https://feather.dev/"}],
    robotsDeployed:[{label:"Feather disclosure",url:"https://feather.dev/"}],
    monthsSinceLaunch:[
      {label:"Feather — robots working in the field for the last year",url:"https://feather.dev/"},
      {label:"Feather — September 2026 company update",url:"https://www.investegate.co.uk/index.php/announcement/rns/seed-innovations-limited--seed/investee-company-update-feather-robotics-inc-/9792430"}
    ]
  },
  "Syncere":{
    robotsBuilt:[{label:"Syncere product disclosure",url:"https://syncere.com/product-legacy"}]
  },
  "Dyna":{
    robotsDeployed:[
      {label:"Dyna — scaling customer deployments / Din Tai Fung rollout",url:"https://www.dyna.co/research/scaling-customer-deployments"},
      {label:"PR Newswire — Dyna 2.1 launch and customer deployments",url:"https://www.prnewswire.com/news-releases/dyna-robotics-launches-dyna-2-1-physical-agent-a-semi-humanoid-robot-that-completes-full-workflows-such-as-a-commercial-laundry-shift-302892411.html"},
      {label:"Dyna — Monster Laundry customer deployment",url:"https://www.dyna.co/news/monster-laundry"}
    ],
    monthsSinceLaunch:[{label:"Taku launch / deployment status",url:"https://www.dyna.co/dyna-2.1"}]
  },
  "Flourish":{
    robotsBuilt:[{label:"Flourish disclosure",url:"https://flourish-robots.com/"}]
  },
  "Tesla":{
    robotsBuilt:[
      {label:"Tesla Q2 filing — Optimus line installation",url:"https://ir.tesla.com/_flysystem/s3/sec/000162828026049213/tsla-20260722-gen.pdf"},
      {label:"September production-rate reporting",url:"https://electrek.co/2026/09/25/tesla-optimus-production-ramp-hands-ai-generalization-problems/"}
    ]
  },
  "Figure":{
    robotsDeployed:[{label:"Figure BMW deployment disclosure",url:"https://www.figure.ai/news/f-03-at-bmw"}],
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
    funding:[{label:"Funding source",url:"https://www.sunday.ai/blog/series-b"}]
  },
  "Almond":{
    price:[{label:"Price source",url:"https://www.almond.bot/axol"}],
    funding:[{label:"Funding source",url:"https://www.ycombinator.com/companies/almond-2"}]
  },
  "Nori":{
    price:[{label:"Price source",url:"https://www.ycombinator.com/companies/noril1"}],
    funding:[{label:"Funding source",url:"https://www.ycombinator.com/companies/noril1"}]
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
    price:[{label:"Price source",url:"https://syncere.com/product"}],
    funding:[{label:"Funding source",url:"https://speedrun.a16z.com/companies/syncere"}]
  },
  "Dyna":{
    monthsSinceLaunch:[{label:"Taku launch / deployment status",url:"https://www.dyna.co/dyna-2.1"}],
    funding:[{label:"Funding source",url:"https://www.caplight.com/company/dyna-robotics"}]
  },
  "Flourish":{
    price:[{label:"Price source",url:"https://flourish-robots.com/"}]
  },
  "Figure":{
    robotsBuilt:[{label:"1,000th Figure 03 production milestone",url:"https://korthosrobotics.com/ecosystem/product/figure-03/operations"}],
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
    name:"Weave",productUrl:"https://www.weaverobotics.com/isaac-0",group:"SEMI-HUMANOID",product:"Isaac 0",
    robotsBuilt:25,robotsDeployed:20,monthsSinceLaunch:8,price:3999,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true},
    metricNotes:{price:"Purchase price; other subscription/financing options are offered."},
    sources:[
      {label:"Isaac 0",url:"https://www.weaverobotics.com/isaac-0"},
      {label:"Weave Robotics",url:"https://www.weaverobotics.com/about"}
    ]
  },
  {
    name:"Sunday",productUrl:"https://www.sunday.ai/",group:"SEMI-HUMANOID",product:"Memo",
    robotsBuilt:30,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:200000000,valuation:1150000000,
    estimate:{robotsBuilt:true},
    sources:[{label:"Sunday — Series B",url:"https://www.sunday.ai/blog/series-b"}]
  },
  {
    name:"Almond",productUrl:"https://www.almond.bot/axol",group:"SEMI-HUMANOID",product:"Axol",
    robotsBuilt:15,robotsDeployed:10,monthsSinceLaunch:1,price:8999,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{funding:true},
    metricNotes:{price:"Axol’s current product configurator lists the base robot from $8,999."},
    sources:[
      {label:"Almond",url:"https://www.almond.bot/"},
      {label:"Almond — YC",url:"https://www.ycombinator.com/companies/almond-2"}
    ]
  },
  {
    name:"Nori",productUrl:"https://www.ycombinator.com/companies/noril1",group:"SEMI-HUMANOID",product:"Nori",
    robotsBuilt:10,robotsDeployed:1,monthsSinceLaunch:1,price:1688,funding:500000,valuation:null,
    estimate:{robotsBuilt:true},
    sources:[{label:"Nori — YC",url:"https://www.ycombinator.com/companies/noril1"}]
  },
  {
    name:"Matic",productUrl:"https://maticrobots.com/product",group:"SEMI-HUMANOID",product:"Matic",
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
    name:"Innate",productUrl:"https://www.innate.bot/",group:"SEMI-HUMANOID",product:"MARS",
    robotsBuilt:50,robotsDeployed:40,monthsSinceLaunch:12,price:995,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{funding:true},
    metricNotes:{monthsSinceLaunch:"Innate says MARS Batch 1 began shipping in October 2025. That is about 12 months of customer deployment as of October 2, 2026."},
    sources:[
      {label:"Innate",url:"https://www.innate.bot/"},
      {label:"MARS store",url:"https://store.innate.bot/products/innate-mars-founders-edition"}
    ]
  },
  {
    name:"Feather",productUrl:"https://feather.dev/technology",group:"SEMI-HUMANOID",product:"Feather",
    robotsBuilt:35,robotsDeployed:30,monthsSinceLaunch:12,price:29990,funding:7600000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true},
    metricNotes:{price:"Promotional listed price; regular price has been listed higher."},
    sources:[
      {label:"Feather",url:"https://feather.dev/"},
      {label:"Feather technology",url:"https://feather.dev/technology"}
    ]
  },
  {
    name:"Syncere",productUrl:"https://syncere.com/product",group:"SEMI-HUMANOID",product:"Lume",
    robotsBuilt:10,robotsDeployed:0,monthsSinceLaunch:0,price:1999,funding:500000,valuation:null,
    estimate:{robotsBuilt:true},
    lowerBound:{funding:true},
    sources:[
      {label:"Lume",url:"https://syncere.com/product"},
      {label:"Syncere — a16z Speedrun",url:"https://speedrun.a16z.com/companies/syncere"}
    ]
  },
  {
    name:"Dyna",productUrl:"https://www.dyna.co/dyna-2.1",group:"SEMI-HUMANOID",product:"Taku",
    robotsBuilt:null,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:143500000,valuation:600000000,
    estimate:{},
    greaterThan:{valuation:true},
    metricNotes:{
      robotsBuilt:"Dyna has not disclosed how many Taku units have been built. Earlier Dyna robots are excluded so this row stays product-specific to Taku.",
      robotsDeployed:"Taku itself is not yet counted as deployed with customers. Dyna’s earlier robot generations have customer deployments, but those are excluded here so this row stays product-specific to Taku.",
      monthsSinceLaunch:"Taku was introduced Sep. 29, 2026, one day before this tracker date. Dyna describes taking this brand-new system to real-world customer sites as the next milestone, so we count Taku itself as 0 months deployed."
    },
    sources:[
      {label:"Dyna — Series A",url:"https://www.dyna.co/news/series-a"},
      {label:"Dyna deployments",url:"https://www.dyna.co/research/scaling-customer-deployments"}
    ]
  },
  {
    name:"Flourish",productUrl:"https://flourish-robots.com/",group:"SEMI-HUMANOID",product:"Flourish 1",
    robotsBuilt:5,robotsDeployed:0,monthsSinceLaunch:0,price:3555,funding:null,valuation:null,
    estimate:{robotsBuilt:true},
    sources:[{label:"Flourish Robots",url:"https://flourish-robots.com/"}]
  },
  {
    name:"Tesla",productUrl:"https://www.tesla.com/AI",group:"HUMANOID",product:"Optimus",
    robotsBuilt:3000,robotsDeployed:0,monthsSinceLaunch:0,price:null,funding:null,valuation:null,
    estimate:{robotsBuilt:true},
    status:{price:"na",funding:"na",valuation:"na"},
    sources:[{label:"Tesla AI / Optimus",url:"https://www.tesla.com/AI"}]
  },
  {
    name:"Figure",productUrl:"https://www.figure.ai/figure",group:"HUMANOID",product:"Figure 03",
    robotsBuilt:1000,robotsDeployed:20,monthsSinceLaunch:3,price:null,funding:5250000000,valuation:42500000000,
    estimate:{robotsDeployed:true,monthsSinceLaunch:true},
    lowerBound:{robotsBuilt:true},
    status:{price:"na"},
    sources:[
      {label:"Figure 03 — 1,000-unit production milestone",url:"https://korthosrobotics.com/ecosystem/product/figure-03/operations"},
      {label:"Figure 03 production ramp",url:"https://www.figure.ai/news/ramping-figure-03-production"},
      {label:"Figure",url:"https://www.figure.ai/"}
    ]
  },
  {
    name:"1X",productUrl:"https://www.1x.tech/discover/neo-home-robot",group:"HUMANOID",product:"NEO",
    robotsBuilt:null,robotsDeployed:0,monthsSinceLaunch:0,price:20000,funding:136500000,valuation:820000000,
    estimate:{robotsBuilt:true},
    metricNotes:{
      robotsBuilt:"1X has announced NEO production capacity and internal production activity but has not disclosed a cumulative NEO unit count, so no built total is shown.",
      robotsDeployed:"0 confirmed NEO robots in external customer homes counted here. 1X says NEO will launch into Early Access customer homes in 2026, but has not disclosed a verified delivered-customer count.",
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

const today=new Date("2026-10-02T00:00:00");

let active="robotsDeployed";
let selected=null;
let maticVisible=false;
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
      if(a.name==="Matic")return 1;
      if(b.name==="Matic")return -1;
      const av=typeof a[active]==="number"?a[active]:-Infinity;
      const bv=typeof b[active]==="number"?b[active]:-Infinity;
      return (bv-av)||a.name.localeCompare(b.name);
    });
}

function render(animateFrom=null){
  const note=document.querySelector(".metric-note");
  if(note){
    const hasEstimates=companies.some(c=>c.estimate?.[active]);
    note.textContent=(metricDescriptions[active]||"")+(hasEstimates?"  * estimated":"");
  }
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.metric===active));

  const maticAlwaysVisible=active==="price"||active==="funding";
  const showMatic=maticAlwaysVisible||maticVisible;
  const visibleCompanies=companies.filter(c=>showMatic||c.name!=="Matic");
  const scaledHeight=(v,groupRows)=>{
    if(typeof v!=="number"||v<=0)return 0;
    const groupVals=groupRows.map(c=>c[active]).filter(x=>typeof x==="number"&&x>0);
    const groupMax=Math.max(...groupVals,1);
    return Math.max(8,v/groupMax*100);
  };

  groupsEl.innerHTML=["SEMI-HUMANOID","HUMANOID"].map(group=>{
    const rows=sortedRows(group,visibleCompanies);
    const showMaticToggle=group==="SEMI-HUMANOID"&&!showMatic;
    const count=rows.length+(showMaticToggle?1:0);
    const header=group==="SEMI-HUMANOID"&&showMatic&&!maticAlwaysVisible
      ? '<div class="group-heading"><div class="group-label">'+group+'</div><button class="matic-hide" type="button">Hide Matic</button></div>'
      : '<div class="group-label">'+group+'</div>';
    const cards=rows.map(c=>{
      const v=c[active],st=statusFor(c),height=scaledHeight(v,rows);
      const color=companyColors[c.name]||"#d9dee3";
      const initial=animateFrom&&animateFrom[c.name]!=null?animateFrom[c.name]+"px":height+"%";
      const card='<button class="company" data-company="'+c.name+'" style="--company-color:'+color+'"><div class="value">'+labelFor(c)+'</div><div class="bar-stage"><div class="bar '+st+'" data-target-height="'+height+'" style="height:'+initial+'"></div></div><div class="company-brand"><div class="logo-badge" aria-hidden="true">'+(companyBadges[c.name]||"◆")+'</div><div><div class="company-name">'+c.name+'</div><div class="product-name">'+(c.product||"&nbsp;")+'</div></div></div></button>';
      return c.name==="Matic"&&showMatic&&!maticAlwaysVisible
        ? '<div class="matic-card-wrap">'+card+'<button class="matic-hide-inline" type="button">hide</button></div>'
        : card;
    }).join("");
    const toggle=showMaticToggle
      ? '<button class="matic-toggle" type="button" aria-label="Show Matic"><div class="matic-toggle-icon">M</div><div class="matic-toggle-label">SHOW MATIC</div></button>'
      : "";
    return '<section class="group">'+header+'<div class="bars" style="--count:'+count+'">'+cards+toggle+'</div></section>';
  }).join("");

  document.querySelectorAll(".company").forEach(b=>b.onclick=()=>{
    selected=companies.find(c=>c.name===b.dataset.company);
    renderDrawer();
  });
  document.querySelectorAll(".matic-toggle").forEach(b=>b.onclick=()=>{
    const snap=snapshotBarHeights();
    maticVisible=true;
    render(snap);
  });
  document.querySelectorAll(".matic-hide,.matic-hide-inline").forEach(b=>b.onclick=()=>{
    const snap=snapshotBarHeights();
    maticVisible=false;
    render(snap);
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
  drawerRoot.innerHTML=`<div class="backdrop"></div><aside class="drawer" style="--company-color:${color}"><button class="drawer-close">×</button><div class="drawer-kicker">${selected.group}</div><h2>${selected.name}</h2><p class="drawer-product">${selected.product||"Product not yet recorded"}</p>${selected.productUrl?`<a class="product-link" href="${selected.productUrl}" target="_blank" rel="noreferrer">View product page <span>↗</span></a>`:""}<div class="detail-grid">${metrics.map(m=>`<div class="detail-row"><span>${m.label}</span><strong>${labelFor(selected,m.key)}</strong><small>${detailNoteFor(selected,m.key)}${evidenceFor(selected,m.key)}</small></div>`).join("")}</div><div class="source-block"><div class="source-title">SOURCES</div>${selected.sources?.length?selected.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noreferrer">${s.label}<span>↗</span></a>`).join(""):'<div class="no-source">No verified public source added yet.</div>'}</div></aside>`;
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