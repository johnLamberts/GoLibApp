import Navbar from "@/_components/navbar";
import Sidebar from "@/_components/sidebar";
import { Outlet } from "react-router-dom";

// interface RootLayoutProps {
//   children?: React.ReactNode;
// }

export default function AdminLayouts() {
  return (
    <>
      <div className="h-full">
        <div
          className={`h-[80px] md:pl-56 sticky z-50 w-full inset-y-0 shadow border-b supports-backdrop-blur:bg-background/60 top-0 bg-background/95 backdrop-blur`}
        >
          <Navbar />
        </div>

        <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50 ">
          <Sidebar />
        </div>

        <main className="md:pl-60 pt-[10px] h-full">
          <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
