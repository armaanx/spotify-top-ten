import { signOut, useSession } from "next-auth/react";
import { HiLogout } from "react-icons/hi";
export default function NavBar() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="border-t-4 border-[#ef9273] flex flex-row items-center justify-between p-3 bg-[#fef9f8] md:justify-evenly">
        <h1 className="font-black text-4xl text-[#0d0d0d] pl-1 font-[Caveat]">
          Top Ten
        </h1>
        <div className="flex flex-row items-center justify-center">
          {session ? (
            <div className="flex flex-row items-center space-x-1 bg-[#ef9273] rounded-full p-1  hover:opacity-80 ">
              <img
                className="rounded-full w-10 h-10"
                src={session.user.image}></img>
            </div>
          ) : null}

          {session ? (
            <div className="flex flex-row items-center justify-center  rounded-full bg-[#ef9273] p-2 ml-2 pl-3 hover:opacity-80">
              <button title="Log Out" onClick={signOut}>
                <HiLogout className="text-[#0d0d0d] h-5 w-5 " />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
