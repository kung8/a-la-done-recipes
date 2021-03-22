import React, { useState, useEffect } from 'react';
import Container from '../_components/MainPage/Container';
import axios from 'axios';

export default function Recipes(props) {
    const { filters, updateFilters, search } = props;
    const [recipes, updateRecipes] = useState([]);
    const [selectedRecipe, updateSelectedRecipe] = useState({});
    const [isCollapsed, updateIsCollapsed] = useState(false);    

    useEffect(() => {
        getRecipes();
        // eslint-disable-next-line
    }, [search]);

    const getRecipes = async () => {
        let { data } = await axios.get('/api/recipes?search=' + search);
        updateRecipes(data);
    }

    const { name } = selectedRecipe;

    return (
        <div className="page-container">
            <div className="recipes-page flex-around">
                <Container
                    heading="Recipes"
                    isFilter={true}
                    filtersArr={filters}
                    updateFilters={updateFilters}
                    recipes={recipes}
                    updateRecipes={updateRecipes}
                    updateSelectedRecipe={updateSelectedRecipe} 
                    selectedRecipe={selectedRecipe}
                    isCollapsed={isCollapsed}
                    updateIsCollapsed={updateIsCollapsed}
                    />
                <Container
                    heading={name}
                    selectedRecipe={selectedRecipe}
                    isSelectedRecipeCard={true}
                    isSecondCard={true}
                    isCollapsed={isCollapsed}
                    />
            </div>
        </div>
    )
}