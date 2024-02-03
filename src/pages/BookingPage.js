import { useState, useReducer, useEffect } from 'react';
import Nav from '../components/Nav';
import BookingForm from '../components/BookingForm';

const reducer = (state, action) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function BookingPage(props) {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  function updateTimes(selectedDate) {
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }

  return (
    <>
      <Nav />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </>
  );
}

export default BookingPage;