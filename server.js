// Lightweight server for local dev (not required on Vercel)
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static(path.join(process.cwd())));
app.get('/api/config', (req,res)=> res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || process.env.STRIPE_PUBLIC_KEY || '' }));
app.listen(process.env.PORT || 3000, ()=> console.log('Server running'));
