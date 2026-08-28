import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/LocaleContext';

/** Port of the .foot markup repeated at the bottom of every subpage. */
export default function SubFooter() {
  const { ui } = useLocale();
  return (
    <div className="foot wrap">
      <span className="mono mono--fog">© 2026 João Pedro Carvalho — São Paulo, Brazil</span>
      <Link className="btn" to="/">
        {ui('sub.footBack')} <i>↑</i>
      </Link>
    </div>
  );
}
