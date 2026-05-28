/* ============================================================
   HMG Enterprise v4.0 — Storage Engine
   16 data stores — full enterprise feature set
   ============================================================ */
const ST=(function(){
  const K={
    config:'st_config',products:'st_products',sales:'st_sales',pin:'st_pin',
    expenses:'st_expenses',customers:'st_customers',register:'st_register',
    targets:'st_targets',activity:'st_activity',theme:'st_theme',
    suppliers:'st_suppliers',notes:'st_notes',staff:'st_staff',
    budgets:'st_budgets',credits:'st_credits',notifications:'st_notifs'
  };
  const DC={
    businessName:"HMG Concepts",ownerName:"Adewale Samson Adeagbo",
    businessType:"Multi-industry Solutions",address:"Lagos, Nigeria",
    phone:"",email:"",currency:"₦",lowStockThreshold:10,taxRate:0,fyStart:1,
    categories:["Beverages","Food","Household","Personal Care","Electronics","Stationery","Services","Other"],
    theme:"dark-green",receiptFooter:"Thank you for your business! — HMG Concepts",
    brandTagline:"Technology-Powered Business Intelligence",brandWebsite:"cssadewale.pages.dev",brandLogo:"HMG",
    features:{dashboard:true,sales:true,inventory:true,reports:true,export:true,pwa:true,backup:true,profit:true,receipt:true,expenses:true,customers:true,register:true,targets:true,activityLog:true,themes:true,suppliers:true,notes:true,staff:true,budgets:true,credits:true},
    version:"4.0.0",generatedAt:new Date().toISOString()
  };
  const DP=[
    {id:"p1",name:"Coca-Cola 50cl",price:200,costPrice:140,stock:48,unit:"pcs",category:"Beverages",sku:"BEV-001",reorderLevel:10,active:true},
    {id:"p2",name:"Indomie Noodles (Box)",price:4500,costPrice:3800,stock:12,unit:"cartons",category:"Food",sku:"FOOD-001",reorderLevel:5,active:true},
    {id:"p3",name:"Ariel Detergent 500g",price:1800,costPrice:1300,stock:30,unit:"pcs",category:"Household",sku:"HH-001",reorderLevel:8,active:true},
    {id:"p4",name:"Peak Milk Powder 1kg",price:2800,costPrice:2100,stock:20,unit:"pcs",category:"Food",sku:"FOOD-002",reorderLevel:6,active:true},
    {id:"p5",name:"Bigi Apple Juice",price:150,costPrice:100,stock:72,unit:"pcs",category:"Beverages",sku:"BEV-002",reorderLevel:15,active:true},
    {id:"p6",name:"Closeup Toothpaste",price:650,costPrice:450,stock:8,unit:"pcs",category:"Personal Care",sku:"PC-001",reorderLevel:10,active:true},
    {id:"p7",name:"Golden Morn Cereal",price:1500,costPrice:1100,stock:0,unit:"pcs",category:"Food",sku:"FOOD-003",reorderLevel:5,active:true},
    {id:"p8",name:"Dettol Soap 175g",price:550,costPrice:380,stock:24,unit:"pcs",category:"Personal Care",sku:"PC-002",reorderLevel:10,active:true}
  ];
  function g(k,f){try{const r=localStorage.getItem(k);return r?JSON.parse(r):f}catch(e){return f}}
  function s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){console.warn('Storage:',e)}}
  function init(){
    if(!localStorage.getItem(K.config)){s(K.config,DC);s(K.products,DP);s(K.sales,[]);s(K.expenses,[]);s(K.customers,[]);s(K.register,[]);s(K.targets,{daily:0,weekly:0,monthly:0});s(K.activity,[]);s(K.suppliers,[]);s(K.notes,[]);s(K.staff,[]);s(K.budgets,[]);s(K.credits,[]);s(K.notifications,[])}
    else{[K.expenses,K.customers,K.register,K.targets,K.activity,K.suppliers,K.notes,K.staff,K.budgets,K.credits,K.notifications].forEach(k=>{if(!localStorage.getItem(k))s(k,k===K.targets?{daily:0,weekly:0,monthly:0}:[])})}
  }
  const cfg=()=>g(K.config,DC),prods=()=>g(K.products,[]),sls=()=>g(K.sales,[]);
  const saveProds=a=>s(K.products,a),saveSls=a=>s(K.sales,a),saveCfg=a=>s(K.config,a);
  // Expenses
  const exps=()=>g(K.expenses,[]),saveExps=a=>s(K.expenses,a);
  function addExp(e){const a=exps();e.id='exp_'+Date.now();e.date=e.date||new Date().toISOString();a.push(e);saveExps(a);log('expense','Expense: '+e.description+' — '+fmt(e.amount));return e}
  // Customers
  const custs=()=>g(K.customers,[]),saveCusts=a=>s(K.customers,a);
  function saveCust(c){const a=custs();if(c.id){const i=a.findIndex(x=>x.id===c.id);if(i>=0)a[i]={...a[i],...c}}else{c.id='c_'+Date.now();c.createdAt=new Date().toISOString();c.totalSpend=0;c.totalOrders=0;a.push(c)}saveCusts(a);return c}
  function updateCustStats(name,amt){if(!name||name==='Walk-in')return;const a=custs();let c=a.find(x=>x.name.toLowerCase()===name.toLowerCase());if(!c){c={id:'c_'+Date.now(),name,phone:'',email:'',address:'',notes:'',createdAt:new Date().toISOString(),totalSpend:0,totalOrders:0};a.push(c)}c.totalSpend=(c.totalSpend||0)+amt;c.totalOrders=(c.totalOrders||0)+1;c.lastPurchase=new Date().toISOString();saveCusts(a)}
  // Suppliers
  const sups=()=>g(K.suppliers,[]),saveSups=a=>s(K.suppliers,a);
  function saveSup(sp){const a=sups();if(sp.id){const i=a.findIndex(x=>x.id===sp.id);if(i>=0)a[i]={...a[i],...sp}}else{sp.id='s_'+Date.now();sp.createdAt=new Date().toISOString();sp.totalOrders=0;sp.totalSpent=0;a.push(sp)}saveSups(a);return sp}
  // Staff
  const staff=()=>g(K.staff,[]),saveStaff=a=>s(K.staff,a);
  function saveStaffMember(m){const a=staff();if(m.id){const i=a.findIndex(x=>x.id===m.id);if(i>=0)a[i]={...a[i],...m}}else{m.id='st_'+Date.now();m.createdAt=new Date().toISOString();m.totalSales=0;m.totalRevenue=0;m.isActive=true;a.push(m)}saveStaff(a);return m}
  // Credits/Debts
  const credits=()=>g(K.credits,[]),saveCredits=a=>s(K.credits,a);
  function addCredit(c){const a=credits();c.id='cr_'+Date.now();c.date=c.date||new Date().toISOString();c.payments=c.payments||[];c.status='pending';a.push(c);saveCredits(a);log('credit','Credit sale: '+c.productName+' to '+c.customer+' — '+fmt(c.total));notify('Credit Sale',''+c.customer+' owes '+fmt(c.total),'credit');return c}
  function addCreditPayment(id,amt){const a=credits(),c=a.find(x=>x.id===id);if(c){c.payments.push({amount:amt,date:new Date().toISOString()});c.paid=(c.paid||0)+amt;if(c.paid>=c.total)c.status='paid';saveCredits(a);log('credit','Payment received: '+fmt(amt)+' from '+c.customer);if(c.status==='paid')notify('Debt Cleared',c.customer+' has cleared their debt','success');return c}}
  // Budgets
  const budgets=()=>g(K.budgets,[]),saveBudgets=a=>s(K.budgets,a);
  function saveBudget(b){const a=budgets();if(b.id){const i=a.findIndex(x=>x.id===b.id);if(i>=0)a[i]={...a[i],...b}}else{b.id='b_'+Date.now();b.createdAt=new Date().toISOString();a.push(b)}saveBudgets(a);return b}
  // Notes
  const notes=()=>g(K.notes,[]),saveNotes=a=>s(K.notes,a);
  function addNote(n){const a=notes();n.id='n_'+Date.now();n.date=new Date().toISOString();n.done=false;a.unshift(n);if(a.length>100)a.pop();saveNotes(a);log('setting','Note: '+n.title);return n}
  // Register
  const reg=()=>g(K.register,[]),saveReg=a=>s(K.register,a);
  function openReg(amt,note){const a=reg();a.push({id:'r_'+Date.now(),type:'open',amount:amt,note:note||'',date:new Date().toISOString()});saveReg(a);log('register','Register opened: '+fmt(amt))}
  function closeReg(exp,act,note){const a=reg();a.push({id:'r_'+Date.now(),type:'close',expectedCash:exp,actualCash:act,discrepancy:act-exp,note:note||'',date:new Date().toISOString()});saveReg(a);log('register','Register closed. Diff: '+fmt(act-exp))}
  // Targets/Activity/Theme/Notifications
  const targets=()=>g(K.targets,{daily:0,weekly:0,monthly:0}),saveTargets=t=>s(K.targets,t);
  const actLog=()=>g(K.activity,[]);
  function log(type,msg){const a=actLog();a.push({id:'a_'+Date.now(),type,message:msg,date:new Date().toISOString()});if(a.length>300)a.splice(0,a.length-300);s(K.activity,a)}
  const theme=()=>g(K.theme,null),saveTheme=t=>s(K.theme,t);
  const notifs=()=>g(K.notifications,[]),saveNotifs=a=>s(K.notifications,a);
  function notify(title,body,type){const a=notifs();a.unshift({id:'nf_'+Date.now(),title,body,type:type||'info',date:new Date().toISOString(),read:false});if(a.length>50)a.pop();saveNotifs(a)}
  // Formatter
  function fmt(n){const c=cfg().currency||'₦';if(n===null||n===undefined||isNaN(n))return c+'0';return c+Number(n).toLocaleString('en',{minimumFractionDigits:0,maximumFractionDigits:2})}
  function storageUsage(){let t=0;for(const k in localStorage)if(localStorage.hasOwnProperty(k))t+=localStorage[k].length*2;return{used:t,limit:5*1024*1024,pct:(t/(5*1024*1024)*100).toFixed(1)}}
  return{init,config:cfg,products:prods,sales:sls,saveProducts:saveProds,saveSales:saveSls,saveConfig:saveCfg,
    expenses:exps,saveExpenses:saveExps,addExpense:addExp,
    customers:custs,saveCustomers:saveCusts,saveCustomer:saveCust,updateCustomerStats:updateCustStats,
    suppliers:sups,saveSuppliers:saveSups,saveSupplier:saveSup,
    staff,saveStaff,saveStaffMember,
    credits,saveCredits,addCredit,addCreditPayment,
    budgets,saveBudgets,saveBudget,
    notes,saveNotes,addNote,
    registerData:reg,saveRegister:saveReg,openRegister:openReg,closeRegister:closeReg,
    targets,saveTargets,activityLog:actLog,logActivity:log,theme,saveTheme,
    notifications:notifs,saveNotifications:saveNotifs,pushNotification:notify,
    fmt,storageUsage,KEYS:K};
})();
