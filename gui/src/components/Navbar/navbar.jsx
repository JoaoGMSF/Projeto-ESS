import Container from "./container";

import "./NavBar.modules.css";
import logo from "../../img/image 2.svg";
import Home from "../../img/Home.svg";
import Library from "../../img/Library.svg";
import { useEffect } from "react";
import axiosInstance from "../common/server";

function NavBar() {
  //     useEffect((axiosInstance)=>{
  //         async function fetchCategories() {
  //             const response = await axiosInstance({
  //               method: "post",
  //               url: `/getUser`,
  //               headers: {},
  //               data: {
  //                 category: parseInt(localStorage.getItem(''),10)
  //               },
  //             });
  //             let val = await response.data
  //             return val
  //         }
  //     })
  return (
    <nav className="navBar">
      <Container>
        <div className="navBar-ajusteProfile">
          <table className="navBar-profilePosition">
            <tr>
              <td>
                <img src={logo} alt="Costs" />
              </td>
              <td className="navBar-text-user">
                maya <br />
                view profile
              </td>
            </tr>
          </table>
        </div>
        <div className="navBar-ajusteOptions">
          <ul className="navBar-list">
            <li className="navBar-HomeAdjust">
              <a href="/">
                <img className="navBar-HomeAdjustImage" src={Home} alt="" />
              </a>
            </li>
            <li className="navBar-LibraryAdjust">
              <a href="/listPlaylistByCategory">
                <img
                  className="navBar-LibraryAdjustImage"
                  src={Library}
                  alt=""
                />
              </a>
            </li>
            <li className="navBar-item">
              <input
                className="navBar-lupa"
                type="text"
                name="Artists, songs, or podcasts"
                placeholder="Artists, songs, or podcasts"
              />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
