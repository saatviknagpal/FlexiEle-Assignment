import React from "react";
import { response } from "../data/data";

export default function EditableCard({
  formData,
  setFormData,
  showCard,
  setShowCard,
  updateResponse,
  setUpdateResponse,
  stage,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, stages: stage });
    setUpdateResponse(!updateResponse);
    setShowCard(!showCard);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
      <div className="mt-5 w-[90%] mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow ">
        <div className="flex flex-col lg:flex-row items-center space-x-4">
          <div className="flex-shrink-0 mb-2">
            <img
              className="w-8 h-8 rounded-full"
              src={`https://ui-avatars.com/api/?name=${formData?.candidate_name}&background=random`}
              alt="Neil "
            />
          </div>
          <form className="flex flex-col min-w-0" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="candidate_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Candidate Name
              </label>
              <input
                type="text"
                id="candidate_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="John Doe"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="dateApplied"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Date Applied
              </label>
              <input
                type="date"
                id="dateApplied"
                onChange={(e) => handleChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="Location"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                onChange={(e) => handleChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="flex justify-center items-center gap-1">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2 px-3 text-center "
              >
                Submit
              </button>
              <button
                type="submit"
                onClick={() => {
                  setShowCard(!showCard);
                  setFormData({});
                }}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm py-2 px-3 text-center "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
