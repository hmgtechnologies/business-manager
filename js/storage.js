/* ============================================================
   HMG ENTERPRISE v5.0 — Enhanced Storage Engine
   16 data stores — full enterprise feature set
   Enhanced with: loyalty tiers, sales velocity, global search,
   monthly comparisons, data health checks, import helpers
   ============================================================ */
const ST=(function(){
  /* ── Storage Keys ─────────────────────────────────────────── */
  const K={
    config:'st_config',products:'st_products',sales:'st_sales',pin:'st_pin',
    expenses:'st_expenses',customers:'st_customers',register:'st_register',
    targets:'st_targets',activity:'st_activity',theme:'st_theme',
    suppliers:'st_suppliers',notes:'st_notes',staff:'st_staff',
    budgets:'st_budgets',credits:'st_credits',notifications:'st_notifs'
  };

  /* ── Default Configuration ────────────────────────────────── */
  const DC={
    businessName:"HMG Concepts",ownerName:"Adewale Samson Adeagbo",
    businessType:"Multi-industry Solutions",address:"Lagos, Nigeria",
    phone:"",email:"",currency:"₦",lowStockThreshold:10,taxRate:0,fyStart:1,
    categories:["Beverages","Food","Household","Personal Care","Electronics","Stationery","Services","Other"],
    theme:"indigo",receiptFooter:"Thank you for your business! — HMG Concepts",
    brandTagline:"Technology-Powered Business Intelligence",
    brandWebsite:"cssadewale.pages.dev",brandLogo:"HMG",
    features:{dashboard:true,sales:true,inventory:true,reports:true,export:true,
      pwa:true,backup:true,profit:true,receipt:true,expenses:true,customers:true,
      register:true,targets:true,activityLog:true,themes:true,suppliers:true,
      notes:true,staff:true,budgets:true,credits:true,loyalty:true,velocity:true,
      globalSearch:true,calendar:true,comparison:true},
    version:"5.0.0",generatedAt:new Date().toISOString()
  };

  /* ── Default Sample Products ──────────────────────────────── */
  const DP=[
    {id:"p1",name:"Coca-Cola 50cl",price:200,costPrice:140,stock:48,unit:"pcs",category:"Beverages",sku:"BEV-001",reorderLevel:10,active:true,tags:["fast-moving"]},
    {id:"p2",name:"Indomie Noodles (Box)",price:4500,costPrice:3800,stock:12,unit:"cartons",category:"Food",sku:"FOOD-001",reorderLevel:5,active:true,tags:["fast-moving"]},
    {id:"p3",name:"Ariel Detergent 500g",price:1800,costPrice:1300,stock:30,unit:"pcs",category:"Household",sku:"HH-001",reorderLevel:8,active:true,tags:[]},
    {id:"p4",name:"Peak Milk Powder 1kg",price:2800,costPrice:2100,stock:20,unit:"pcs",category:"Food",sku:"FOOD-002",reorderLevel:6,active:true,tags:["popular"]},
    {id:"p5",name:"Bigi Apple Juice",price:150,costPrice:100,stock:72,unit:"pcs",category:"Beverages",sku:"BEV-002",reorderLevel:15,active:true,tags:["fast-moving"]},
    {id:"p6",name:"Closeup Toothpaste",price:650,costPrice:450,stock:8,unit:"pcs",category:"Personal Care",sku:"PC-001",reorderLevel:10,active:true,tags:[]},
    {id:"p7",name:"Golden Morn Cereal",price:1500,costPrice:1100,stock:0,unit:"pcs",category:"Food",sku:"FOOD-003",reorderLevel:5,active:true,tags:["popular"]},
    {id:"p8",name:"Dettol Soap 175g",price:550,costPrice:380,stock:24,unit:"pcs",category:"Personal Care",sku:"PC-002",reorderLevel:10,active:true,tags:[]}
  ];

  /* ── Core Storage Helpers ─────────────────────────────────── */
  function g(k,f){try{const r=localStorage.getItem(k);return r?JSON.parse(r):f}catch(e){return f}}
  function s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){console.warn('Storage:',e)}}

  /* ── Initialization ───────────────────────────────────────── */
  function init(){
    if(!localStorage.getItem(K.config)){
      s(K.config,DC);s(K.products,DP);s(K.sales,[]);s(K.expenses,[]);
      s(K.customers,[]);s(K.register,[]);s(K.targets,{daily:0,weekly:0,monthly:0});
      s(K.activity,[]);s(K.suppliers,[]);s(K.notes,[]);s(K.staff,[]);
      s(K.budgets,[]);s(K.credits,[]);s(K.notifications,[]);
    }else{
      [K.expenses,K.customers,K.register,K.targets,K.activity,K.suppliers,
       K.notes,K.staff,K.budgets,K.credits,K.notifications].forEach(k=>{
        if(!localStorage.getItem(k))s(k,k===K.targets?{daily:0,weekly:0,monthly:0}:[])
      });
      // Upgrade config with new fields
      const cfg=g(K.config,{});
      if(!cfg.version||cfg.version.startsWith('3.')||cfg.version.startsWith('4.')){
        cfg.version='5.0.0';
        cfg.theme=cfg.theme||'indigo';
        if(!cfg.features)cfg.features=DC.features;
        else{
          cfg.features.loyalty=true;cfg.features.velocity=true;
          cfg.features.globalSearch=true;cfg.features.calendar=true;
          cfg.features.comparison=true;
        }
        s(K.config,cfg);
      }
      // Upgrade products with tags
      const prods=g(K.products,[]);
      prods.forEach(p=>{if(!p.tags)p.tags=[]});
      s(K.products,prods);
    }
  }

  /* ── Basic Accessors ──────────────────────────────────────── */
  const cfg=()=>g(K.config,DC);
  const prods=()=>g(K.products,DP);
  const sls=()=>g(K.sales,[]);
  const saveProds=a=>s(K.products,a);
  const saveSls=a=>s(K.sales,a);
  const saveCfg=a=>s(K.config,a);

  /* ── Expenses ─────────────────────────────────────────────── */
  const exps=()=>g(K.expenses,[]);
  const saveExps=a=>s(K.expenses,a);
  function addExp(e){
    const a=exps();e.id='exp_'+Date.now();e.date=e.date||new Date().toISOString();
    a.push(e);saveExps(a);
    log('expense','Expense: '+e.description+' — '+fmt(e.amount));
    return e;
  }

  /* ── Customers ────────────────────────────────────────────── */
  const custs=()=>g(K.customers,[]);
  const saveCusts=a=>s(K.customers,a);
  function saveCust(c){
    const a=custs();
    if(c.id){const i=a.findIndex(x=>x.id===c.id);if(i>=0)a[i]={...a[i],...c}}
    else{c.id='c_'+Date.now();c.createdAt=new Date().toISOString();
      c.totalSpend=0;c.totalOrders=0;c.tags=[];a.push(c)}
    saveCusts(a);return c;
  }
  function updateCustStats(name,amt){
    if(!name||name==='Walk-in')return;
    const a=custs();
    let c=a.find(x=>x.name.toLowerCase()===name.toLowerCase());
    if(!c){c={id:'c_'+Date.now(),name,phone:'',email:'',address:'',notes:'',
      createdAt:new Date().toISOString(),totalSpend:0,totalOrders:0,tags:[]};a.push(c)}
    c.totalSpend=(c.totalSpend||0)+amt;c.totalOrders=(c.totalOrders||0)+1;
    c.lastPurchase=new Date().toISOString();saveCusts(a);
  }

  /* ── Suppliers ────────────────────────────────────────────── */
  const sups=()=>g(K.suppliers,[]);
  const saveSups=a=>s(K.suppliers,a);
  function saveSup(sp){
    const a=sups();
    if(sp.id){const i=a.findIndex(x=>x.id===sp.id);if(i>=0)a[i]={...a[i],...sp}}
    else{sp.id='s_'+Date.now();sp.createdAt=new Date().toISOString();
      sp.totalOrders=0;sp.totalSpent=0;a.push(sp)}
    saveSups(a);return sp;
  }

  /* ── Staff ────────────────────────────────────────────────── */
  const staffData=()=>g(K.staff,[]);
  const saveStaff=a=>s(K.staff,a);
  function saveStaffMember(m){
    const a=staffData();
    if(m.id){const i=a.findIndex(x=>x.id===m.id);if(i>=0)a[i]={...a[i],...m}}
    else{m.id='st_'+Date.now();m.createdAt=new Date().toISOString();
      m.totalSales=0;m.totalRevenue=0;m.isActive=true;a.push(m)}
    saveStaff(a);return m;
  }

  /* ── Credits/Debts ────────────────────────────────────────── */
  const credits=()=>g(K.credits,[]);
  const saveCredits=a=>s(K.credits,a);
  function addCredit(c){
    const a=credits();c.id='cr_'+Date.now();c.date=c.date||new Date().toISOString();
    c.payments=c.payments||[];c.status='pending';a.push(c);saveCredits(a);
    log('credit','Credit sale: '+c.productName+' to '+c.customer+' — '+fmt(c.total));
    notify('Credit Sale',c.customer+' owes '+fmt(c.total),'credit');
    return c;
  }
  function addCreditPayment(id,amt){
    const a=credits(),c=a.find(x=>x.id===id);
    if(c){c.payments.push({amount:amt,date:new Date().toISOString()});
      c.paid=(c.paid||0)+amt;
      if(c.paid>=c.total)c.status='paid';
      saveCredits(a);log('credit','Payment received: '+fmt(amt)+' from '+c.customer);
      if(c.status==='paid')notify('Debt Cleared',c.customer+' has cleared their debt','success');
      return c;
    }
  }

  /* ── Budgets ──────────────────────────────────────────────── */
  const budgets=()=>g(K.budgets,[]);
  const saveBudgets=a=>s(K.budgets,a);
  function saveBudget(b){
    const a=budgets();
    if(b.id){const i=a.findIndex(x=>x.id===b.id);if(i>=0)a[i]={...a[i],...b}}
    else{b.id='b_'+Date.now();b.createdAt=new Date().toISOString();a.push(b)}
    saveBudgets(a);return b;
  }

  /* ── Notes/Journal ────────────────────────────────────────── */
  const notes=()=>g(K.notes,[]);
  const saveNotes=a=>s(K.notes,a);
  function addNote(n){
    const a=notes();n.id='n_'+Date.now();n.date=new Date().toISOString();n.done=false;
    a.unshift(n);if(a.length>100)a.pop();saveNotes(a);
    log('setting','Note: '+n.title);return n;
  }

  /* ── Register ─────────────────────────────────────────────── */
  const reg=()=>g(K.register,[]);
  const saveReg=a=>s(K.register,a);
  function openReg(amt,note){
    const a=reg();a.push({id:'r_'+Date.now(),type:'open',amount:amt,note:note||'',
      date:new Date().toISOString()});saveReg(a);
    log('register','Register opened: '+fmt(amt));
  }
  function closeReg(exp,act,note){
    const a=reg();a.push({id:'r_'+Date.now(),type:'close',expectedCash:exp,
      actualCash:act,discrepancy:act-exp,note:note||'',
      date:new Date().toISOString()});saveReg(a);
    log('register','Register closed. Diff: '+fmt(act-exp));
  }

  /* ── Targets / Activity / Theme / Notifications ───────────── */
  const targets=()=>g(K.targets,{daily:0,weekly:0,monthly:0});
  const saveTargets=t=>s(K.targets,t);
  const actLog=()=>g(K.activity,[]);
  function log(type,msg){
    const a=actLog();a.push({id:'a_'+Date.now(),type,message:msg,date:new Date().toISOString()});
    if(a.length>300)a.splice(0,a.length-300);s(K.activity,a);
  }
  const theme=()=>g(K.theme,null);
  const saveTheme=t=>s(K.theme,t);
  const notifs=()=>g(K.notifications,[]);
  const saveNotifs=a=>s(K.notifications,a);
  function notify(title,body,type){
    const a=notifs();a.unshift({id:'nf_'+Date.now(),title,body,type:type||'info',
      date:new Date().toISOString(),read:false});
    if(a.length>50)a.pop();saveNotifs(a);
  }

  /* ── Formatter ────────────────────────────────────────────── */
  function fmt(n){
    const c=cfg().currency||'₦';
    if(n===null||n===undefined||isNaN(n))return c+'0';
    return c+Number(n).toLocaleString('en',{minimumFractionDigits:0,maximumFractionDigits:2});
  }

  /* ── Storage Usage ────────────────────────────────────────── */
  function storageUsage(){
    let t=0;for(const k in localStorage)if(localStorage.hasOwnProperty(k))t+=localStorage[k].length*2;
    return{used:t,limit:5*1024*1024,pct:(t/(5*1024*1024)*100).toFixed(1)};
  }

  /* ── ★ ENHANCED: Loyalty Tier ─────────────────────────────── */
  function loyaltyTier(totalSpend){
    if(totalSpend>=100000)return{tier:'Platinum',class:'loyalty-platinum',icon:'💎',discount:10};
    if(totalSpend>=50000)return{tier:'Gold',class:'loyalty-gold',icon:'🥇',discount:5};
    if(totalSpend>=20000)return{tier:'Silver',class:'loyalty-silver',icon:'🥈',discount:3};
    return{tier:'Bronze',class:'loyalty-bronze',icon:'🥉',discount:1};
  }

  /* ── ★ ENHANCED: Sales Velocity ───────────────────────────── */
  function salesVelocity(productId,days){
    days=days||30;const sales=sls();const now=new Date();
    const cutoff=new Date(now-days*86400000);
    const productSales=sales.filter(s=>s.productId===productId&&new Date(s.date)>=cutoff);
    const totalQty=productSales.reduce((a,s)=>a+s.qty,0);
    const avgPerDay=totalQty/days;
    const product=prods().find(p=>p.id===productId);
    const stockLeft=product?product.stock:0;
    const daysUntilOut=avgPerDay>0?Math.ceil(stockLeft/avgPerDay):Infinity;
    return{totalQty,avgPerDay:avgPerDay.toFixed(1),daysUntilOut,velocity:avgPerDay>2?'Fast':avgPerDay>0.5?'Moderate':'Slow'};
  }

  /* ── ★ ENHANCED: Global Search ────────────────────────────── */
  function globalSearch(query){
    if(!query||query.length<2)return[];
    const q=query.toLowerCase();const results=[];
    // Search products
    prods().filter(p=>p.active).forEach(p=>{
      if(p.name.toLowerCase().includes(q)||p.sku.toLowerCase().includes(q)||(p.category||'').toLowerCase().includes(q))
        results.push({type:'product',icon:'📦',title:p.name,subtitle:p.category+' • '+fmt(p.price),url:'inventory.html'});
    });
    // Search customers
    custs().forEach(c=>{
      if(c.name.toLowerCase().includes(q)||(c.phone||'').includes(q)||(c.email||'').toLowerCase().includes(q))
        results.push({type:'customer',icon:'👥',title:c.name,subtitle:fmt(c.totalSpend)+' total spend',url:'customers.html'});
    });
    // Search suppliers
    sups().forEach(sp=>{
      if(sp.company.toLowerCase().includes(q)||(sp.contact||'').toLowerCase().includes(q))
        results.push({type:'supplier',icon:'🚚',title:sp.company,subtitle:sp.contact||'',url:'suppliers.html'});
    });
    // Search staff
    staffData().forEach(m=>{
      if(m.name.toLowerCase().includes(q)||(m.role||'').toLowerCase().includes(q))
        results.push({type:'staff',icon:'👨‍💼',title:m.name,subtitle:m.role||'',url:'staff.html'});
    });
    return results.slice(0,20);
  }

  /* ── ★ ENHANCED: Monthly Comparison ───────────────────────── */
  function monthlyComparison(){
    const sales=sls();const exp=exps();const now=new Date();
    function monthData(m,y){
      const f=sales.filter(s=>{const d=new Date(s.date);return d.getMonth()===m&&d.getFullYear()===y});
      const e=exp.filter(x=>{const d=new Date(x.date);return d.getMonth()===m&&d.getFullYear()===y});
      const rev=f.reduce((a,s)=>a+s.total,0);
      const gp=f.reduce((a,s)=>a+(s.profit||0),0);
      const totalExp=e.reduce((a,x)=>a+x.amount,0);
      return{revenue:rev,grossProfit:gp,expenses:totalExp,netProfit:gp-totalExp,
        transactions:f.length,avgOrder:f.length?rev/f.length:0};
    }
    const thisMonth=monthData(now.getMonth(),now.getFullYear());
    const lastMonth=now.getMonth()===0?monthData(11,now.getFullYear()-1):monthData(now.getMonth()-1,now.getFullYear());
    function pctChange(cur,prev){return prev?((cur-prev)/prev*100).toFixed(1):0}
    return{
      current:thisMonth,previous:lastMonth,
      changes:{
        revenue:pctChange(thisMonth.revenue,lastMonth.revenue),
        profit:pctChange(thisMonth.netProfit,lastMonth.netProfit),
        transactions:pctChange(thisMonth.transactions,lastMonth.transactions),
        avgOrder:pctChange(thisMonth.avgOrder,lastMonth.avgOrder)
      }
    };
  }

  /* ── ★ ENHANCED: Business Health Score ────────────────────── */
  function healthScore(){
    const sales=sls();const exps2=exps();const prods2=prods();
    const now=new Date();const thisMonth=sales.filter(s=>{
      const d=new Date(s.date);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()});
    const revenue=thisMonth.reduce((a,s)=>a+s.total,0);
    const profit=thisMonth.reduce((a,s)=>a+(s.profit||0),0);
    const totalExp=exps2.filter(e=>{const d=new Date(e.date);
      return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()})
      .reduce((a,e)=>a+e.amount,0);
    // Profit Margin (0-25)
    const margin=revenue>0?(profit/revenue*100):0;
    const marginScore=Math.min(25,margin>30?25:margin>15?18:margin>5?10:5);
    // Stock Health (0-25)
    const totalProducts=prods2.filter(p=>p.active).length;
    const outOfStock=prods2.filter(p=>p.active&&p.stock===0).length;
    const lowStock=prods2.filter(p=>p.active&&p.stock>0&&p.stock<=(p.reorderLevel||10)).length;
    const stockHealth=totalProducts>0?((totalProducts-outOfStock-lowStock)/totalProducts*100):100;
    const stockScore=Math.min(25,stockHealth>80?25:stockHealth>60?18:stockHealth>40?12:5);
    // Revenue Activity (0-25)
    const avgDailyRev=thisMonth.length>0?revenue/now.getDate():0;
    const revScore=avgDailyRev>50000?25:avgDailyRev>10000?18:avgDailyRev>1000?12:avgDailyRev>0?6:0;
    // Net Position (0-25)
    const netPos=profit-totalExp;
    const netScore=netPos>0?25:netPos>-5000?15:netPos>-20000?8:0;
    const total=Math.round(marginScore+stockScore+revScore+netScore);
    return{score:total,metrics:{margin:marginScore,stock:stockScore,revenue:revScore,net:netScore},
      details:{marginPct:margin.toFixed(1),stockHealth:stockHealth.toFixed(0),
        avgDailyRev,netPos}};
  }

  /* ── ★ ENHANCED: Data Health Check ────────────────────────── */
  function dataHealthCheck(){
    const issues=[];
    const usage=storageUsage();
    if(parseFloat(usage.pct)>80)issues.push({severity:'danger',msg:'Storage usage at '+usage.pct+'%. Back up immediately.'});
    if(parseFloat(usage.pct)>50)issues.push({severity:'warning',msg:'Storage usage at '+usage.pct+'%. Consider clearing old data.'});
    if(prods().filter(p=>p.active&&p.stock===0).length>3)issues.push({severity:'warning',msg:'Multiple products out of stock.'});
    const unpaid=credits().filter(c=>c.status==='pending');
    const overdue=unpaid.filter(c=>c.dueDate&&new Date(c.dueDate)<new Date());
    if(overdue.length>0)issues.push({severity:'warning',msg:overdue.length+' overdue credit(s) need follow-up.'});
    if(!localStorage.getItem(K.pin))issues.push({severity:'info',msg:'No PIN set. Set a PIN in Settings for security.'});
    return{healthy:issues.filter(i=>i.severity==='danger').length===0,issues,
      recordCounts:{products:prods().length,sales:sls().length,expenses:exps().length,
        customers:custs().length,suppliers:sups().length,staff:staffData().length,
        credits:credits().length,notes:notes().length}};
  }

  /* ── ★ ENHANCED: Calendar Data ────────────────────────────── */
  function calendarData(year,month){
    const sales=sls();const exp2=exps();
    const daysInMonth=new Date(year,month+1,0).getDate();
    const data={};
    for(let d=1;d<=daysInMonth;d++){
      const dateStr=new Date(year,month,d).toDateString();
      const daySales=sales.filter(s=>new Date(s.date).toDateString()===dateStr);
      const dayExp=exp2.filter(e=>new Date(e.date).toDateString()===dateStr);
      data[d]={sales:daySales.reduce((a,s)=>a+s.total,0),
        expenses:dayExp.reduce((a,e)=>a+e.amount,0),
        transactions:daySales.length,
        profit:daySales.reduce((a,s)=>a+(s.profit||0),0)-dayExp.reduce((a,e)=>a+e.amount,0)};
    }
    return data;
  }

  /* ── ★ ENHANCED: CSV Import Helper ────────────────────────── */
  function parseCSV(csvText){
    const lines=csvText.trim().split('\n');
    if(lines.length<2)return[];
    const headers=lines[0].split(',').map(h=>h.trim().replace(/"/g,''));
    return lines.slice(1).map(line=>{
      const values=line.split(',').map(v=>v.trim().replace(/"/g,''));
      const obj={};headers.forEach((h,i)=>obj[h]=values[i]||'');return obj;
    });
  }

  /* ── ★ ENHANCED: Generate Invoice Number ──────────────────── */
  function invoiceNumber(){
    const sales=sls();const yr=new Date().getFullYear();
    const count=sales.filter(s=>{
      const d=new Date(s.date);return d.getFullYear()===yr}).length+1;
    return'INV-'+yr+'-'+String(count).padStart(4,'0');
  }

  /* ── Public API ───────────────────────────────────────────── */
  return{init,config:cfg,products:prods,sales:sls,saveProducts:saveProds,
    saveSales:saveSls,saveConfig:saveCfg,
    expenses:exps,saveExpenses:saveExps,addExpense:addExp,
    customers:custs,saveCustomers:saveCusts,saveCustomer:saveCust,
    updateCustomerStats:updateCustStats,
    suppliers:sups,saveSuppliers:saveSups,saveSupplier:saveSup,
    staff:staffData,saveStaff,saveStaffMember,
    credits,saveCredits,addCredit,addCreditPayment,
    budgets,saveBudgets,saveBudget,
    notes,saveNotes,addNote,
    registerData:reg,saveRegister:saveReg,openRegister:openReg,closeRegister:closeReg,
    targets,saveTargets,activityLog:actLog,logActivity:log,theme,saveTheme,
    notifications:notifs,saveNotifications:saveNotifs,pushNotification:notify,
    fmt,storageUsage,KEYS:K,
    // Enhanced v5.0
    loyaltyTier,salesVelocity,globalSearch,monthlyComparison,
    healthScore,dataHealthCheck,calendarData,parseCSV,invoiceNumber};
})();

// ── AUTO-INITIALIZE storage on first load ──────────────────────
ST.init();
