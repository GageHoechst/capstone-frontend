import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  return (
    <main>
      <Signup />
      <Login />
      <LogoutLink />
    </main>
  );
}
