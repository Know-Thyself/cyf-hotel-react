import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingsData, setBookingsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = searchVal => {
    const filteredSearch = bookingsData.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase()) ||
        (searchVal > 0 && searchVal.includes(booking.id))
      );
    });
    setBookings(filteredSearch);
  };

  useEffect(() => {
    fetch("https://hotel-cyf-server.onrender.com/bookings")
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setBookings(data);
        setBookingsData(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="search-bookings-container">
        <Search bookings={bookings} setBookings={setBookings} search={search} />
      </div>
      {loading ? (
        <div className="container mw-100">
          <SearchResults
            results={bookings}
            tableHeaders={[
              "Title",
              "First name",
              "Surname",
              "Email",
              "Room id",
              "Check in date",
              "Check out date",
              "Staying for",
              "Profile"
            ]}
          />
        </div>
      ) : (
        <span className="loading-span">Loading...</span>
      )}
    </div>
  );
};

export default Bookings;
