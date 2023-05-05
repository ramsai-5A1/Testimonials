import React from "react";
import {FaQuoteLeft, FaQuoteRight, FaFacebookSquare} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;

    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px]" src={review.image}/>
            </div>

            <div className="name">
                <p>{review.name}</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>

            <div>
                <FaQuoteLeft/>
            </div>

            <div>
                <p>{review.text}</p>
            </div>

            <div>
                <FaQuoteRight/>
            </div>

            <div>
                <button>
                    -
                </button>

                <button>
                    +
                </button>
            </div>

            <div>
                <button>
                    Surprise Me
                </button>
            </div>

        </div>
    );
}

export default Card;