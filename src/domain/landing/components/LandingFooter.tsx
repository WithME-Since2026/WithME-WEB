import { Link } from 'react-router-dom';

import styles from './LandingFooter.module.css';

export function LandingFooter() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} to="/contact">
        문의하기
      </Link>
      <p className={styles.copyright}>© 2026 WithME. All rights reserved.</p>
    </footer>
  );
}
