import Stripe from 'stripe';
import { buffer } from 'micro';
export const config = { api: { bodyParser: false } };
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(req,res){ const sig = req.headers['stripe-signature']; const buf = await buffer(req); try{ const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET); if(event.type==='checkout.session.completed'){ console.log('Checkout completed', event.data.object.id); } res.json({ received: true }); }catch(err){ console.error(err); res.status(400).send(`Webhook error: ${err.message}`); } }
