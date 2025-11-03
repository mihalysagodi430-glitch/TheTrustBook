import { useState } from 'react';
export default function EbookForm(){
  const [title,setTitle]=useState('');
  const [topic,setTopic]=useState('');
  const [lang,setLang]=useState('en');
  const [loading,setLoading]=useState(false);
  const [output,setOutput]=useState('');
  async function runLocal(prompt){
    try{
      const { pipeline } = await import('@xenova/transformers');
      const gen = await pipeline('text-generation','Xenova/gpt2');
      const r = await gen(prompt,{ max_new_tokens: 200 });
      return r?.[0]?.generated_text || '';
    }catch(e){
      console.error(e);
      return '\n[Local generation failed: '+String(e)+']';
    }
  }
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true); setOutput('');
    const prompt = `Write a short ebook intro and 5 sections about ${topic} in ${lang}. Title: ${title}.`;
    const text = await runLocal(prompt);
    setOutput(text);
    const blob = new Blob([text],{ type:'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = (title||'ebook')+'.txt'; a.click();
    URL.revokeObjectURL(url);
    setLoading(false);
  }
  return (<div><form onSubmit={handleSubmit} style={{display:'grid',gap:10,maxWidth:640,margin:'0 auto'}}><input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} required/><input placeholder='Topic' value={topic} onChange={e=>setTopic(e.target.value)} required/><select value={lang} onChange={e=>setLang(e.target.value)}><option value='en'>English</option><option value='hu'>Magyar</option><option value='ja'>日本語</option><option value='zh'>中文</option><option value='hi'>हिन्दी</option><option value='ru'>Русский</option></select><button disabled={loading}>{loading? 'Generating...':'Generate (local)'}</button></form>{output && <section style={{whiteSpace:'pre-wrap',background:'#07122b',padding:12,borderRadius:8,marginTop:16}}><h3>Preview</h3><div>{output}</div></section>}</div>)
}
