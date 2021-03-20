import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        {/* <img src='https://img2.freepng.ru/20180629/cft/kisspng-logo-business-graphic-designer-glory-5b368ae87b96a3.4372358915303011605062.jpg' /> */}
        <img src='https://freski.shop/uploads/mural/jpg/cd159195-42be-49fe-9558-9049ac540cf6.jpg' />
        <div className={s.loginBlock}>
            {props.isAuth 
                ? <div>{props.login}   <button onClick={props.logout}>Log out</button></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            
        </div>
    </header>
}
export default Header;