import { PropTypes } from 'prop-types';
import React from "react";
import styled from "styled-components";

const DetailCard = ({
  image,
  bgimage,
  title,
  genre,
  tagline,
  description,
  date,
  rate,
  actions
}) => {
  return (
    <DetailsContainer>
      <div className="background">
        <img src={bgimage} alt="" />
      </div>
      <div className="foreground">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="tagline">{tagline}</p>
          <div className="genre">
            {genre && genre.map((item) => {
              return (
                <span key={item.id} className="genre-item">
                  {item.name}
                </span>
              );
            })}
          </div>
          <div className="actions" style={{ display: 'none' }}>
            <button className="watchlist">
              + Add to Watchlist
            </button>
          </div>
        </div>
      </div>

    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    /* background-color: black; */
    color: #ffffff;
    font-size: 10px;
  .background {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    img {
        object-fit: cover;
        width: 70%;
    }
  }
  .foreground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, black 45%, transparent 60%);
  }
  .content {
    position: absolute;
    bottom: 10px;
    left: 3%;
    /* border: 1px solid red; */
    width: 50vw;
  }
  .title {
    font-size: 4em;
    margin-bottom: 5px;
  }
  .tagline {
    font-size: 2.5em;
    margin-bottom: 5px;
  }
  .genre {
    display: flex;
    margin-bottom: 5px;
    gap: 0.5rem;
    font-size: 2em;

  }
  .genre-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    
    &:hover {
      background-color: #ffffff;
      color: #000000;
    }

    cursor: pointer;
  }
  .description {
    font-size: 2vw;
    display: none;
  }
  .actions {
    width: 100%;
  }
  .watchlist {
    display: flex;
    padding: 5px;
    outline: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-weight: bold;
  }
    @media only screen and (max-width: 1024px) {
        font-size: 7px;
    }
    @media only screen and (max-width: 769px) {
        font-size: 3px;
        width: 100%;
        height: fit-content;
        border-radius: unset;
        display: flex;
        flex-direction: column;
        .foreground {
            width: 100%;
            position: relative;
            background: none;
            .content {
              width: 100%;
              position: relative;
              left: 0;
              top: 0;
              padding-left: 10px;
              font-size: 0.6rem;
            }
        }
        .background {
          position: relative;
          img {
            width: 100%;
          }
        }
          
  }
`;

DetailCard.protoType = {
  actions: PropTypes.boolean,
}

DetailCard.defaultProps = {
  title: "[No Info Available]",
  description: "Details description",
};


// .slide-container {
//   background-color: #000000;
//   height: 100%;
//   border-radius: 10px;
//   margin: 0 10px;
//   position: relative;
//   overflow: hidden;
//    @media only screen and (max-width: 426px) {
//     margin: 0 5px;
//    }
//   img {
//     position: absolute;
//     right: 0;
//     height: 100%;
//     width: 70%;
//   }
//   .content-container {
//     position: absolute;
//     height: 100%;
//     width: 70%;
//     background: linear-gradient(to right, #000000 70%, transparent);
//     color: white;
//     display: flex;
//     align-items: center;
//     padding-left: 3.2rem;

//     .content {
//       /* border: 1px solid red; */
//       width: 50%;
//     }
//     .content .title {
//       height: auto;
//       -webkit-line-clamp: 2;
//     }
//     .content .catagory {
//       font-size: 16px;
//       font-weight: 500;
//       padding-top: 10px;
//     }
//     .content .description {
//       font-size: 16px;
//       padding-top: 10px;
//       overflow-wrap: break-word;
//       display: -webkit-box;
//       -webkit-box-orient: vertical;
//       -webkit-line-clamp: 4;
//       overflow: hidden;
//       line-height: 28px;
//     }
//   }
// }

export default DetailCard;
