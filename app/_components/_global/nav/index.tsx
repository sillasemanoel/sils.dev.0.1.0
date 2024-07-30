import { Soon } from "@/app/_components/_global/nav/soon";
import { MenuNavigation } from "@/app/_components/_global/nav/menu-navigation";
import { DrawerMenu } from "@/app/_components/_global/nav/drawer-menu";
import { DarkMode } from "@/app/_components/_global/nav/dark-mode";
// import { Profile } from "@/app/_components/_global/nav/profile";

export function Nav() {
  return (
    <nav className="fixed w-full flex justify-between bg-background h-20 px-12 shadow-custom">
      <div className="flex items-center gap-10">
        <Soon />
        <div className="hidden md:block">
          <MenuNavigation />
        </div>
      </div>
      <div className="flex items-center gap-1">
        {/* <div className="mx-2">
          <Profile />
        </div> */}
        <DarkMode />
        <div className="flex items-center md:hidden">
          <DrawerMenu />
        </div>
      </div>
    </nav>
  );
}
