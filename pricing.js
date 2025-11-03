import Head from 'next/head'
export default function Pricing(){
  async function buy(priceId){
    const res = await fetch('/api/create-checkout-session', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ priceId }) });
    const js = await res.json();
    if(js.url) window.location = js.url;
    else alert('Checkout failed: ' + (js.error || 'unknown'));
  }
  return <><Head><title>Pricing</title></Head><main className='page'><h1>Pricing</h1><div className='plans'><div className='plan'><h3>Explorer</h3><p>Free</p><strong>€0</strong></div><div className='plan'><h3>Writer</h3><p>Unlimited AI generation</p><strong>€9.99 / month</strong><button onClick={()=>buy('price_1SFJG12Iu126GwaRGs3rmVMr')}>Buy Writer</button></div><div className='plan'><h3>Marketing Guide</h3><p>Pro features</p><strong>€24.99 / month</strong><button onClick={()=>buy('price_1SFJE32Iu126GwaReW9QvoTm')}>Buy Pro</button></div></div></main></>}
