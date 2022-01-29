import * as React from 'react';

// Styles
import styles from "../styles/components/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h6>{`Ⓒ Passepartout ${new Date().getFullYear()}`}</h6>
    </div>
  );
}
