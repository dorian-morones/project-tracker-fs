import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcgzecpzfrylnbbmpqdu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZ3plY3B6ZnJ5bG5iYm1wcWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5Njc0NTQsImV4cCI6MjA2MzU0MzQ1NH0.hI9CrHCf1PTPM3kVpl7GBKZDRHhd9bRog6_EMCGKKjs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
