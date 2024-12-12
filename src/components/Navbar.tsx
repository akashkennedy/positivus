import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  const navLinks: string[] = [
    "About Us",
    "Services",
    "Use Cases",
    "Pricing",
    "Blog",
  ];

  return (
    <nav className="flex justify-between items-center py-8">
      <Image
        src="/logo.png"
        alt="Logo"
        height={80}
        width={180}
        className="cursor-pointer"
      />
      <div className="flex gap-8 items-center">
        <ul className="hidden lg:flex gap-5 list-none">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
        <Button type="outline" className="hidden md:block">
          Get a Quote
        </Button>
        <Image
          src="/menu.svg"
          height={40}
          width={40}
          alt="Menu"
          className="cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
}
