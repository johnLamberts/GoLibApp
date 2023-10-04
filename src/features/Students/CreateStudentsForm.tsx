import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
import { Info } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const studentFormSchema = z.object({
  id: z.number().optional(),
  student_number: z.string().min(2, {
    message: "Student Number is required",
  }),
  fname: z.string().min(2, {
    message: "First name  is required",
  }),
  mname: z.string().min(2, {
    message: "Middle name  is required",
  }),
  lname: z.string().min(2, {
    message: "last name  is required",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email is required",
    })
    .email("Invalid email"),
  // dob: z.preprocess(
  //   (args) => (typeof args === "string" ? new Date(args) : undefined),
  //   z.date()
  // ),
  // dob: z.coerce.date({
  //   required_error: "This field is required",
  // }),
  // dob: z.date().or(z.string().datetime()),
  // dob: z.string().transform((str) => new Date(str)),
});

export type StudentForm = z.infer<typeof studentFormSchema>;
// type StudentForm = keyof studentFormSchema;

export default function CreateStudentsForm({ task = {} }: any) {
  const { id: editId, ...otherValues } = task;
  const isEdit = Boolean(editId);

  const form = useForm<StudentForm>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: isEdit ? otherValues : {},
  });

  function onSubmit(data: StudentForm) {
    alert(JSON.stringify(data, null, 4));
  }

  return (
    <>
      {/* <div className=""> */}
      <ScrollArea className="h-full px-5">
        <div className="">
          <div className="sticky inset-0 h-10 shadow-sm bg-background/55 w-full backdrop-blur ">
            <Popover>
              <PopoverTrigger>
                <div className="flex flex-row-reverse gap-1 items-center">
                  <h3>{isEdit ? "Modify" : "Register"} your students</h3>
                  <Info className="ml-1 h-3 w-3" />
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="space-y-3 rounded-[0.5rem] text-sm"
                side="right"
                align="start"
                alignOffset={-20}
              >
                <p className="font-medium">
                  What is the difference between the New York and Default style?
                </p>
                <p>
                  A style comes with its own set of components, animations,
                  icons and more.
                </p>
                <p>
                  The <span className="font-medium">Default</span> style has
                  larger inputs, uses lucide-react for icons and
                  tailwindcss-animate for animations.
                </p>
                <p>
                  The <span className="font-medium">New York</span> style ships
                  with smaller buttons and cards with shadows. It uses icons
                  from Radix Icons.
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <Separator className="my-3" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="student_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Student Number" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the author&apos;s name that will be displayed on
                      your combo boxes when creating and updating your books.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Firstname" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the author&apos;s name that will be displayed on
                      your combo boxes when creating and updating your books.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Middlename" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the author&apos;s name that will be displayed on
                      your combo boxes when creating and updating your books.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Last name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the author&apos;s name that will be displayed on
                      your combo boxes when creating and updating your books.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the author&apos;s name that will be displayed on
                      your combo boxes when creating and updating your books.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <Button>Add Student</Button>
            </form>
          </Form>
        </div>{" "}
      </ScrollArea>
      {/* </div> */}
    </>
  );
}
