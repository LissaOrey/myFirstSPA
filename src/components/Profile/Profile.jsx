import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <div>
                {/* <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' /> */}
                <img src='https://skinali-market.ru/upload/resize_cache/iblock/dcd/1920_359_156420db5d35cfb82f16501d0f4565d1d/dcd87e33b7defeb69dd3df237e863faa.jpg' />
            </div>
            <div>
                ava + description
      {/* <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' /> */}
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;