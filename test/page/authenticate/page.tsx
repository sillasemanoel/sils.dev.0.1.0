import prisma from "@/lib/db";
import { getNameCapitalized } from "@/app/_utils/format-text";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FormCustom } from "@/app/_components/authenticate/form";

export default async function Authenticate() {
  const user = await prisma.user.findUnique({
    where: { id: process.env.USER_ID },
  });

  const userName = user?.name as string;

  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <Card className="flex w-full max-w-md flex-col border-none shadow-none">
        <CardHeader className="gap-2">
          <CardTitle className="text-3xl font-bold">
            Olá, {getNameCapitalized(userName)}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Após inserir sua chave, será possível fazer edições.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormCustom />
        </CardContent>
      </Card>
    </section>
  );
}
