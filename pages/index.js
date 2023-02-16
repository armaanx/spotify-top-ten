import { signOut, useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-row items-center justify-center">
      <h1>Spotify Top Ten</h1>
      <button
        onClick={() => signOut()}
        className="bg-black text-white rounded-full p-3 ml-4">
        Log Out
      </button>
    </div>
  );
}
