import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { HiHeart } from "react-icons/hi";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="min-w-[340px] grid place-items-center">
        <div className="font-[Montserrat] flex flex-col justify-center items-center mt-20 p-5 border-[1px] border-black max-w-fit rounded-2xl shadow-sm shadow-[#9c9c9c] gap-2 ">
          <span>
            Inspired by{" "}
            <a
              className=" text-blue-500"
              href="https://receiptify.herokuapp.com/ "
              target="_blank"
              rel="noopener noreferrer">
              Receiptify
            </a>
          </span>
          <span>
            Powered by{" "}
            <a
              className=" text-blue-500"
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
              rel="noopener noreferrer">
              Spotify Web API
            </a>
          </span>
          <span>
            Built with <span className="font-semibold">Next.Js</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>
          </span>{" "}
          <HiHeart className="text-lg" />
        </div>
        <div className="text-center font-[Montserrat] text-xs p-10 w-fit font-medium">
          <h1>
            If the website doesn't work, enable pop-ups in your browser and try
            disabling your extensions.
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
