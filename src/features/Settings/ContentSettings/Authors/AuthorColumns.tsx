import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import DataTableColumnHeader from "@/_components/Tables/data-table-column-header";
import { Author } from "./CreateAuthors";

export const authorsColumns: ColumnDef<Author>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "author_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("author_name")}
          </span>
        </div>
      );
    },
  },
  // {
  //   // id: "actions",
  //   // cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
