import React from 'react';
import './footer.scss';
import {useNavigate} from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';



function Footer() {
  const navigate = useNavigate()
  return <div className='footer' style={{backgroundImage: `url(${bg})`}}>
    <div className="footer__content container">
      <div className="logo">
              <img src={logo} alt="" />
                <a onClick={()=>navigate('/')}>LTMoviesia</a>
       </div>
    </div>
    <div className="footer__content__menus">
      <div className="footer__content__menu">
         <a onClick={()=>navigate('/')}>Home</a>
          <a onClick={()=>navigate('/')}>Contact us</a>
           <a onClick={()=>navigate('/')}>Term of services</a>
            <a onClick={()=>navigate('/')}>About us</a>
      </div>
      <div className="footer__content__menu">
         <a onClick={()=>navigate('/')}>Live</a>
          <a onClick={()=>navigate('/')}>FAQ us</a>
           <a onClick={()=>navigate('/')}>Premium</a>
            <a onClick={()=>navigate('/')}>Pravacy policy</a>

      </div>
      <div className="footer__content__menu">
         <a onClick={()=>navigate('/')}>You must watch</a>
          <a onClick={()=>navigate('/')}> Recent release</a>
           <a onClick={()=>navigate('/')}>Top IMDB</a>
            <a onClick={()=>navigate('/')}>About us</a>

      </div>
    </div>
  </div>;
}

export default Footer;
