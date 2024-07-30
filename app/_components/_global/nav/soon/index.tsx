import Image from "next/image";
import prisma from "@/lib/db";
import { camelCaseName } from "@/app/_utils/format-text";

export async function Soon() {
  const user = await prisma.user.findUnique({
    where: {
      id: process.env.USER_ID,
    },
  });

  const userSurname = user?.surname as string;
  const userFavicon = user?.favicon as string;

  return (
    <div className="flex flex-none items-center gap-2">
      <Image
        src={userFavicon}
        width={160}
        height={160}
        alt="Picture of the author"
        className="h-7 w-7"
        priority
      />
      <span className="text-xl font-bold">
        {camelCaseName(userSurname)}.dev
      </span>
    </div>
  );
}
