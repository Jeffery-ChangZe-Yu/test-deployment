import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        await signIn("discord")
      }}
    >
      <button type="submit">Signin with Discord</button>
    </form>
  )
} 