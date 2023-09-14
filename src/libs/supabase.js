import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL1,
  import.meta.env.VITE_SUPABASE_KEY
);

export default supabase;
