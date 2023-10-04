import { DataTable } from "@/_components/Tables/data-table";
import { genresColumns } from "./GenresColumns";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import CreateGenres from "./CreateGenres";

const genres = [
  { id: 1, genres_name: "Science Fiction" },
  { id: 2, genres_name: "Mystery" },
  { id: 3, genres_name: "Fantasy" },
  { id: 4, genres_name: "Romance" },
  { id: 5, genres_name: "Thriller" },
  { id: 6, genres_name: "Historical Fiction" },
  { id: 7, genres_name: "Non-Fiction" },
  { id: 8, genres_name: "Horror" },
  { id: 9, genres_name: "Adventure" },
  { id: 10, genres_name: "Biography" },
];
function Genres() {
  return (
    <div className="w-full flex flex-col ">
      <Sheet>
        <div className="pb-4 pt-2 flex justify-between">
          <Badge className="text-xs ">List of Genres</Badge>
          <SheetTrigger>
            <Button size={"sm"} className="left-90">
              Create Genres
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent side={"right"} className="md:w-[50rem]">
          <CreateGenres />
        </SheetContent>
      </Sheet>
      <div>
        <DataTable data={genres} columns={genresColumns} />
      </div>
    </div>
  );
}

export default Genres;
