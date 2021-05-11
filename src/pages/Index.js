import React from 'react';
import AboutUs from '../components/About';
import AboutArea from '../components/AboutArea';
import BrandArea from '../components/BrandArea';
import VisitTailor from '../components/VisitTailor';
import ServicesArea from '../components/ServicesArea';
import Testminoial from '../components/Testminoal';
import AboutAreaTwo from '../components/AboutAreaTwo';
import WanToWorkArea from '../components/WanToWorkArea';


function index() {
    return(
        <div>
            <AboutUs/>
            <AboutArea/>
            <BrandArea/>
            <VisitTailor/>
            <ServicesArea/>
            <Testminoial/>
            <AboutAreaTwo/>
            <WanToWorkArea/>
        </div>
    )
}

export default index;