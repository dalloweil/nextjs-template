import styles from "./modal.module.css";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export default function Modal({ open, children, onClick }: ModalProps) {
  return (<>
    {
      open && (
        <>
          <div className={styles.modalBackdrop} onClick={onClick} />
          <div className={styles.modal}>
            {children}
          </div>
        </>
      )
    }
  </>
  );
}
