import Link from "next/link";
import ThemeToggle from "./theme-toggle";
export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-(--background) text-(--foreground)">
      <ul className="flex gap-6 p-4">
        <li>Proyectos</li>
        <li>Sobre mi</li>
        <li>Contacto</li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
