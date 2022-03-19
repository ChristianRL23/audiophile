import CheckoutContent from '../../components/CheckoutContent/CheckoutContent';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Checkout.scss';

const Checkout = () => {
  return (
    <section className="checkout">
      <Header />
      <CheckoutContent />
      <Footer />
    </section>
  );
};

export default Checkout;
