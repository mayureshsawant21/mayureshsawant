const API_ENDPOINT = "http://localhost:3000/api/leads"; // Change after deploying backend
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

document.getElementById('year').textContent = new Date().getFullYear();

// Navigation
$('.nav-toggle')?.addEventListener('click', () => $('.nav-links').classList.toggle('open'));

// Custom cursor
window.addEventListener('mousemove', e => {
  gsap.to('.cursor-dot', {x:e.clientX, y:e.clientY, duration:.08});
  gsap.to('.cursor-ring', {x:e.clientX, y:e.clientY, duration:.25});
});

// GSAP animations
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.scroll-progress', {width:'100%', ease:'none', scrollTrigger:{trigger:document.body, start:'top top', end:'bottom bottom', scrub:true}});
  gsap.utils.toArray('.reveal-up').forEach(el => gsap.from(el,{y:55, opacity:0, duration:.9, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 85%'}}));
  gsap.utils.toArray('.reveal-left').forEach(el => gsap.from(el,{x:-55, opacity:0, duration:.9, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 85%'}}));
  gsap.utils.toArray('.reveal-right').forEach(el => gsap.from(el,{x:55, opacity:0, duration:.9, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 85%'}}));
  gsap.utils.toArray('.reveal-scale').forEach(el => gsap.from(el,{scale:.88, opacity:0, duration:1, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 85%'}}));
  gsap.to('.orb-1',{y:80,x:-40,scrollTrigger:{trigger:'.hero',scrub:true}});
  gsap.to('.orb-2',{y:-80,x:50,scrollTrigger:{trigger:'.hero',scrub:true}});
  gsap.to('.floating-card',{y:-18, repeat:-1, yoyo:true, duration:2.4, stagger:.25, ease:'sine.inOut'});
  gsap.from('.headline', {opacity:0, y:30, duration:1.1, ease:'power4.out'});
}

// Tilt card
$$('.tilt-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r=card.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`rotateY(${x*10}deg) rotateX(${-y*10}deg)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

const reports = {
  realestate: {
    kpis: [['₹52.4L','Ad Spend'], ['11,840','Leads Generated'], ['₹443','Avg. CPL'], ['7.8%','Lead-to-Site Visit'], ['924','Site Visits'], ['₹56,710','Cost / Visit']],
    channels: {labels:['Google Search','Meta Lead Ads','Programmatic','YouTube','Email/WhatsApp'], data:[38,29,14,11,8]},
    funnel: {labels:['Impressions','Clicks','Leads','Qualified','Site Visits'], data:[8600000,214000,11840,3120,924]},
    insights:['High-intent search drove the best qualified lead ratio for premium projects.','Meta lead forms scaled volume while CRM filters improved lead quality.','Remarketing and WhatsApp nurturing helped recover warm prospects for site visits.']
  },
  healthcare: {
    kpis: [['₹31.8L','Ad Spend'], ['18,920','Leads Generated'], ['₹168','Avg. CPL'], ['18.6%','Consultation Booking Rate'], ['3,520','Booked Consultations'], ['₹904','Cost / Booking']],
    channels: {labels:['Google Search','Meta Ads','YouTube','Local SEO','Email/WhatsApp'], data:[32,36,12,8,12]},
    funnel: {labels:['Impressions','Clicks','Leads','Qualified','Consultations'], data:[6200000,286000,18920,7840,3520]},
    insights:['Skin, hair and homeopathy intent keywords reduced wasted spend.','Before-after creatives and doctor-led videos improved click-through quality.','WhatsApp reminders increased show-up rates for consultation bookings.']
  }
};
let channelChart, funnelChart;
function renderReport(type='realestate'){
  const r = reports[type];
  $('#kpiGrid').innerHTML = r.kpis.map(k=>`<div class="kpi"><strong>${k[0]}</strong><span>${k[1]}</span></div>`).join('');
  $('#insightsBox').innerHTML = `<ul>${r.insights.map(i=>`<li>${i}</li>`).join('')}</ul>`;
  const colors=['#2563eb','#e11d48','#f97316','#10b981','#7c3aed'];
  channelChart?.destroy(); funnelChart?.destroy();
  channelChart = new Chart($('#channelChart'), {type:'doughnut', data:{labels:r.channels.labels,datasets:[{data:r.channels.data,backgroundColor:colors,borderWidth:0}]}, options:{plugins:{legend:{position:'bottom'}, title:{display:true,text:'Spend Mix by Channel (%)'}}}});
  funnelChart = new Chart($('#funnelChart'), {type:'bar', data:{labels:r.funnel.labels,datasets:[{label:'Volume',data:r.funnel.data,backgroundColor:colors}]}, options:{plugins:{legend:{display:false}, title:{display:true,text:'Campaign Funnel'}}}});
}
renderReport();
$$('.tab').forEach(btn=>btn.addEventListener('click',()=>{$$('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderReport(btn.dataset.report)}));

// Modal + leads
const modal = $('#hireModal');
$$('.hire-trigger').forEach(btn => btn.addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }));
$('.modal-close').addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });

$('#leadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const lead = Object.fromEntries(form.entries());
  lead.createdAt = new Date().toISOString();
  const leads = JSON.parse(localStorage.getItem('portfolioLeads') || '[]');
  leads.unshift(lead); localStorage.setItem('portfolioLeads', JSON.stringify(leads));
  try { await fetch(API_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead)}); } catch(err) { console.info('Backend not connected; lead saved in browser localStorage.'); }
  $('#formStatus').textContent = 'Thank you! Your details have been submitted.';
  e.target.reset();
  setTimeout(()=>modal.classList.remove('open'), 1400);
});