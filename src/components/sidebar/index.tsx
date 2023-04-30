import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TASK</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li className="title">MAIN</li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="linkItem">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <li className="title">LISTS</li>
          <Link to="/applications" style={{ textDecoration: "none" }}>
            <li className="linkItem">
              <StoreIcon className="icon" />
              <span>Applications</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
