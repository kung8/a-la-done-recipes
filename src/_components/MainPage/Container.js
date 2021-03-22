import React from 'react';
import { clock, chef } from '../../assets/svg-images';

export default function Container(props) {
    const {
        heading,
        secondHeading,
        isFilter, //bool for if it should have the filter on card
        filtersArr, //arr of selected filters (different from filters arr locally)
        updateFilters, //fn for updating selected filters
        recipes, //arr of all matching resulting recipes
        updateRecipes, //fn for updating matching resulting recipes
        selectedRecipe, //obj of selected recipe
        updateSelectedRecipe, //fn for updating selected recipe
        isFavorite, //bool for if it is the favorite card type
        isSelectedRecipeCard, //bool for if it is the selected recipe card type 
        isSecondCard, //bool for if it is the second card
        isCollapsed, //bool for if the chevron arrow is collapsed
        updateIsCollapsed //fn for updating chevron arrow isCollapsed
    } = props;
    const filters = ['Mine', 'Dinner', 'Lunch', 'Snack', 'Breakfast', 'Dessert', 'Quick', 'Vegan', 'Vegetarian', 'Crockpot'];

    const selectFilter = (selected) => {
        let newArr = [...filtersArr];
        if (newArr.includes(selected)) {
            let foundLabelIndex = newArr.findIndex(label => label === selected);
            if (foundLabelIndex > -1) {
                newArr.splice(foundLabelIndex, 1);
                updateFilters(newArr);
            }
        } else {
            newArr.push(selected);
            updateFilters(newArr);
        }
    }

    const selectLiked = (e, id, likedStatus) => {
        e.stopPropagation();
        let newArr = [...recipes];
        let foundRecipeIndex = newArr.findIndex(recipe => recipe.id === id);
        if (foundRecipeIndex > -1) {
            newArr[foundRecipeIndex].liked = likedStatus;
            if (isFavorite && !likedStatus) {
                newArr.splice(foundRecipeIndex);
            }
            updateRecipes(newArr);
        }
    }

    const displayFilters = () => {
        return (
            <div className={`filters-container flex ${hideFilter}`}>
                <h3>Filters:</h3>
                <div className="align-ctr wrap">
                    {filters.map((filter, i) => {
                        return <span key={'filter-' + i} className={`filter-label ${filtersArr && filtersArr.includes(filter) && 'selected'}`} onClick={() => selectFilter(filter)}>{filter}</span>
                    })}
                </div>
            </div>
        )
    }

    const displayResultsCards = () => {
        return (
            <div className={`selected-results-outer-container flex-ctr ${hideResultsCard}`}>
                <div className="results-container">
                    {recipes.map(recipe => {
                        const { id, name, author, img, liked, crockpot } = recipe;
                        return (
                            <div key={'result-card-' + id} className={`recipe-card flex-btwn align-ctr ${selectedRecipe && id === selectedRecipe.id && 'selected-recipe'}`} onClick={() => handleRecipeClicked(recipe)}>
                                <div className="recipe-info flex">
                                    <img src={img} alt={name} className="result-card-img"/> 
                                    <div className="name-and-author-holder flex-around column">
                                        <h4 className={`recipe-name ${crockpot && 'crockpot'}`}>{name}</h4>
                                        <h5 className="recipe-author">{author}</h5>
                                    </div>
                                </div>
                                {
                                    // props.user && props.user.username &&
                                    props.user &&
                                    <div className="liked-holder">
                                        {liked ? displayLikeSvg('#FF0000', id, liked) : displayLikeSvg('#C4C4C4', id, liked)}
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const handleRecipeClicked = async (recipe) => {
        await updateSelectedRecipe(recipe);
        await handleCollapsing(true);
    }

    const displayLikeSvg = (fill, id, liked) => <svg onClick={(e) => selectLiked(e, id, !liked)} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7931 0C7.63517 0.000101341 6.56725 0.626898 6 1.6396C5.43275 0.626898 4.36483 0.000101341 3.2069 0C1.43585 0 0 1.64791 0 3.42453C0 7.88679 6 11 6 11C6 11 12 7.88679 12 3.42453C12 1.64791 10.5642 0 8.7931 0Z" fill={fill} /></svg>

    const displayAuthor = ({ author }) => <h5 className="author">by {author}</h5>

    const displaySelectedRecipe = () => {
        const { prepTime, waitTime, cookTime, totalTime, servings, ingredients, supplies, instructions, additionalNotes, img, name } = selectedRecipe;
        return (
            <div className="selected-recipe-outer-container flex-ctr">
                <div className="selected-recipe-container text-ctr">
                    <img className="recipe-image" src={img} alt={name}/>
                    <div className="times-container align-ctr column whole">
                        {clock}
                        <div className="flex-btwn whole">
                            {displayTimes({ prepTime, cookTime, waitTime, totalTime })}
                        </div>
                    </div>
                    <div className="recipe-info-container whole align-ctr column">
                        <div className="servings-container align-ctr column">
                            {chef}
                            <h4 className="section-title">Servings</h4>
                            <span>{servings}</span>
                        </div>
                        <hr className="partial-line" />
                        <div className="ingredients-container align-ctr column">
                            <h4 className="section-title">Ingredients</h4>
                            <div className="mapped-ingredients whole">
                                {displayIngredients(ingredients)}
                            </div>
                        </div>
                        <hr className="partial-line" />
                        <div className="instructions-container align-ctr column">
                            <h4 className="section-title">Instructions</h4>
                            {displayInstructions(instructions, 'prep')}
                            {displayInstructions(instructions, 'cook')}
                            {displayInstructions(instructions, 'serve')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const displayTimes = (times) => {
        const differentTimesLabel = ['Prep', 'Cook', 'Wait', 'Total'];
        return differentTimesLabel.map(time => {
            let key = time.toLowerCase() + 'Time';
            let timeValue = times[key];
            let hr, min = timeValue;
            if (timeValue > 60) {
                hr = Math.floor(timeValue / 60);
                min = Math.floor(timeValue - (hr * 60));
                if (min === 0) {
                    min = null;
                }
            }

            return (
                <div key={time.toLowerCase() + '-time'} example={time.toLowerCase() + '-time'} className="align-ctr column">
                    <span className="time-label">{time}</span>
                    <span className="time">
                        {hr && hr + ' hr '}
                        {min && min > 0 && min + ' m'}
                        {!hr && min === 0 && ' m'}
                    </span>
                </div>
            )
        })
    }

    const displayIngredients = (ingredients) => {
        return (
            ingredients.map((item, i) => {
                return (
                    <div /* key={item.id} */ key={i} className="ingredient-item-line text-left">
                        <input className="ingredient-checkbox" type="checkbox" name={item.name} id={item.name} value={item.name} />
                        <label htmlFor={item.name}>{item.amount && item.amount + ' '}{item.name}{item.additionalDetails !== '' && ', ' + item.additionalDetails}</label>
                    </div>
                )
            })
        )
    }

    const displayInstructions = (instructions, key) => {
        let steps = instructions[key];
        if (instructions[key].length > 0) {
            let firstLetter = key.charAt(0).toUpperCase();
            let restOfKey = key.substring(1);
            return (
                <div className={"whole mapped-" + key}>
                    <h5 className="subheading-title">{firstLetter + restOfKey}</h5>
                    <ol>
                        {steps.map((step, i) => <li key={i} className="step text-left">{step}</li>)}
                    </ol>
                </div>
            )
        }
    }

    const handleCollapsing = async (isCollapsed) => {
        let arrow = document.querySelector('.chevron-arrow');
        if (arrow) {
            await updateIsCollapsed(isCollapsed);
            if (isCollapsed) {
                arrow.classList.remove('right-side-up');
            } else {
                arrow.classList.add('right-side-up');
            }
        }
    }

    const cardNum = isSecondCard ? 'second-card' : 'first-card';
    const checkSelectedRecipe = isSelectedRecipeCard && selectedRecipe && Object.keys(selectedRecipe).length > 0;
    const showCrockpot = checkSelectedRecipe && selectedRecipe.crockpot && 'crockpot';
    const cardPositionAdjusted = isCollapsed && 'card-position-adjusted';
    const inverted = isCollapsed && 'inverted';
    const hideFilter = isCollapsed && 'hide-filters';
    const hideResultsCard = isCollapsed && 'hide-results-cards';
    const showSecondHeading = isSelectedRecipeCard && secondHeading;

    return (
        heading ?
            <section className={`container column align-ctr ${cardNum} ${cardPositionAdjusted}`}>
                <h2 className={`container-heading ${showCrockpot}`}>{heading}</h2>
                {
                    !isSelectedRecipeCard &&
                    <svg onClick={() => handleCollapsing(!isCollapsed)} className={`chevron-arrow ${inverted}`} width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.88914 0.34543L4.6419 0.123395C4.55635 0.0505317 4.45789 0.0157148 4.34676 0.0189596C4.23333 0.0222714 4.13823 0.0627397 4.0613 0.140348L2.54558 1.67002L0.943205 0.231431C0.861884 0.158444 0.764561 0.123594 0.651181 0.126904C0.539992 0.13015 0.443756 0.170652 0.362585 0.248384L0.131884 0.484373C0.052862 0.564065 0.0149501 0.657908 0.0181008 0.765816C0.0213101 0.875736 0.0646471 0.966157 0.14801 1.03706L2.29438 2.96404C2.37366 3.03912 2.47098 3.07501 2.58649 3.07163C2.69984 3.06832 2.79603 3.0268 2.87497 2.94709L4.90527 0.898161C4.9822 0.82051 5.01912 0.727757 5.01597 0.619891C5.01289 0.513993 4.97059 0.422546 4.88914 0.34543Z" fill="black" /></svg>
                }
                {/* RECIPES/FAVORITES */}
                {isFilter && displayFilters()}
                {recipes && recipes.length > 0 && displayResultsCards()}

                {/* SELECTED RECIPE */}
                {checkSelectedRecipe && displayAuthor(selectedRecipe)}
                {checkSelectedRecipe && displaySelectedRecipe()}
                {showSecondHeading && <h2 className="second-container-heading">{secondHeading}</h2>}
            </section>
            :
            <section className={`container column flex-ctr-all ${isSelectedRecipeCard && 'selected-recipe-card'}`}>
                <span>Select An Amazing Recipe!</span>
            </section>
    )
}