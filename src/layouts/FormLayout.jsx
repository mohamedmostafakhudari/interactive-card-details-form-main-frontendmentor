import Form from "../components/Form";
import HeroBackground from "../components/HeroBackground";
import { Outlet } from "react-router-dom";
export default function FormLayout({ input, setInput }) {
  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-50px)] lg:flex-row">
        <HeroBackground input={input} />
        <Outlet />
      </div>
      <footer className="text-center py-2">
        Made With &lt;3 By{" "}
        <span className="text-primary2 text-lg">Mohamed Mostafa</span>
      </footer>
    </>
  );
}
