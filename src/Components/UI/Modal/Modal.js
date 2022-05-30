import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props)=>{
  return (
    <div className={styles.backdrop}>

    </div>
  );
};

const ModalOverlay = (props)=>{
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
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
