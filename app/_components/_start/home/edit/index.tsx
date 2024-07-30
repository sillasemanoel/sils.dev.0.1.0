"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import {
  FormSchema,
  FormSchemaType,
} from "@/app/_schemas/_start/home/_minor-components/edit";

export function Edit() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      descricao: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    // await AddTodo(data);
    router.refresh();

    ref.current?.click();

    toast({
      title: "Sucesso",
      description: "Sua tarefa foi inserida com sucesso.",
    });
  });

  return (
    <div className="flex justify-end w-full">
      <Sheet>
        <SheetTrigger asChild>
          <div ref={ref}>
            <Button size="sm" className="flex gap-2">
              <Pencil2Icon className="w-4 h-4" />
              Editar
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <SheetHeader className="!text-left">
                <SheetTitle>Editar Perfil</SheetTitle>
                <SheetDescription>
                  Faça alterações em seu perfil aqui. Clique em salvar quando
                  terminar.
                </SheetDescription>
              </SheetHeader>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex h-4 items-center justify-between">
                      <FormLabel>Título</FormLabel>
                      <FormMessage className="p-0" />
                    </div>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex h-4 items-center justify-between">
                      <FormLabel>Descrição</FormLabel>
                      <FormMessage className="p-0" />
                    </div>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-col items-start justify-between gap-2">
                <Label htmlFor="picture">Foto</Label>
                <Input id="picture" type="file" className="cursor-pointer" />
              </div>
              <SheetFooter className="mt-auto">
                <Button disabled={form.formState.isSubmitting} type="submit">
                  {form.formState.isSubmitting
                    ? "Salvando..."
                    : "Salvar alterações"}
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
