import HalDavis from "../../assets/images/backgrounds/Hal_Davis.jpg";
import Book1 from "../../assets/images/books/book1.jpg";
import Book2 from "../../assets/images/books/book2.jpg";

function Spotlight() {
    return (
        <div class="container-fluid spotlight">
            <label class="spotlight-heading">
                <h1 class="d-inline spotlight-label fw-bold">Author Spotlight</h1>
            </label>
            <div class="row">
                <div class="col-sm-4">
                    <div class="author-image">
                        <img src={HalDavis} width="600" height="720" />
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col author-content">
                            <label>
                                <h1>HAL DAVIS</h1>
                            </label>
                            <p>
                                Hal Davis is a distinguished US Marine (Ret.) with a career that spanned twenty-two years.
                                He became a Tennessee State Trooper, FBI Special Investigator, United States Secret Service
                                Agent to two US presidents, and a Marine and Naval Criminal Investigator. He is the author of
                                the books, From an Out House to the White House, and Beyond the Mountains and Across the Seas
                            </p>
                        </div>
                        <div class="col-4 author-book">
                            <label>
                                <span>Check out Hal's Books!</span>
                            </label>
                            <div class="row">
                                <div class="col col-6 align-self-center">
                                    <img src={Book1} width="130" height="180" alt="..."/>
                                </div>
                                <div class="col col-6 align-self-center">
                                    <img src={Book2} width="130" height="180" alt="..."/>
                                </div>
                            </div>
                            <div class="container-fluid author-website">
                                <button>Check out Hal's Website</button>
                            </div>
                        </div>
                    </div>
                    <div class="row videos-part">
                        <div class="col">
                            <div class="radio-int">
                                <iframe width="580" height="300"
                                    src="https://www.youtube.com/embed/xj4V60xXRug">
                                </iframe>
                                <label>
                                    <p>This Week in America Radio Interview: From an
                                        Outhouse to the White House
                                    </p>
                                </label>
                                <button>Check Out the Full Interview</button>
                            </div>
                        </div>
                        <div class="col book-trailer">
                            <iframe width="580" height="300"
                                src="https://www.youtube.com/embed/xj4V60xXRug">
                            </iframe>
                            <label>
                                <p>Book Trailer: Beyond the Mountains and Across the Seas
                                </p>
                            </label>
                            <button>Check Out the Full Interview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight;