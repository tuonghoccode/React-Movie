import React from 'react';
import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import {useNavigate} from 'react-router-dom'
import MovieList from '../components/movie-list/MovieList';

import {category, movieType, tvType} from '../api/tdmbApi'

function Home() {
  const navigate = useNavigate()
  return <div>

  <HeroSlide/>
  <div className="container">
    <div className="section mb-3" >
      <div className="section__header mb_2">
        <h2 style={{marginTop: '2rem'}} >Trending Movies</h2>
        <a onClick={() => navigate('/movie')}>
          <OutlineButton className='small'>View more</OutlineButton>
        </a>
      </div>
      <MovieList category={category.movie} type={movieType.popular} />
    </div>

    <div className="section mb-3">
      <div className="section__header mb_2">
        <h2  style={{marginTop: '2rem'}}> Top Rated Movies</h2>
        <a onClick={() => navigate('/movie')}>
          <OutlineButton className='small'>View more</OutlineButton>
        </a>
      </div>
      <MovieList category={category.movie} type={movieType.top_rated} />
    </div>

    <div className="section mb-3" >
      <div className="section__header mb_2">
        <h2>Trending TV</h2>
        <a onClick={() => navigate('/movie')}>
          <OutlineButton className='small'>View more</OutlineButton>
        </a>
      </div>
      <MovieList category={category.tv} type={tvType.popular} />
    </div>

  <div className="section mb-3" style={{marginTop: '2rem'}}>
      <div className="section__header mb_2"  >
        <h2 >Top Rated Movies</h2>
        <a onClick={() => navigate('/movie')}>
          <OutlineButton className='small'>View more</OutlineButton>
        </a>
      </div>
      <MovieList category={category.tv} type={tvType.top_rated} />
    </div>

  </div>
  </div>;
}

export default Home;
