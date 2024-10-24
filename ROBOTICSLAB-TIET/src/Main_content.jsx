import ImageChanger from './components/Image Changer/ImageChanger'
import AboutSection from './components/About us/AboutUs'
import Upcomingevents from './components/Events/event'
import Faculty from './components/Faculty/faculty'
import ContactUs from './components/Contact us/contact_us'

export default function MainContent(){

    return <div className="pt-16">
        <ImageChanger />
        <AboutSection />
        <Upcomingevents />
        <Faculty/>
        <ContactUs/>

    </div>

}