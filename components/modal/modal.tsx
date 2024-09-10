import { useEffect } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export default function Modal({ open, children, onClick }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className={styles.modalBackdrop} onClick={onClick} />
      <div role="dialog" className={styles.modal}>
        {children}
      </div>
    </>
  );
}

