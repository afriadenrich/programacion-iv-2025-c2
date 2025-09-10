import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private url = 'https://fwbwlsaoasfjvsetuymz.supabase.co';
  private key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3Yndsc2FvYXNmanZzZXR1eW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzYzOTgsImV4cCI6MjA3MjUxMjM5OH0.R6ArrRMOwxCX-EDtr_Mhic-6CaMdjm1Qj-D04w6R2i8';

  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.url, this.key);
  }
}
