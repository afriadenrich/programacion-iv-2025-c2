import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(
            'https://ahugiqiaunaaspygxnpd.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodWdpcWlhdW5hYXNweWd4bnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2Nzk2MDYsImV4cCI6MjA3NzI1NTYwNn0.mYLP7zvgNDQK6jso1BFbAdS7eVlAYb76H5HJc4y0k4s',
        );
    }

    getPublicUrl(path: string) {
        return this.supabase.storage.from('fotos').getPublicUrl(path);
    }
}
