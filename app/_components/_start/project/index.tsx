import { Information } from "./information";
import { Category } from "./category";

export async function Project() {
  return (
    <section className="h-auto w-full px-6 py-16 lg:py-36 flex flex-col items-center gap-3 lg:gap-10 bg-[#f9f9f9] dark:bg-inherit">
      <div className="flex flex-col max-w-[34rem] gap-5">
        <Information />
        <Category />
      </div>
    </section>
  );
}
