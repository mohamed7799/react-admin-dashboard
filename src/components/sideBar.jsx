import {
  LineStyle,
  Timeline,
  PersonOutline,
  Storefront,
  AttachMoney,
  Leaderboard,
  MailOutline,
  Feedback,
  ChatBubbleOutline,
  Error,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="px-4">
      <div>
        <h3 className="sideBar-menu-title ">Dashboard</h3>
        <ul className=" text-gray-700">
          <Link to="/">
            <li className="sideBar-menu-list-item">
              <LineStyle />

              <span>Home</span>
            </li>
          </Link>
          <li className="sideBar-menu-list-item">
            <Timeline />
            <span> Analytics</span>
          </li>
          <li className="sideBar-menu-list-item">
            <Timeline />
            <span> Sales</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sideBar-menu-title ">Quick menu</h3>
        <ul className=" text-gray-700">
          <Link to="/users">
            <li className="sideBar-menu-list-item">
              <PersonOutline /> <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="sideBar-menu-list-item">
              <Storefront />
              <span> Products</span>
            </li>
          </Link>
          <li className="sideBar-menu-list-item">
            <AttachMoney />
            <span> Transactions</span>
          </li>
          <li className="sideBar-menu-list-item">
            <Leaderboard />
            <span> Reports</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sideBar-menu-title ">Notifications</h3>
        <ul className=" text-gray-700">
          <li className="sideBar-menu-list-item">
            <MailOutline /> <span>Mail</span>
          </li>
          <li className="sideBar-menu-list-item">
            <Feedback />
            <span> Feedback</span>
          </li>
          <li className="sideBar-menu-list-item">
            <ChatBubbleOutline />
            <span> Messages</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sideBar-menu-title ">Staff</h3>
        <ul className=" text-gray-700">
          <li className="sideBar-menu-list-item">
            <MailOutline /> <span>Manage</span>
          </li>
          <li className="sideBar-menu-list-item">
            <Timeline />
            <span> Analytics</span>
          </li>
          <li className="sideBar-menu-list-item">
            <Error />
            <span> Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
