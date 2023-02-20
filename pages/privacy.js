import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <>
      <NavBar />
      <div className="min-w-[340px] grid place-items-center p-8 pt-1">
        <div className="font-[Montserrat] flex flex-col justify-center items-center mt-20 p-5 border-[1px] border-black max-w-[340px] rounded-2xl shadow-sm shadow-[#9c9c9c] text-center ">
          <span className="font-bold text-2xl pb-4">Privacy Policy</span>
          <span className=" text-[15px] ">
            This website uses Spotify Web API to fetch user details and top
            tracks/artists to display your card. None of the data is
            stored/collected or shared with third parties. This website can't
            change any information in your Spotify Account.
          </span>
          <span className=" text-[15px] mt-3">
            You can follow this{" "}
            <a
              href="https://support.spotify.com/us/article/spotify-on-other-apps/"
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer">
              guide
            </a>{" "}
            to revoke this websites permissions.
          </span>
        </div>

        <Footer />
      </div>
    </>
  );
}
