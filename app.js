// Basic frontend behavior and Stripe integration helper (uses /api endpoints)
function toast(msg){ alert(msg); }
async function apiPost(url, body){ const r = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)}); return r.json(); }

// Attach buy buttons on pages
document.addEventListener('click', async (e) => {
  if(e.target.matches('.btn.buy')){
    const key = e.target.getAttribute('data-price-key');
    const res = await apiPost('/api/create-checkout-session',{ priceEnvKey: key });
    if(res.url) window.location = res.url; else toast('Checkout error');
  }
});