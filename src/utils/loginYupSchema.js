import * as Yup from 'yup';
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email invalid !').required('Field is empty!'),
  password: Yup.string()
    .min(10, 'Length < 10 !')
    .max(20, 'Length > 20 !')
    .required('Field is empty!'),
});
const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Email invalid !').required('Field is empty!'),
  password: Yup.string()
    .min(10, 'Length < 10 !')
    .max(20, 'Length > 20 !')
    .required('Field is empty!'),
  fullName: Yup.string().required('Field is empty!'),
});

export {loginSchema,signUpSchema};
