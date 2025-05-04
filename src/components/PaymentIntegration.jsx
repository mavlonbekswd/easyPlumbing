import { useState } from 'react';
import { FaCreditCard, FaPaypal, FaGooglePay, FaApplePay, FaLock, FaCheck } from 'react-icons/fa';

const paymentMethods = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    icon: <FaCreditCard />,
    description: 'Pay with Visa, Mastercard, or American Express',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: <FaPaypal />,
    description: 'Pay securely with your PayPal account',
  },
  {
    id: 'google-pay',
    name: 'Google Pay',
    icon: <FaGooglePay />,
    description: 'Pay with your Google account',
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    icon: <FaApplePay />,
    description: 'Pay with your Apple device',
  },
];

export default function PaymentIntegration() {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setPaymentSuccess(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {!paymentSuccess ? (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-2 text-accent mb-6">
            <FaLock className="text-xl" />
            <h2 className="text-xl font-semibold">Secure Payment</h2>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 rounded-lg border-2 flex items-center gap-3 transition-colors ${
                    selectedMethod === method.id
                      ? 'border-accent bg-accent/5'
                      : 'border-gray-200 hover:border-accent/50'
                  }`}
                >
                  <div className="text-2xl text-accent">{method.icon}</div>
                  <div className="text-left">
                    <div className="font-medium">{method.name}</div>
                    <div className="text-sm text-gray-500">{method.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Credit Card Form */}
          {selectedMethod === 'credit-card' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleCardInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleCardInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardInputChange}
                    placeholder="MM/YY"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardInputChange}
                    placeholder="123"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaLock className="text-accent" />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-accent hover:bg-dark'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          )}

          {/* Other Payment Methods */}
          {selectedMethod !== 'credit-card' && (
            <div className="text-center py-8">
              <div className="text-4xl text-accent mb-4">
                {paymentMethods.find(m => m.id === selectedMethod)?.icon}
              </div>
              <p className="text-gray-600 mb-6">
                You will be redirected to {paymentMethods.find(m => m.id === selectedMethod)?.name} to complete your payment.
              </p>
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-accent hover:bg-dark'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Continue to Payment'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your payment has been processed successfully. A confirmation email has been sent to your registered email address.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
            <h3 className="font-semibold mb-2">Payment Details</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaCreditCard className="text-accent" />
                Card ending in {cardDetails.number.slice(-4)}
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-accent" />
                Amount: $150.00
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-accent" />
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setPaymentSuccess(false);
              setCardDetails({
                number: '',
                name: '',
                expiry: '',
                cvv: '',
              });
            }}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-dark transition-colors"
          >
            Make Another Payment
          </button>
        </div>
      )}
    </div>
  );
} 