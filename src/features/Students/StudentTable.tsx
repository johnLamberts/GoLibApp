import { columns } from "@/_components/Tables/columns";
import { DataTable } from "@/_components/Tables/data-table";
import { useEffect, useState } from "react";
import { z } from "zod";
import { StudentForm, studentFormSchema } from "./CreateStudentsForm";

export default function StudentTable() {
  const [tasks, setTasks] = useState<StudentForm[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getTasks() {
      try {
        const res = await fetch("data/students.json", { signal });

        const data = await res.json();

        const test = z.array(studentFormSchema).parse(data);
        console.log(test);
        //    ^?
        setTasks(test);
      } catch (error) {
        if ((error as Error)?.message === "AbortError") {
          throw new Error(`${(error as Error).message}`);
        }
        throw new Error(`${(error as Error).message}`);
      }
    }

    getTasks();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  );
}
