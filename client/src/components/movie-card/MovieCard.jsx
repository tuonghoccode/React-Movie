import React from 'react';
import './movie-card.scss';

import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import { category } from '../../api/tdmbApi';
import apiConfig from '../../api/apiConfig';



const MovieCard = (props) => {
    const navigate = useNavigate()
    const item = props.item

    const link = '/' + category[props.category] + '/' + item.id
    
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return (
      <a onClick={() => navigate(link)}>
        <div className='movie-card' style={{backgroundImage:`url(${bg})`}}>
            <Button>
                <box-icon name='play-circle' color="#ffffff"></box-icon>
            </Button>
            <h3 > {item.title || item.name} </h3>
        </div>

    </a>
  )
  
};

export default MovieCard;
