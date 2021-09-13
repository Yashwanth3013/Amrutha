import React from 'react'
import {Link} from "react-router-dom"
function Header1() {
    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3"><Link to="/Home"><img src="images/logo-academy.png" alt="Amruta" title="Amruta" class="logo" /></Link>

                        </div>
                        <div class="col-md-9 text-right">

                            <div class="collapse navbar-collapse" id="navbar-collapse">
                                <ul class="mainmenu ">

                                    <li class=""><a href="#" class="">Programs <i class="fa fa-angle-down" aria-hidden="true"></i> </a>

                                    </li>

                                    <li class=""><a href="http://lms.amruta.ai/" target="_blank" class="">Sign-in</a></li>
                                    <li class="demo"><a href="#" class="reqlink" data-toggle="modal" data-target="#get_trained">Get Started </a></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"
                    aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span
                        class="icon-bar"></span> </button>
            </header>
        </div>
    )
}

export default Header1
