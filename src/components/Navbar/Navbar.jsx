import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBlock from './FriendsBlock/FriendsBlock';


const Navbar = (props) => {
    let state = props.sidebar
    // let friendsArr = props.state.friends.map(f => <FriendsBlock name={f.name} id={f.id} src={f.src} />)
    let friendsArr = state.friends.map(f => <FriendsBlock name={f.name} id={f.id} key={f.id} src={f.src} />)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink} >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
                </div>
            </div>
            <div className={s.friendsBlock}>
                {friendsArr}
            </div>
        </nav>
    )
}
export default Navbar;