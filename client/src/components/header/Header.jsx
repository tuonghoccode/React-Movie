import React,{useRef,useEffect} from 'react';
import './header.scss'
import logo from '../../assets/tmovie.png'
import { useNavigate, useLocation, Link } from 'react-router-dom';

const headerNav = [
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Movies',
        path:'/movie'
    },
    {
        display:'TV Series',
        path:'/tv'
    }
]


const Header = () => {

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop>100 || document.documentElement.scrollTop> 100) headerRef.current.classList.add('shrink')
            else headerRef.current.classList.remove('shrink')
        }
        window.addEventListener('scroll', shrinkHeader)
        return () => {
            window.removeEventListener('scroll',shrinkHeader)
        };
    }, []);
    
    const {pathname} = useLocation()
    console.log(pathname)
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const active = headerNav.findIndex(e => e.path == pathname)
    
  return <div ref={headerRef} className='header'>
      <div className="header__wrap container">
          <div className="logo">
              <img src={logo} alt="" />
                <a onClick={()=>navigate('/')}>LTMoviesia</a>
          </div>
          <ul className="header__nav">
              {headerNav.map((e,i) => <li key={i} className={`${i===active ? 'active':''}`}>
                <a onClick={()=>navigate(e.path)}>{e.display}</a>
              </li>)}
          </ul>
      </div>
  </div>;
};

export default Header;

