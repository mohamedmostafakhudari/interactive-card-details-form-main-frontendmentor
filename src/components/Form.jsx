import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form({ input, setInput }) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  function handleInputChange(e) {
    if (e.target.id === "month" || e.target.id === "year") {
      const { id, value } = e.target;
      setInput({
        ...input,
        exDate: {
          ...input.exDate,
          [id]: {
            ...input.exDate[id],
            input: value,
          },
        },
      });
      return;
    }
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: {
        ...input[name],
        input: value,
      },
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    resetErrors();
    if (!validateName()) {
      setInput((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          error: true,
          errorMessage: "Can't be blank",
        },
      }));
      setError(true);
    }
    if (!validateCCN()) {
      setInput((prev) => ({
        ...prev,
        ccn: {
          ...prev.ccn,
          error: true,
          errorMessage: `${
            prev.ccn.input === ""
              ? "Can't be blank"
              : "Wrong format, numbers only"
          }`,
        },
      }));
      setError(true);
    }
    if (!validateExDateMonth()) {
      setInput((prev) => ({
        ...prev,
        exDate: {
          ...prev.exDate,
          month: {
            ...prev.exDate.month,
            error: true,
          },
          errorMessage: `${
            prev.exDate.month.input === ""
              ? "Can't be blank"
              : "Wrong format, numbers only"
          }`,
        },
      }));
      setError(true);
    }
    if (!validateExDateYear()) {
      setInput((prev) => ({
        ...prev,
        exDate: {
          ...prev.exDate,
          year: {
            ...prev.exDate.year,
            error: true,
          },
          errorMessage: `${
            prev.exDate.year.input === ""
              ? "Can't be blank"
              : "Wrong format, numbers only"
          }`,
        },
      }));
      setError(true);
    }
    if (!validateCVC()) {
      setInput((prev) => ({
        ...prev,
        cvc: {
          ...prev.cvc,
          error: true,
          errorMessage: `${
            prev.cvc.input === ""
              ? "Can't be blank"
              : "Wrong format, numbers only"
          }`,
        },
      }));
      setError(true);
    }
    if (error) return;
    navigate("/successful", { replace: true });
  }
  function validateName() {
    return input.name.input !== "";
  }
  function validateCCN() {
    console.log(input.ccn);
    return /\d{4}\s\d{4}\s\d{4}(\s\d{4})?/.test(input.ccn.input);
  }
  function validateExDateMonth() {
    const mmReg = /(0[1-9])|(1[0-2])/;
    return mmReg.test(input.exDate.month.input);
  }
  function validateExDateYear() {
    const yyReg = /[2-9][0-9]/;
    return yyReg.test(input.exDate.year.input);
  }
  function validateCVC() {
    return /\d{3}/.test(input.cvc.input);
  }
  function resetErrors() {
    setError(false);
    setInput((prevInput) => {
      const newInput = {};
      for (const key of Object.keys(prevInput)) {
        if (prevInput[key].hasOwnProperty("error")) {
          newInput[key] = {
            ...prevInput[key],
            errorMessage: "",
            error: false,
          };
        } else {
          for (const nestedKey of Object.keys(prevInput[key])) {
            if (typeof prevInput[key][nestedKey] !== "object") {
              newInput[key] = {
                ...prevInput[key],
                errorMessage: "",
              };
            } else {
              newInput[key] = {
                ...prevInput[key],
                [prevInput[key][nestedKey]]: {
                  ...prevInput[key][nestedKey],
                  error: false,
                },
              };
            }
          }
        }
      }
      return newInput;
    });
  }
  return (
    <div
      id="wrapper"
      className="md:grid md:place-items-center md:place-content-center lg:w-full"
    >
      <form
        onSubmit={handleSubmit}
        className="flex-1 mt-20 md:max-w-lg lg:max-w-md"
      >
        <div className="container mx-auto px-5 md:text-primary">
          <div className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="uppercase text-grayViolet-900 lg:text-sm tracking-wider"
              >
                cardholder name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Jane Appleseed"
                maxLength={50}
                onChange={(e) => handleInputChange(e)}
                className={`border border-grayViolet-200 block p-2 rounded-lg px-4 w-full mt-2 ml-1 focus:outline-none focus:border-primary2 ${
                  input.name.error && "border-error"
                }`}
              />
              <span
                className={`text-error block mt-1 ${
                  !input.name.error && "hidden"
                }`}
              >
                {input.name.errorMessage}
              </span>
            </div>
            <div>
              <label
                htmlFor="ccn"
                className="uppercase text-grayViolet-900 lg:text-sm tracking-wider"
              >
                card number
              </label>
              <input
                type="tel"
                id="ccn"
                name="ccn"
                inputMode="numeric"
                maxLength={19}
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={(e) => handleInputChange(e)}
                className={`border border-grayViolet-200 block p-2 rounded-lg px-4 w-full mt-2 ml-1 focus:outline-none focus:border-primary2 ${
                  input.ccn.error && "border-error"
                }`}
              />
              <span
                className={`text-error block mt-1 ${
                  !input.ccn.error && "hidden"
                }`}
              >
                {input.ccn.errorMessage}
              </span>
            </div>
            <div className="flex flex-wrap min-[375px]:flex-nowrap gap-2">
              <div className="w-full min-[375px]:flex-1">
                <label
                  htmlFor="exDate"
                  className="uppercase text-grayViolet-900 lg:text-sm tracking-wider"
                >
                  exp. date (mm/yy)
                </label>
                <div className="flex gap-1">
                  <input
                    type="tel"
                    id="month"
                    placeholder="MM"
                    maxLength={2}
                    onChange={(e) => handleInputChange(e)}
                    className={`border border-grayViolet-200 block p-2 rounded-lg px-4 mt-2 w-full ml-1 focus:outline-none focus:border-primary2 ${
                      input.exDate.month.error && "border-error"
                    }`}
                  />
                  <input
                    type="tel"
                    placeholder="YY"
                    maxLength={2}
                    id="year"
                    onChange={(e) => handleInputChange(e)}
                    className={`border border-grayViolet-200 block p-2 rounded-lg px-4 mt-2 w-full ml-1 focus:outline-none focus:border-primary2 ${
                      input.exDate.year.error && "border-error"
                    }`}
                  />
                </div>
                <span
                  className={`text-error block mt-1 text-sm leading-6 ${
                    !input.exDate.year.error &&
                    !input.exDate.month.error &&
                    "hidden"
                  }`}
                >
                  {input.exDate.errorMessage}
                </span>
              </div>
              <div className="w-full min-[375px]:flex-1">
                <label
                  htmlFor="cvc"
                  className="uppercase text-grayViolet-900 lg:text-sm tracking-wider"
                >
                  cvc
                </label>
                <input
                  type="tel"
                  id="cvc"
                  name="cvc"
                  placeholder="e.g. 123"
                  maxLength={3}
                  onChange={(e) => handleInputChange(e)}
                  className={`border border-grayViolet-200 block p-2 rounded-lg px-4 mt-2 w-full ml-1 focus:outline-none focus:border-primary2 ${
                    input.cvc.error && "border-error"
                  }`}
                />
                <span
                  className={`text-error block mt-1 ${
                    !input.cvc.error && "hidden"
                  }`}
                >
                  {input.cvc.errorMessage}
                </span>
              </div>
            </div>
          </div>
          <button className="text-white bg-grayViolet-900 w-full py-3 rounded-lg text-lg mt-10">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
