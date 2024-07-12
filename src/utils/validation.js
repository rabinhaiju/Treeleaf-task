import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().matches(/^\d{10,}$/, 'Phone number must be at least 10 digits').required('Phone number is required'),
  dob: yup.date().required('Date of Birth is required').max(new Date(), 'Date of Birth cannot be in the future'),
  city: yup.string().required('City is required'),
  district: yup.string().required('District is required'),
  province: yup.string().required('Province is required'),
  country: yup.string().required('Country is required'),
  profilePicture: yup.mixed()
    .test('fileType', 'Only PNG files are allowed', (value) => {
      if (!value || !value[0]) return true; // No file uploaded, so no validation error
      return value[0].type === 'image/png';
    })
});
