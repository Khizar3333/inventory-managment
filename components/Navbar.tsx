import { auth } from "@/auth";
import Link from "next/link";

import Image from "next/image";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className=" border-b    flex items-center justify-between">
      <div className="flex w-full items-center justify-between gap-20 px-4 my-4">
        <Link className="font-bold" href="/">
          Home
        </Link>

        {/* <div className="flex items-center gap-x-5">
          <Link href="/middleware">Middleware</Link>
          <Link href="/server">Server</Link>
        </div> */}

        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link href="/sign-in">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
                Login
              </div>
            </Link>
          ) : (
            <>
              
              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
