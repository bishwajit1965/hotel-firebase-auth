import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const RoomDetail = () => {
  // Fetching data according to room id
  const details = useParams();
  const roomDetails = useLoaderData();
  const [rDetails, setRDetails] = useState([]);
  console.log(rDetails);

  useEffect(() => {
    const matchedData = roomDetails.find(
      (rDetail) => rDetail.id === details.id
    );
    setRDetails(matchedData);
  }, [roomDetails, details]);

  const {
    name,
    status,
    floor,
    roomNumber,
    roomStatus,
    beds,
    bookingStatus,
    rentPerDay,
    description,
    image,
  } = rDetails;

  return (
    <div className="md:px-40 mx-auto md:my-10">
      <img
        src={image}
        alt=""
        className="object-cover rounded-t-md h-60 w-full"
      />
      <div className="p-2 border border-slate-100  shadow-lg">
        <h1 className="text-3xl text-center font-bold">Room Detail</h1>
        <h2>{name}</h2>
        <p>Room status: {status}</p>
        <p>Floor: {floor}</p>
        <p>Room number: {roomNumber}</p>
        <p>Room status: {roomStatus}</p>
        <p>Beds: {beds}</p>
        <p>Booking status: {bookingStatus}</p>
        <p>Rent per day: ${rentPerDay}</p>
        <p>{description}</p>
        <div className="my-5">
          <Link to="/">
            <button className="bg-indigo-500 text-white rounded-md px-6 py-2">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
