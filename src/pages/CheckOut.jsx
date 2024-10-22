import React, { useState } from 'react';

const steps = ['Shipping Address', 'Payment Method', 'Review Your Order'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleShippingAddressChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="input"
                value={shippingAddress.firstName}
                onChange={handleShippingAddressChange}
              />
              <input
                required
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="input"
                value={shippingAddress.lastName}
                onChange={handleShippingAddressChange}
              />
            </div>
            <input
              required
              id="address"
              name="address"
              placeholder="Address"
              className="input w-full"
              value={shippingAddress.address}
              onChange={handleShippingAddressChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                id="city"
                name="city"
                placeholder="City"
                className="input"
                value={shippingAddress.city}
                onChange={handleShippingAddressChange}
              />
              <input
                id="state"
                name="state"
                placeholder="State/Province/Region"
                className="input"
                value={shippingAddress.state}
                onChange={handleShippingAddressChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                id="zip"
                name="zip"
                placeholder="Zip / Postal code"
                className="input"
                value={shippingAddress.zip}
                onChange={handleShippingAddressChange}
              />
              <input
                required
                id="country"
                name="country"
                placeholder="Country"
                className="input"
                value={shippingAddress.country}
                onChange={handleShippingAddressChange}
              />
            </div>
          </form>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="debit"
                  checked={paymentMethod === 'debit'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Debit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                PayPal
              </label>
            </div>
            {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  required
                  id="cardName"
                  placeholder="Name on card"
                  className="input"
                />
                <input
                  required
                  id="cardNumber"
                  placeholder="Card number"
                  className="input"
                />
                <input
                  required
                  id="expDate"
                  placeholder="Expiry date"
                  className="input"
                />
                <input required id="cvv" placeholder="CVV" className="input" />
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="space-y-4">
              <div className="bg-white shadow rounded p-4">
                <h3 className="text-lg">Product 1</h3>
                <p>Quantity: 2</p>
                <p>Price: $19.99</p>
              </div>
              <div className="bg-white shadow rounded p-4">
                <h3 className="text-lg">Product 2</h3>
                <p>Quantity: 1</p>
                <p>Price: $29.99</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">Total: $69.97</h3>
          </div>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((label, index) => (
            <div key={label} className="flex-1">
              <div
                className={`border-t-4 p-2 ${
                  index <= activeStep ? 'border-blue-500' : 'border-gray-300'
                }`}
              >
                <p className={index === activeStep ? 'text-blue-500' : ''}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Thank you for your order.</h2>
            <p>
              Your order number is #2001539. We have emailed your order
              confirmation and will send you an update when your order has
              shipped.
            </p>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className="mt-8 flex justify-between">
              <button
                className={`btn ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="btn bg-blue-500 text-white"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
