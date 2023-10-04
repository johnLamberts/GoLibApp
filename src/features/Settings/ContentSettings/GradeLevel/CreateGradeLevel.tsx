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

const formSchema = z.object({
  gradeLevel: z.string(),
});

type UserFormValues = z.infer<typeof formSchema>;

export default function CreateGradeLevel() {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: UserFormValues) {
    alert(JSON.stringify(data, null, 4));
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="gradeLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade Level</FormLabel>
                <FormControl>
                  <Input placeholder="Your grade level" {...field} />
                </FormControl>
                <FormDescription>
                  This is the Grade Level that will be displayed on your combo
                  boxes when creating and updating your books.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Add Grade Level</Button>
        </form>
      </Form>
    </>
  );
}
