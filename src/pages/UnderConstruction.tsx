import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 flex items-center justify-center bg-background">
                <h1 className="text-5xl md:text-7xl font-bold text-primary text-center">
                    Em obra...
                </h1>
            </div>

            <Footer />
        </div>
    );
}
