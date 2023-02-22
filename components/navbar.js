import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
export default function NavBar() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="min-w-[340px] border-t-[5px] border-[#050505] flex flex-row items-center justify-between p-3 bg-[#dfecd8] md:justify-evenly">
        <Link
          href="/"
          className="bg-[#0d0d0d] font-semibold text-lg text-white rounded-full p-2 pl-2 pr-2 font-[Montserrat] hover:opacity-90 cursor-pointer">
          Music Card
        </Link>
        <div className="flex flex-row items-center justify-center">
          {session ? (
            <div className="flex flex-row items-center space-x-1 bg-[#050505] rounded-full p-1  hover:opacity-80 drop-shadow-md ">
              <img
                className="rounded-full h-10 w-10"
                src={session.user.image}></img>
            </div>
          ) : null}

          {session ? (
            <div className="flex flex-row items-center justify-center  rounded-full bg-[#050505] p-2 ml-2 pl-3 hover:opacity-80 drop-shadow-md hover:bg-red-600">
              <button title="Log Out" onClick={signOut}>
                <HiLogout className="text-gray-200 h-5 w-5 hover:text-black " />
              </button>
            </div>
          ) : null}
          {!session ? (
            <div className="flex flex-row items-center justify-center space-x-3 font-[Montserrat] text-sm font-semibold">
              <Link
                href="/about"
                className="p-2 hover:bg-[#c9e4bc98] rounded-full hover:text-green-700 active:bg-[#c9e4bc98] active:text-green-700 ">
                About
              </Link>
              <Link
                href="/contact"
                className="p-2 hover:bg-[#c9e4bc98] rounded-full hover:text-green-700 active:bg-[#c9e4bc98] active:text-green-700">
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
