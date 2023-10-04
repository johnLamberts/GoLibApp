import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CreateStudentsForm from "@/features/Students/CreateStudentsForm";
import StudentTable from "@/features/Students/StudentTable";

export default function StudentMember() {
  return (
    <>
      {/* <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex"> */}
      <div className="space-y-0.5">
        <h3 className="text-lg font-medium">Student Management</h3>
        <p className="text-sm text-muted-foreground">
          Manage your students member and set data preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="w-full flex flex-col ">
        <Sheet>
          <div className="pb-4 pt-2 flex justify-between">
            <Badge className="text-xs ">List of Students</Badge>
            <SheetTrigger>
              <Button size={"sm"} className="left-90">
                Create Member
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side={"right"}>
            <CreateStudentsForm />
          </SheetContent>
        </Sheet>
        <div>
          <StudentTable />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
