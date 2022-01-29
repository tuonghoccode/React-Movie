import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tdmbApi';

const CastList = (props) => {
    const {category} = useParams()
    const [casts, setCasts] = useState([])
    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id)
            setCasts(res.cast.slice(0,5));
        }
        getCredits()
        
    }, [category,props.id]);
  return <div className='casts'>
      {
          casts.map((item, i) => <div className="casts__item" key={i}>
              <div className="casts__item__img" style={{backgroundImage:`url(${apiConfig.w500Image(item.profile_path)})`}}></div>
              <p className="casts__item__name">{item.name}</p>
          </div>)
      }


  </div>;
};

export default CastList;
