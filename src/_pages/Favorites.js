import React, { useEffect, useState } from 'react';
import Container from '../_components/MainPage/Container';
import axios from 'axios';

export default function Recipes(props) {
    const { filters, updateFilters, search } = props;
    const [recipes, updateRecipes] = useState([]);
    const [selectedRecipe, updateSelectedRecipe] = useState({});

    useEffect(() => {
        getRecipes();
        // eslint-disable-next-line
    }, [search]);

    const getRecipes = async () => {
        let { data } = await axios.get('/api/recipes?search=' + search + '&favorite=true');
        updateRecipes(data);
    }

    const { name } = selectedRecipe;

    return (
        <div className="page-container">
            <div className="favorites-page flex-around">
                <Container
                    heading="Favorite Recipes"
                    isFilter={true}
                    filtersArr={filters}
                    updateFilters={updateFilters}
                    recipes={recipes}
                    updateRecipes={updateRecipes}
                    isFavorite={true}
                    updateSelectedRecipe={updateSelectedRecipe} 
                    selectedRecipe={selectedRecipe}
                />
                <Container
                    heading={name}
                    selectedRecipe={selectedRecipe}
                    isSelectedRecipeCard={true}
                />
            </div>
        </div>
    )
}