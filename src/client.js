import { createClient } from '@supabase/supabase-js'

const supabaseUrl = '<Ingresar project URL>'
const supabaseKey = 'API Key'
export const supabase = createClient(supabaseUrl, supabaseKey)