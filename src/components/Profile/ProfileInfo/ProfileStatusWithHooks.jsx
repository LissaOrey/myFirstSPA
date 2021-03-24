import React from 'react';
// import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks =(props)=> {
        return (
            <div>
                {
                    <div>
                        <span >{props.status || '-----'}</span>
                    </div>
                }
                {false &&
                    <div>
                        <input  autoFocus={true}   />
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;