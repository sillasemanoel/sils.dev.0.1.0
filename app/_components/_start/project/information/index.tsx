import prisma from "@/lib/db";

export async function Information() {
  const project = await prisma.project.findUnique({
    where: { id: process.env.ABOUT_ID },
    include: {
      user: true,
    },
  });

  const projectTitle = project?.title as string;
  const projectDescription = project?.description as string;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[2.4rem] sm:text-[3.5rem] font-bold text-center leading-tight">
        {projectTitle}
      </h3>
      <p className="text-[1.1rem] text-muted-foreground text-center leading-relaxed">
        {projectDescription}
      </p>
    </div>
  );
}
