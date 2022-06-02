import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <span>eLPog 2022</span>
        <span>This page was made with react and is for testing purposes only</span>
      </footer>
    </div>
  );
};
