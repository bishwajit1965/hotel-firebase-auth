import React from "react";
import { useLoaderData } from "react-router-dom";
import Rooms from "../rooms/Rooms";
import HeroImage from "../../../assets/03-hotel.jpg";

const Home = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className="md:my-10">
      <div className="md:my-10 md:px-20 p-0 relative ">
        <div className="">
          <img
            src={HeroImage}
            alt=""
            className="h-96 w-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div className="h-screen absolute md:top-40 text-white mx-auto">
          <h2 className="text-6xl text-white font-bold text-center w-3/4 mx-auto">
            WELCOME TO HOTEL IMPERIAL
          </h2>
          <p className="w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            asperiores maiores perferendis quis fugit tempore earum possimus
            quos ratione obcaecati! Ipsa temporibus, sapiente illum fugiat
            cumque eligendi itaque non consequuntur!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center md:px-20 mx-auto p-2">
        {rooms.map((room) => (
          <Rooms key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Home;
