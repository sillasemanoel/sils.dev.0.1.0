import prisma from "@/lib/db";
import Image from "next/image";

export async function About() {
  const about = await prisma.about.findUnique({
    where: { id: process.env.ABOUT_ID },
    include: {
      user: true,
    },
  });

  const heroTitle = about?.title as string;
  const heroDescription = about?.description as string;
  const userPicture = about?.picture as string;

  return (
    <section className="h-auto w-full px-6 py-16 lg:py-36 flex flex-col items-center gap-3 lg:gap-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-16">
        <Image
          src={userPicture}
          width={900}
          height={600}
          alt="photography"
          className="w-[30rem] h-[20rem] rounded-2xl object-cover"
          priority
        />
        <div className="flex flex-col max-w-[34rem] gap-3">
          <h3 className="text-[2.4rem] sm:text-[3.5rem] font-bold text-center lg:text-left leading-tight">
            {heroTitle}
          </h3>
          <p className="text-[1.1rem] text-muted-foreground text-center lg:text-left leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
