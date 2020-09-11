import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile,getUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount(){
        
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId);

        // profileAPI.getUserProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data);
        // })
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }
    render (){
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

// let authRedirectComponent = WithAuthRedirect(ProfileContainer);
let mapStateToProps =(state)=>({
    profile: state.profilePage.profile,

});
export default compose (
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter,
)(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(authRedirectComponent);
// export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent);
