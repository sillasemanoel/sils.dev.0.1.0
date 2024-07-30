import { getTwoNamesCapitalized } from "@/app/_utils/format-text";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export async function Category() {
  const projectCategorys = await prisma.projectCategory.findMany({
    where: { projectId: process.env.PROJECT_ID },
    orderBy: { id: "asc" },
  });

  return (
    <div className="flex justify-center">
      {projectCategorys.length
        ? projectCategorys.map((projectCategory) => (
            <Button key={projectCategory.id} variant="outline">
              {getTwoNamesCapitalized(projectCategory.name)}
            </Button>
          ))
        : null}
    </div>
  );
}
