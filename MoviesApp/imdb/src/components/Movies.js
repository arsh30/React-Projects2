import React, { useState, useEffect } from "react";
import Image from "../banner.png";
import axios from "axios";
import { Oval } from "react-loader-spinner"; //to add the loader

function Movies() {
  const [movies, setMovies] = useState([]); //empty array because mutiple movies can come

  //to communicate tmdb api -> hm jese phle krre the ki link ko google pr search kra to aagye sare vo kam krne k liye ik package chahiye hota ie axios
  useEffect(function () {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=491c85621dc33a37515d86c9e9f0b3e6`
        // `https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page`
      )
      .then((res) => {
        console.table(res.data.results);
        //ab hme state set krani hai
        setMovies(res.data.results);
      });
  });

  return (
    <div className="mb-8">
      <div className="mt-8 mb-8 font-bold text-2xl text-center">
        Trending Movies
      </div>
      {movies.length == 0 ? 
        <div className="flex justify-center">
          <Oval
            heigth="100"
            width="100"
            color="grey"
            secondaryColor="grey"
            ariaLabel="loading"
          />
        </div>
       : 
        <div className="flex flex-wrap justify-center">
          {
            //movie par loop lagagege bcause movies multiple hai aur array hai
            movies.map((movie) => {
              return (
                <div
                  className={` 
                      mb-8
                      m-4
                      bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                      md: h-[30vh] w-[250px]
                      h-[25vh] w-[150px]
                      bg-center bg-cover 
                      flex items-end 
                      rounded-2xl
                      hover:scale-110
                      ease-out duration-300
                      cursor-pointer`}
                >
                  <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
                    {movie.title}
                  </div>
                </div>
              );
            })
          }
        </div>
      }
    </div>
  );
}

export default Movies;
