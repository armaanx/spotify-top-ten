import { getProviders, signIn } from "next-auth/react";
export default function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen w-full justify-center">
      <img className="mb-7" src="/spotify.svg" />
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-black text-white p-4 rounded-full font-semibold">
              Login with {provider.name}
            </button>
          </div>
        );
      })}
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
