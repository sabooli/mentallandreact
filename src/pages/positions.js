import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import hiring from "../icons/Group 1103.png";
import Openrole from "./openRole";

export default function Positions() {
    return (
      <div>
        <Header className="twitter" />
        <Navbar />
        <div className="hiringpage">
          <div className="hiring">
            <div>
              <h1>We're hiring</h1>
              <div className="hiringtext">
                Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa
                velit consectetur lectus erat. Tincidunt dis egestas aliquet
                adipiscing donec. Sed cras vulputate amet scelerisque. Varius
                etiam enim velit arcu arcu eget. Nunc a quis enim nibh posuere
                cras aenean purus. Nulla sagittis semper cum rhoncus varius quis
                vitae venenatis nibh. Senectus fames quisque porta vitae
                facilisis commodo consequat. Feugiat enim odio in sed
                condimentum. Id et purus est risus. . Tincidunt dis egestas
                aliquet adipiscing donec. Sed cras vulputate amet scelerisque.
              </div>
            </div>
            <div className="hiringimg">
              <img
                src={hiring}
                className="img-fluid"
                alt="hiring in mentalland"
              />
            </div>{" "}
          </div>
          <div className="openRoles">
            <h2 className="text-center">open roles in mentalland</h2>
            <div className="openRolebar">
              <Openrole />
              <Openrole />
              <Openrole />
              <Openrole />
              <Openrole />
              <Openrole />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}