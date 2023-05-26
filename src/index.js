import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";
import "./i18n";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


createRoot(document.getElementById("root")).render(<Main />);
