import { useState } from "react";
import FormLayout from "./layouts/FormLayout";
import { Route, Routes, Outlet } from "react-router-dom";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
function App() {
  const [input, setInput] = useState({
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
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<FormLayout input={input} setInput={setInput} />}
        >
          <Route index element={<Form input={input} setInput={setInput} />} />
          <Route
            path="/successful"
            element={<ThankYou setInput={setInput} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
