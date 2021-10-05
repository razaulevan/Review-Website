import React from 'react';
import "./Card.css"

const Card = (props) => {
    const { name, img, price } = props.course
    return (
        <div className="card-design">
            <div>
                <img className="w-100 img-height" src={img} alt="" />
            </div>
            <div>
                <h3>Name : {name}</h3>
                <p>course fee: {price}</p>
                <button className="btn btn-primary">Course Enroll</button>
            </div>
        </div>
    );
};

export default Card;