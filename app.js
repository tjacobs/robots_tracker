const metrics=[
  {key:"robotsBuilt",label:"ROBOTS BUILT",type:"count"},
  {key:"robotsDeployed",label:"ROBOTS DEPLOYED",type:"count"},
  {key:"monthsSinceLaunch",label:"MONTHS DEPLOYED",type:"count"},
  {key:"funding",label:"FUNDING",type:"money"},
  {key:"valuation",label:"VALUATION",type:"money"}
];

const metricDescriptions={
  "robotsBuilt": "Number of robots built.",
  "robotsDeployed": "Number of robots with customers.",
  "monthsSinceLaunch": "Number of months since launching robots to customers.",
  "funding": "Amount of funding raised so far.",
  "valuation": "Valuation from last round raised."
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

const companies=[
  {name:"Weave",group:"SEMI-HUMANOID",product:"Isaac 0",launchDate:"2026-02-01",robotsBuilt:null,robotsDeployed:null,funding:500000,valuation:null,status:{funding:"reported"},sources:[{label:"Weave Robotics",url:"https://www.weaverobotics.com/"}]},
  {name:"Sunday",group:"SEMI-HUMANOID",product:"Memo",launchDate:null,launchStatus:"not-launched",robotsBuilt:null,robotsDeployed:null,funding:165000000,valuation:1150000000,status:{funding:"confirmed",valuation:"confirmed",robotsDeployed:"not-launched"},sources:[{label:"Sunday — Series B",url:"https://www.sunday.ai/blog/series-b"}]},
  {name:"Almond",group:"SEMI-HUMANOID",product:"Axol",launchDate:null,robotsBuilt:null,robotsDeployed:null,funding:null,valuation:null},
  {name:"Nori",group:"SEMI-HUMANOID",product:"Nori",launchDate:null,robotsBuilt:null,robotsDeployed:null,funding:null,valuation:null},
  {name:"Matic",group:"SEMI-HUMANOID",product:"Matic",launchDate:"2024-11-01",robotsBuilt:6000,robotsDeployed:6000,funding:60000000,valuation:null,status:{robotsBuilt:"confirmed",robotsDeployed:"confirmed",funding:"confirmed"},sources:[{label:"Matic — 6,000+ shipped / funding",url:"https://maticrobots.com/blog/the-usd60-million-bet-that-what-comes-after-roomba-is-matic"}]},
  {name:"Innate",group:"SEMI-HUMANOID",product:"MARS",launchDate:null,robotsBuilt:null,robotsDeployed:null,funding:null,valuation:null},
  {name:"Feather",group:"SEMI-HUMANOID",product:"Feather",launchDate:null,robotsBuilt:null,robotsDeployed:null,funding:null,valuation:null},
  {name:"Syncere",group:"SEMI-HUMANOID",product:"Lume",launchDate:null,robotsBuilt:null,robotsDeployed:null,funding:null,valuation:null},
  {name:"Dyna",group:"SEMI-HUMANOID",product:"Taku",launchDate:null,robotsBuilt:null,robotsDeployed:null,funding:120000000,valuation:null,status:{funding:"confirmed"},sources:[{label:"Dyna",url:"https://www.dyna.co/"}]},
  {name:"Flourish",group:"SEMI-HUMANOID",product:"Flourish 1",launchDate:null,launchStatus:"not-launched",robotsBuilt:null,robotsDeployed:null,funding:null,valuation:null,status:{robotsDeployed:"not-launched"}},
  {name:"Tesla",group:"HUMANOID",product:"Optimus",launchDate:null,launchStatus:"not-launched",robotsBuilt:null,robotsDeployed:0,funding:null,valuation:null,status:{robotsDeployed:"not-launched",funding:"na",valuation:"na"}},
  {name:"Figure",group:"HUMANOID",product:"Figure 03",launchDate:null,launchStatus:"not-launched",robotsBuilt:null,robotsDeployed:0,funding:null,valuation:null,status:{robotsDeployed:"not-launched"}},
  {name:"1X",group:"HUMANOID",product:"NEO",launchDate:null,launchStatus:"not-launched",robotsBuilt:null,robotsDeployed:0,funding:null,valuation:null,status:{robotsDeployed:"not-launched"}}
];

const today=new Date("2026-09-30T00:00:00");
function monthsSince(s){if(!s)return null;const d=new Date(s+"T00:00:00");return Math.max(0,(today.getFullYear()-d.getFullYear())*12+(today.getMonth()-d.getMonth()));}
for(const c of companies){
  c.monthsSinceLaunch=c.launchStatus==="not-launched"?null:monthsSince(c.launchDate);
  c.status ||= {};
  c.status.monthsSinceLaunch=c.launchStatus==="not-launched"?"not-launched":c.launchDate?"confirmed":"unknown";
}

let active="robotsBuilt";
let selected=null;
const groupsEl=document.querySelector("#groups");
const drawerRoot=document.querySelector("#drawerRoot");

function money(v){if(v==null)return"UNKNOWN";if(v>=1e9)return"$"+(v/1e9).toFixed(v%1e9===0?0:2).replace(/\.00$/,"")+"B";if(v>=1e6)return"$"+(v/1e6).toFixed(v%1e6===0?0:1).replace(/\.0$/,"")+"M";if(v>=1e3)return"$"+Math.round(v/1e3)+"K";return"$"+v.toLocaleString();}
function metric(){return metrics.find(m=>m.key===active)}
function statusFor(c,key=active){return c.status?.[key] || (c[key]==null?"unknown":"reported")}
function labelFor(c,key=active){
  const st=statusFor(c,key),m=metrics.find(x=>x.key===key),v=c[key];
  if(st==="not-launched")return"NOT LAUNCHED";if(st==="na")return"N/A";if(v==null)return"";
  return m.type==="money"?money(v):v.toLocaleString();
}
function statusText(s){return({confirmed:"Confirmed",reported:"Reported / estimated",unknown:"Unknown","not-launched":"Not launched",na:"Not applicable"})[s]||s}

function render(){
  const note=document.querySelector(".metric-note");
  if(note) note.textContent=metricDescriptions[active]||"";
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.metric===active));
  const vals=companies.map(c=>c[active]).filter(v=>typeof v==="number"&&v>0);
  const max=Math.max(...vals,1);
  groupsEl.innerHTML=["SEMI-HUMANOID","HUMANOID"].map(group=>{
    const rows=companies.filter(c=>c.group===group);
    return `<section class="group"><div class="group-label">${group}</div><div class="bars" style="--count:${rows.length}">${rows.map(c=>{
      const v=c[active],st=statusFor(c),height=typeof v==="number"&&v>0?Math.max(8,v/max*100):0;
      const color=companyColors[c.name]||"#d9dee3";
      return `<button class="company" data-company="${c.name}" style="--company-color:${color}"><div class="value">${labelFor(c)}</div><div class="bar-stage"><div class="bar ${st}" style="height:${height}%"></div>${v==null||v===0?`<div class="empty ${st}">${st==="not-launched"?"—":"·"}</div>`:""}</div><div class="company-brand"><div class="logo-badge" aria-hidden="true">${companyBadges[c.name]||"◆"}</div><div><div class="company-name">${c.name}</div><div class="product-name">${c.product||"&nbsp;"}</div></div></div></button>`;
    }).join("")}</div></section>`;
  }).join("");

  document.querySelectorAll(".company").forEach(b=>b.onclick=()=>{selected=companies.find(c=>c.name===b.dataset.company);renderDrawer()});
}
function renderDrawer(){
  if(!selected){drawerRoot.innerHTML="";return}
  const color=companyColors[selected.name]||"#d9dee3";
  drawerRoot.innerHTML=`<div class="backdrop"></div><aside class="drawer" style="--company-color:${color}"><button class="drawer-close">×</button><div class="drawer-kicker">${selected.group}</div><h2>${selected.name}</h2><p class="drawer-product">${selected.product||"Product not yet recorded"}</p><div class="detail-grid">${metrics.map(m=>`<div class="detail-row"><span>${m.label}</span><strong>${labelFor(selected,m.key)}</strong><small>${statusText(statusFor(selected,m.key))}</small></div>`).join("")}</div><div class="source-block"><div class="source-title">SOURCES</div>${selected.sources?.length?selected.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noreferrer">${s.label}<span>↗</span></a>`).join(""):'<div class="no-source">No verified public source added yet.</div>'}</div></aside>`;
  document.querySelector(".drawer-close").onclick=closeDrawer;
  document.querySelector(".backdrop").onclick=closeDrawer;
}
function closeDrawer(){selected=null;renderDrawer()}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{active=b.dataset.metric;render()});
render();