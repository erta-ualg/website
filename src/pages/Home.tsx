import Header from "../components/Header/Header";
import Slogan from "../components/Hero/Slogan";
import AboutUs from "../components/Feature/AboutUs";
import FormulaStudent from "../components/Feature/FormulaStudent";
import Partners from "../components/Feature/Partners";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <Header/>

            <Slogan/>
            <AboutUs/>
            <FormulaStudent/>
            <Partners/>

            <Footer/>
        </div>
    );
}
