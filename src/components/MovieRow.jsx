import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const MovieRow = ({ category }) => {
  const [Data, setData] = useState([]);

  useEffect(() => { 
    console.log("hello world");
    fetch("https://65912aa08cbbf8afa96beeaa.mockapi.io/flowers")
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setData(res2);
      });
  },[]);

  let Moviedata = [
    {
      heading: "Movie 1",
      image:
        "https://graphicriver.img.customer.envatousercontent.com/files/54990459/Talitha-Movie-Poster-Template-Image-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6070712ad4e5548462f52532dac308c6",
    },
    {
      heading: "Movie 2",
      image:
        "https://graphicriver.img.customer.envatousercontent.com/files/54990459/Talitha-Movie-Poster-Template-Image-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6070712ad4e5548462f52532dac308c6",
    },
    {
      heading: "Movie 3",
      image:
        "https://graphicriver.img.customer.envatousercontent.com/files/54990459/Talitha-Movie-Poster-Template-Image-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6070712ad4e5548462f52532dac308c6",
    },
    {
      heading: "Movie 4",
      image:
        "https://graphicriver.img.customer.envatousercontent.com/files/54990459/Talitha-Movie-Poster-Template-Image-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6070712ad4e5548462f52532dac308c6",
    },
    {
      heading: "Movie 5",
      image:
        "https://graphicriver.img.customer.envatousercontent.com/files/54990459/Talitha-Movie-Poster-Template-Image-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6070712ad4e5548462f52532dac308c6",
    },
  ];

  return (
    <div>
      {/* title */}
      <div className="text-white text-3xl font-bold">{category}</div>
      {/* cards */}
      <div className="flex gap-5 py-6">
        {Data.map((item) => (
          <Movie data={item} />
        ))}
        {/* <Movie data={Moviedata[0]}  /> */}
      </div>
    </div>
  );
};

export default MovieRow;
