const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        /*{
            id: 1, 
            fullName:'Roman Urgant', 
            photoUsers: 'https://avatars.mds.yandex.net/get-pdb/1598525/a4db5f3a-a760-45ff-b4f7-f907c582739a/s1200?webp=false',
            status: 'I am a boss',
            location: {
                city: 'Lviv',
                country: 'Ukraine'
            },
            followed: true,
        },
        {
            id: 2, 
            fullName:'Viktor Dron', 
            photoUsers: 'https://i.pinimg.com/736x/71/11/a1/7111a1ab5699571321e081499981e08a.jpg',
            status: 'Let\'s do it',
            location: {
                city: 'Rostov',
                country: 'Russia'
            },
            followed: false,
        },
        {
            id: 3, 
            fullName:'Gretta Tumberg', 
            photoUsers: 'https://i.pinimg.com/736x/ba/fc/68/bafc68a9eb5cf7a63d84f22b6f144af7--manga-art-anime-manga.jpg',
            status: 'Peeeeeesssss',
            location: {
                city: 'London',
                country: 'UK'
            },
            followed: true,
        },
        
    */],
};
const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return{
                            ...u, followed: true,
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return{
                            ...u, followed: false,
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return {
                ...state, users: [...state.users, ...action.users]
                //...action.users не понимаю эту часть кода
            }
        }
        default:
            return state;
    }
}

export const followAC =(userId)=>({type:FOLLOW, userId });
export const unfollowAC =(userId)=>({type: UNFOLLOW, userId });
export const setUsersAC =(users)=>({type:SET_USERS, users});

export default usersReducer;