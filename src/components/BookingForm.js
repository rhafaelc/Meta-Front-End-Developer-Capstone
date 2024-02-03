import { useState, useEffect } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

function BookingForm(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [validationError, setValidationError] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    props.updateTimes(date);
  }, [date, props]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.updateTimes(selectedDate);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const isValid = validateInputs();

    if (isValid) {
      setBookingConfirmed(true);
    } else {
      console.error('Validation error:', validationError);
    }
  };

  const validateInputs = () => {
    setValidationError('');

    if (!date) {
      setValidationError('Please choose a date.');
      return false;
    }

    if (!time) {
      setValidationError('Please choose a time.');
      return false;
    }

    if (!guests || isNaN(guests) || guests < 1 || guests > 10) {
      setValidationError('Please enter a valid number of guests (1-10).');
      return false;
    }

    if (!occasion) {
      setValidationError('Please choose an occasion.');
      return false;
    }

    return true;
  };

  if (bookingConfirmed) {
    const formData = { date, time, guests, occasion };
    return <ConfirmedBooking formData={formData} />;
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        height: '90vh',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1>Book a Table</h1>
        <form style={{
          display: 'grid',
          maxWidth: '200px',
          gap: '20px',
        }}
          onSubmit={handleBookingSubmit}
        >
          <label for="res-date" style={{
            marginBottom: '-15px',
          }}>Choose date</label>
          <input
            type="date"
            id="res-date"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={date}
            onChange={handleDateChange} />
          <label for="res-time" style={{
            marginBottom: '-15px',
          }}>Choose time</label>
          <select
            id="res-time"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={time}
            onChange={(e) => setTime(e.target.value)}>
            {props.availableTimes.map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <label for="guests" style={{
            marginBottom: '-15px'
          }}>Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <label for="occasion" style={{
            marginBottom: '-15px'
          }}>Occasion</label>
          <select
            id="occasion"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#f4ce14',
            color: 'black',
            fontWeight: 'bold',
            cursor: 'pointer',
          }} />
        </form>
      </div >
    </>
  );
}

export default BookingForm;