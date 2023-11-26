import React from "react";

const CheckoutForm = () => {
  return (
    <form className="w-full overflow-y-auto">
      <div className="max-w-sm">
        <div className="mb-4">
          <h4 className="text-lg py-4">Contact Information</h4>
          <div className="flex flex-col justify-center">
            <label htmlFor="name" className="cursor-pointer w-fit">
              Email
            </label>
            <input
              type="email"
              id="name"
              required
              className="focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-col justify-center">
            <label htmlFor="name" className="cursor-pointer w-fit">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-col justify-center">
            <label htmlFor="name" className="cursor-pointer w-fit">
              Shipping Address
            </label>
            <input
              type="text"
              id="name"
              className="focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-col justify-center">
            <label htmlFor="name" className="cursor-pointer w-fit">
              Contact No
            </label>
            <input
              type="text"
              id="name"
              className="focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
