import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-bg.png";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut (auth);
  console.log(user);
  return (
    <div className="navbar bg-black ">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/homepage">
          <img style={{ height: "80px" }} src={logo} alt="logo " />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-yellow-500 font-bold">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/homepage">HOME</Link>
          </li>

          <li>
            <Link to="/ourmenu">OUR MENU</Link>
          </li>

          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>

          <li>
            <Link to="/contactus">CONTACT US </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn bg-yellow-500 border-black text-black font-bold m-2 hover:bg-yellow-400" onClick={signOut}>
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="btn  bg-yellow-500 border-black text-black font-bold m-2 hover:bg-yellow-400 "
            >
              LOG IN
            </Link>
            <Link
              to="/signup"
              className="btn  bg-yellow-500 border-black text-black font-bold m-2 hover:bg-yellow-400 "
            >
              SIGN UP
            </Link>
          </>
        )}

        
      </div>
    </div>
  );
};

export default Header;
