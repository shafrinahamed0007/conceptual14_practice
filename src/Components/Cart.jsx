import React from "react";

const Cart = ({ carts }) => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold my-10">Your Cart</h2>
      {carts.map((item) => (
        <div className="flex items-center justify-between border border-zinc-200 rounded-lg p-5 mt-4 " key={item.id}>
          <div className="flex gap-4">
            <div>
              <img
                className="h-20 w-20 object-contain"
                src={item?.image}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl font-bold">{item?.title}</h2>
              <p>{item?.description}</p>
            </div>
          </div>
          <div className="text-2xl font-bold">{item?.price}BDT/month</div>
        </div>
      ))}

      <div className="flex justify-between bg-zinc-600 text-white p-5 mt-5 rounded-lg text-2xl">
        <div>Total</div>
        <div>0 Tk</div>
        
      </div>
    </div>
  );
};

export default Cart;
