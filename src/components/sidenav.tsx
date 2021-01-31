import styles from "./SideNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/dispatchers/sidebar/toggle";

export default function SideNavComponent({ children }) {
  const dispatch = useDispatch();
  const { isToggled } = useSelector((state) => state.sidebarReducer);

  const openNav = () => {
    dispatch(toggle());
    document.addEventListener("keydown", handleEscKey);
  };
  const closeNav = () => {
    dispatch(toggle());
    document.removeEventListener("keydown", handleEscKey);
  };

  const handleEscKey = (e) => {
    if (e.key === "Escape") closeNav();
  };

  const navCoverStyle = { width: isToggled ? "100%" : "0" };
  const sideNavStyle = { width: isToggled ? "250px" : "0" };
  const openButtonStyle = { visibility: isToggled ? "hidden" : "visible" };

  return (
    <div>
      <span
        onClick={() => openNav()}
        style={openButtonStyle}
        className="cursor-pointer"
      >
        &#9776;
      </span>
      <div style={navCoverStyle} className="nav-cover" />
      <div
        style={sideNavStyle}
        className={`${styles.sidenav} bg-gray-900 h-full flex flex-col gap-4 fixed z-30 top-0 left-0 pt-8`}
      >
        <a className="text-5xl self-end" onClick={() => closeNav()}>
          &times;
        </a>
        {children}
      </div>
    </div>
  );
}
