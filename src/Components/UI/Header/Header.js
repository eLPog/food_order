import styles from './Header.module.css';
import headerImage from '../../../assets/headerPhoto.jpg';

export function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Food is good</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={headerImage} alt="Vegetables on food" />
      </div>
    </>
  );
}
