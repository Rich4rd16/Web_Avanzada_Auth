import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eipqkntqjihmjdrbfquw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpcHFrbnRxamlobWpkcmJmcXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5MTA4NjksImV4cCI6MjAyMjQ4Njg2OX0.ly2bcszn2IGSWY7atZ9s7B_m3K4CoCg2uIXbKGIBUqg'
export const supabase = createClient(supabaseUrl, supabaseKey)