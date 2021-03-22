import React from 'react';
import Container from '../_components/MainPage/Container';

export default function Pantry() {
    return (
        <div className="page-container">
            <div className="pantry-page flex-around">
                <Container
                    heading="Items to Add" />
                <Container
                    heading="Inside Pantry"
                    secondHeading="Grocery List" />
            </div>
        </div>
    )
}