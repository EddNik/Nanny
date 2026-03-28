import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  name: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
}).required();

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
}).required();

//If you change a field from string() to number() in the schema, the RegistrationData / LoginData type updates instantly.
export type RegistrationData = Yup.InferType<typeof registrationSchema>;
export type LoginData = Yup.InferType<typeof loginSchema>;
