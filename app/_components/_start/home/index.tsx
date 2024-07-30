import { Profile } from "@/app/_components/_start/home/profile";
import { Links } from "@/app/_components/_start/home/links";
import { Stacks } from "@/app/_components/_start/home/stacks";

export async function Home() {
  return (
    <section className="h-auto w-full px-6 py-16 lg:py-36 flex flex-col items-center bg-[#f9f9f9] dark:bg-inherit">
      <Profile>
        <Links />
        <Stacks />
      </Profile>
    </section>
  );
}
