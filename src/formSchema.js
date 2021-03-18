import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
    email: yup.string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
    password: yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),

    Agree: yup.boolean().oneOf([true], 'Must choose at least one'),
    Disgree: yup.boolean().oneOf([false], 'Must choose at least one'),
    Skip: yup.boolean().oneOf([false], 'Must choose at least one'),
})

export default formSchema