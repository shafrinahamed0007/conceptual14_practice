import React, { use } from "react";

const Models = ({ dataPromise }) => {
  const datas = use(dataPromise);
  //   console.log(datas);
  return (
    <div className="py-20">
      <div className="text-center space-y-5">
        <h2 className="text-zinc-300 text-4xl font-bold">
          Choose Your AI Model
        </h2>
        <p className="text-zinc-200">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {datas.map((data) => (
          <div className="shadow-lg rounded-lg border border-zin-300 p-6 my-5 space-y-5 overflow-hidden">
            <div className="flex justify-center h-56 bg-zinc-200">
              <img
                className="h-40 w-40 object-contain"
                src={data?.image}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-300">{data?.title}</h2>
              <p className="text-zinc-300">{data?.description}</p>
              <div className="text-zinc-300 text-2xl">Price: {data?.price}BDT/month</div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
                  Subscribe Now
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
