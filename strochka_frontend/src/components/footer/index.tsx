import styles from './index.module.scss';

const getFooterText = () => `All rights reserved, ${new Date().getFullYear()}`;

export const Footer = () => <footer className={styles.footer}>{getFooterText()}</footer>;
