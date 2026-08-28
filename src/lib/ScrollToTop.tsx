import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll position on every route change (React Router doesn't do this by default,
 *  unlike a classic multi-page site where every navigation was a fresh document load). */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
