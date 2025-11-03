import Head from 'next/head'
import Link from 'next/link'
export default function Home(){
  return (
    <>
      <Head>
        <title>TheTrustBook — AI eBooks Marketplace</title>
        <meta name='description' content='Create and sell AI-powered ebooks. Multi-language, galaxy design.' />
      </Head>
      <main className='page'>
        <header className='site-header'>
          <img src='/logo.svg' className='logo' alt='logo' />
          <h1>TheTrustBook</h1>
          <p>Galaxy-themed AI eBook platform — generate, publish, sell.</p>
          <nav><Link href='/pricing'>Pricing</Link> · <Link href='/ebook-maker'>Ebook Maker</Link> · <Link href='/marketplace'>Marketplace</Link></nav>
        </header>
        <section className='hero'>
          <h2>Generate unique ebooks in your browser (no paid AI required)</h2>
          <p>Client-side AI (WebLLM) creates content locally. Use Supabase + Stripe for storage and payments.</p>
        </section>
      </main>
    </>
  )
}
