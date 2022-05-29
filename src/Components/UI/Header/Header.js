import styles from './Header.module.css';
import headerImage from '../../../assets/headerPhoto.jpg';
import { HeaderCartButton } from './HeaderCartButton';

export function Header(props) {
  return (
    <>
      <header className={styles.header}>

        <h1>Food is good</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={headerImage} alt="Vegetables on food" />
      </div>
    </>
  );
}
