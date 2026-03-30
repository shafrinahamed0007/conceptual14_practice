import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.error("Remove All Item");
  };

  const handleDelete = (item) => {
    // console.log("Delete clicked", item);
    const filterArray = carts.filter(c => c.id !== item.id);
    // console.log(filterArray)
    setCarts(filterArray);
    toast.warning(`${item.title} remove from cart`);
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold my-10">Your Cart</h2>
      {carts.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div>
          {carts.map((item) => (
            <div
              className="flex items-center justify-between border border-zinc-200 rounded-lg p-5 mt-4 "
              key={item.id}
            >
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
              <button
                onClick={() => handleDelete(item)}
                className="bg-red-500 rounded-xl p-3"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between bg-zinc-600 text-white p-5 mt-5 rounded-lg text-2xl">
        <div>Total</div>
        <div>{totalPrice} Tk</div>
      </div>
      <button
        onClick={handlePayment}
        className="mt-5 w-full bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white"
      >
        <p className="mx-auto items-center">Proceed to Checkout</p>
      </button>
    </div>
  );
};

export default Cart;
