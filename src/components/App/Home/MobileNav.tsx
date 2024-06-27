import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Links {
  name: string;
  route: string;
}

interface MobileNavProps {
  links: Links[];
}

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={28} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="flex w-full items-center justify-center gap-3">
            <div className="w-8 lg:w-10">
              <img src="/images/icon.png" className="object-cover" alt="" />
            </div>
            <span className="text-xl lg:text-2xl">FreelanceGo</span>
          </SheetTitle>
          <SheetDescription>Explore More</SheetDescription>
          <div className="flex flex-col pt-6">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.route}
                  className={({ isActive }) =>
                    `text-start text-xl ${
                      isActive ? "text-primary" : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <Button
                variant={"outline"}
                className="rounded-md border-muted-foreground bg-transparent px-9"
              >
                Login
              </Button>
              <Button className="rounded-md px-9">Login</Button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
