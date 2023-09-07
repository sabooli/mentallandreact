import React, { useState, useEffect, useRef } from "react";
import joinus from "../icons/Rectangle 45 (1).png";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import { useTranslation } from "react-i18next";

export default function Joinus() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [mobile, setMobile] = useState("");
  const [invalidMobile, setInvalidMobile] = useState(false);
  const [address, setAddress] = useState("");
  const [invalidAddress, setInvalidAddress] = useState(false);
  const { i18n } = useTranslation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !surname) {
      alert("Please fill in all required fields.");
    }
  };

  function checkAddress() {
    const addressPattern = /^[A-Za-z0-9\s,'-]*$/;
    setInvalidAddress(!address.match(addressPattern));
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
    checkAddress();
  }

  function checkMobile() {
    const mobilePattern = /^[+]?\d{10,13}$/;
    setInvalidMobile(!mobile.match(mobilePattern));
  }

  function handleMobileChange(event) {
    setMobile(event.target.value);
    checkMobile();
  }

  function checkPhone() {
    const phonePattern = /^[0-9]{9}$/;
    setInvalidPhone(!phone.match(phonePattern));
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
    checkPhone();
  }

function checkEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    setInvalidEmail(true);
  } else {
    setInvalidEmail(false);
  }
}

  const inputRef = useRef(null);

  function handleFileSelect(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  const countryUrl =
    "https://portals.mentalland.com/api/V1/homepage/countries_list";

  useEffect(() => {
    fetch(countryUrl)
      .then((response) => response.json())
      .then((data) => setCountries(data.data));
  }, [countryUrl]);

  useEffect(() => {
    if (selectedCountry) {
      fetch(
        `https://portals.mentalland.com/api/V1/homepage/city_list/${selectedCountry}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCities(data.data);
          console.log(data);
        });
    }
  }, []);

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${joinus}")`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="twitter" />
        <Navbar />
        <div className="customerservice">
          <h1 className="customerserviceH">customer service</h1>
          <h2 className="customerserviceT">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </h2>
        </div>
      </div>
      <div className="customerS">
        <div className="moreabout">
          <h1>more about the position</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.Lorem ipsum dolor sit amet
            consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean
            eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim
            diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.Lorem
            ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis
            in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis
            convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus
            in etiam rhoncus.
          </div>
        </div>
        <div className="BR">
          <div>
            <h2>Requirements</h2>
            <div>
              1. Lorem ipsum dolor sit <br /> 2. amet consectetur. <br />
              3. Nunc pharetra massa velit <br />
              4. consectetur lectus erat. <br />
              5. Tincidunt dis egestas aliquet adipiscing donec. Sed cras
              vulputate amet scelerisque. Varius etiam enim velit arcu arcu
              eget. Nunc a quis enim nibh posuere <br />
              6. cras aenean purus. Nulla sagittis semper cum rhoncus varius
              quis vitae venenatis nibh. <br />
              7. Senectus fames quisque porta vitae facilisis commodo consequat.
              Feugiat enim odio in sed condimentum. Id et purus est risus. .{" "}
              <br />
              8. Tincidunt dis egestas aliquet adipiscing donec. Sed cras
              vulputate amet scelerisque.
            </div>
          </div>
          <div>
            <h2>Benefits</h2>
            <div>
              1. Lorem ipsum dolor sit <br /> 2. amet consectetur. <br />
              3. Nunc pharetra massa velit <br />
              4. consectetur lectus erat. <br />
              5. Tincidunt dis egestas aliquet adipiscing donec. Sed cras
              vulputate amet scelerisque. Varius etiam enim velit arcu arcu
              eget. Nunc a quis enim nibh posuere <br />
              6. cras aenean purus. Nulla sagittis semper cum rhoncus varius
              quis vitae venenatis nibh. <br />
              7. Senectus fames quisque porta vitae facilisis commodo consequat.
              Feugiat enim odio in sed condimentum. Id et purus est risus. .{" "}
              <br />
              8. Tincidunt dis egestas aliquet adipiscing donec. Sed cras
              vulputate amet scelerisque.
            </div>
          </div>
        </div>
        <div className="oneofus">
          <h3>Become one of us</h3>
          <div className="oneofusT">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </div>
          <div>
            <form className="NLD" onSubmit={handleSubmit}>
              <div className="">
                <div>Name</div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <div>Last Name</div>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Date of Birth</label>
                <div className="Datesplit">
                  <div>
                    <select className="year">
                      <option value="">YYYY</option>
                      {Array.from(
                        { length: new Date().getFullYear() - 1899 },
                        (v, i) => i + 1900
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select className="year">
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (v, i) => i).map((month) => (
                        <option key={month} value={month + 1}>
                          {new Date(0, month).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select className="year">
                      <option value="">DD</option>
                      {Array.from({ length: 31 }, (v, i) => i).map((day) => (
                        <option key={day} value={day + 1}>
                          {day + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="">
                <div>Sex</div>
                <select className="sex" required>
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" value={phone} onChange={handlePhoneChange} />
                {invalidPhone && (
                  <p className="error">
                    Invalid phone number format (9 digits required)
                  </p>
                )}
              </div>
              <div>
                <div>
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={handleMobileChange}
                  />
                </div>
                {invalidMobile && (
                  <p className="error">
                    Invalid mobile number format (10 to 13 digits required with
                    optional country code prefix '+')
                  </p>
                )}
              </div>
              <div className="">
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      checkEmail();
                    }}
                    required
                  />
                </div>
                {invalidEmail && <p className="error">Invalid email format</p>}
              </div>
              <div>
                <div>Country</div>
                <select
                  className="year"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value=""></option>
                  {countries &&
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <div>City</div>
                <select className="year">
                  <option value=""></option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {i18n.language === "en"
                        ? `${city.nameState}`
                        : `${city.name_fa}`}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div>
                  <div>Address</div>
                  <textarea
                    value={address}
                    onChange={handleAddressChange}
                    className="adrsinput"
                  />
                </div>
                {invalidAddress && (
                  <p className="error">
                    Invalid address format (only letters, numbers, spaces,
                    commas, apostrophes, and dashes are allowed)
                  </p>
                )}
              </div>{" "}
              <div>
                {" "}
                <div>
                  <div>Postal Code</div>
                  <input className="postalcodeinput" />
                </div>
              </div>
              <div>
                <div>CV</div>
                <div className="file-input-wrapper">
                  <input
                    placeholder=" No file chosen"
                    onChange={handleFileSelect}
                    ref={inputRef}
                    className="file-input"
                    type="file"
                    required
                  />
                </div>
                <div className="cvtext mb-5">
                  Please upload your file in PDF format.
                </div>
                <div className="propscom">
                  <button type="submit" className="sendprops">
                    Send
                  </button>
                  <button type="submit" className="cancelprops">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
