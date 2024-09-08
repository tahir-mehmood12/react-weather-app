import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Root({ children }) {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
