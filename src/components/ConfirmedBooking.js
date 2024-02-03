import React from 'react';

function ConfirmedBooking({ formData }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully confirmed. Thank you!</p>

      <div>
        <strong>Date:</strong> {formData.date}
      </div>
      <div>
        <strong>Time:</strong> {formData.time}
      </div>
      <div>
        <strong>Guests:</strong> {formData.guests}
      </div>
      <div>
        <strong>Occasion:</strong> {formData.occasion}
      </div>
    </div>
  );
}

export default ConfirmedBooking;