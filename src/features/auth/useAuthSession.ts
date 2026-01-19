import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/superbase/client';

export function useAuthSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  console.log('Supabase 객체 확인:', supabase);
  useEffect(() => {
    if (supabase) {
      supabase.auth.getSession().then(({ data }) => {
        setSession(data.session ?? null);
        setLoading(false);
      });

      const { data: sub } = supabase.auth.onAuthStateChange(
        (_event, newSession) => {
          setSession(newSession);
        },
      );

      return () => sub.subscription.unsubscribe();
    }
  }, []);

  return { session, loading, isSignedIn: !!session };
}
