import React from 'react'

import Slider1 from "./images/slider/slider-1.jpg"
import Slider2 from "./images/slider/slider-2.jpg"
import Slider3 from "./images/slider/slider-3.jpg"
const Home = () => {
  return (
    <>
    <Slider/>
    {/* <img src={Slider2} alt="Some Image"/> */}
    </>
  )
}


const Slider = () => {
  return (
    <>
    <div class="slider">
        <div class="owl-carousel ">
            <div class="slider-img">
                <div class="item">
                    <div class="slider-img"><img src={Slider3} alt="Slider 3"/></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                <div class="animated bounceInDown slider-captions">
                                    <h1 class="slider-title">We believe that it's always about the next step!</h1>
                                    <p class="slider-text hidden-xs">We help our children be able to take the next steps in the most safe and hyegienic manner</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"><img src={Slider1} alt="Slider 1"/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions ">
                                <h1 class="slider-title">It's time for better help.</h1>
                                <p class="slider-text hidden-xs">It is easier to organize around basic needs. We highlight areas of help and engage communities to strengthen the drives.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"><img src={Slider2} alt="Slider Two"/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions ">
                                <h1 class="slider-title">First hand approach</h1>
                                <p class="slider-text hidden-xs">We believe in being there on the ground. Sharing, caring and understanding the needs of the community.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home
