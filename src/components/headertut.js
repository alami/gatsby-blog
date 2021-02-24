import React from "react";
import { Link } from "gatsby";

import logoSrc from "../images/planet_th.jpg";

export default () => (
  <header>
    <Link to="/">
      <img src={logoSrc} alt="logo" width="10%" height="10%" />
    </Link>
    That is header
  </header>
);