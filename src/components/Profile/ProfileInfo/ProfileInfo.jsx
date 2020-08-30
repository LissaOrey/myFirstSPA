import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                {/* <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' /> */}
                <img src='https://skinali-market.ru/upload/resize_cache/iblock/dcd/1920_359_156420db5d35cfb82f16501d0f4565d1d/dcd87e33b7defeb69dd3df237e863faa.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}  className={s.photo} />
                ava+ info
                <div>
                    {/* //TODO: здесь потом сделать все с помощью флексбокса или гридов */}
                    <table className='a'>
                        <tr>
                            <td>Name:</td>
                            <td>{props.profile.fullName}</td>
                        </tr>
                        <tr>
                            <td>about me:</td>
                            <td>{props.profile.aboutMe}</td>
                        </tr>
                        <tr>
                            <td rowSpan='8'>contacts:</td>
                            <td>facebook: {props.profile.contacts.facebook}</td>
                        </tr>
                        <tr>
                            <td>website: {props.profile.contacts.website}</td>
                        </tr>
                        <tr>
                            <td>vk: {props.profile.contacts.vk}</td>
                        </tr>
                        <tr>
                            <td>twitter: {props.profile.contacts.twitter}</td>
                        </tr>
                        <tr>
                            <td>instagram: {props.profile.contacts.instagram}</td>
                        </tr>
                        <tr>
                            <td>youtube: {props.profile.contacts.youtube}</td>
                        </tr>
                        <tr>
                            <td>github: {props.profile.contacts.github}</td>
                        </tr>
                        <tr>
                            <td>mainLink: {props.profile.contacts.mainLink}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;