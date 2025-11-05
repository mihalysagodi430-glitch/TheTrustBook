'use client'
import { useState } from 'react';
export default function EbookForm(){
  const [title,setTitle]=useState('');
  const [topic,setTopic]=useState('');
  const [lang,setLang]=useState('en');
  const [loading,setLoading]=useState(false);
  async function handleSubmit(e){ e.preventDefault(); setLoading(true);
    try{
      const text = `Title: ${title}\nTopic: ${topic}\nGenerated content (local)`;
      const blob = new Blob([text],{type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download=(title||'ebook')+'.txt'; a.click();
      URL.revokeObjectURL(url);
    }catch(err){ console.error(err); alert('Generation failed'); }
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit} style={{display:'grid',gap:10,maxWidth:640}}>
      <input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} required />
      <input placeholder='Topic' value={topic} onChange={e=>setTopic(e.target.value)} required />
      <select value={lang} onChange={e=>setLang(e.target.value)}><option value='en'>English</option><option value='hu'>Magyar</option><option value='ja'>日本語</option><option value='zh'>中文</option><option value='hi'>हिन्दी</option><option value='ru'>Русский</option></select>
      <button disabled={loading}>{loading ? 'Generating...' : 'Generate (local)'}</button>
    </form>
  )
}
