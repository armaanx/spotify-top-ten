import TopTenList from "./toptenlist";
import Image from "next/image";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
const _ = require("lodash");
export default function TopTen({ timeRange, type, name }) {
  const day = dayjs().format("DD MMMM YYYY");
  const time = dayjs().format("H:mm");
  const [randomNumber, setRandomNumber] = useState(Math.floor(null));
  const webUrl = "spotify-music-card.vercel.app";
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 90 + 10));
  }, []);
  var period;

  if (timeRange === "short_term") {
    period = "Last Month";
  }
  if (timeRange === "medium_term") {
    period = "Last 6 months";
  }
  if (timeRange === "long_term") {
    period = "Last Year";
  }
  return (
    <div
      id="my-node"
      className="w-[340px]  m-auto p-3 pt-2 flex flex-col mb-4 bg-[url('/paper.jpg')] bg-opacity-100 bg-cover">
      <div className="flex flex-col items-center justify-center border-b-[1px] border-black border-dashed mb-3">
        <h1 className="text-2xl font-bold  font-[Montserrat] tracking-wider">
          Top {_.capitalize(type)}
        </h1>
        <h1 className="font-mono">{period}</h1>
        <div className="space-x-8 text-sm pb-1 pt-1 font-mono">
          <span>{day}</span>
          <span>{time}</span>
        </div>
      </div>
      <TopTenList type={type} timeRange={timeRange} />
      <div className="flex flex-col items-center justify-center  font-mono text-sm mt-2 pt-1 border-t-[1px] border-black border-dashed">
        <h1>Card #00{randomNumber}</h1>
        <h1>User: {name}</h1>
        <h1 className="text-xs pt-1">music-card-generator.vercel.app</h1>
        <Image
          quality={100}
          className="p-2 mt-1"
          width={120}
          height={120}
          src={"/spotify_logo.png"}
        />
      </div>
    </div>
  );
}
