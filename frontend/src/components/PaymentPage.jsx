import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PaymentPopup from '../components/PaymentPopup';
import PopupMessage from '../components/PopupMessage';

const PaymentPage = () => {
  const { slug } = useParams();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  console.log('in payment page::' ,slug);

  const handlePaymentSubmit = async (paymentDetails) => {
    try {
      // Simulate payment submission
      // You can replace this with actual payment API call
      console.log('Payment Details:', paymentDetails);
      // Show success message and redirect
      setShowSuccessMessage(true);
      setTimeout(() => navigate(`/workshopContent/${slug}`), 2000);
    //   navigate(`/workshopContent/${id}`)
    } catch (error) {
      console.log('Payment Error:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Select Payment Method</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => {
          setPaymentMethod('OMT');
          setShowPopup(true);
        }}
      >
        Pay with OMT
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4"
        onClick={() => {
          setPaymentMethod('Wish Money');
          setShowPopup(true);
        }}
      >
        Pay with Wish Money
      </button>

      {showPopup && (
        <PaymentPopup
          method={paymentMethod}
          onSubmit={handlePaymentSubmit}
          onClose={handleClosePopup}
        />
      )}

      {showSuccessMessage && (
        <PopupMessage
          message={{
            title: 'Payment Successful!',
            body: 'Your registration is complete. You will be redirected shortly.',
            buttonText: 'OK',
          }}
          onClose={() => setShowSuccessMessage(false)}
        />
      )}
    </div>
  );
};

export default PaymentPage;
