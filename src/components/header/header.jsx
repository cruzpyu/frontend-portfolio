import ToggleTheme from "./toggle-theme/toggle-theme";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <ToggleTheme />
    </header>
  );
}
