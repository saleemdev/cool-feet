import React from "react";

const TopBar = ({ details }) => {
  return (
    <>
      <header class="continer-fluid ">
        <div class="header-top">
          {details !== null && (
            <div class="container">
              <div class="row col-det">
                <div class="col-lg-6 d-none d-lg-block">
                  <ul class="ulleft">
                    <li>
                      <i class="far fa-envelope"></i>
                      {details["Email Address"]}
                      <span>|</span>
                    </li>
                    <li>
                      <i class="fas fa-phone-volume"></i>
                      {details["Phone Number"]}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 folouws">
                  <ul class="ulright">
                    <li>
                      {" "}
                      <small>Folow Us </small>:
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://${details["Facebook"]}`}
                      >
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href={`https://${details["Twitter"]}`}>
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://${details["Instagram"]}`}
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://${details["LinkedIn"]}`}
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div class="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                <button class="btn btn-sm btn-success">Join Us</button>
                <button class="btn btn-sm btn-default">Donate</button>
              </div> */}
              </div>
            </div>
          )}
        </div>
        
        <nav>
  <input type="checkbox" id="toggle"/>
  <label for="toggle" id="menu-toggle"></label>
  <ul>
    <label for="toggle" id="menu-close">
      <i class="fa fa-times"></i>
    </label>
    <li class="active">Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</nav>
      </header>
    </>
  );
};
const imageLogo =
  "data:image/png;base64,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";

export default TopBar;
