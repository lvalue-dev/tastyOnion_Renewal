import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hgbztbziwzgfpxwrqzge.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYnp0Ynppd3pnZnB4d3JxemdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2ODQ4ODUsImV4cCI6MjA4NDI2MDg4NX0.Vn58yvB1pyGvgeJ84SHqLHlPjwHryqqZvXwAQFVpsyc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
