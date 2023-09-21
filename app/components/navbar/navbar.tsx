"use client";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBookOpen } from "react-icons/bi";
import { BsPen } from "react-icons/bs";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import styles from "./navbar.module.css";
interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Kursy",
        active: pathname === "/",
        href: "/",
        icon: HiOutlineSquare3Stack3D,
      },
      {
        label: "Słownictwo",
        href: "/slownictwo",
        active: pathname.includes("slownictwo"),
        icon: BiBookOpen,
      },
      {
        label: "Gramatyka",
        active: pathname.includes("gramatyka"),
        href: "/gramatyka",
        icon: BsPen,
      },
    ],
    [pathname]
  );

  return (
    <nav>
      <ul className={styles.links}>
        {routes.map(({ label, href, active, icon: Icon }) => (
          <li
            className={`${active ? styles.activeLink : ""} ${styles.link}`}
            key={href}
          >
            <Link href={href}>
              {label} <Icon size={20} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
