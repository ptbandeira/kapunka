'use client';
import { useEffect } from 'react';

export default function IdentityRedirect() {
  useEffect(() => {
    // Netlify Identity sends tokens in the URL hash
    if (typeof window === 'undefined') return;
    const h = window.location.hash || '';
    // Look for any identity token in the hash
    if (/(invite_token|recovery_token|confirmation_token|access_token)=/.test(h)) {
      // If we're not already on /admin, move there but KEEP the hash (token)
      if (!window.location.pathname.startsWith('/admin')) {
        window.location.replace('/admin' + h);
      }
    }
  }, []);
  return null;
}
