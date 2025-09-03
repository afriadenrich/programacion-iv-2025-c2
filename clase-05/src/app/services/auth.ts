import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private url = 'https://fwbwlsaoasfjvsetuymz.supabase.co';
  private key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3Yndsc2FvYXNmanZzZXR1eW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzYzOTgsImV4cCI6MjA3MjUxMjM5OH0.R6ArrRMOwxCX-EDtr_Mhic-6CaMdjm1Qj-D04w6R2i8';

  supabase: SupabaseClient<any, 'public', 'public', any, any>;

  constructor() {
    this.supabase = createClient(this.url, this.key);
  }

  async iniciarSesion(email: string, password: string) {
    const respuesta = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (respuesta.error) {
      console.log(respuesta.error);
      return;
    }
    console.log(respuesta.data);
  }

  async crearCuenta(email: string, password: string) {
    const respuesta = await this.supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          algo: 'Ejemplo',
        },
      },
    });
    if (respuesta.error) {
      console.log(respuesta.error);
      return;
    }
    console.log(respuesta.data);
  }

  cerrarSesion() {
    this.supabase.auth.signOut();
  }
}

// Sesiones

// 1. Crear la cuenta
// 2. Iniciar sesión
// 3. Cerrar sesión

// cambiar la contraseña, borrar la cuenta, validar a través de mail / telefono
