import NavBar from "@/components/navbar";
import TopTen from "@/components/topten/TopTen";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function Home() {
  const { data: session, status } = useSession();
  const [timeRange, setTimeRange] = useState("short_term");
  const [showType, setShowType] = useState("tracks");

  function onOptionChange(e) {
    setShowType(e.target.value);
  }
  function onTimeChange(e) {
    setTimeRange(e.target.value);
  }

  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center gap-1 p-2 text-sm">
        <div>
          <input
            onChange={onOptionChange}
            checked={showType === "tracks"}
            id="tracks"
            name="tracks"
            value="tracks"
            type="radio"
            className="peer hidden"></input>
          <label
            htmlFor="tracks"
            className="block border-blue-500 border-2 font-bold font-[Helvetica] cursor-pointer select-none rounded-xl p-1.5 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            Top Tracks
          </label>
        </div>

        <div>
          <input
            onChange={onOptionChange}
            checked={showType === "artists"}
            id="artists"
            name="artists"
            value="artists"
            type="radio"
            className="peer hidden"></input>
          <label
            htmlFor="artists"
            className="block border-blue-500 border-2 font-bold font-[Helvetica] cursor-pointer select-none rounded-xl p-1.5 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            Top Artists
          </label>
        </div>
      </div>
      {/* timeRange */}
      <div className="flex items-center justify-center gap-1 pb-2 pr-2 pl-2 text-sm">
        <div>
          <input
            onChange={onTimeChange}
            checked={timeRange === "short_term"}
            id="short_term"
            name="short_term"
            value="short_term"
            type="radio"
            className="peer hidden"></input>
          <label
            htmlFor="short_term"
            className="block border-blue-500 border-2 font-bold font-[Helvetica] cursor-pointer select-none rounded-xl p-1.5 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            Last Month
          </label>
        </div>

        <div>
          <input
            onChange={onTimeChange}
            checked={timeRange === "medium_term"}
            id="medium_term"
            name="medium_term"
            value="medium_term"
            type="radio"
            className="peer hidden"></input>
          <label
            htmlFor="medium_term"
            className="block border-blue-500 border-2 font-bold font-[Helvetica] cursor-pointer select-none rounded-xl p-1.5 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            Last 6 Months
          </label>
        </div>
        <div>
          <input
            onChange={onTimeChange}
            checked={timeRange === "long_term"}
            id="long_term"
            name="long_term"
            value="long_term"
            type="radio"
            className="peer hidden"></input>
          <label
            htmlFor="long_term"
            className="block border-blue-500 border-2 font-bold font-[Helvetica] cursor-pointer select-none rounded-xl p-1.5 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            Last Year
          </label>
        </div>
      </div>
      <TopTen timeRange={timeRange} type={showType} />
    </>
  );
}
