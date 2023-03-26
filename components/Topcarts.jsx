import React from "react";

const Topcarts = () => {
  return (
    <div className="grid lg:grid-cols-6 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$8,768</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="flex items-center bg-green-200 p-2 rounded-lg text-lg">
          +18%
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$83,768</p>
          <p className="text-gray-600">Customer</p>
        </div>
        <p className="flex items-center bg-green-200 p-2 rounded-lg text-lg">
          +18%
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$1,437,876</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="flex items-center bg-green-200 p-2 rounded-lg text-lg">
          +18%
        </p>
      </div>
   
    </div>
  );
};

export default Topcarts;
