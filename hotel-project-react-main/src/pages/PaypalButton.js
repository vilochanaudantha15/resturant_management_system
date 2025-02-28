import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalButton = () => {
    return (
        <div className="d-flex justify-content-center">
            <PayPalButtons 
                style={{ layout: 'vertical' }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '150.00'
                            }
                        }]
                    });
                }}
                onApprove={async (data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                    });
                }}
            />
        </div>
    );
}

export default PaypalButton;
