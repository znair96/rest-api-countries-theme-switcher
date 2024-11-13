import { Link, Outlet } from "react-router-dom";
import LightModeIcon from "./assets/light_mode_icon.svg";
function App() {
  return (
    <>
      <nav className="border-[1px] border-white border-solid drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-5 bg-white">
        <div className="container m-auto flex justify-between items-center">
          <Link to="/" className="font-nunito font-extrabold text-2xl">
            Where in the world?
          </Link>
          <h2 className="font-nunito font-semibold text-base flex items-center gap-2">
            <img src={LightModeIcon} alt="light mode" className="mt-[-1px]" />
            Dark Mode
          </h2>
        </div>
      </nav>
      <main className="bg-[#F2F2F2]">
        <div className="container mx-auto pt-10">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
