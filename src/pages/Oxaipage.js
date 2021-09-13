import React from 'react'

import Hero from '../components/Oxai/Hero'
import Xai from '../components/Oxai/Xai'
import Xaiplatform from '../components/Oxai/Xaiplatform'
import Usecases from '../components/Oxai/Usecasesoxai'

import BoostRoi from "../components/Oxai/BoostRoi"
import Model from '../components/Oxai/Model'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
const Oxaipage = () => {
    return (
        <div>
            
<Header />
<Hero/>
<Xai/>
<Xaiplatform/>
<Model />
<BoostRoi />
<Usecases/>
<GetStarted />
<Footer/>


        </div>
    )
}

export default Oxaipage
