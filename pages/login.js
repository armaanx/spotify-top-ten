import NavBar from "@/components/navbar";
import { getProviders, signIn } from "next-auth/react";
export default function Login({ providers }) {
  return (
    <div className="min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <img
          className="mb-7 mt-7 w-40 h-40"
          src="/Spotify_Icon_RGB_Green.png"
        />
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-[#1ed760] text-black p-4 rounded-full font-semibold">
                Login with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
