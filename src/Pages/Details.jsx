
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import pic3 from '../Assets/pic3.webp'
import DetailCard from '../Components/DetailCard';
import CarouselTray from '../Components/CarouselTray';

const Details = (props) => {
  const { type, name, id } = useParams();
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);

  var url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${props.apikey}&region=in`;
  var imgurl = "https://image.tmdb.org/t/p/w500";
  var listUrl = `https://api.themoviedb.org/3/list/<IDHERE>?api_key=${props.apikey}&region=in`;

  const getData = async (req, res) => {
    await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);

        console.log(data.belongs_to_collection.id);
        getDetails(data.belongs_to_collection.id);
      });
  };

  const getDetails = async (id) => {
    await fetch(listUrl.replace("<IDHERE>", id), {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return (
    <DetailContainer>
      <DetailCard
        image={imgurl + "/" + data.poster_path}
        bgimage={imgurl + data.backdrop_path}
        title={data.title || data.orginal_title}
        description={data.overview}
        genre={data.genres}
        tagline={data.tagline}
      />
      <CarouselTray data={details.items} imagePath={imgurl} />

    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background: #fff; */
  color: white;
`;


export default Details