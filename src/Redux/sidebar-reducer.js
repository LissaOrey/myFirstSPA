let initialState = {
    friends:[
        {id: 1, name:'Valeria', src:'https://i.pinimg.com/736x/9f/0d/b5/9f0db5a67d450dd856264cee21156783.jpg',},
        {id: 2, name: 'Sergey', src:'https://avatars.mds.yandex.net/get-pdb/2732355/275a9f98-3ec4-4e53-ae34-f087f24eaba9/s1200?webp=false',},
        {id: 3, name: 'Anna', src:'https://i.pinimg.com/736x/1e/15/a9/1e15a966bac1e6a21b7871e0858bbfd5--manga-boy-manga-anime.jpg',},
        {id: 4, name: 'Olga', src:'https://i.pinimg.com/736x/27/31/a1/2731a1ec61c9c802985ff204e2975e61.jpg',},
    ],
}
const sidebarReducer =(state=initialState, action)=>{
    return state;
}
export default sidebarReducer;