import { signOut, useSession } from "next-auth/react";
import { HiLogout } from "react-icons/hi";
export default function NavBar() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="min-w-[340px] border-t-[5px] border-[#050505] flex flex-row items-center justify-between p-3 bg-[#dfecd8] md:justify-evenly">
        <h1 className="font-semibold text-3xl text-[#0d0d0d] pl-1 font-[Montserrat]">
          Top Ten
        </h1>
        <div className="flex flex-row items-center justify-center">
          {session ? (
            <div className="flex flex-row items-center space-x-1 bg-[#050505] rounded-full p-1  hover:opacity-80 ">
              <img
                className="rounded-full w-10 h-10"
                src={session.user.image}></img>
            </div>
          ) : null}

          {session ? (
            <div className="flex flex-row items-center justify-center  rounded-full bg-[#050505] p-2 ml-2 pl-3 hover:opacity-80">
              <button title="Log Out" onClick={signOut}>
                <HiLogout className="text-gray-200 h-5 w-5 " />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
