import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
          <footer class="footercol">

<div class="container">
    <div class="row">
        <div class="col-md-4">
            <img src="images/ftrlogo.png" class="wow fadeInUp" alt="Amruta" />
            <ul class="social">
                <li>  <a href="https://www.facebook.com/Amruta-108964601456304"> <img src="images/social/Icon awesome-facebook-f.svg" class="wow fadeInUp" alt="Amruta" title="" /> </a> </li>
                <li>  <a href="https://www.linkedin.com/company/amruta/"> <img src="images/social/Icon awesome-linkedin-in.svg" class="wow fadeInUp" alt="Amruta" title="" /> </a> </li>
                <li>  <a href="https://www.instagram.com/amruta.ai/"> <img src="images/social/Icon awesome-instagram.svg" class="wow fadeInUp" alt="Amruta" title="" /> </a> </li>
                <li>  <a href="https://twitter.com/Amruta33817063"> <img src="images/social/Icon awesome-twitter.svg" class="wow fadeInUp" alt="Amruta" title="" /> </a> </li>
                <li>  <a href="https://www.youtube.com/channel/UCR2Guc1ximIKYzciPet2B8w"> <img src="images/social/youtube.svg" class="wow fadeInUp" alt="Amruta" title="" /> </a> </li>


            </ul>
        </div>
        <div class="col-md-4">
            <ul class="ftrmenu wow fadeInUp">
                <li class=""><Link to="/Oxaipage" class="">OXAI Software</Link></li>

                <li class=""><Link to="/Resources" class="">Resources</Link></li>
                <li class=""><Link  to="/About" class="">About Amruta</Link></li>

            </ul>

        </div>
        <div class="col-md-4">
            <ul class="ftrmenu wow fadeInUp">
                <li class=""><Link to="/Finance" class="">Financial services</Link></li>
                <li class=""><Link to="/Healthcare" class="">Health care</Link></li>
                <li class=""><Link  to="/EcommerceHitech" class="">E-commerce & Hi-Tech</Link></li>
                <li class=""><Link  to="/Supplychain" class="">Supply chain, Travel and Transport</Link></li>

            </ul>

        </div>
    </div>

    <div class="copy">copyright@2021 amruta.ai</div>

</div>

</footer>



        </div>
    )
}

export default Footer
