import People from "../../assets/images/icon-image/people.png";
import Package from "../../assets/images/icon-image/pacakges.png";
import Ratings from "../../assets/images/icon-image/ratings.png";

function learnMore() {
    return (
        <div className="container-fluid learnmore">
            <div className="learnmore-section">
                <div className="row about-us">
                    <div className="col">
                        <img src={People} className="aboutUse-img" alt="..."/>
                        <label className="row">About Us</label>
                        <p className="align-middle">
                            We are and Author Services Provider committed towards helping
                            you publish your book. We offer publishing and marketing
                            services suited to your needs. We'll help you get published.
                            Plus, you reserve all the rights to your work!
                        </p>
                        <button type="button" className="btn btn-success">Learn More!</button>
                    </div>
                    <div className="col">
                        <img src={Package} className="packages-img" alt="..."/>
                        <label className="">Our Publishing Packages</label>
                        <p className="align-middle">
                            Do you need someone to design your book cover? Do you need help in
                            copyediting? Does your book require illustrations? Do you want
                            your book available too, in e-book form? How about a movie
                            trailer?Whatever you need, we are one-stop provider of services
                            any author would dream about!
                        </p>
                        <button type="button" className="btn btn-warning">View Packages</button>
                    </div>
                    <div className="col">
                        <img src={Ratings} className="ratings-img" alt="..."/>
                        <label className="">A- BBB Rating</label>
                        <p className="align-middle">
                            Better Business Reveiw(BBB) rates Stratton Press an A-, an
                            equivalent to 90-93.99%!. Like te rest of the world, Stratton
                            Press feels the effects of the pandemic. However, this does not
                            stop us from contiously aspiring to be better, transparent,
                            helpful and resopnsive. We'll be here throughout your journey!
                        </p>
                        <button type="button" className="btn btn-primary">What They Say</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default learnMore;