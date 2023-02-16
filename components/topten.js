import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function TopTen() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [topten, setTopTen] = useState([]);
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMyTopTracks({ limit: 10, time_range: "long_term" })
        .then((data) => {
          setTopTen(data.body.items);
        });
    }
  }, [session, spotifyApi]);
  //   if (topten.length !== 0)
  return (
    <div>
      {topten.map((track) => (
        <h1>{track.name}</h1>
      ))}
    </div>
  );
}
