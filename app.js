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
  "Sunday":"#f2cf24",
  "Almond":"#f2b84b",
  "Nori":"#32c7a0",
  "Matic":"#00a6a6",
  "Innate":"#4f8cff",
  "Feather":"#5f6368",
  "Syncere":"#d84cff",
  "Dyna":"#ff4d4d",
  "Flourish":"#72d572",
  "Tesla":"#e82127",
  "Figure":"#4b5563",
  "1X":"#5b8cff"
};

const estimateSources={
  "Weave":{
    robotsBuilt:[{label:"Weave disclosure",url:"https://www.weaverobotics.com/isaac-0"}],
    robotsDeployed:[{label:"Weave disclosure",url:"https://www.weaverobotics.com/isaac-0"}]
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
    monthsSinceLaunch:[{label:"Feather disclosure",url:"https://feather.dev/"}]
  },
  "Syncere":{
    robotsBuilt:[{label:"Syncere product disclosure",url:"https://syncere.com/product-legacy"}]
  },
  "Dyna":{
    robotsBuilt:[{label:"Dyna deployment disclosure",url:"https://www.dyna.co/research/scaling-customer-deployments"}],
    robotsDeployed:[{label:"Dyna deployment disclosure",url:"https://www.dyna.co/research/scaling-customer-deployments"}],
    monthsSinceLaunch:[{label:"Dyna deployment disclosure",url:"https://www.dyna.co/research/scaling-customer-deployments"}]
  },
  "Flourish":{
    robotsBuilt:[{label:"Flourish disclosure",url:"https://flourish-robots.com/"}]
  },
  "Tesla":{
    robotsBuilt:[{label:"Tesla Optimus production disclosure",url:"https://ir.tesla.com/_flysystem/s3/sec/000162828026049213/tsla-20260722-gen.pdf"}]
  },
  "Figure":{
    robotsDeployed:[{label:"Figure BMW deployment disclosure",url:"https://www.figure.ai/news/f-03-at-bmw"}],
    monthsSinceLaunch:[{label:"Figure BMW deployment disclosure",url:"https://www.figure.ai/news/production-at-bmw"}]
  },
  "1X":{
    robotsBuilt:[
      {label:"1X factory disclosure",url:"https://www.1x.tech/discover/neo-factory"},
      {label:"1X production disclosure",url:"https://www.1x.tech/discover/neos-hands"}
    ],
    robotsDeployed:[
      {label:"1X customer-home disclosure",url:"https://www.1x.tech/about"},
      {label:"Estimate basis (~120)",url:"https://presenc.ai/research/humanoid-robot-market-tracker-2026"}
    ]
  }
};

const companies=[
  {
    name:"Weave",productUrl:"https://www.weaverobotics.com/isaac-0",group:"SEMI-HUMANOID",product:"Isaac 0",
    robotsBuilt:25,robotsDeployed:20,monthsSinceLaunch:7,price:3999,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
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
    robotsBuilt:15,robotsDeployed:10,monthsSinceLaunch:1,price:9499,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{funding:true},
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
    robotsBuilt:50,robotsDeployed:40,monthsSinceLaunch:11,price:995,funding:500000,valuation:null,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{funding:true},
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
    robotsBuilt:75,robotsDeployed:50,monthsSinceLaunch:13,price:null,funding:143500000,valuation:600000000,
    estimate:{robotsBuilt:true,robotsDeployed:true,monthsSinceLaunch:true},
    greaterThan:{valuation:true},
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
    robotsBuilt:1000,robotsDeployed:20,monthsSinceLaunch:21,price:null,funding:5250000000,valuation:42500000000,
    estimate:{robotsDeployed:true,monthsSinceLaunch:true},
    lowerBound:{robotsBuilt:true},
    status:{price:"na"},
    sources:[
      {label:"Figure 03 production",url:"https://www.figure.ai/news/ramping-figure-03-production"},
      {label:"Figure",url:"https://www.figure.ai/"}
    ]
  },
  {
    name:"1X",productUrl:"https://www.1x.tech/discover/neo-home-robot",group:"HUMANOID",product:"NEO",
    robotsBuilt:350,robotsDeployed:120,monthsSinceLaunch:48,price:20000,funding:136500000,valuation:820000000,
    estimate:{robotsBuilt:true,robotsDeployed:true},
    lowerBound:{monthsSinceLaunch:true},
    metricNotes:{
      robotsDeployed:"Approx. 120 robots in pilots from third-party 2026 deployment tracking; 1X confirms customer-home deployments but does not disclose an exact count.",
      price:"Also offered at $499/mo."
    },
    sources:[
      {label:"1X — NEO product / customer deliveries",url:"https://www.1x.tech/discover/neo-home-robot"},
      {label:"1X — customer-home deployment timeline",url:"https://www.1x.tech/about"},
      {label:"1X deployment estimate — ~120 in pilots",url:"https://presenc.ai/research/humanoid-robot-market-tracker-2026"}
    ]
  }
];

const today=new Date("2026-09-30T00:00:00");

let active="robotsBuilt";
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
  else out=m.type==="money"?money(v):v.toLocaleString();
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
function estimateLinksFor(c,key){
  if(!c.estimate?.[key])return"";
  const links=estimateSources[c.name]?.[key]||[];
  if(!links.length)return"";
  return '<div class="estimate-links">'+links.map(link=>'<a href="'+link.url+'" target="_blank" rel="noreferrer">'+link.label+' ↗</a>').join("")+'</div>';
}

function render(){
  const note=document.querySelector(".metric-note");
  if(note){
    const hasEstimates=companies.some(c=>c.estimate?.[active]);
    note.textContent=(metricDescriptions[active]||"")+(hasEstimates?"  * estimated":"");
  }
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.metric===active));
  const vals=companies.map(c=>c[active]).filter(v=>typeof v==="number"&&v>0);
  const max=Math.max(...vals,1);
  groupsEl.innerHTML=["SEMI-HUMANOID","HUMANOID"].map(group=>{
    const rows=companies.filter(c=>c.group===group);
    return `<section class="group"><div class="group-label">${group}</div><div class="bars" style="--count:${rows.length}">${rows.map(c=>{
      const v=c[active],st=statusFor(c),height=typeof v==="number"&&v>0?Math.max(8,v/max*100):0;
      const color=companyColors[c.name]||"#d9dee3";
      return `<button class="company" data-company="${c.name}" style="--company-color:${color}"><div class="value">${labelFor(c)}</div><div class="bar-stage"><div class="bar ${st}" style="height:${height}%"></div>${""}</div><div class="company-brand"><div class="logo-badge" aria-hidden="true">${companyBadges[c.name]||"◆"}</div><div><div class="company-name">${c.name}</div><div class="product-name">${c.product||"&nbsp;"}</div></div></div></button>`;
    }).join("")}</div></section>`;
  }).join("");

  document.querySelectorAll(".company").forEach(b=>b.onclick=()=>{selected=companies.find(c=>c.name===b.dataset.company);renderDrawer()});
}
function renderDrawer(){
  if(!selected){drawerRoot.innerHTML="";return}
  const color=companyColors[selected.name]||"#d9dee3";
  drawerRoot.innerHTML=`<div class="backdrop"></div><aside class="drawer" style="--company-color:${color}"><button class="drawer-close">×</button><div class="drawer-kicker">${selected.group}</div><h2>${selected.name}</h2><p class="drawer-product">${selected.product||"Product not yet recorded"}</p>${selected.productUrl?`<a class="product-link" href="${selected.productUrl}" target="_blank" rel="noreferrer">View product page <span>↗</span></a>`:""}<div class="detail-grid">${metrics.map(m=>`<div class="detail-row"><span>${m.label}</span><strong>${labelFor(selected,m.key)}</strong><small>${detailNoteFor(selected,m.key)}${estimateLinksFor(selected,m.key)}</small></div>`).join("")}</div><div class="source-block"><div class="source-title">SOURCES</div>${selected.sources?.length?selected.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noreferrer">${s.label}<span>↗</span></a>`).join(""):'<div class="no-source">No verified public source added yet.</div>'}</div></aside>`;
  document.querySelector(".drawer-close").onclick=closeDrawer;
  document.querySelector(".backdrop").onclick=closeDrawer;
}
function closeDrawer(){selected=null;renderDrawer()}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{active=b.dataset.metric;render()});
render();