import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from './../../utilsHelpers/Validators/Validate';
import { Textarea } from '../common/FormsControls/FormControl';

const maxLength30 = maxLengthCreator(30);

const addPostForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder='Enter your text' 
                name='addPost' 
                component={Textarea}
                validate={[ maxLength30 ]}  />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  </div>
}
export const PostForm = reduxForm({ form: 'addPostForm' })(addPostForm)