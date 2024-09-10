import { type HTMLInputTypeAttribute, type HTMLInputAutoCompleteAttribute } from "react";
import styles from "./text-field.module.css"

interface TextFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  type?: HTMLInputTypeAttribute;
  error?: string[];
}

export default function TextField({ label, placeholder, required, autoComplete, type, error }: TextFieldProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textField}>
        <label className={styles.label}>{label}</label>
        <input
          className={styles.input}
          type={type}
          name={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
        />
      </div >
      {error && error.map((msg, i) => <p key={i} className={styles.error}>{msg}</p>)}
    </div>
  )
}
