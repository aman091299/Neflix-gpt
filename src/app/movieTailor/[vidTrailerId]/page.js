"use client";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
const MovieTailor = () => {
  const [trailerId, setTrailerId] = useState(null);
  const { vidTrailerId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieTrailer();
  }, [vidTrailerId]);

  if (loading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center  bg-opacity-20 z-27">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  if (!vidTrailerId || !trailerId) {
    return (
      <div>
        <div className="font-bold text-8xl flex justify-center items-center h-screen">
          NO Trailer Available
        </div>
      </div>
    );
  }

  async function getMovieTrailer() {
    setLoading(true);
    try {
      if (vidTrailerId) {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            vidTrailerId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        const videos = json.results;
        console.log(json.results);
        const movieTrailer = videos.filter((vid) => {
          return (
            vid.type.toLowerCase().includes("trailer") &&
            vid.site.toLowerCase().includes("youtube")
          );
        });
        console.log(movieTrailer[0]?.key);
        setTrailerId(movieTrailer[0]?.key);
      }
    } catch (error) {
      console.error("fail in get movie trailer in movieTailor page", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {trailerId && (
        <>
          <Header />
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            allowFullScreen
            className="w-full h-screen"
            src={"https://www.youtube.com/embed/" + trailerId}
            alt="trailer video"
          ></iframe>
        </>
      )}
    </div>
  );
};

export default MovieTailor;
