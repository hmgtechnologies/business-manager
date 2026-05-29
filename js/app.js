/* ============================================================
   HMG ENTERPRISE v5.0 — Shared Utilities
   Sidebar toggle, themes, PIN, toasts, WhatsApp, search,
   notifications, keyboard shortcuts, service worker
   ============================================================ */

/* ── Sidebar Toggle ──────────────────────────────────────────── */
function toggleSidebar(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sidebarOverlay');
  if(!sb)return;
  if(window.innerWidth<=768){
    sb.classList.toggle('mobile-open');
    if(ov)ov.classList.toggle('active');
  }else{
    sb.classList.toggle('collapsed');
    localStorage.setItem('st_sidebar_collapsed',sb.classList.contains('collapsed')?'1':'0');
  }
}
// Restore sidebar state
(function(){
  if(window.innerWidth>768&&localStorage.getItem('st_sidebar_collapsed')==='1'){
    const sb=document.getElementById('sidebar');
    if(sb)sb.classList.add('collapsed');
  }
})();

/* ── Toast Notifications ─────────────────────────────────────── */
function showToast(msg,type){
  type=type||'info';
  const container=document.getElementById('toastContainer');
  if(!container)return;
  const icons={success:'✅',error:'❌',warning:'⚠️',info:'ℹ️'};
  const toast=document.createElement('div');
  toast.className='toast '+type;
  toast.innerHTML='<span>'+(icons[type]||'ℹ️')+'</span><span>'+msg+'</span>';
  container.appendChild(toast);
  setTimeout(()=>{toast.classList.add('hide');setTimeout(()=>toast.remove(),300)},3500);
}

/* ── Modal Helpers ───────────────────────────────────────────── */
function openModal(id){
  const m=document.getElementById(id);
  if(m){m.classList.add('active');document.body.style.overflow='hidden'}
}
function closeModal(id){
  const m=document.getElementById(id);
  if(m){m.classList.remove('active');document.body.style.overflow=''}
}
// Close modal on overlay click
document.addEventListener('click',function(e){
  if(e.target.classList.contains('modal-overlay')&&e.target.classList.contains('active')){
    e.target.classList.remove('active');document.body.style.overflow='';
  }
});

/* ── Notification Panel ──────────────────────────────────────── */
function toggleNotifPanel(){
  const p=document.getElementById('notifPanel');
  if(p){p.classList.toggle('active');
    // Mark all as read
    if(p.classList.contains('active')){
      const notifs=ST.notifications();
      notifs.forEach(n=>n.read=true);
      ST.saveNotifications(notifs);
      updateNotifBadge();
    }
  }
}
function updateNotifBadge(){
  const badge=document.getElementById('notifBadge');
  const notifs=ST.notifications();
  const unread=notifs.filter(n=>!n.read).length;
  if(badge)badge.textContent=unread>0?unread:'0';
  if(badge)badge.style.display=unread>0?'flex':'none';
}
function renderNotifPanel(){
  const container=document.getElementById('notifList');
  if(!container)return;
  const notifs=ST.notifications().slice(0,15);
  if(!notifs.length){
    container.innerHTML='<div class="text-center text-muted" style="padding:30px">No notifications</div>';
    return;
  }
  container.innerHTML=notifs.map(n=>{
    const icons={credit:'💳',success:'✅',warning:'⚠️',info:'ℹ️',error:'❌'};
    return'<div class="notif-item"><div class="notif-item-icon">'+(icons[n.type]||'ℹ️')+
      '</div><div class="notif-item-body"><div class="notif-item-title">'+n.title+
      '</div><div class="notif-item-text">'+n.body+'</div><div class="notif-item-time">'+
      timeAgo(n.date)+'</div></div></div>';
  }).join('');
}

/* ── Global Search ───────────────────────────────────────────── */
let searchTimeout=null;
function initGlobalSearch(){
  const input=document.getElementById('globalSearch');
  const panel=document.getElementById('searchPanel');
  if(!input||!panel)return;
  input.addEventListener('input',function(){
    clearTimeout(searchTimeout);
    const q=this.value.trim();
    if(q.length<2){panel.classList.remove('active');return}
    searchTimeout=setTimeout(()=>{
      const results=ST.globalSearch(q);
      if(results.length){
        panel.innerHTML=results.map(r=>
          '<a href="'+r.url+'" class="notif-item" style="color:inherit;text-decoration:none">'+
          '<div class="notif-item-icon">'+r.icon+'</div>'+
          '<div class="notif-item-body"><div class="notif-item-title">'+r.title+'</div>'+
          '<div class="notif-item-text">'+r.subtitle+'</div></div></a>'
        ).join('');
      }else{
        panel.innerHTML='<div class="text-center text-muted" style="padding:20px">No results for "'+q+'"</div>';
      }
      panel.classList.add('active');
    },200);
  });
  input.addEventListener('blur',function(){setTimeout(()=>{panel.classList.remove('active')},200)});
  input.addEventListener('focus',function(){if(this.value.trim().length>=2)this.dispatchEvent(new Event('input'))});
}

/* ── Theme Engine ────────────────────────────────────────────── */
function applyTheme(){
  let t=localStorage.getItem('st_theme');
  if(t)try{t=JSON.parse(t)}catch(e){t=null}
  if(!t)return;
  document.body.className='';
  if(t==='light'||t==='light-mode')document.body.classList.add('light-theme');
  else if(t!=='dark'&&t!=='indigo')document.body.classList.add('theme-'+t);
  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(a=>{
    a.classList.remove('active');
    if(a.getAttribute('data-page')===t)a.classList.add('active');
  });
}
applyTheme();

/* ── WhatsApp Sharing ────────────────────────────────────────── */
function shareWhatsApp(text){
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}

function generateShareSummary(period){
  const cfg=ST.config(),sales=ST.sales(),exps=ST.expenses(),now=new Date();
  let f=sales,pe=0;
  if(period==='today'){const ts=now.toDateString();
    f=sales.filter(s=>new Date(s.date).toDateString()===ts);
    pe=exps.filter(e=>new Date(e.date).toDateString()===ts).reduce((a,e)=>a+e.amount,0);
  }else if(period==='week'){const wa=new Date(now-7*86400000);
    f=sales.filter(s=>new Date(s.date)>=wa);
    pe=exps.filter(e=>new Date(e.date)>=wa).reduce((a,e)=>a+e.amount,0);
  }else if(period==='month'){
    f=sales.filter(s=>{const d=new Date(s.date);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()});
    pe=exps.filter(e=>{const d=new Date(e.date);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()})
      .reduce((a,e)=>a+e.amount,0);
  }else{pe=exps.reduce((a,e)=>a+e.amount,0)}
  const rev=f.reduce((a,s)=>a+s.total,0);
  const gp=f.reduce((a,s)=>a+(s.profit||0),0);
  const pLabel=period==='today'?'Today':period==='week'?'This Week':period==='month'?'This Month':'All Time';
  return`📊 *${cfg.businessName} — Sales Report*\n━━━━━━━━━━━━━━━━━━\n📅 ${pLabel}\n\n💰 Revenue: ${ST.fmt(rev)}\n📦 Transactions: ${f.length}\n💵 Gross Profit: ${ST.fmt(gp)}\n💸 Expenses: ${ST.fmt(pe)}\n📈 Net Profit: ${ST.fmt(gp-pe)}\n\n━━━━━━━━━━━━━━━━━━\n${cfg.brandTagline}\n🌐 ${cfg.brandWebsite}\nPowered by HMG Enterprise v5.0`;
}

/* ── PIN Guard ───────────────────────────────────────────────── */
(function checkPin(){
  const pin=localStorage.getItem('st_pin');
  if(!pin)return;
  const sp=pin.replace(/^"|"$/g,'');
  if(!sp||sessionStorage.getItem('st_unlocked')==='1')return;
  const o=document.createElement('div');
  o.className='modal-overlay active';
  o.style.cssText='display:flex;z-index:9999';
  o.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><span class="modal-title">🔐 Security PIN</span></div>
    <div class="modal-body text-center">
      <div style="font-size:2.5rem;margin-bottom:12px">🏪</div>
      <h2 style="margin-bottom:4px">HMG Enterprise</h2>
      <p class="text-muted mb-6">Enter your 4-digit PIN to continue</p>
      <input type="password" id="pinInput" maxlength="4" inputmode="numeric" pattern="[0-9]*"
        class="form-input text-center" style="font-size:2rem;letter-spacing:12px;max-width:180px;margin:0 auto"
        placeholder="••••" autofocus>
      <p id="pinError" style="color:var(--danger);margin-top:8px;font-size:0.85rem"></p>
      <button onclick="verifyPIN()" class="btn btn-primary w-full mt-4">Unlock</button>
    </div></div>`;
  document.body.appendChild(o);
  window.verifyPIN=function(){
    if(document.getElementById('pinInput').value===sp){
      sessionStorage.setItem('st_unlocked','1');o.remove();
    }else{
      document.getElementById('pinError').textContent='Incorrect PIN. Try again.';
      document.getElementById('pinInput').value='';
      document.getElementById('pinInput').focus();
    }
  };
  document.getElementById('pinInput').addEventListener('keyup',function(e){if(e.key==='Enter')window.verifyPIN()});
  setTimeout(()=>{const i=document.getElementById('pinInput');if(i)i.focus()},200);
})();

/* ── Keyboard Shortcuts ──────────────────────────────────────── */
document.addEventListener('keydown',function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;
  if(e.altKey){
    const map={d:'index.html',s:'sales.html',i:'inventory.html',r:'reports.html',
      e:'expenses.html',c:'customers.html',u:'suppliers.html',g:'register.html',
      n:'journal.html',o:'staff.html',b:'budgets.html',t:'credits.html'};
    const dest=map[e.key.toLowerCase()];
    if(dest){e.preventDefault();window.location.href=dest}
  }
});

/* ── Service Worker ──────────────────────────────────────────── */
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

/* ── Utility Functions ───────────────────────────────────────── */
function timeAgo(date){
  const s=Math.floor((new Date()-new Date(date))/1000);
  if(s<60)return s+'s ago';if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';return Math.floor(s/86400)+'d ago';
}
function formatDate(d){return new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}
function formatTime(d){return new Date(d).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}
function formatDateTime(d){return formatDate(d)+' '+formatTime(d)}
function todayStr(){return new Date().toDateString()}
function isToday(d){return new Date(d).toDateString()===todayStr()}
function isThisWeek(d){const now=new Date();const week=new Date(now-7*86400000);return new Date(d)>=week}
function isThisMonth(d){const now=new Date();const dd=new Date(d);return dd.getMonth()===now.getMonth()&&dd.getFullYear()===now.getFullYear()}
function sum(arr,key){return arr.reduce((a,i)=>a+(i[key]||0),0)}
function greeting(){
  const h=new Date().getHours();
  return h<12?'Good morning':h<17?'Good afternoon':'Good evening';
}
function exportCSV(data,filename){
  if(!data.length)return;
  const headers=Object.keys(data[0]);
  const csv=[headers.join(','),...data.map(r=>headers.map(h=>{
    const v=r[h]||'';return typeof v==='string'&&v.includes(',')?'"'+v+'"':v
  }).join(','))].join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=filename||'export.csv';a.click();
}
function exportJSON(data,filename){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=filename||'backup.json';a.click();
}

/* ── Page Initialization ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',function(){
  // Set business name in topbar
  const el=document.getElementById('bizNameNav');
  if(el)try{el.textContent=ST.config().businessName||'HMG Concepts'}catch(x){}
  // Set greeting
  const greetEl=document.getElementById('greeting');
  if(greetEl)greetEl.textContent=greeting()+', '+(ST.config().ownerName||'Owner');
  // Init notifications
  updateNotifBadge();renderNotifPanel();
  // Init search
  initGlobalSearch();
  // Mark active nav item
  const currentPage=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-item').forEach(a=>{
    const href=a.getAttribute('href');
    if(href===currentPage)a.classList.add('active');
  });
  // Close notif/search panel on outside click
  document.addEventListener('click',function(e){
    const np=document.getElementById('notifPanel');
    const sp=document.getElementById('searchPanel');
    if(np&&!np.contains(e.target)&&!e.target.closest('#notifBtn'))np.classList.remove('active');
    if(sp&&!sp.contains(e.target)&&!e.target.closest('.topbar-search'))sp.classList.remove('active');
  });
});
