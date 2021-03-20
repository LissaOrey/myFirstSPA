import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from './../../utilsHelpers/Validators/Validate';
import { Textarea } from '../common/FormsControls/FormControl';

const maxLength60 = maxLengthCreator(60);

const addMessageForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder='Enter your text' 
                name='addMessageForm' 
                component={ Textarea }
                validate={[  maxLength60 ]}  />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  </div>
}

export const DialogMessageForm = reduxForm({ form: 'addMessageForm' })(addMessageForm)