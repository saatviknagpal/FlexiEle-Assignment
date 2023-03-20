import React from "react";

export default function Card({ data }) {
  return (
    <>
      <div
        draggable
        className="mt-5 w-[90%] mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow transition duration-300 ease-in-out hover:border-red-500 hover:border-2"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src={`https://ui-avatars.com/api/?name=${data.candidate_name}&background=random`}
              alt="avatar"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {data.candidate_name}
            </p>
            <p className="text-sm text-gray-500 truncate ">
              {new Date(data.dateApplied).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="pt-2 flex items-end justify-end text-normal font-semibold text-gray-900 ">
          {data.location}
        </div>
      </div>
    </>
  );
}
