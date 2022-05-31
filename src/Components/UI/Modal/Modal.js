import ReactDOM from 'react-dom';
import { useContext } from 'react';
import styles from './Modal.module.css';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';

const Backdrop = (props)=>{
  const { showCartHandler } = useContext(ShowCartContext);

  return (
    <div
      className={styles.backdrop}
      onClick={showCartHandler}
      role="button"
      tabIndex={0}
      onKeyDown={escape}
    >
      {/*  in this case, each Component backdrop used in this application
      closes the modal after clicking the backdrop */}

    </div>
  );
};

const ModalOverlay = (props)=>{
  return (
    <div className={styles.modal}>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export const Modal = (props)=>{
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
      {ReactDOM
        .createPortal(
          <ModalOverlay>
            {props.children}
          </ModalOverlay>,
          document.getElementById('overlays'),
        )}
    </>
  );
};
