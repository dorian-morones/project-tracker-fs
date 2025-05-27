import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Ensure that the environment variables are set
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Anon Key must be set in environment variables');
}

// Create a Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseKey);
