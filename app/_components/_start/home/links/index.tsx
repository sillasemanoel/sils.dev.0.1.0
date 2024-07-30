import Link from "next/link";
import prisma from "@/lib/db";
import { getIcon } from "@/app/_utils/_start/hero/links";

export async function Links() {
  const links = await prisma.link.findMany({
    where: { heroId: process.env.HERO_ID },
    orderBy: { id: "asc" },
  });

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start py-1">
      {links.length
        ? links.map((link) => (
            <Link key={link.id} href={link.link}>
              {getIcon(link.name)}
            </Link>
          ))
        : null}
    </div>
  );
}
