import dynamic from 'next/dynamic'
const EbookForm = dynamic(() => import('../../components/EbookForm'), { ssr:false });
export default function EbookMaker(){ return (<main className='page'><h1>Ebook Maker</h1><EbookForm/></main>); }
