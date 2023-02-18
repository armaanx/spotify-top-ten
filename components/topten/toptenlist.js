import useSpotify from "@/hooks/useSpotify";
import { millisToMinutes } from "@/lib/timeConvert";
import { useSession } from "next-auth/react";
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
  console.log(topten);
  return (
    <>
      {topten.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </>
  );
}
//- {track.artists.map((artist) => artist.name + ", ")}
