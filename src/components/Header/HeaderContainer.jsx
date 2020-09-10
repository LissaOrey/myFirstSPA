import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {authMe} from '../../Redux/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount (){
        // authAPI.getAuthMe().then(data =>{
        //     if(data.resultCode === 0){            
        //         let {id, email, login} = data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // })
        this.props.authMe()
    }
    render (){
        return <Header {...this.props} />
    }
}
const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, { authMe})(HeaderContainer);