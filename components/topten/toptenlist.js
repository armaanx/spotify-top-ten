import useSpotify from "@/hooks/useSpotify";
import { millisToMinutes } from "@/lib/timeConvert";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TopTenList({ timeRange, type }) {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [topten, setTopTen] = useState([]);

  useEffect(() => {
    if (type === "tracks") {
      if (spotifyApi.getAccessToken()) {
        spotifyApi
          .getMyTopTracks({ limit: 10, time_range: timeRange })
          .then((data) => {
            setTopTen(data.body.items);
          });
      }
    }
    if (type === "artists") {
      if (spotifyApi.getAccessToken()) {
        spotifyApi
          .getMyTopArtists({ limit: 10, time_range: timeRange })
          .then((data) => {
            setTopTen(data.body.items);
          });
      }
    }
  }, [session, spotifyApi, timeRange, type]);
  //console.log(topten);
  return (
    <>
      {topten.map((item, index) => (
        <div
          key={index}
          className="grid grid-flow-col grid-cols-[1fr,10fr,2fr] items-center justify-center gap-4 mb-2 font-[Montserrat] text-[13px] font-medium">
          <div className="">
            <h1>{index + 1 + "."}</h1>
          </div>
          <div>
            <h1>
              {item.name}
              <p className="inline">
                {item.artists ? " - " : ""}
                {item.artists?.map((a) => a.name).join(", ")}
              </p>
            </h1>
          </div>
          <div className="place-self-center">
            {type === "artists" && item.images ? (
              <Image
                src={item.images[0].url}
                height={30}
                width={30}
                unoptimized
                alt="artist"></Image>
            ) : null}
            <h1>
              {item.duration_ms ? millisToMinutes(item.duration_ms) : null}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}
//- {track.artists.map((artist) => artist.name + ", ")}
