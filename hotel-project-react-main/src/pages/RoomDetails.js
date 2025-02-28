import React, { useState } from 'react';
import { FaBed, FaRuler, FaMoneyBillAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import "../components/common/room.css"

const RoomDetails = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const pricePerNight = 150;
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const numberOfNights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      setTotalPrice(numberOfNights * pricePerNight);
    }
  };

  return (
    <div className="container my-5" style={{ paddingTop: '80px' }}> {/* Adjust padding-top to avoid overlap with navbar */}
      <div className="row">
        {/* Room Image and Info */}
        <div className="col-md-8">
          <div className="card mb-4 shadow-lg border-0 rounded-3">
            <img
              src="https://media.istockphoto.com/id/1452529483/photo/3d-render-of-luxury-hotel-room.webp?b=1&s=170667a&w=0&k=20&c=u8emlx6KguYJGU4jZFRwGx9KAxOzWLmEBdIJIj1DAdQ="
              className="roomimg"
              alt="Deluxe Room"
            />
            <div className="card-body">
              <h2 className="card-title mb-3 text-dark">Deluxe Room</h2>
              <p className="card-text text-muted mb-4">Starting from <strong>$150</strong> per night</p>
              <p className="card-text mb-4">
                Indulge in luxury with our Deluxe Room, offering a breathtaking city skyline view. Designed with modern elegance, it comes equipped with premium amenities to ensure your stay is both comfortable and unforgettable.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-center mb-2"><FaBed className="me-2 text-primary" /> <strong>Max Guests:</strong> 3</li>
                <li className="d-flex align-items-center mb-2"><FaRuler className="me-2 text-primary" /> <strong>Room Size:</strong> 45 sqm</li>
                <li className="d-flex align-items-center mb-2"><FaMoneyBillAlt className="me-2 text-primary" /> <strong>Price per Night:</strong> $150</li>
                <li className="d-flex align-items-center mb-2"><FaCalendarAlt className="me-2 text-primary" /> <strong>Available Dates:</strong> All Year Round</li>
                <li className="d-flex align-items-center mb-2"><FaUser className="me-2 text-primary" /> <strong>Guest Reviews:</strong> <a href="#reviews" className="text-decoration-none">Read Reviews</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body">
              <h3 className="card-title mb-4">Check Availability</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="checkInDate" className="form-label">Check-In Date</label>
                  <input
                    type="date"
                    id="checkInDate"
                    className="form-control"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    onBlur={calculateTotalPrice}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkOutDate" className="form-label">Check-Out Date</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    className="form-control"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    onBlur={calculateTotalPrice}
                  />
                </div>
                {totalPrice > 0 && (
                  <div className="alert alert-info mb-3">
                    <strong>Total Price:</strong> ${totalPrice}
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => window.location.href='/payment'}
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
