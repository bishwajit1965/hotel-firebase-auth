import React from "react";
import { Link } from "react-router-dom";

const Rooms = ({ room }) => {
  console.log(room);
  const {
    id,
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
  } = room;
  return (
    <div className="border border-slate-100 rounded-md">
      <img
        src={image}
        alt=""
        className="object-cover rounded-t-md h-60 w-full"
      />
      <div className="p-2">
        <h2>{name}</h2>
        <p>Room status: {status}</p>
        <p>Floor: {floor}</p>
        <p>Room number: {roomNumber}</p>
        <p>Room status: {roomStatus}</p>
        <p>Beds: {beds}</p>
        <p>Booking status: {bookingStatus}</p>
        <p>Rent per day: ${rentPerDay}</p>
      </div>
      <div className="bg-zinc-100 md:flex justify-between items-center">
        <div className="px-2">One</div>
        <div className="px-2">Two</div>
        <div className="px-2">Three</div>
        <div className="px-2">Four</div>
        <div className="">
          <Link to={`/room-detail/${id}`}>
            <button className="bg-indigo-500 text-white rounded-br-md px-4 py-1 ">
              Book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
