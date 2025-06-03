import { createClient } from "@supabase/supabase-js";

// Load values from .env file
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
