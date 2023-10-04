import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import CreateStudentsForm, {
  studentFormSchema,
} from "@/features/Students/CreateStudentsForm";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Row } from "@tanstack/react-table";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import * as Sheet from "@radix-ui/react-dialog";
// import { Button } from "@/components/ui/button";
// import { MoreHorizontal, X } from "lucide-react";

declare module "react" {
  function forwardRef<T, P = Record<string, any>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export default function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = studentFormSchema.parse(row.original);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <Sheet>
            <SheetTrigger className="w-full">
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                Edit
              </DropdownMenuItem>
            </SheetTrigger>
            <SheetContent>
              <CreateStudentsForm task={task} />
            </SheetContent>
          </Sheet>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
            {/* <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={task.label}>
                {labels.map((label) => (
                  <DropdownMenuRadioItem key={label.value} value={label.value}>
                    {label.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent> */}
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

// const SheetItem = forwardRef(
//   (props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
//     const { triggerChildren, children, onSelect, onOpenChange, ...itemProps } =
//       props;
//     return (
//       <Sheet.Root onOpenChange={onOpenChange}>
//         <Sheet.Trigger asChild>
//           <DropdownMenu.Item
//             {...itemProps}
//             ref={forwardedRef}
//             className="DropdownMenuItem"
//             onSelect={(event) => {
//               event.preventDefault();
//               onSelect && onSelect?.();
//             }}
//           >
//             {triggerChildren}
//           </DropdownMenu.Item>
//         </Sheet.Trigger>
//         <Sheet.Portal>
//           <Sheet.Overlay className="DialogOverlay" />
//           <Sheet.Content className="DialogContent">
//             {children}
//             <Sheet.Close asChild>
//               <X className="h-4 w-4" />
//               <span className="sr-only">Close</span>
//             </Sheet.Close>
//           </Sheet.Content>
//         </Sheet.Portal>
//       </Sheet.Root>
//     );
//   }
// );
