import React, { useState, useEffect } from "react";
import "./Home.css";
import CarouselTray from "../../Components/CarouselTray";
import Carousel from "../../Components/Carousel";

function Home(props) {
  const [data, setData] = useState([]);


  var url = `https://api.themoviedb.org/3/trending/all/day?api_key=${props.apikey}&region=in`;
  var imgurl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getData = async (req, res) => {
      await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        //   data.results.forEach((element, index) => {
        //   data.results[index].poster = imgurl + element.poster_path;
        //   console.log(element);
        // });
          setData(data.results);
        });
    };
    getData();
  }, [url]);



  return (
    <div className="home">
      <Carousel data={data} type={"movie"} imgsrc={imgurl} />
      <CarouselTray title="Latest & Trending" data={data} imagePath={imgurl}/>
      <CarouselTray title="Best In Sports" vertical={true} data={data} imagePath={imgurl}/>
      
    </div>
  );
}



export default Home;
