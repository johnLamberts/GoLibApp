import { DataTable } from "@/_components/Tables/data-table";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { gradeLevelColumns } from "./GradeLevelColumns";
import CreateGradeLevel from "./CreateGradeLevel";

const gradeLevel = [
  {
    id: 1,
    grade_level: "Kindergarten",
    description:
      "Introduction to basic concepts, numbers, letters, and socialization skills.",
  },
  {
    id: 2,
    grade_level: "Grade 1",
    description:
      "Fundamental education in reading, writing, math, and basic subjects.",
  },
  {
    id: 3,
    grade_level: "Grade 2",
    description:
      "Continuation of basic subjects with an emphasis on skills development.",
  },
  {
    id: 4,
    grade_level: "Grade 3",
    description:
      "Further development of reading, writing, and math skills, introduction to science and Filipino subjects.",
  },
  {
    id: 5,
    grade_level: "Grade 4",
    description:
      "Advanced reading and math skills, deeper exploration of science, and Filipino language.",
  },
  {
    id: 6,
    grade_level: "Grade 5",
    description:
      "Enhanced communication skills, more complex math concepts, and science topics.",
  },
  {
    id: 7,
    grade_level: "Grade 6",
    description:
      "Preparation for elementary school completion, mastery of core subjects.",
  },
  {
    id: 8,
    grade_level: "Junior High School Grade 7",
    description:
      "Transition to secondary education, introduction to specialized subjects.",
  },
  {
    id: 9,
    grade_level: "Junior High School Grade 8",
    description:
      "Continuation of secondary education, deeper exploration of specialized subjects.",
  },
  {
    id: 10,
    grade_level: "Junior High School Grade 9",
    description:
      "Preparation for senior high school, focus on career tracks and electives.",
  },
  {
    id: 11,
    grade_level: "Junior High School Grade 10",
    description: "Completion of the junior high school curriculum.",
  },
  {
    id: 12,
    grade_level: "Senior High School Grade 11",
    description:
      "Preparation for college or career, specialized tracks and subjects.",
  },
  {
    id: 13,
    grade_level: "Senior High School Grade 12",
    description:
      "Final year of senior high school, completion of chosen tracks.",
  },
];
export default function GradeLevel() {
  return (
    <div className="w-full flex flex-col ">
      <Sheet>
        <div className="pb-4 pt-2 flex justify-between">
          <Badge className="text-xs ">List of Grade Level</Badge>
          <SheetTrigger>
            <Button size={"sm"} className="left-90">
              Create Grade Level
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent side={"right"} className="md:w-[50rem]">
          <CreateGradeLevel />
        </SheetContent>
      </Sheet>
      <div>
        <DataTable data={gradeLevel} columns={gradeLevelColumns} />
      </div>
    </div>
  );
}
