const ADMIN_PASSWORD = 'admin123';
const API_ENDPOINT = 'http://localhost:3000/api/leads';
const $ = q => document.querySelector(q);
function localLeads(){ return JSON.parse(localStorage.getItem('portfolioLeads') || '[]'); }
async function fetchLeads(){
  try { const r = await fetch(API_ENDPOINT); if(r.ok) return await r.json(); } catch(e) {}
  return localLeads();
}
function render(leads){
  $('#leadRows').innerHTML = leads.map(l => `<tr><td>${new Date(l.createdAt).toLocaleString()}</td><td>${l.name||''}</td><td>${l.phone||''}</td><td>${l.email||''}</td><td>${l.company||''}</td><td>${l.position||''}</td><td>${l.message||''}</td></tr>`).join('') || '<tr><td colspan="7">No leads yet.</td></tr>';
}
$('#loginBtn').addEventListener('click', async ()=>{
  if($('#password').value !== ADMIN_PASSWORD){ $('#loginStatus').textContent='Wrong password'; return; }
  $('#loginBox').hidden = true; $('#dashboard').hidden = false; render(await fetchLeads());
});
$('#refreshLeads')?.addEventListener('click', async ()=>render(await fetchLeads()));
$('#exportCsv')?.addEventListener('click', async ()=>{
  const leads = await fetchLeads();
  const headers = ['createdAt','name','phone','email','company','position','message'];
  const csv = [headers.join(','), ...leads.map(l=>headers.map(h=>`"${String(l[h]||'').replaceAll('"','""')}"`).join(','))].join('\n');
  const blob = new Blob([csv], {type:'text/csv'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='portfolio-leads.csv'; a.click();
});