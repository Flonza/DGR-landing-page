import './PrincipalPage.css'
import OurServices from "./components/OurServices/OurServices"
import AboutUs from "./components/AboutUs/AboutUs"
import OurJobs from './components/OurJobs/OurJobs'

export default function PrincipalPage(){
    return (
        <>
            <section className="h-fit " id="aboutUs">
                <AboutUs></AboutUs>
            </section>

            <section className="h-fit" id="ourServices">
                <OurServices></OurServices>
            </section>

            <section className="h-fit" id="ourJobs">
                <OurJobs></OurJobs>
            </section>
        </>
    )
}