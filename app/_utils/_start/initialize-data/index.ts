import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function initializeData() {
  const userId = process.env.USER_ID || "otataefoda";
  const userName = process.env.USER_NAME || "default name";
  const userSurname = process.env.USER_SURNAME || "default surname";
  const userEmail = process.env.USER_EMAIL || "default@example.com";
  const userPassword = process.env.USER_PASSWORD || "default";
  const userFavicon = process.env.USER_FAVICON || "/favicon.ico";
  const userPicture =
    process.env.USER_PICTURE || "/photographys/default-picture.png";

  const heroId = process.env.HERO_ID || "otataefoda";
  const heroTitle = process.env.HERO_TITLE || "default title";
  const heroDescription = process.env.HERO_DESCRIPTION || "default description";

  const aboutId = process.env.ABOUT_ID || "otataefoda";
  const aboutTitle = process.env.ABOUT_TITLE || "default title";
  const aboutDescription =
    process.env.ABOUT_DESCRIPTION || "default description";
  const aboutPicture =
    process.env.ABOUT_PICTURE || "/about/default-picture.png";

  const projectId = process.env.PROJECT_ID || "otataefoda";
  const projectTitle = process.env.PROJECT_TITLE || "default title";
  const projectDescription =
    process.env.PROJECT_DESCRIPTION || "default description";

  const userExists = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userExists) {
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    await prisma.user.create({
      data: {
        id: userId,
        name: userName,
        surname: userSurname,
        email: userEmail,
        password: hashedPassword,
        favicon: userFavicon,
        picture: userPicture,
      },
    });
  }

  const heroExists = await prisma.hero.findUnique({
    where: { id: heroId },
  });

  if (!heroExists) {
    await prisma.hero.create({
      data: {
        id: heroId,
        title: heroTitle,
        description: heroDescription,
        userId: userId,
      },
    });
  }

  const aboutExists = await prisma.about.findUnique({
    where: { id: aboutId },
  });

  if (!aboutExists) {
    await prisma.about.create({
      data: {
        id: aboutId,
        title: aboutTitle,
        description: aboutDescription,
        picture: aboutPicture,
        userId: userId,
      },
    });
  }

  const projectExists = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!projectExists) {
    await prisma.project.create({
      data: {
        id: projectId,
        title: projectTitle,
        description: projectDescription,
        userId: userId,
      },
    });
  }
}
