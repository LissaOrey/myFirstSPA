import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'login'} component={'input'} />
            </div>
            <div>                
                <Field name={'password'} placeholder={'password'} component={'input'} />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
