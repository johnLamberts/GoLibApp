import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// eslint-disable-next-line react-refresh/only-export-components
export const authorSchema = z.object({
  id: z.number().optional(),
  author_name: z.string().min(2, {
    message: "Author name must be at least 2 characters",
  }),
});

export type Author = z.infer<typeof authorSchema>;

export default function CreateAuthors() {
  const form = useForm<Author>({
    resolver: zodResolver(authorSchema),
  });

  function onSubmit(data: Author) {
    alert(JSON.stringify(data, null, 4));
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="author_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Your author" {...field} />
                </FormControl>
                <FormDescription>
                  This is the author&apos;s name that will be displayed on your
                  combo boxes when creating and updating your books.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Add Author</Button>
        </form>
      </Form>
    </>
  );
}
