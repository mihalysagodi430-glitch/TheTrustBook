// Initialize Supabase client on frontend using env-provided globals
(function(){
  const SUPABASE_URL = window.SUPABASE_URL || '';
  const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '';
  if(SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase === undefined){
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
})();