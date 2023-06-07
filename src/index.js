import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";
import "./i18n";
import "./pages/customize.css";
import "./pages/index.css";
import "./pages/design.css";
import "./pages/style.css";
import "./pages/home.css";
import "./pages/art.css";
import "./pages/coach.css";
import "./pages/music.css";
import "./pages/model.css";
import "./App.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";



createRoot(document.getElementById("root")).render(<Main />);
