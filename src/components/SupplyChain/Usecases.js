import React from 'react'

function Usecases() {
    return (
        <div>

            <div class="ourofferings">

                <div class="container">
                    <h2 class="titleone wow fadeInUp">Use Cases</h2>


                    <div class="row pad_t80">
                        <div class="col-md-4">
                            <div class="servicebox wow fadeInUp">
                                <div><img src="images/booking-icon.jpg " alt="Services"/></div>
                                    <h4>Booking quality forecasting</h4>
                                    <p class="min-h100">We implemented a ML model to forecast if a booking will cancel before the underlying cargo is presented on the shipment date. Characteristics such as the shipper, forwarded, past cancellation behaviour, cargo charactersitcs were used to predict the likelihood of cancellation.</p>

                                </div>


                            </div>
                            <div class="col-md-4">
                                <div class="servicebox wow fadeInUp">
                                    <div><img src="images/compitative.jpg" alt="Services" /></div>
                                    <h4>Competitive pricing</h4>
                                    <p class="min-h100">We compared demand forecasts with the capacity available to adjust the prices up or down to optimally fill the capacity on the departure/shipping date. We also forecasted and assessed the industry level demand,  market shares and capacities/availabilties to ensure that the price adjustments are optimal for the products and sercivces offered.</p>
                                </div>


                            </div>
                            <div class="col-md-4">
                                <div class="servicebox wow fadeInUp">
                                    <div><img src="images/reverse-icon.jpg" alt="Services" /></div>
                                    <h4>Reverse logistics supply chain operations</h4>
                                    <p class="min-h100">We forecasted the mobile device volumes that will be returned by customers. We modelled the bill of materials required to support the refurbish times, along with the safety stocks for each part. We then provide a purchase plan for additional devices.</p>
                                </div>


                            </div>

                        </div>



                    </div>
                </div>

            </div>
            )
}

            export default Usecases
