import { createClient } from '@supabase/supabase-js'

const supabaseUrl = '<Ingresar project URL>'
const supabaseKey = '<Ingresar API Key>'
export const supabase = createClient(supabaseUrl, supabaseKey)