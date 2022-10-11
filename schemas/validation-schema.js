import * as Yup from 'yup';

export const stepFourSchema = () => {
  return Yup.object().shape({
    form_1: Yup.bool().oneOf(
      [true],
      'You must accept the terms and conditions'
    ),
    form_2: Yup.bool().oneOf(
      [true],
      'You must accept the terms and conditions'
    ),
    form_3: Yup.bool().oneOf(
      [true],
      'You must accept all the terms and conditions'
    ),
    uen: Yup.string().required('Business UEN required'),
    businessName: Yup.string().required('Business Name required'),
    fullName: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    reEmail: Yup.string()
      .required('Re-enter Email')
      .oneOf([Yup.ref('email'), null], 'Emails must match'),
  });
};
