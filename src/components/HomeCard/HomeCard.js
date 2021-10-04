import React from 'react';
import "./HomeCard.css"

const HomeCard = (props) => {
    const { name, img, price } = props.course
    return (
        <div className="border border-2 border-success card-round">
            <div>
                <div>
                    <img className="w-100 img-height" src={img} alt="" />
                </div>
                <div>
                    <h3>Name : {name}</h3>
                    <p>course fee: {price}</p>
                </div>
            </div>

        </div>
    );
};

export default HomeCard;