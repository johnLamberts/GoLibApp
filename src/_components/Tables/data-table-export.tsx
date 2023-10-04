import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cell } from "@tanstack/react-table";
import { DownloadIcon } from "lucide-react";

import FileSaver from "file-saver";
import * as XLSX from "xlsx";

interface DataTableViewOptionsProps<TData, TValue> {
  data: Cell<TData, TValue>[];
}

export default function DataTableExportOptions<TData, TValue>({
  data,
}: DataTableViewOptionsProps<TData, TValue>) {
  //  ================

  const exportExcelFile = (excelData: unknown[], fileName: string) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(excelData);
    const excelBuffer = XLSX.write(
      {
        Sheets: { data: ws },
        SheetNames: ["data"],
      },
      { bookType: "xlsx", type: "array" }
    );
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const exportCSVFile = (csvData: unknown[], fileName: string) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".csv";
    const ws = XLSX.utils.json_to_sheet(csvData);
    const excelBuffer = XLSX.write(
      {
        Sheets: { data: ws },
        SheetNames: ["data"],
      },
      { bookType: "csv", type: "array" }
    );
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Format</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <div className="flex flex-col">
            <Button
              size="sm"
              variant="outline"
              className="capitalize"
              onClick={() => {
                return exportExcelFile(data, "Student Registered Report");
              }}
            >
              {" "}
              Excel
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="capitalize"
              onClick={() => {
                console.log("exporting", JSON.stringify(data, null, 4));
              }}
              // checked={column.getIsVisible()}
              // onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {" "}
              PDF
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="capitalize"
              onClick={() => {
                return exportCSVFile(data, "Student Registered Report");
              }}
              // checked={column.getIsVisible()}
              // onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {" "}
              CSV
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
