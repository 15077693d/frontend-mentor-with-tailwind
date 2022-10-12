import * as yup from 'yup';

export const schema = yup.object().shape({
  cardholderName: yup
    .string()
    .transform((val) => val.replaceAll(' ', ''))
    .required('Can’t be blank'),
  cardNumber: yup
    .string()
    .required('Can’t be blank')
    // digits + empty space
    .min(19, 'Wrong format, 16 digits required'),
  expDataMm: yup
    .string()
    .required('Can’t be blank')
    .test('invaild value', 'Wrong values, 1 to 12 only', (val) => {
      if (val) {
        return Number(val) >= 1 && Number(val) <= 12;
      }
      return false;
    }),
  expDataYy: yup
    .string()
    .required('Can’t be blank')
    .test('invaild value', 'Wrong values, 22 to 99 only', (val) => {
      if (val) {
        return Number(val) >= 22 && Number(val) <= 99;
      }
      return false;
    }),
  cvc: yup
    .string()
    .required('Can’t be blank')
    .min(3, 'Wrong format, 3 characters required'),
});
