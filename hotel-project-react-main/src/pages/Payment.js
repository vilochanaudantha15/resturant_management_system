import React from 'react';
import { FaCreditCard, FaCalendarAlt, FaLock, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';
import { PayPalButtons } from '@paypal/react-paypal-js';
import '../components/common/payment.css'; // Ensure you have the updated CSS

const Payment = () => {
    return (
        <div className="payment-container d-flex justify-content-between align-items-start min-vh-100">
            {/* Booking Summary Section */}
            <div className="side-content booking-summary">
                <h3>Booking Summary</h3>
                <div className="summary-item">
                    <strong>Booking Date:</strong> <span>August 12, 2024</span>
                </div>
                <div className="summary-item">
                    <strong>Total Amount:</strong> <span>$150</span>
                </div>
                <div className="summary-item">
                    <strong>Service:</strong> <span>Hotel Stay</span>
                </div>
                <div className="summary-item">
                    <strong>Guest Name:</strong> <span>John Doe</span>
                </div>
                <div className="summary-item">
                    <strong>Check-in Date:</strong> <span>August 15, 2024</span>
                </div>
                <div className="summary-item">
                    <strong>Check-out Date:</strong> <span>August 20, 2024</span>
                </div>
            </div>

            {/* Payment Form Section */}
            <div className="payment-card bg-white shadow-lg rounded-lg p-4 p-sm-5" style={{ maxWidth: '600px', flex: '2' }}>
                <h2 className="text-center payment-header">Payment Details</h2>
                <form>
                    <div className="mb-4">
                        <label className="form-label">Name on Card</label>
                        <div className="input-group">
                            <span className="input-group-text"><FaCreditCard /></span>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="form-control custom-input"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Card Number</label>
                        <div className="input-group">
                            <span className="input-group-text"><FaCreditCard /></span>
                            <input 
                                type="text" 
                                placeholder="1234 5678 9123 4567" 
                                className="form-control custom-input"
                            />
                        </div>
                        <div className="card-icons mt-2">
                            <FaCcVisa className="card-icon visa-icon" />
                            <FaCcMastercard className="card-icon mastercard-icon" />
                            <FaCcAmex className="card-icon amex-icon" />
                            <FaCcDiscover className="card-icon discover-icon" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-6">
                            <label className="form-label">Expiry Date</label>
                            <div className="input-group">
                                <span className="input-group-text"><FaCalendarAlt /></span>
                                <input 
                                    type="text" 
                                    placeholder="MM/YY" 
                                    className="form-control custom-input"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <label className="form-label">CVC</label>
                            <div className="input-group">
                                <span className="input-group-text"><FaLock /></span>
                                <input 
                                    type="text" 
                                    placeholder="123" 
                                    className="form-control custom-input"
                                />
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100 mb-3 d-flex align-items-center justify-content-center"
                    >
                        <FaCreditCard className="me-2" /> Pay $150
                    </button>
                    <div className="d-flex justify-content-center mb-3">
                        <PayPalButtons 
                            style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay' }} 
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: '150.00',
                                        },
                                    }],
                                });
                            }}
                            onApprove={async (data, actions) => {
                                await actions.order.capture();
                                alert('Payment Successful!');
                            }}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjHVQbSNU0dwOGF5iuSO2xNAVfJXaZ8TlRg&s" alt="PayPal" className="paypal-icon" />
                    </div>
                </form>
            </div>

            {/* Payment Options Section */}
            <div className="side-content payment-options">
                <h3>Payment Options</h3>
                <p>We accept various payment methods, including credit cards and PayPal.</p>
                <img src="data:image/png;base64,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" alt="Payment Methods" className="side-image" />
          
          
            </div>
        </div>
    );
}

export default Payment;
