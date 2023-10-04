import { DataTable } from "@/_components/Tables/data-table";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { authorsColumns } from "./AuthorColumns";
import CreateAuthors from "./CreateAuthors";

const authors = [
  { id: 1, author_name: "Socrates" },
  { id: 2, author_name: "Plato" },
  { id: 3, author_name: "Aristotle" },
  { id: 4, author_name: "Confucius" },
  { id: 5, author_name: "Immanuel Kant" },
  { id: 6, author_name: "Jean-Jacques Rousseau" },
  { id: 7, author_name: "Friedrich Nietzsche" },
  { id: 8, author_name: "John Locke" },
  { id: 9, author_name: "Thomas Hobbes" },
  { id: 10, author_name: "Rene Descartes" },
];

export default function Authors() {
  // const [authors, setAuthors] = useState<Author[]>([]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   async function getAuthors() {
  //     try {
  //       const res = await fetch("../data/authors.json", { signal });

  //       const data = await res.json();

  //       const test = z.array(authorSchema).parse(data);
  //       console.log(test);
  //       //    ^?
  //       setAuthors(test);
  //     } catch (error) {
  //       if ((error as Error)?.message === "AbortError") {
  //         throw new Error(`${(error as Error).message}`);
  //       }
  //       throw new Error(`${(error as Error).message}`);
  //     }
  //   }

  //   getAuthors();
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <>
      <div className="w-full flex flex-col ">
        <Sheet>
          <div className="pb-4 pt-2 flex justify-between">
            <Badge className="text-xs ">List of Authors</Badge>
            <SheetTrigger>
              <Button size={"sm"} className="left-90">
                Create Author
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent>
            <CreateAuthors />
          </SheetContent>
        </Sheet>
        <div>
          <DataTable data={authors} columns={authorsColumns} />
        </div>
      </div>
    </>
  );
}
