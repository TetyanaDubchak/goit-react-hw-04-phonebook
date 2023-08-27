import { Formik } from 'formik';
import { StyledForm, StyledError, Button,Label,Input } from "./ContactForm.styled";
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

const phoneValidation = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(16, 'Too Long!')
     .required('Required'),
   number: Yup.string()
     .max(19, 'Too Long!')
     .matches(phoneValidation, 'Phone number is not valid, use format XX-XX-XX-XXX-XXX')
     .required('Required'),
   
 });

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
            name: '',
            number: '',
            }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
            onAdd({ ...values, id: nanoid()}, values.name, values.number)
            actions.resetForm()
      }}
    >
      <StyledForm>
            <Label>Name
                    <Input name="name" type="text"/>
                    <StyledError name='name' component='div'/>
            </Label>
        
            <Label>Number
                    <Input name="number" type="tel" />
                    <StyledError name='number'component='div'/>    
            </Label>
        
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>

    )

}

ContactForm.propTypes = {
    onAdd: PropTypes.func,
}