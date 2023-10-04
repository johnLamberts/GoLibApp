import { Cell, Table } from "@tanstack/react-table";
import React from "react";
// import DataTableFacetedFilter from "./data-table-faceted-filter";
// import { priorities, statuses } from "./label";
// import { Button } from "@/components/ui/button";
// import { CrossIcon } from "lucide-react";
import DataTableViewOptions from "./data-table-view-options";
import DataTableExportOptions from "./data-table-export";

interface DataTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  data: Cell<TData, TValue>[];
}

export default function DataTableToolbar<TData, TValue>({
  table,
  data,
}: DataTableToolbarProps<TData, TValue>) {
  // const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      {/* <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}

        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <CrossIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div> */}
      <div className="flex justify-between gap-2">
        <DataTableViewOptions table={table} />
        <DataTableExportOptions data={data} />
      </div>
    </div>
  );
}
