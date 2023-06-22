import React, { useState, useEffect, useRef } from "react";
import joinus from "../icons/Rectangle 45 (1).png";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";

export default function Joinus() {
  const [countries, setCountries] = useState([]);
   const [cities, setCities] = useState([]);
   const [selectedCountry, setSelectedCountry] = useState("");
const inputRef = useRef(null);

// Function to handle file selection
function handleFileSelect(event) {
  const file = event.target.files[0];
  console.log(file);
}

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  
  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://countriesnow.space/api/v0.1/countries/cities`,
      {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({ country: selectedCountry })
      })
      .then((response) => response.json())
      .then((data) => setCities(data.data));
    }
  }, [selectedCountry]);

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
               volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a
               ut vitae felis convallis. Egestas enim diam ac nisi orci id
               tellus lobortis. Lacus in etiam rhoncus.
             </h2>
           </div>
         </div>
         <div className="customerS">
           <div className="moreabout">
             <h1>more about the position</h1>
             <div>
               Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
               volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a
               ut vitae felis convallis. Egestas enim diam ac nisi orci id
               tellus lobortis. Lacus in etiam rhoncus.Lorem ipsum dolor sit
               amet consectetur. Viverra pellentesque volutpat quis in erat. Sit
               aenean eget nascetur mus non. Enim a ut vitae felis convallis.
               Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam
               rhoncus.Lorem ipsum dolor sit amet consectetur. Viverra
               pellentesque volutpat quis in erat. Sit aenean eget nascetur mus
               non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi
               orci id tellus lobortis. Lacus in etiam rhoncus.
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
                 7. Senectus fames quisque porta vitae facilisis commodo
                 consequat. Feugiat enim odio in sed condimentum. Id et purus
                 est risus. . <br />
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
                 7. Senectus fames quisque porta vitae facilisis commodo
                 consequat. Feugiat enim odio in sed condimentum. Id et purus
                 est risus. . <br />
                 8. Tincidunt dis egestas aliquet adipiscing donec. Sed cras
                 vulputate amet scelerisque.
               </div>
             </div>
           </div>
           <div className="oneofus">
             <h3>Become one of us</h3>
             <div className="oneofusT">
               Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
               volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a
               ut vitae felis convallis. Egestas enim diam ac nisi orci id
               tellus lobortis. Lacus in etiam rhoncus.
             </div>
             <div className="NLD">
               <div className="">
                 <div>Name</div>
                 <input />
               </div>
               <div>
                 <div>Last Name</div>
                 <input />
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
                 <label>
                   <div>Sex</div>
                   <select className="sex">
                     <option value="" selected></option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                   </select>
                 </label>
               </div>
               <div>
                 <div>Phone Number</div>
                 <input />
               </div>
               <div>
                 <div>Mobile Number</div>
                 <input />
               </div>
               <div className="">
                 <div>Email Address</div>
                 <input type="email" />
               </div>
               <div>
                 <div>Country</div>
                 <select
                   className="year"
                   value={selectedCountry}
                   onChange={handleCountryChange}
                 >
                   <option value=""></option>
                   {countries.map((country) => (
                     <option key={country.alpha2Code} value={country.name}>
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
                     <option key={city} value={city}>
                       {city}
                     </option>
                   ))}
                 </select>
               </div>
               <div>
                 <div>Address</div>
                 <input className="adrsinput" />
               </div>
               <div>
                 <div>Postal Code</div>
                 <input />
               </div>
               <div>
                 <div>CV</div>
                 <input
                   placeholder="No file chosen"
                   onChange={handleFileSelect}
                   ref={inputRef}
                   className="file-input"
                   type="file"
                 />
                 <button className="cvbutton" onClick={() => inputRef.current.click()}>Choose File</button>
                 <div className="cvtext mb-5">
                   Please upload your file in PDF format.
                 </div>
                 <div className="propscom">
                   <Link to="/" className="sendprops">
                     Send
                   </Link>
                   <Link to="/" className="cancelprops">
                     Cancel
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <Footer />
       </div>
     );
}