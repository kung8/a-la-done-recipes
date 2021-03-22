const recipes = require('./recipes-data');

module.exports = {
    getRecipes: async (req, res) => {
        let { search, favorite } = req.query;
        search = search.toLowerCase();

        if (search) {
            let data = await recipes.filter(recipe => {
                if (recipe.name.toLowerCase().includes(search) || recipe.author.toLowerCase().includes(search) || recipe.ingredients.findIndex(item => item.name.includes(search)) > -1) {
                    if (favorite && recipe.liked) {
                        return recipe;
                    } else if (!favorite) {
                        return recipe;
                    }
                }
            });
            res.send(data);
        } else {
            if (favorite) {
                const favedRecipes = recipes.filter(recipe => recipe.liked);
                res.send(favedRecipes);
            } else if (!favorite) {
                res.send(recipes);
            }
        }
    },
}