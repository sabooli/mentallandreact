import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./style.css";
import "./index.css";
import photo from "../icons/Rectangle 8.svg";
import star from "../icons/Star 9.svg";
import phone from "../icons/phone.svg";
import messages from "../icons/messages.svg";
import Aboutme from "./aboutme";

export default function Counsel() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="contain">
          <div className="connect">
            <div className="bigbar">
              <img src={photo} className="photo" alt="personal" />
              <div className="row">
                <div className="comp col-lg-9">
                  <h2 className="drname">Dr. Mary Green</h2>
                  <h3 className="dreducation">Ph.D in Psychology</h3>
                  <div>
                    <div className="row rof">
                      <div className="bgfield1 ">
                        <span className="field">Depression</span>
                      </div>
                      <div className="bgfield2">
                        <span className="field">Anxiety</span>
                      </div>
                      <div className="bgfield3">
                        <span className="field">Adjustment Issues</span>
                      </div>
                    </div>
                    <div className="level dup">
                      <img src={star} className="star" alt="rate" />
                      <span className="rate">4.9</span>
                      <span className="experience">+1000 Consultations</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="bgphoconsult">
                    <span className="phoconsult">
                      <img src={phone} className="phone" alt="phone" /> Phone
                      Consultation
                    </span>
                  </div>
                  <div className="bgtxconsult">
                    <span className="txconsult">
                      <img src={messages} className="messages" alt="messages" />
                      Text Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="knowing">
            <div className="knowme">
              <div className="col aboutme">
                <span className="tx">About me</span>
              </div>
              <div className="col comments">
                <span className="tx">Comments</span>
              </div>
              <div className="col weeklyplan">
                <span className="tx">Weekly plan</span>
              </div>
            </div>
            <div className="explain">
              <span className="exp">
                Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa
                velit consectetur lectus erat. Tincidunt dis egestas aliquet
                adipiscing donec. Sed cras vulputate amet scelerisque. Varius
                etiam enim velit arcu arcu eget. Nunc a quis enim nibh posuere
                cras aenean purus. Nulla sagittis semper cum rhoncus varius quis
                vitae venenatis nibh. Senectus fames quisque porta vitae
                facilisis commodo consequat. Feugiat enim odio in sed
                condimentum. Id et purus est risus. Tristique aliquam dictum
                arcu ornare fames nulla. Euismod aliquet in a morbi feugiat.
                Arcu sed mattis non elit leo vivamus. Bibendum ultricies
                vestibulum purus ultrices id arcu ut. Justo rhoncus arcu platea
                nisi. Ac enim a ac pellentesque amet turpis. Massa facilisis
                aenean quis aliquam eu metus urna. Vel commodo quis molestie
                malesuada. Tempus erat iaculis diam ullamcorper neque lobortis.
                Ornare velit volutpat mi gravida nec massa augue. Massa rhoncus
                diam quis egestas nunc non ornare fermentum magnis. Lectus velit
                quisque egestas ornare. Lectus odio viverra faucibus malesuada
                facilisis. Dictumst augue massa dui nisl. Metus velit urna
                ultrices risus. Id cras lobortis ornare ultrices malesuada
                pulvinar mattis volutpat. Ac at at sed leo eleifend interdum
                sed. In purus arcu nibh pharetra eu vestibulum. Id vestibulum
                nisl mi condimentum in sagittis rutrum sit. Donec eu viverra
                arcu lorem rhoncus aliquam nullam bibendum dolor. Ut quam
                posuere amet ut. Urna augue et est quisque iaculis sed tortor
                aenean proin. Purus laoreet tempor maecenas faucibus massa.
                Tristique et diam amet lorem sollicitudin. Condimentum tellus
                turpis justo senectus sed. Semper morbi nec ullamcorper congue
                purus leo. Blandit volutpat euismod convallis pretium lorem.
                Lacinia consequat euismod nascetur in in nulla. Maecenas arcu
                amet in mattis. At elementum ipsum sed fames imperdiet diam.
                Mauris sapien vulputate non velit diam viverra. Fames gravida
                nunc sed faucibus non varius. Elit pulvinar eu amet dui. Ornare
                semper sed condimentum facilisis. Viverra elementum at amet
                pulvinar id quis. Lacus diam dui facilisis nunc tellus donec.
                Nec ut neque tellus fermentum. Quam leo tortor volutpat
                consequat amet adipiscing. Ligula elit ut cras magna non sit
                vel. Ut quam elit est volutpat dui. Diam sapien odio ultricies
                lacus lectus.
              </span>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
}