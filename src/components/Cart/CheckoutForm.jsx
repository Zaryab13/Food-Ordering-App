import {useState, useEffect} from 'react';
import useInput from "../../hooks/use-input";

const CheckoutForm = (props) => {
  const [formIsValid, setformIsValid] = useState(false);

 
  const {
    value: enteredName,
    isValid: nameIsValid,
    isError: nameHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isError: emailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    isError: addressHasError,
    valueChangeHandler: addressInputChangeHandler,
    inputBlurHandler: addressInputBlurHandler,
    reset: addressInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredContact,
    isValid: contactIsValid,
    isError: contactHasError,
    valueChangeHandler: contactInputChangeHandler,
    inputBlurHandler: contactInputBlurHandler,
    reset: contactInputReset,
  } = useInput((value) => value !== "");

  useEffect(() => {
    setformIsValid(nameIsValid && emailIsValid && addressIsValid &&contactIsValid);
}, [nameIsValid, emailIsValid, addressIsValid, contactIsValid]);


  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      address: enteredAddress,
      contact: enteredContact
    })
    nameInputReset();
    emailInputReset();
    addressInputReset();
    contactInputReset();
  };


  return (
    <form onSubmit={formSubmitHandler} className="w-full overflow-y-auto">
      <div className="w-full">
        <h4 className="text-lg font-bold py-4">Contact Information</h4>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="flex flex-col justify-center">
              <label htmlFor="name" className={nameHasError? "text-red-400 cursor-pointer w-fit" : "cursor-pointer w-fit"}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={enteredName}
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                className={nameHasError? "border-red-400 bg-red-300 focus:outline-none border p-2 my-1 rounded-lg focus:border-indigo-500" : "focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"}
              />
              {nameHasError && <p className="text-red-400 font-sans">Name Input Can Not be Empty</p>}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <label htmlFor="name" className={emailHasError? "text-red-400 cursor-pointer w-fit" : "cursor-pointer w-fit"}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                className={emailHasError? "border-red-400 bg-red-300 focus:outline-none border p-2 my-1 rounded-lg focus:border-indigo-500" : "focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"}
              />
              {emailHasError && <p className="text-red-400 font-sans">Email Input Can Not be invalid</p>}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <label htmlFor="name" className={addressHasError? "text-red-400 cursor-pointer w-fit" : "cursor-pointer w-fit"}>
                Shipping Address
              </label>
              <input
                type="text"
                id="address"
                value={enteredAddress}
                onChange={addressInputChangeHandler}
                onBlur={addressInputBlurHandler}
                className={addressHasError? "border-red-400 bg-red-300 focus:outline-none border p-2 my-1 rounded-lg focus:border-indigo-500" : "focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"}
              />
              {addressHasError && <p className="text-red-400 font-sans">Address Input Can Not be Empty</p>}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <label htmlFor="name" className={contactHasError? "text-red-400 cursor-pointer w-fit" : "cursor-pointer w-fit"}>
                Contact No
              </label>
              <input
                type="text"
                id="contact"
                value={enteredContact}
                onChange={contactInputChangeHandler}
                onBlur={contactInputBlurHandler}
                className={contactHasError? "border-red-400 bg-red-300 focus:outline-none border p-2 my-1 rounded-lg focus:border-indigo-500" : "focus:outline-none border border-slate-200 p-2 my-1 rounded-lg bg-slate-100 focus:border-indigo-500"}
              />
              {contactHasError && <p className="text-red-400 font-sans">Contact Input Can Not be Empty</p>}
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-5">
          <button
            type="button"
            className="bg-transparent border border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white text-[#5a1a01] py-2 px-7 rounded-3xl"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#8A2B06] hover:bg-[#5a1a01] text-white py-2 px-7 rounded-3xl"
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
