import React from "react";

const Checkout = () => {

  const formSubmitHandler = (event) => {
    event.preventDefault();
  }
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="">
        <label htmlFor="">Name</label>
        <input type="text" name="" id=""/>
      </div>
    </form>
  );
};

export default Checkout;
