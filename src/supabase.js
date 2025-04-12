import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vxncexlumvzzdyzqxhag.supabase.co";
const supabase = createClient(
  SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bmNleGx1bXZ6emR5enF4aGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjkyNTMsImV4cCI6MjA1ODQ0NTI1M30.as0Nyx2m9ZBc7HOSAn3yJ1YiE8SV-XFvtRo8TxLuuE4"
);

export default supabase;
