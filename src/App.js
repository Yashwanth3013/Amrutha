import './App.css';
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Oxaipage from './pages/Oxaipage';
import Resoucespage from './pages/Resoucespage';
import Aboutpage from './pages/Aboutpage';
import Finance from "./pages/Finance"
import Healthcare from './pages/Healthcare';
import EcommerceHitech from './pages/EcommerceHitech';
import Supplychain from './pages/Supplychain';
import Awared_inc_awarded_virginia_s_crcf_grant_for_e_discovery from './components/about/Awared_inc_awarded_virginia_s_crcf_grant_for_e_discovery';
import Amruta_inc_invited_to_speak_at_gw_data_2019 from './components/about/Amruta_inc_invited_to_speak_at_gw_data_2019';
import Amruta_inc_presents_at_2018_genworth_risk_symposium from './components/about/Amruta_inc_presents_at_2018_genworth_risk_symposium.js';
import Industries from './pages/Industries';
import Header from './components/Header';
import Amrutaacademy from './pages/Amrutaacademy';

function App() {
  return (

    <div>



      <Switch>


        <Route path="/Home">
          <Home />
        </Route>

<Route path="/Amrutaacademy">
  <Amrutaacademy />
</Route>
        


        <Route path="/Finance">
          <Finance />
        </Route>

        <Route path="/Healthcare">
          <Healthcare />
        </Route>

        <Route path="/EcommerceHitech">
          <EcommerceHitech />
        </Route>

        <Route path="/Supplychain">
          <Supplychain />
        </Route>


        <Route path="/Oxaipage">
          <Oxaipage />
        </Route>



        <Route path="/Resources">
          <Resoucespage />
        </Route>

        <Route path="/About">
          <Aboutpage />
        </Route>

        <Route path="/amruta-inc-awarded-virginia-s-crcf-grant-for-e-discovery">
          <Awared_inc_awarded_virginia_s_crcf_grant_for_e_discovery />
        </Route>
        <Route path="/amruta-inc-invited-to-speak-at-gw-data-2019">
          <Amruta_inc_invited_to_speak_at_gw_data_2019 />
        </Route>
        <Route path="/amruta-inc-presents-at-2018-genworth-risk-symposium">
          <Amruta_inc_presents_at_2018_genworth_risk_symposium />
        </Route>



        <Route path="/" >
          <Home />
        </Route>


      </Switch>



    </div>
  );





}

export default App;
