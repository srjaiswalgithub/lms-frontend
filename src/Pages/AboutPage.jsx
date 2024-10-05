import React from 'react';

import AboutImage from '../assets/aboutMainImage.png';
import Carsousel from '../Components/carsousel';
import Celebrities  from '../constant/carouselData';
import Layout from '../Layouts/HomeLayout';

function AboutPage(){
    
    return (
        <Layout>
            <div className = "w-full flex flex-col pl-10 pt-10">
                {/* creating the about page main section */}
                <div className = "w-[100%] flex justify-center items-center gap-5 mx-10">
                    {/* out moto section */}
                    <section className = "w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the
                            world. We are providing the platform for the aspiring teachers and
                            students to share their creativity, skills and knowledge to each
                            other to empower and contribute in the growth and wellness of the
                            mankind.
                        </p>


                    </section>
                    <div className = "w-1/2 flex justify-center items-center">
                        <img className = "drop-shadow-2xl " src={AboutImage} alt="home page image" />

                    </div>
                </div>

                {/* top personalities quotes section */}

                <div className="carousel mx-auto w-[60%] my-10">
                    {
                        Celebrities && Celebrities.map((celebrity)=><Carsousel slideNumber = {celebrity.slideNumber}  image = {celebrity.image} title = {celebrity.title} description = {celebrity.description} totalSlides = {Celebrities.length} key = {celebrity.slideNumber} />)
                    }
                        
                </div>


            </div>


        </Layout>
    )
    

}
export default AboutPage;