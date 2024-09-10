import { FormState, SignupFormSchema } from "@/lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  // if you want to test the Loading of the component or form hook

  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }

  return state;

  // you can prepare data for insertion into database;
  // insert the user into the db or call an library api.
  // create user session;
  // redirect user;
}
