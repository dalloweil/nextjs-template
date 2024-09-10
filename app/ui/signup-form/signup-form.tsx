import TextField from "@/components/text-field/text-field";
import Loading from "../loading/loading";
import { signup } from "@/actions/auth";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/button/button";
import styles from "./signup-form.module.css";

export default function SignInForm() {
  const [state, action] = useFormState(signup, undefined);
  const { pending } = useFormStatus();

  // FIXME: useFormStatus is not change pending state

  return (
    <form className={styles.signIn} action={action}>
      <div className={styles.header}>
        <h1>Sign In</h1>
        <p>Use your email and password to sign in</p>
      </div>
      <TextField
        type="email"
        autoComplete="email"
        placeholder="user@dalloweil.com"
        label="Email address"
        error={state?.errors?.email}
      />
      <TextField
        type="password"
        autoComplete="current-password"
        placeholder="password"
        label="Password"
        error={state?.errors?.password}
      />
      <Button type="submit" disabled={pending}>
        {pending ? <Loading /> : "Sign In"}
      </Button>
    </form>
  )
}

