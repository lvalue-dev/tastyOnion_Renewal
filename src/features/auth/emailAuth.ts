import { supabase } from '../../lib/superbase/client';

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data; // user, session (Confirm email 켜져 있으면 session이 null일 수 있음)
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data; // session, user
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
