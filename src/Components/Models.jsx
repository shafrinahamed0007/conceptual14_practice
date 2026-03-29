import React, { use } from "react";
import CartModel from "./CartModel";

const Models = ({ dataPromise, carts, setCarts }) => {
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
          <CartModel
            key={data.id}
            data={data}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
