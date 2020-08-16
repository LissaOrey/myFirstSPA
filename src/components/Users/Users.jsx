import React from 'react';
import style from './Users.module.css'

let Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                fullName: 'Roman Urgant',
                photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1598525/a4db5f3a-a760-45ff-b4f7-f907c582739a/s1200?webp=false',
                status: 'I am a boss',
                location: {
                    city: 'Lviv',
                    country: 'Ukraine'
                },
                followed: true,
            },
            {
                id: 2,
                fullName: 'Viktor Dron',
                photoUrl: 'https://i.pinimg.com/736x/71/11/a1/7111a1ab5699571321e081499981e08a.jpg',
                status: 'Let\'s do it',
                location: {
                    city: 'Rostov',
                    country: 'Russia'
                },
                followed: false,
            },
            {
                id: 3,
                fullName: 'Gretta Tumberg',
                photoUrl: 'https://i.pinimg.com/736x/ba/fc/68/bafc68a9eb5cf7a63d84f22b6f144af7--manga-art-anime-manga.jpg',
                status: 'Peeeeeesssss',
                location: {
                    city: 'London',
                    country: 'UK'
                },
                followed: true,
            },

        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={style.leftBlock}>
                        <div>
                            <img src={u.photoUrl} className={style.usersPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { 
                                    props.unfollow(u.id) }} >unfollow</button>
                                : <button onClick={() => { 
                                    props.follow(u.id) }} >follow</button>}
                        </div>
                    </div>
                    <div className={style.rightBlock}>
                        <div className={style.userBlocks}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={style.userBlocks}>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;