import Image from "next/image";
import prisma from "@/lib/db";
import { getNameToLowerCase } from "@/app/_utils/format-text";

interface profileProps {
  children: React.ReactNode;
}

export async function Profile(props: profileProps) {
  const hero = await prisma.hero.findUnique({
    where: { id: process.env.HERO_ID },
    include: {
      user: true,
    },
  });

  const userName = hero?.user.name as string;
  const userPicture = hero?.user.picture as string;
  const heroTitle = hero?.title as string;
  const heroDescription = hero?.description as string;

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-7 lg:gap-16">
      <div className="flex flex-col max-w-[34rem] gap-3">
        <h1 className="text-[2.4rem] sm:text-[3.5rem] font-bold text-center lg:text-left leading-tight">
          {heroTitle}
        </h1>
        <p className="text-[1.1rem] text-muted-foreground text-center lg:text-left leading-relaxed">
          {heroDescription}
        </p>
        {props.children}
      </div>
      <Image
        src={userPicture}
        width={320}
        height={320}
        alt={getNameToLowerCase(userName)}
        className="h-96 w-96 animate-border-radius shadow-custom"
        priority
      />
    </div>
  );
}
