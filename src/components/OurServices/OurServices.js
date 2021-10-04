import React, { useEffect, useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';
import "./OurServices.css"

const OurServices = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/92f65409-effb-42d2-8cd4-5a1e08ef0b16")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    let homeData = []
    for (const data of courses) {
        if (homeData.length <= 3) {
            homeData.push(data)
        }
    }
    console.log(homeData);
    return (
        <div className="card">
            {
                homeData.map(course => <HomeCard course={course} key={course.id} />)
            }
        </div>
    );
};

export default OurServices;