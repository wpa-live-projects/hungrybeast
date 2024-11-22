// import React from "react";
import "./reviews.css";
import charlieImg from "../../assets/charlie.avif";
import johnDoeImg from "../../assets/john-doe.avif";
import karthikImg from "../../assets/karthik.jpg";
import kranthiImg from "../../assets/Kranthi.jpg";
import jamesImg from "../../assets/James.jpg";
import inboxBackground from "../../assets/cm.jpg";

const Reviews = () => {
    return (
        <section id="reviews" className="pt-5">
            <div className="review">
                <div className="background">
                    <h1 className="title">Reviews</h1>
                    <p className="subtitle">What our customers are saying.....</p>
                    <div className="reviews-slider">
                        <div className="cp">
                        <div className="review-card ml-[-90px] ">
                            <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                            <img src={charlieImg} alt="Charlie" />
                            <h2 className="name">CHARLIE</h2>
                            <p className="rating">★★★★★</p>
                            <p className="review-text">We loved this place. The dishes are so tasty. Very Clean Environment.</p>
                        </div>
                        </div>
                        <div className="review-card">
                            <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                            <img src={johnDoeImg} alt="John Doe" />
                            <h2 className="name">JOHN DOE</h2>
                            <p className="rating">★★★★★</p>
                            <p className="review-text">The vibes here are pretty fun! It kind of looks like a night market.</p>
                        </div>
                        <div className="review-card">
                            <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                            <img src={karthikImg} alt="Karthik" />
                            <h2 className="name">KARTHIK</h2>
                            <p className="rating">★★★★★</p>
                            <p className="review-text">The food was really very tasty. I really enjoyed a lot with my friends.</p>
                        </div>
                        <div className="review-card">
                            <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                            <img src={kranthiImg} alt="Kranthi" />
                            <h2 className="name">KRANTHI</h2>
                            <p className="rating">★★★★★</p>
                            <p className="review-text">Absolutely amazing service and delicious food! Can't wait to come back.</p>
                        </div>
                        <div className="np">
                        <div className="review-card mr-[-70px]">
                            <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                            <img src={jamesImg} alt="James" />
                            <h2 className="name">JAMES</h2>
                            <p className="rating">★★★★★</p>
                            <p className="review-text">An unforgettable experience! Great atmosphere and outstanding flavors.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
