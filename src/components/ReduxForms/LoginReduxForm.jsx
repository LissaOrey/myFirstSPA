import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, minLengthCreator } from '../../utilsHelpers/Validators/Validate';
import { Input } from '../common/FormsControls/FormControl';

const minLength5= minLengthCreator(5);
const minLength8= minLengthCreator(8);
const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} 
                    placeholder={'login'} 
                    component={Input}
                    validate={[ required, minLength5 ]} />
            </div>
            <div>                
                <Field name={'password'} 
                        placeholder={'password'} 
                        component={Input}
                        validate={[ required, minLength8 ]} />
            </div>
            <div>
                <Field name={'rememberMe'} 
                        type={'checkbox'} 
                        component={Input}
                        validate={[ ]} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
