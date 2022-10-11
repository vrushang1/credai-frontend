import * as Yup from 'yup';


export const stepFourSchema = () => {
    return Yup.object().shape({
    //   form_1: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
    //   form_2: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
    //   form_3: Yup.bool().oneOf([true], "You must accept the terms and conditions")
    })
  };