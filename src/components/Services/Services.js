import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Services.css"

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/92f65409-effb-42d2-8cd4-5a1e08ef0b16")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="all-course-title">See out all course</h1>
            <div className="all-card">
                {
                    courses.map(course => <Card course={course} />)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Services;