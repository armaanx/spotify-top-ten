import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { getProviders, signIn } from "next-auth/react";
export default function Login({ providers }) {
  return (
    <>
      <div className="mb-28">
        <NavBar />
      </div>
      <div className="font-[Montserrat] min-w-[340px] p-5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 p-8 border-2 border-black rounded-3xl w-fit shadow-sm shadow-[#9c9c9c]">
          <h1 className="text-4xl font-bold">Music Card</h1>
          <h2 className="text-lg font-medium ">Top Tracks Generator</h2>
          <h3 className="text-md font-normal mb-4">
            This website generates a card for your top tracks/artists on
            Spotify, beautifully!
          </h3>

          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="bg-[#1ed760] text-black p-3 rounded-full font-semibold">
                  Login with {provider.name}
                </button>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
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
