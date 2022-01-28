import * as React from 'react';

// Styles
import styles from "../styles/components/footer.module.scss";

export interface IAppProps {
}

export default function Footer (props: IAppProps) {
  return (
    <div className={styles.footer}>
        <h6>{`Ⓒ Passepartout ${new Date().getFullYear()}`}</h6>
    </div>
  );
}
