import { initializeData } from "@/app/_utils/_start/initialize-data";
import { Nav } from "@/app/_components/_global/nav";
import { Home } from "@/app/_components/_start/home";
import { About } from "@/app/_components/_start/about";
import { Project } from "@/app/_components/_start/project";

export default async function Start() {
  await initializeData();

  return (
    <section>
      <Nav />
      <main className="flex flex-col justify-center pt-20">
        <Home />
        <About />
        <Project />
      </main>
    </section>
  );
}
