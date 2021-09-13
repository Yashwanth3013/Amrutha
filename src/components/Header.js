import React from 'react'
import Industries from '../pages/Industries'
import Home from '../pages/Home';
import Oxaipage from '../pages/Oxaipage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const Header = () => {
  // const [isActive, setActive] = React.useState(false);

  // const toggleClass = () => {
  //   setActive(true);
  //   console.log(isActive)
  // };

  return (

    <div>

      <header class="header">
        <div class="container">
          <div class="row">
            <div class="col-md-3"><Link to="/Home"><img src="images/logo.png" alt="Amruta" title="Amruta" class="logo" /></Link>

            </div>
            <div class="col-md-9 text-right">

              <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="mainmenu ">
                  <li class=""><Link to="/Oxaipage" class="active" >OXAI Software</Link></li>
                  <li class=""><Link to="#" >Industries <i class="fa fa-angle-down" aria-hidden="true" /></Link>
                    <div class="submenu">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3">
                            <ul>
                              <li><Link to="/Finance" class=" "> Financial Servies </Link></li>


                            </ul>
                          </div>
                          <div class="col-md-3">
                            <ul>

                              <li><Link to="/Healthcare" class=""> Health Care </Link></li>

                            </ul>
                          </div>
                          <div class="col-md-2">
                            <ul>

                              <li><Link to="/EcommerceHitech" class=" ">Ecommerce & Hi-Tech</Link></li>


                            </ul>
                          </div>
                          <div class="col-md-4 text-right">
                            <ul>

                              <li><Link to="/Supplychain" class=""> Supply chain, Travel and Transport</Link></li>

                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>

                  <li class=""><Link to="/Resources" class="">Resources</Link></li>
                  <li class=""><Link to="#" class="">About   <i class="fa fa-angle-down" aria-hidden="true" /></Link>
                  
                  
                  <div class="submenu">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3">
                            <ul>
                              <li><Link to="/About" class=" ">About </Link></li>


                            </ul>
                          </div>
                          <div class="col-md-3">
                            <ul>

                              <li><Link to="/Amrutaacademy" class=""> Amruta Academy </Link></li>

                            </ul>
                          </div>
                       
                         

                        </div>
                      </div>
                    </div>
                  
                  
                  
                  </li>
                  <li class="demo">
                    <a href="#" data-toggle="modal" data-target="#get_trained" class="reqlink"> Request A Demo</a>

                    {/* <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/krishnakanth-04/amrutaproduct'});return false;" class="reqlink">Request A Demo</a> */}
                  </li>
                </ul></div>


            </div>
          </div>
        </div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      </header>

    </div>
  )




}





export default Header
