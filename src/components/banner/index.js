import bannerImage from '../../assets/images/backgrounds/banner-image.png';

function Banner() {
    return (
        <div className="banner-section">
            <div className="my-hero">
                <div className="container-fluid tagline-section">
                    <div className="tagline-body">
                        <span className="tagline">
                            <label className="what">WHAT'S <br/>YOUR</label>
                            <label className="story">STORY?</label> 
                        </span><br /><br />
                        <span className="tagline-content">
                            Is there a story you wish to tell? Are there chapters you've
                            written but not knowing the next step? Is it the story of your
                            life, or the next step? Is it the story of your life, or of a
                            dreamy place, or a picture collection of your travels? Whatever
                            your story is, we'll help you launch towards the next step.
                            <br />
                            <br />
                            Be a published author and let the world know Your Story.
                        </span>
                    </div>
                </div>
                <div className="container-fluid banner-image">
                    <img src={bannerImage} width="550" height="650" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Banner;