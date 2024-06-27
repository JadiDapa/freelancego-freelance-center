import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MobileNav from "./Home/MobileNav";

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Pricing",
    route: "/home",
  },
  {
    name: "Feature",
    route: "/home",
  },
  {
    name: "Blog",
    route: "/home",
  },
  {
    name: "About Us",
    route: "/home",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 transition lg:px-24",
        { glass: isScrolled },
      )}
    >
      <figure className="flex items-center gap-3">
        <div className="w-8 lg:w-10">
          <img src="/images/icon.png" className="object-cover" alt="" />
        </div>
        <span className="text-xl lg:text-2xl">FreelanceGo</span>
      </figure>
      <div className="block lg:hidden">
        <MobileNav links={links} />
      </div>

      <div className="hidden gap-6 lg:flex">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.route}
            className={({ isActive }) =>
              isActive ? "text-foreground" : "text-muted-foreground"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="hidden items-center gap-3 lg:flex">
        <Button
          variant={"outline"}
          className="rounded-full border-muted-foreground bg-transparent px-9"
        >
          Login
        </Button>
        <Button className="rounded-full px-9">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
