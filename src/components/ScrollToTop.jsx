import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移時に必ず一番上までスクロールを戻す
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
