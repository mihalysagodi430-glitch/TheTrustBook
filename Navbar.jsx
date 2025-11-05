'use client'
import Link from 'next/link'
export default function Navbar(){ return (<nav className='nav'><Link href='/home'>Home</Link> | <Link href='/pricing'>Pricing</Link></nav>); }
