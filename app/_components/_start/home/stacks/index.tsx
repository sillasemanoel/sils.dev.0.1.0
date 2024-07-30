import prisma from "@/lib/db";
import { Badge } from "@/components/ui/badge";

export async function Stacks() {
  const stacks = await prisma.stack.findMany({
    where: { heroId: process.env.HERO_ID },
    orderBy: { id: "asc" },
  });

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1">
        {stacks.length
          ? stacks.map((stack) => (
              <div key={stack.id}>
                <Badge className="bg-[#2d2e32] dark:bg-muted hover:bg-[#2d2e32]">
                  {stack.name}
                </Badge>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
