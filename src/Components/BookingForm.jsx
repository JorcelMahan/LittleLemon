import './BookingForm.css';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const validationSchema = Yup.object({
  date: Yup.date().required('Required'),
  time: Yup.string().required('Required'),
  guests: Yup.number().required('Required').min(1).max(10),
  occasion: Yup.string().required('Required'),
});

const BookingForm = () => {
  return (
    <Formik
      initialValues={{
        date: '',
        time: '',
        guests: '1',
        occasion: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        Swal.fire({
          title: 'Success!',
          text: 'Your reservation has been made',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        // reset form
        resetForm();
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <div>
            <label htmlFor='date'>Choose date</label>
            <Field
              type='date'
              id='date'
              placeholder='Select Date'
              name='date'
            />
            {errors.date && touched.date && (
              <div className='error'>{errors.date}</div>
            )}
          </div>

          <div>
            <label htmlFor='time'>Choose time</label>
            <Field as='select' id='time' name='time'>
              <option value='17:00'>17:00</option>
              <option value='18:00'>18:00</option>
              <option value='19:00'>19:00</option>
              <option value='20:00'>20:00</option>
              <option value='21:00'>21:00</option>
              <option value='22:00'>22:00</option>
            </Field>
            {errors.time && touched.time && (
              <div className='error'>{errors.time}</div>
            )}
          </div>

          <div>
            <label htmlFor='guests'>Number of guests</label>
            <Field type='number' placeholder='1' id='guests' name='guests' />
            {errors.guests && touched.guests && (
              <div className='error'>{errors.guests}</div>
            )}
          </div>

          <div>
            <label htmlFor='occasion'>Occasion</label>
            <Field as='select' id='occasion' name='occasion'>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </Field>
            {errors.occasion && touched.occasion && (
              <div className='error'>{errors.occasion}</div>
            )}
          </div>

          <button type='submit'>Reserve a table</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
