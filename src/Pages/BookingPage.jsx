import BookingForm from '../Components/BookingForm';
import Layout from '../Components/Layout';
import '../Components/BookingPage.css';

const BookingPage = () => {
  return (
    <Layout>
      <section className='booking-page'>
        <h1>Reservations</h1>
        <BookingForm />
      </section>
    </Layout>
  );
};

export default BookingPage;
