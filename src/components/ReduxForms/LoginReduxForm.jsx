import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, minLengthCreator } from '../../utilsHelpers/Validators/Validate';
import { Input } from '../common/FormsControls/FormControl';
import style from './../common/FormsControls/FormControl.module.css';

const minLength5= minLengthCreator(5);
const minLength8= minLengthCreator(8);
const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} 
                    placeholder={'email'} 
                    component={Input}
                    validate={[ required, minLength5 ]} />
            </div>
            <div>                
                <Field name={'password'} 
                        placeholder={'password'} 
                        component={Input}
                        type={'password'}
                        validate={[ required, minLength8 ]} />
            </div>
            <div>
                <Field name={'rememberMe'} 
                        type={'checkbox'} 
                        component={Input}
                        validate={[ ]} />Remember me
            </div>
            {props.error && <div className={style.formError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
