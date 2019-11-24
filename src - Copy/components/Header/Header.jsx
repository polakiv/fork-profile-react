import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { YMInitializer } from 'react-yandex-metrika';
const Header = (props) => {
    return  <header className={s.header}>  
    <YMInitializer accounts={[54507646]} options={{webvisor: true}}/>
    <div className="border_bottom_grey font_086em display_none">
        <div className="inline">
                    Помощь семьям и друзьям при потере любимого умершего
        </div>  
    </div>  
	 <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div> 
    <div className="logo">
        <div className="logo_img">
            <NavLink to="/"> 
                <img src="https://wikirip.site/image/catalog/products/logo.png" className="logo_main" title="Найти могилу - WikiRIP" alt="Найти могилу - WikiRIP" />
            </NavLink>
        </div>
        <div className="contein_logo_text">
            <NavLink to="/">
                <span className="logo_text">WikiRiP</span>
                <span className="logo_slogan"><h1>планы кладбищ России и Украины</h1></span>
            </NavLink>
        </div>
    </div> 
</header>  
}

export default Header;