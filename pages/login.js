import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { getProviders, signIn } from "next-auth/react";
import { BsSpotify } from "react-icons/bs";
export default function Login({ providers }) {
  return (
    <>
      <div className="mb-24">
        <NavBar />
      </div>
      <div className="font-[Montserrat] min-w-[340px] p-5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 p-8 border-[1px] border-black rounded-3xl max-w-[340px] shadow-sm shadow-[#9c9c9c] text-center">
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
                  className="flex flex-row items-center justify-center gap-2 bg-[#1ed760] shadow-sm shadow-stone-500 text-black p-3 rounded-full font-semibold hover:text-white hover:bg-[#0d0d0d]">
                  Login with {provider.name}
                  <BsSpotify className="text-3xl" />
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
