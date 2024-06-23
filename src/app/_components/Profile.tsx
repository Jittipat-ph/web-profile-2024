import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <img
          src="https://media.tenor.com/1EhdUZSVCo8AAAAM/hakos_baelz-holo_council.gif"
          // width={500}
          // height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hako Baelz</h1>
        <p className="text-base">RRat</p>
      </div>

      <div className="py-10 text-center ">"JDON My Soul"</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 14 (not really)
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Japan
        </p>
      </div>
    </div>
  );
};

export default Profile;
