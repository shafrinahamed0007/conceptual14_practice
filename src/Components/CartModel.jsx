import React, { useState } from "react";
import { toast } from "react-toastify";

const CartModel = ({ data }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribed = () => {
    if (!isSubscribed) {
      setIsSubscribed(true);
      toast.success(`${data.title} added successfully!`);
    } else {
      toast.info(`${data.title} added already!`);
    }
  };
  return (
    <div className="shadow-lg rounded-lg border border-zin-300 p-6 my-5 space-y-5 overflow-hidden">
      <div className="flex justify-center h-56 bg-zinc-200">
        <img className="h-40 w-40 object-contain" src={data?.image} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-zinc-300">{data?.title}</h2>
        <p className="text-zinc-300">{data?.description}</p>
        <div className="text-zinc-300 text-2xl">
          Price: {data?.price}BDT/month
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={handleSubscribed}
            className={` transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl  flex items-center gap-3 group text-white ${isSubscribed ? "bg-green-600 hover:bg-green-500 shadow-green-500/30" : "bg-red-600 hover:bg-red-500 shadow-red-500/30"}`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe Now"}
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
