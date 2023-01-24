import React, { forwardRef } from 'react';
import styled from 'styled-components';

const VerticalCard = forwardRef(({ title, description, image }, ref) => {
    return (
        <VerticalCardContainer ref={ref}>
            <div className="back-layout" >
                <img src={image} alt="CardImage" className="image"></img>
            </div>
            <div className="front-layout">
                <div className="content">
                    <h2 className="title">{title}</h2>
                    <p className="sub">1977 4.5</p>
                    <p className="description">{description}</p>
                    <div className="watch-btn">ADD TO WATCHLIST</div>
                </div>
            </div>
        </VerticalCardContainer>
    )
})

const VerticalCardContainer = styled.div`
    width: 168.35px;
    height: 22.3rem;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width:426px) {
        width: 131.35px;
        height: 20.3rem;
    }
    
    .back-layout {
        position: absolute;
        width: 100%;
        height: 100%;
        .image {
            width: 100%;
            height: 100%;
        }
    }
    .front-layout {
        position: absolute;
        width: 100%;
        height: 100%;
        .content {
            position: absolute;
            bottom: -100px;
            width: 100%;
            padding: 5px;

            .description {
                display: -webkit-box;   
                -webkit-line-clamp: 2;   
                -webkit-box-orient: vertical;     
                overflow: hidden; 
            }
            .watch-btn {
                background-color: #ffffff6a;
                border-radius: 5px;
                padding: 4px;
            }
            
        }
        
    }
    .front-layout:hover .cover {
            bottom: 0;
        }
    

    `;

export default VerticalCard
