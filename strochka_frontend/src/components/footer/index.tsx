import styles from './index.module.scss';

const getFooterText = () => `All rights reserved, ${new Date().getFullYear()}`;

export const Footer = () => {
  return <footer className={styles.footer}>{getFooterText()}</footer>;
};
