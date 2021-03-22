import React from 'react';
import Container from '../_components/MainPage/Container';

export default function Grocery() {
    return (
        <div className="page-container">
            <div className="grocery-page flex-around">
                <Container
                    heading="Items to Add" />
                <Container
                    heading="Grocery List"
                    secondHeading="Inside Pantry" />
            </div>
        </div>
    )
}