import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import TalkToUsForm from "./TalkToUsForm"

function Home(){

    // Home -> parent component
    // Header, Footer, Talktousfrom -> childern

    var homepageMessage = "From Home component - anji"

    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-lg-6 pt-5">
                    <h1>Dream software job in 6 months</h1>
                    <p>
                    Learn in-demand career paths from industry-experts and become job-ready
                    </p>
                </div>
                <div className="col-lg-6 pt-5">
                    <TalkToUsForm   anji={homepageMessage}  />
                </div>
                <div className="col-12 mt-5 bg-light text-center p-5">
                    <h1>Jumbotron with icon</h1>
                    <p>
                    This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive .col-* class, and a customized call to action.
                    </p>
                    <div>
                        <button className="btn btn-primary me-3">Watch Demo</button>
                        <button className="btn btn-success">Create Account</button>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Home