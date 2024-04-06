import { Navigation } from "../Navigation/Navigation";
import { NameUserHeader } from "../NameUserHeader/NameUserHeader";
import { AuthNavigate } from "../AuthNavigate/AuthNavigate";
import { useAuth } from "../HookAuth/HookAuth";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <NameUserHeader /> : <AuthNavigate />}
    </header>
  );
};
