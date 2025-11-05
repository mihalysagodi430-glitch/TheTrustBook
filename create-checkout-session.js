import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const { priceId } = req.body;
  try{
    const session = await stripe.checkout.sessions.create({
      mode:'subscription',
      payment_method_types:['card'],
      line_items:[{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`
    });
    res.json({ url: session.url });
  }catch(e){ console.error(e); res.status(500).json({ error: e.message }); }
}
