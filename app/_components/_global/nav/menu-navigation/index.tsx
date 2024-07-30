import Link from "next/link";

export function MenuNavigation() {
  return (
    <ul className="h-full w-full flex items-center justify-center gap-6 font-semibold">
      <li className="my-4">
        <Link href="#home" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li className="my-4">
        <Link href="#about" className="hover:text-primary">
          About
        </Link>
      </li>
      <li className="my-4">
        <Link href="#projects" className="hover:text-primary">
          Projects
        </Link>
      </li>
      <li className="my-4">
        <Link href="#contact" className="hover:text-primary">
          Contact
        </Link>
      </li>
    </ul>
  );
}
