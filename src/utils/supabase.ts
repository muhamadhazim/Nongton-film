import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const secret = process.env.NEXT_PUBLIC_SUPABASE_SECRET || '';

if (!url || !secret) {
  console.warn("Missing supabase credentials - using dummy client");
}

export const supabase = createClient(
  url || 'https://placeholder.supabase.co', 
  secret || 'placeholder-key'
);
