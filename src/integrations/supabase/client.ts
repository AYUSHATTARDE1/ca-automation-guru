// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bdddzeinrxshcczygfxw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZGR6ZWlucnhzaGNjenlnZnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNjQ1MjYsImV4cCI6MjA1Nzk0MDUyNn0.-1vOcT4KqIjyWnLAfn-idkS3FTKKFcXTlI8HcTfAauI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);