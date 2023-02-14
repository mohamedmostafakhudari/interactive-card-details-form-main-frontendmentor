import { useNavigate } from "react-router-dom";
const initialInputState = {
  name: {
    input: "",
    error: false,
    errorMessage: "",
  },
  ccn: {
    input: "",
    error: false,
    errorMessage: "",
  },
  exDate: {
    month: {
      input: "",
      error: false,
    },
    year: {
      input: "",
      error: false,
    },
    errorMessage: "",
  },
  cvc: {
    input: "",
    error: false,
    errorMessage: "",
  },
};
export default function ThankYou({ setInput }) {
  const navigate = useNavigate();
  function handleClick() {
    setInput(initialInputState);
    navigate("/", { replace: true });
  }
  return (
    <div
      id="wrapper"
      className="md:grid md:place-items-center md:place-content-center lg:w-full"
    >
      <div className="container flex flex-col items-center gap-5 mx-auto px-5 mt-24 md:min-w-[400px] lg:mt-0 ">
        <div className="mb-5">
          <img src="./assets/images/icon-complete.svg" alt="successful" />
        </div>
        <h1 className="uppercase text-2xl text-grayViolet-900 tracking-[4px] font-bold">
          thank you!
        </h1>
        <p className="text-grayViolet-800">We've added your card details</p>
        <button
          onClick={handleClick}
          className="text-white bg-grayViolet-900 w-full py-3 rounded-lg text-lg mt-5"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
