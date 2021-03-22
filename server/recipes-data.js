// id: 0,
// img: '',
// name: '',
// author: '',
// liked: false,
// crockpot: false, 
// servings: 0,
// prepTime: 0, 
// waitTime: 0, 
// cookTime: 0,  
// totalTime: 0,
// ingredients: [
// { name: '', amount: '', additionalDetails: '', optional: '' }
// ],
// supplies: [],
// instructions: {
//     prep: [],
//     cook: [], 
//     serve: []
// }],
// additionalNotes: [{}]

const { aji, chocolateChipCookies, beefBulgogi, beefStroganoff, blackPepperChicken, breakfastBurrito, butterChicken, calzone, chickenNoodleSoup, chickenPotPie, chickenSalad, cookieDough, crepes, eggCasserole, frenchToast, gingerChicken, hamburger, hawaiianHaystacks, hospitalityChicken, katsu, kebabs, lasagna, macaroniSalad, omelette, pancakes, pho, pizza, scrambledEggs, smoothie, smores, spaghetti, sushi, tacoInABag, wraps } = require('./images');

const recipes = [
    {
        id: 1,
        img: butterChicken,
        name: 'Indian Butter Chicken',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 10,
        waitTime: 0,
        cookTime: 30,
        totalTime: 45,
        ingredients: [
            { name: 'butter', amount: '4 Tbsp', additionalDetails: 'divided', optional: false },
            { name: 'boneless/skinless chicken', amount: '2 lbs', additionalDetails: '1/2" pieces', optional: false },
            { name: 'yellow onion', amount: '1', additionalDetails: 'diced', optional: false },
            { name: 'bell pepper', amount: '2', additionalDetails: 'diced', optional: false },
            { name: 'garlic cloves', amount: '3', additionalDetails: 'minced', optional: false },
            { name: 'ginger', amount: '1 Tbsp', additionalDetails: 'minced', optional: false },
            { name: 'garam masala', amount: '1 Tbsp', additionalDetails: '', optional: false },
            { name: 'chili powder', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'ground cumin', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'cayenne pepper', amount: '1/2 tsp', additionalDetails: '', optional: false },
            { name: 'tomato sauce', amount: '18 oz', additionalDetails: '', optional: false },
            { name: 'coconut milk', amount: '2 - 10.5 oz cans', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'rice', amount: 'cooked', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'frying pan',
            'large mixing bowl',
            'medium bowl',
            'spatula',
            'measuring spoons',
        ],
        instructions: {
            prep: [
                'Cut the chicken into 1/2" pieces and dice the yellow onion, bell pepper, garlic, and ginger.',
                'In a medium-size bowl, mix together the garlic, ginger, garam masala, chili powder, cumin, and cayenne. Set aside the seasoning for the vegetables.',
                'Start rice before you begin cooking dish, or you can do it during.'
            ],
            cook: [
                'Over medium-high heat, melt 1 Tbsp of butter in a pan and add the chicken in batches to cook until each side is browned. The chicken doesn\'t need to be cooked all the way through. Store in a large mixing bowl to use later.',
                'Turn heat to medium. Melt 1 Tbsp of butter in the pan. Cook the yellow onion and green pepper until the vegetables begin to soften (approximately 3 to 5 minutes).',
                'Add the seasoning into pan of vegetables, mix, and cook for another minute.',
                'Add the tomato sauce to vegetables and bring to a simmer (about 5 minutes).',
                'Add the coconut milk to vegetables and bring to a simmer.',
                'Turn heat to low. Add the browned chicken and the remaining 2 Tbsp of butter to vegetables. Let simmer for 10-15 minutes.',
                'Add salt and pepper to taste.',
            ],
            serve: [
                'Serve with rice (and naan is optional and delicious).'
            ]
        }
    },
    {
        id: 2,
        img: chocolateChipCookies,
        name: 'Chocolate Chip Cookies',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: '3-4 dozens',
        prepTime: 15,
        waitTime: 40,
        cookTime: 40,
        totalTime: 55,
        ingredients: [
            { name: 'butter', amount: '1 cup', additionalDetails: 'softened', optional: false },
            { name: 'white sugar', amount: '1 cup', additionalDetails: '', optional: false },
            { name: 'packed brown sugar', amount: '1 cup', additionalDetails: '', optional: false },
            { name: 'eggs', amount: '2', additionalDetails: '', optional: false },
            { name: 'vanilla extract', amount: '2 tsp', additionalDetails: '', optional: false },
            { name: 'baking soda', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'hot water', amount: '2 tsp', additionalDetails: '', optional: false },
            { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false },
            { name: 'flour', amount: '3 cups', additionalDetails: '', optional: false },
            { name: 'semisweet chocolate chips', amount: '2 cups', additionalDetails: '', optional: false },
        ],
        supplies: [
            'oven',
            'baking sheets',
            'aluminum foil',
            'large mixing bowl',
            'small bowl',
            'rubber spatula',
            'measuring cups',
            'measuring spoons',
            'spoon'
        ],
        instructions: {
            prep: [
                'Preheat oven to 350ºF',
                'Place aluminum foil on baking sheet(s).',
                'To soften butter: (1) leave in room temperature, or (2) warm in microwave for 20 - 30 seconds on 50% power (but times will vary based on the original softness of butter and microwave model).',
                'In a large mixing bowl, cream together the butter, white sugar, and brown sugar.',
                'Beat in eggs one at a time and mix in vanilla.',
                'Separately combine baking soda, salt, and hot water. Wait a few seconds for the baking soda to dissolve before adding to the batter.',
                'Mix flour one cup at a time into the batter.',
                'Add chocolate chips.',
                'Take a spoonful of batter, ball it up about an inch in diameter, and place on baking sheets (Refer to the Additional Notes).',
            ],
            cook: [
                'Bake for 10 minutes (or until golden brown) per batch.'
            ],
            serve: [
                'Serve with a glass of milk.'
            ]
        },
        additionalNotes: [
            { img: 'cookieDough', content: 'I ball up the cookie dough into balls similar to this about an inch round.' }
        ]
    },
    {
        id: 3,
        img: hawaiianHaystacks,
        name: 'Hawaiian Haystacks',
        author: 'Kevin Ung',
        liked: false,
        crockpot: true,
        servings: 12,
        prepTime: 10,
        waitTime: 240,
        cookTime: 270,
        totalTime: 280,
        ingredients: [
            { name: 'large chicken breast', amount: '5 - 6', additionalDetails: '', optional: false },
            { name: 'chicken broth', amount: '4 cup', additionalDetails: '', optional: false },
            { name: 'cream of chicken', amount: '2 - 10.5 oz can of', additionalDetails: '', optional: false },
            { name: 'cream cheese', amount: '1/4 cup', additionalDetails: 'cubed', optional: false },
            { name: 'green peppers', amount: '2', additionalDetails: 'diced', optional: false },
            { name: 'large onion', amount: '1/2', additionalDetails: 'diced', optional: false },
            { name: 'green onion', amount: 'bunch', additionalDetails: 'diced', optional: false },
            { name: 'roma tomato', amount: '2', additionalDetails: 'diced', optional: false },
            { name: 'pineapple tidbit', amount: '12 oz can', additionalDetails: '', optional: false },
            { name: 'sliced almonds', amount: '1/2 cup', additionalDetails: '', optional: false },
            { name: 'shredded coconut', amount: '1/2 cup', additionalDetails: '', optional: false },
            { name: 'sour cream', amount: '8 oz', additionalDetails: '', optional: false },
            { name: 'chow mein noodles', amount: '2 cups', additionalDetails: '', optional: false },
            { name: 'salt', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper', amount: '', additionalDetails: '', optional: false },
            { name: 'basil', amount: '', additionalDetails: '', optional: false },
            { name: 'oregano', amount: '', additionalDetails: '', optional: false },
            { name: 'rice (served with)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'slow cooker',
            'slow cooker liner',
            'rubber spatula',
            'cutting board and knife',
            'small bowls',
            'measuring cups',
            'measuring spoons',
            'spoons',
            'tongs',
        ],
        instructions: {
            prep: [
                'Line the slow cooker with the slow cooker liner. This will save you a lot of time when you need to clean up afterwards.',
                'Place the chicken in the slow cooker.',
                'Pour the chicken broth and cream of chicken over the chicken. Be sure to submerge the chicken.',
                'Add salt, pepper, oregano, and basil as desired.',
                'Cut the vegetables and store the toppings in separate bowls until ready to serve.',
            ],
            cook: [
                'Cook the chicken on high for 4 hours.',
                'After the 4 hours, take out the chicken of the slow cooker using tongs and place on a cutting board. While removing the chicken be careful not to rip the liner. Shred the chicken or dice the chicken into 1/2 inch cubes.',
                'Before returning the chicken back into the slow cooker, place the cream cheese in the slow cooker.',
                'Carefully return the diced/shredded chicken into the slow cooker.',
                'Continue to cook for another 30 minutes on medium, so the cream cheese melts and stir often.',
            ],
            serve: [
                'Serve over rice and top with your favorite toppings--mine is Chow Mein Noodles.'
            ]
        }
    },
    {
        id: 4,
        img: pizza,
        name: 'Personal Pizza',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 1,
        prepTime: 5,
        waitTime: 10,
        cookTime: 10,
        totalTime: 15,
        ingredients: [
            { name: 'pita bread', amount: '1', additionalDetails: '', optional: false },
            { name: 'shredded cheese', amount: '1/3 cup', additionalDetails: '', optional: false },
            { name: 'tomato sauce', amount: '1/2 cup', additionalDetails: '', optional: false },
            { name: 'green pepper', amount: '1/4', additionalDetails: 'diced', optional: false },
            { name: 'small onion', amount: '1/4 cup', additionalDetails: 'diced/sliced', optional: false },
            { name: 'roma tomato', amount: '1/4', additionalDetails: 'diced/sliced', optional: false },
            { name: 'pepperoni slices', amount: '5 - 8', additionalDetails: '', optional: false },
            { name: 'mushroom', amount: '3 - 5', additionalDetails: 'sliced', optional: false },
            { name: 'pineapple tidbits', amount: '3 - 5', additionalDetails: '', optional: false },
        ],
        supplies: [
            'oven',
            'baking sheets',
            'aluminum foil',
            'measuring cups',
            'measuring spoons',
            'spoon',
        ],
        instructions: {
            prep: [
                'Preheat oven to 425 degrees F and lay aluminum foil on baking sheet.',
                'Measure out ingredients you wish to use as toppings on your personal pizza.',
                'Place pita bread on a baking sheet. Pita bread can be replaced with tortilla but be careful with how much sauce to place on it. You can even find premade pizza dough which may yield more than 1 depending on the size.',
                'Top with tomato sauce and spread so it covers the top of the pita bread.',
                'Sprinkle cheese to make a nice layer over the sauce',
                'Add all of the ingredients above or substitute with whatever ingredients your heart desires. Note: if using any poultry or meat make sure it is not raw prior to placing on pizza.',
            ],
            cook: [
                'Bake for 10 - 12 minutes.'
            ],
            serve: []
        }
    },
    {
        id: 5,
        img: aji,
        name: 'Peruvian Aji de Gallina',
        author: 'Gaby Ward',
        liked: false,
        crockpot: false,
        servings: 3,
        prepTime: 5,
        waitTime: 40,
        cookTime: 40,
        totalTime: 45,
        ingredients: [
            { name: 'chicken breast', amount: '2', additionalDetails: '', optional: false },
            { name: 'large onion', amount: '1', additionalDetails: 'diced', optional: false },
            { name: 'oil', amount: 'small drizzle', additionalDetails: '', optional: false },
            { name: 'garlic', amount: '1 tsp', additionalDetails: 'minced', optional: false },
            { name: 'yellow bell peppers', amount: '1 1/2', additionalDetails: '', optional: false },
            { name: 'bread slices', amount: '4', additionalDetails: '', optional: false },
            { name: 'milk', amount: '2 cups', additionalDetails: '', optional: false },
            { name: 'salt (or to taste)', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'pepper (or to taste)', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'oregano (or to taste)', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'nutmeg (optional)', amount: '1 pinch of', additionalDetails: '', optional: true },
            { name: 'rice (served with)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'blender',
            'large pan',
            'large pot',
            'measuring cups',
            'measuring spoons',
            'cutting board and knife',
            'mixing bowl',
            'small bowl',
            'spoon',
        ],
        instructions: {
            prep: [
                'Cut the onion and measure out the seasonings. You can keep them in the same bowl.',
                'Blend together the bread, milk, and the yellow peppers in a blender.',
            ],
            cook: [
                'Boil the chicken breasts in a pot of water.',
                'Once the chicken is cooked, shred the chicken on a cutting board. Place the shredded chicken in a large mixing bowl. Keep some of the chicken broth in the pot.',
                'In a hot pan with oil on medium high heat, brown the garlic.',
                'Add the onion, oregano, salt, pepper, and nutmeg to the pan and cook until the onions are browned.',
                'Add the blended mix and chicken to the pan.',
                'Continue to mix this mixture and let cook a few more minutes until well blended. At this point if you want to thin the sauce you can add a little chicken broth or milk, depending on your preference.',
            ],
            serve: [
                'Serve with rice and enjoy the taste of my favorite Peruvian dish!'
            ]
        }
    },
    {
        id: 6,
        img: chickenNoodleSoup,
        name: 'Chicken Noodle Soup',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 6,
        prepTime: 8,
        waitTime: 20,
        cookTime: 45,
        totalTime: 53,
        ingredients: [
            { name: 'chicken breast', amount: '1.5 lbs', additionalDetails: 'cubed', optional: false },
            { name: 'olive oil', amount: '1 Tbsp', additionalDetails: '', optional: false },
            { name: 'large onion', amount: '1', additionalDetails: 'sliced', optional: false },
            { name: 'large carrots', amount: '2', additionalDetails: 'sliced', optional: false },
            { name: 'celery', amount: '2 stalks', additionalDetails: 'sliced', optional: false },
            { name: 'chicken broth', amount: '6 cups', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'oregano (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'rosemary (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'thyme (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'egg noodles', amount: '16 oz', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'large pan',
            'large pot',
            'measuring cups',
            'measuring spoons',
            'cutting board(s) and knife(ves)',
            'mixing bowl',
            'small bowl',
            'spoon',
        ],
        instructions: {
            prep: [
                'Prep all the vegetables and add them to the mixing bowl. Then prep the raw chicken. Or best to use separate cutting boards to avoid cross contamination.',
            ],
            cook: [
                'In a hot pan with oil over medium-high heat, add the chicken, salt, pepper, and oregano. Cook until chicken is browned on both sides. Set aside.',
                'In a large pot, add together the chicken broth, onion, carrots, celery, salt, pepper, oregano, rosemary, and thyme and cook for 8 - 10 minutes over medium-high heat.',
                'Add the noodles and bring to a roaring boil (about another 6 to 8 minutes).',
                'Add the chicken and let it simmer on a low-heat for about 10 minutes.',
            ],
            serve: [
                'Serve and enjoy - I typically make this when I or somebody I know is sick, so get better if you too are sick!'
            ]
        }
    },
    {
        id: 7,
        img: katsu,
        name: 'Japanese Pork Katsu',
        author: 'Aldin Pope',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 15,
        waitTime: 0,
        cookTime: 20,
        totalTime: 35,
        ingredients: [
            { name: 'chicken breast (or pork loins)', amount: '4', additionalDetails: '', optional: false },
            { name: 'vegetable oil', amount: '1 cup', additionalDetails: '', optional: false },
            { name: 'egg', amount: '1', additionalDetails: '', optional: false },
            { name: 'panko bread crumbs', amount: '1 c', additionalDetails: '', optional: false },
            { name: 'flour', amount: '2 Tbsp', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'cabbage (optional)', amount: '1/4', additionalDetails: 'julienned', optional: false },
            { name: 'tomato (optional)', amount: '2', additionalDetails: 'sliced', optional: false },
            { name: 'lemon (optional)', amount: '', additionalDetails: 'wedges', optional: false },
            { name: 'rice (served with)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'small-based pot',
            'measuring cups',
            'measuring spoons',
            'cutting board(s) and knife(ves)',
            'small bowls (for dredging)',
            'long-handled tongs',
            'cooking thermometer',
            'cooling rack',
            'large plate',
            'oven mitts',
            'paper towels'
        ],
        instructions: {
            prep: [
                'Season the chicken with salt.',
                'Set up the three dredging stations in separate small bowls: (1) flour, (2) egg, and (3) panko bread crumbs.',
                'First dredge the chicken in flour and shake off any excess. A good way to do this is playing pat-a-cake with it between each hand. Be sure to keep it over the flour station.',
                'Dip it inside the egg bowl.',
                'Finally put it inside the panko bread crumbs bowl and make sure that it is well coated.',
                'Place the finished chicken on a plate that will be fried soon. Repeat the dredging process for each of the chicken breasts.',
            ],
            cook: [
                'Heat oil in a pot over medium heat until it gets to about 350 ºF. You can use a cooking thermometer to gauge this.',
                'Be careful as the oil is very hot by this point, so be sure to wear oven mitts to help protect your hands from getting burned.',
                'Place the chicken breast in the hot oil, and cook for 3 - 4 minutes per side.',
                'Place the finished chicken breast on a cooling rack lined with about 2 paper towel layers',
                'Repeat this for each chicken breast.',
            ],
            serve: [
                'Serve with rice and optionally with tomato, cabbage, and lemon slices (squeezed over chicken, or cabbage, or both) and enjoy this Japanese goodness!',
            ]
        }
    },
    {
        id: 8,
        img: tacoInABag,
        name: 'Taco In A Bag',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 10,
        waitTime: 0,
        cookTime: 10,
        totalTime: 20,
        ingredients: [
            { name: 'ground beef', amount: '1 lb', additionalDetails: '', optional: false },
            { name: 'medium-sized frito chips', amount: '1 bag', additionalDetails: '', optional: false },
            { name: 'lettuce (topping)', amount: '', additionalDetails: 'shredded', optional: false },
            { name: 'tomato (topping)', amount: '', additionalDetails: 'diced', optional: false },
            { name: 'green bell peppers (topping)', amount: '', additionalDetails: 'diced', optional: false },
            { name: 'sour cream (topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'shredded cheese (topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'taco seasoning', amount: '', additionalDetails: '', optional: false },
            { name: 'black bean', amount: '8 oz', additionalDetails: '', optional: false },
            { name: 'corn', amount: '8 oz', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'pan',
            'pot',
            'spatula',
            'cutting board and knife',
            'small bowls for toppings',
            'serving spoons',

        ],
        instructions: {
            prep: [
                'Cut the lettuce, tomato, and green bell peppers.'
            ],
            cook: [
                'Heat up a pan over medium-high heat, and once it is hot add in the ground beef.',
                'Follow the instructions of the taco seasoning, typically it is adding water and the taco seasoning to the browned ground beef.',
                'While the meat is cooking, you can heat up the black beans and corn in a pot with some salt over medium-high heat.',
                'Once the meat is cooked and the corn and beans are hot, serve over bowls of frito chips (you could also do actual small bags of fritos, however I think that a large bag is more economical).',
            ],
            serve: [
                'Layer your taco in a bag (or bowl) with whatever toppings you want and enjoy this simple, fun party in a bag.'
            ]
        }
    },
    {
        id: 9,
        img: blackPepperChicken,
        name: 'Malaysian Black Pepper Chicken',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 5,
        prepTime: 15,
        waitTime: 30,
        cookTime: 20,
        totalTime: 65,
        ingredients: [
            { name: 'chicken breast', amount: '5', additionalDetails: 'cubed', optional: false },
            { name: 'shallots', amount: '6', additionalDetails: 'minced', optional: false },
            { name: 'garlic', amount: '4 cloves', additionalDetails: 'minced', optional: false },
            { name: 'ginger', amount: '1 inch', additionalDetails: 'sliced', optional: false },
            { name: 'black pepper', amount: '2 tsp', additionalDetails: '', optional: false },
            { name: 'oyster sauce', amount: '4 Tbsp', additionalDetails: '', optional: false },
            { name: 'sweet soy sauce', amount: '6 Tbsp', additionalDetails: '', optional: false },
            { name: 'water', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'cornstarch', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'green pepper', amount: '1', additionalDetails: 'minced', optional: false },
            { name: 'slicer tomato', amount: '2', additionalDetails: '', optional: false },
            { name: 'salt', amount: '', additionalDetails: '', optional: false },
            { name: 'olive oil (for frying)', amount: '', additionalDetails: '', optional: false },
            { name: 'rice (served with recipe)', amount: '', additionalDetails: '', optional: false },
            { name: 'cilantro (optional garnish)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            '2 large frying pans',
            'spatula',
            'large mixing bowl',
            'medium bowl',
        ],
        instructions: {
            prep: [
                'Cut the chicken into 1" cubes.',
                'Mix together 1 tsp black pepper, 2 Tbsp oyster sauce, and 2 Tbsp soy sauce for the chicken marinade.',
                'Marinate chicken for 30 minutes.',
                'While chicken is marinating, prep shallots, garlic, and ginger. Then set aside in medium bowl.',
                'Cut up the bell pepper and tomato into 1/2" pieces and set to side as well.',
            ],
            cook: [
                'In a large pan over medium-high heat, add a little olive oil then carefully add the chicken. Brown the chicken. For best results, cook in batches. Keep an eye on this while moving on to the veggies. Once they are browned, you can turn off the heat and transfer to a large bowl.',
                'While chicken is browning - in another frying pan - saute onion, garlic, ginger, and black pepper until it becomes fragrant.',
                'Add the oyster sauce, soy sauce, and water to the veggies. Stir until it is smooth.',
                'Add the peppers and tomatos with the other veggies to help balance the saltiness of the oyster and soy sauce.',
                'Mix together cornstarch and a little water and then add to the veggies.',
                'Combine the cooked chicken to the veggies and mix until well-blended.',
                'You can add more salt and sugar but every time I have made it, it is pretty salty already.',
            ],
            serve: [
                'Serve with rice, garnish with a few sprigs of cilantro, and enjoy a small taste of Malaysian cuisine.',
            ]
        }
    },
    {
        id: 10,
        img: sushi,
        name: 'California Roll Sushi',
        author: 'Aldin Pope',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 10,
        waitTime: 0,
        cookTime: 15,
        totalTime: 25,
        ingredients: [
            { name: 'seaweed', amount: '8 sheets', additionalDetails: '', optional: false },
            { name: 'cooked short-grained rice', amount: '4 c', additionalDetails: 'room temperature', optional: false },
            { name: 'vinegar', amount: '7 Tbsp', additionalDetails: '', optional: false },
            { name: 'sugar', amount: '7 Tbsp', additionalDetails: '', optional: false },
            { name: 'salt', amount: '1 Tbsp + 1 tsp', additionalDetails: '', optional: false },
            { name: 'avocado', amount: '2', additionalDetails: 'sliced', optional: false },
            { name: 'cucumber', amount: '1', additionalDetails: 'sliced', optional: false },
            { name: 'imitation crab meat', amount: '8 oz', additionalDetails: 'sliced', optional: false },
            { name: 'wasabi (optional)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'cutting board and knife',
            'sushi mat',
            'plates'
        ],
        instructions: {
            prep: [
                'Cook rice.',
                'Mix in sugar, salt, and vinegar until sugar dissolves.',
                'Mix this into the rice (make sure that the rice is close to room temperature to prevent the seaweed from shriveling up).',
                'Slice the avocado, cucumber, and imitation crab and set aside to be placed inside the sushi rolls.',
            ],
            cook: [
                'Place the shiny side of the seaweed on the bottom (so it will be on the outside when it\'s rolled up).',
                'The seaweed lines should be perpendicular to the sushi mat\'s lines.',
                'Place a light layer of rice on the seaweed covering the entire seaweed. Note: the more rice you add the less other ingredients you can fit.',
                'Starting about 1/3 the way up, place a few strips of imitation crab, cucumber, and avocado, making sure to not pack it too much.',
                'Fold the sushi mat over the newly placed interior ingredients to secure the roll. Then pull back the mat and roll up some of it so that it will not get caught inside the roll.',
                'Continue rolling up the sushi roll, and pulling back the mat as needed.',
                'Place the finished sushi rolls on a plate and repeat these steps until all the sushi rolls are completed.',
            ],
            serve: [
                'Enjoy this American-adapted Japanese dish with some delicious, spicy wasabi. This type of sushi is called a California Roll.'
            ]
        }
    },
    {
        id: 11,
        img: gingerChicken,
        name: 'Ginger Chicken',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 8,
        prepTime: 40,
        waitTime: 0,
        cookTime: 20,
        totalTime: 60,
        ingredients: [
            { name: 'chicken', amount: '8', additionalDetails: '', optional: false },
            { name: 'brown sugar', amount: '1/4 c', additionalDetails: '', optional: false },
            { name: 'soy sauce', amount: '3 Tbsp', additionalDetails: '', optional: false },
            { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', optional: false },
            { name: 'ginger', amount: '1 Tbsp', additionalDetails: 'minced', optional: false },
            { name: 'onion', amount: '2/3', additionalDetails: 'sliced', optional: false },
            { name: 'green bell pepper', amount: '1', additionalDetails: 'sliced', optional: false },
            { name: 'carrots', amount: '1', additionalDetails: 'sliced', optional: false },
            { name: 'red pepper flakes (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'olive oil', amount: '1 1/2 Tbsp', additionalDetails: '', optional: false },
            { name: 'green onion (optional)', amount: '', additionalDetails: 'sliced', optional: false },
            { name: 'sesame seeds (optional)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            '2 large frying pan',
            'cutting board and knife',
            '2 large mixing bowl',
            'spatula'
        ],
        instructions: {
            prep: [
                'Mince the garlic and ginger then mix together with the brown sugar, soy sauce, red pepper flakes, and 1 Tbsp of olive oil inside the mixing bowl for the chicken marinade.',
                'Cut the chicken into about 2-inch wide pieces (about a quarter of a breast) and place in the marinade. Let marinade for at least 30 minutes.',
                'While the marinade is doing its thing, prep the other veggies (onions, peppers, carrots and whatever veggies you want) and cook the rice.',
            ],
            cook: [
                'Once the chicken is finished marinating, heat a pan over medium heat then add the remaining oil when it is hot.',
                'Cook the chicken in batches. Brown the chicken and be sure they cook all the way through. The cooked chicken can be placed inside the other mixing bowl.',
                'Continue with the chicken, but you can start another pan for sauteing the veggies. Put it over a medium-high heat. Then add a drizzle of oil. And saute the veggies until browned.',
                'Once the veggies are finished cooking combine them with the cooked chicken.',
                'When all the chicken has finished cooking, pour the remaining marinade in the pan and let it come to a boil (this will dissolve any of the browned pieces and become a glaze).',
                'Turn off the heat and add the chicken and veggies back into pan to soak in the glazey sauce.',
            ],
            serve: [
                'Serve this with rice and garnish with green onions and sesame seed and enjoy the fiery-kick of the Chinese.'
            ]
        }
    },
    {
        id: 12,
        img: macaroniSalad,
        name: 'Macaroni Salad',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 10,
        prepTime: 20,
        waitTime: 0,
        cookTime: 10,
        totalTime: 30,
        ingredients: [
            { name: 'elbow macaroni', amount: '4 c', additionalDetails: '', optional: false },
            { name: 'mayonnaise', amount: '1 c', additionalDetails: '', optional: false },
            { name: 'vinegar', amount: '1/4 c', additionalDetails: '', optional: false },
            { name: 'sugar', amount: '2/3 c', additionalDetails: '', optional: false },
            { name: 'yellow mustard', amount: '2 1/2 Tbsp', additionalDetails: '', optional: false },
            { name: 'salt (+ for boiling)', amount: '1 1/2 tsp', additionalDetails: '', optional: false },
            { name: 'pepper', amount: '1/2 tsp', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1', additionalDetails: 'diced', optional: false },
            { name: 'celery', amount: '2 stalks', additionalDetails: 'sliced', optional: false },
            { name: 'green bell pepper', amount: '1', additionalDetails: 'diced', optional: false },
        ],
        supplies: [
            'stove',
            'pot',
            'large mixing bowl',
            'rubber spatula',
            'strainer',
        ],
        instructions: {
            prep: [],
            cook: [
                'Over a high heat boil water and salt in a large pot.',
                'Once the water boils, add the pasta and cook for about 8 - 10 minutes or until tender.',
                'Rinse the pasta under cold water and drain in colander.',
                'In the mixing bowl, combine the mayo, vinegar, sugar, mustard, salt, and pepper until well mixed.',
                'Then combine the onions, celery, green pepper, and pasta.',
                'Best to refrigerate at least 4 hours (or even overnight).',
            ],
            serve: [
                'Enjoy this sweet, creamy, fresh appetizer while you relax with some relaxing Hawaiian music.'
            ]
        }
    },
    {
        id: 13,
        img: pancakes,
        name: 'Kodiak Cake Pancakes',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 2,
        prepTime: 3,
        waitTime: 0,
        cookTime: 12,
        totalTime: 15,
        ingredients: [
            { name: 'Kodiak Cake\'s pancake mix', amount: '1 c', additionalDetails: '', optional: false },
            { name: 'water (or milk)', amount: '1 c', additionalDetails: '', optional: false },
            { name: 'egg', amount: '1', additionalDetails: '', optional: false },
            { name: 'vanilla', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'butter', amount: '1 Tbsp', additionalDetails: '', optional: false },
            { name: 'syrup (optional topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'banana (optional topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'strawberry (optional topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'peanut butter (optional topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'whipped cream (optional topping)', amount: '', additionalDetails: '', optional: false },
            { name: 'blueberries (optional topping)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove or griddle',
            'frying pan or griddle',
            'spatula',
            'small mixing bowl',
            'measuring spoon',
            'measuring cup',
            'fork'
        ],
        instructions: {
            prep: [
                'Add pancake mix, water (or milk), vanilla, and an egg to a small mixing bowl.',
                'Mix with a fork until it is smooth and no lumps.'
            ],
            cook: [
                'Heat the pan on a medium-high heat then add a quarter of the butter amount. Try to spread the butter across the pan by angling the pan.',
                'Once the pan is hot and the butter is spread, ladle in pancake batter into the pan using a 1/3-cup measuring cup.',
                'Keep an eye on the edges of the pancake as it will start to bubble when it is ready to flip. I like to feel out the edge by sliding my spatula beneath it to see if it is ready.',
                'Flip it when it\'s ready and let the other side cook. I like to flip the pancake again to lightly brown the original side again.',
            ],
            serve: [
                'Serve with your favorite toppings. I like syrup, bananas and strawberries, or peanut butter with bananas.'
            ]
        }
    },
    {
        id: 14,
        img: omelette,
        name: 'Omelette',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 1,
        prepTime: 5,
        waitTime: 0,
        cookTime: 10,
        totalTime: 15,
        ingredients: [
            { name: 'eggs', amount: '2', additionalDetails: '', optional: false },
            { name: 'water (small amount)', amount: '', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'small onion', amount: '1/4', additionalDetails: 'diced', optional: false },
            { name: 'bell pepper', amount: '1/3', additionalDetails: 'diced', optional: false },
            { name: 'roma tomato', amount: '1/4', additionalDetails: 'diced', optional: false },
            { name: 'cooked honey ham', amount: '1 slice', additionalDetails: 'diced', optional: false },
            { name: 'basil (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'butter', amount: '1/2 Tbsp', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'curvy frying pan',
            'cutting board and knife',
            'small bowl',
            'fork',
            'spatula',
        ],
        instructions: {
            prep: [
                'Prep the vegetables and ham (I use deli lunch meat) and set aside on cutting board.',
            ],
            cook: [
                'In a bowl, mix together the eggs, water (no more than 1 Tbsp), salt, pepper, and basil.',
                'Heat up the pan on a medium-high heat. Add the butter. Then add the peppers and onion.',
                'Once the onions have browned a little, turn down to medium heat, and add the egg batter.',
                'While still keeping it over the heat, tilt and angle the pan so the runny egg on top can spread to more parts of the pan and you can even take the spatula and lift the edges of the cooking egg and let gravity do its job to have the runny egg batter fill underneath it (try to keep it a circle).',
                'Once the egg has mostly cooked and you are able to kind of slide the spatula around the egg, bring the heat back up to the medium-high heat.',
                'Let it cook about half a minute to a minute longer, then it\'s ready to flip. Note if you can slide the pan left and right in the air and the egg doesn\'t move, it is not ready.',
                'I recommend doing this next step over the sink: flipping time (I think it is the hardest part of this whole process). You are going to flip the egg in the air about the height of the diameter of the egg. Angle the pan about 45 degrees downward, and quickly catapult it up in the air with a quick thrust downward, causing it to flip. The tricky part is make sure you catch it.',
                'If you have successfully flipped it then the rest of this will be a piece of cake. Put it right back over the heat and add the tomatoes and ham to one half of the egg.',
                'Let the other side of the egg cook a few minutes.',
                'Fold over the side that doesn\'t have the tomatoes. If the egg could use more time you can carefully flip the egg over again using your spatula this time.',
            ],
            serve: [
                'Enjoy this beautiful piece of art.'
            ]
        }
    },
    {
        id: 15,
        img: smoothie,
        name: 'Smoothie',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 1,
        prepTime: 1,
        waitTime: 0,
        cookTime: 2,
        totalTime: 3,
        ingredients: [
            { name: 'orange juice', amount: '2 c', additionalDetails: '', optional: false },
            { name: 'bananas', amount: '1', additionalDetails: '', optional: false },
            { name: 'frozen berries/fruits', amount: '1 c', additionalDetails: '', optional: false },
            { name: 'protein powder (optional)', amount: '1 scoop of', additionalDetails: '', optional: false },
            { name: 'spinach', amount: '1 handful of', additionalDetails: '', optional: false },
        ],
        supplies: [
            'blender',
        ],
        instructions: {
            prep: [
                'Pour orange juice inside the blender.',
                'Slowly add each of the preferred ingredients and feel free to swap out fruits and vegetables.',
                'The thing to keep in mind is the liquid to solid food ratio. Too much liquid will leave a very liquidy smoothie while not enough liquid will make a terrible noise and can damage your blender blades.',
            ],
            cook: [
                'When you are satisfied with what you want inside the smoothie, begin to blend. I like to start on a blend setting with a low speed. Then as it begins to blend then I increase the speed.',
                'From my Jamba Juice years, if you can see a tornado inside the smoothie - it\'s perfect. I continue to follow that as I blend my smoothies.',
            ],
            serve: [
                'Enjoy the fresh, fruity sweetness and goodness!'
            ]
        }
    },
    {
        id: 16,
        img: chickenSalad,
        name: 'Small Chicken Salad',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 2,
        prepTime: 5,
        waitTime: 0,
        cookTime: 10,
        totalTime: 15,
        ingredients: [
            { name: 'chicken breast', amount: '1', additionalDetails: 'strips', optional: false },
            { name: 'spinach/lettuce', amount: 'large handfuls', additionalDetails: 'sliced', optional: false },
            { name: 'green bell pepper', amount: '1/2', additionalDetails: 'sliced', optional: false },
            { name: 'baby carrots', amount: '6 - 8', additionalDetails: 'sliced', optional: false },
            { name: 'roma tomato', amount: '1/2', additionalDetails: 'diced', optional: false },
            { name: 'cucumber', amount: '1/2', additionalDetails: 'sliced + halved', optional: false },
            { name: 'lemon juice (for dressing)', amount: '', additionalDetails: '', optional: false },
            { name: 'salt (to taste + for boiling)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'pot',
            'medium bowl',
            'cutting board + knife',
        ],
        instructions: {
            prep: [],
            cook: [
                'Boil a pot of water on medium-high heat with salt.',
                'Once the water is boiling, add the raw chicken breast whole inside the pot and cook until cooked all the way through.',
                'While the chicken is boiling, cut up the rest of the vegetables and put in a bowl. Note: if you are prepping this for future meals, it is best to store the individual wet ingredients such as the tomatoes and cucumber separately. Then mix them together when you are about to eat them. This should keep for about a day or two at most.',
                'When the chicken is finished cooking, cut the chicken into strips on the cutting board. If the chicken\'s center is still pink, cook a little longer in the pot.',
                'Again if you are planning on eating the salad another day, wait for the chicken to cool down a little before adding to the salad or else it will cause some of the vegetables to shrivel or cook.',
                'Add the chicken and the salad mix when ready to eat.',
            ],
            serve: [
                'Enjoy this simple, healthy meal. I like to add a little bit of salt, pepper, and lemon juice to give it a bit of flavor.'
            ]
        }
    },
    {
        id: 17,
        img: crepes,
        name: 'Crepes',
        author: 'Sam Giraud-Carrier',
        liked: false,
        crockpot: false,
        servings: 5,
        prepTime: 8,
        waitTime: 0,
        cookTime: 20,
        totalTime: 28,
        ingredients: [
            { name: 'flour', amount: '1 c', additionalDetails: '', optional: false },
            { name: 'eggs', amount: '2', additionalDetails: '', optional: false },
            { name: 'milk', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'butter (plus a little for the pan)', amount: '2 Tbsp', additionalDetails: 'melted', optional: false },
            { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'vanilla', amount: '1 Tbsp', additionalDetails: '', optional: false },
            { name: 'water', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'strawberries (optional)', amount: '', additionalDetails: 'sliced', optional: false },
            { name: 'blueberries (optional)', amount: '', additionalDetails: 'halved', optional: false },
            { name: 'bananas (optional)', amount: '', additionalDetails: 'sliced', optional: false },
            { name: 'nutella (optional)', amount: '', additionalDetails: '', optional: false },
            { name: 'peanut butter (optional)', amount: '', additionalDetails: '', optional: false },
            { name: 'whipped cream (optional)', amount: '', additionalDetails: '', optional: false },
            { name: 'melted chocolate (optional)', amount: '', additionalDetails: '', optional: false },
            { name: 'syrup (optional)', amount: '', additionalDetails: '', optional: false },
            { name: 'powdered sugar (optional)', amount: '', additionalDetails: '', optional: false },
            { name: 'lemon juice (optional)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'mixing bowl',
            'curvy frying pan',
            'whisk',
            'measuring spoon',
            'measuring cups',
        ],
        instructions: {
            prep: [
                'In a mixing bowl, mix together the flour, eggs, milk, salt, vanilla, and water, and butter.',
            ],
            cook: [
                'Heat up the pan over a medium-high heat and add a little butter to help the pan prevent sticking and expedient the heating process.',
                'Use a 1/4-cup measuring cup and ladle some of the crepe batter into the pan. Be sure to tilt and angle the pan so that it spreads evenly and very thin in the pan.',
                'Cook for about 2 minutes on each side. Carefully flip by loosening the edges then flip.',
                'Continue this for each of the crepes. As the crepes begin to stick, add some more of the butter.',
            ],
            serve: [
                'Add your favorite toppings, fold them however you like, and enjoy this ingenious, light French dish: sweet, savory or a combination of both!'
            ]
        }
    },
    {
        id: 18,
        img: spaghetti,
        name: 'Spaghetti',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 3,
        prepTime: 7,
        waitTime: 0,
        cookTime: 20,
        totalTime: 27,
        ingredients: [
            { name: 'chicken breast (or preferred protein)', amount: '1', additionalDetails: 'sliced', optional: false },
            { name: 'any preferred noodle', amount: '3 c', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1/3', additionalDetails: 'diced', optional: false },
            { name: 'green bell pepper', amount: '2/3', additionalDetails: 'diced', optional: false },
            { name: 'butter', amount: '1 Tbsp', additionalDetails: '', optional: false },
            { name: 'olive oil (to toss)', amount: '', additionalDetails: '', optional: false },
            { name: 'sugar', amount: '2 tsp', additionalDetails: '', optional: false },
            { name: 'tomato sauce', amount: '12 oz', additionalDetails: '', optional: false },
            { name: 'rosemary (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'thyme (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'basil (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'oregano (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'garlic powder (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'parsley flakes (to taste)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'large pot',
            'large pan',
            'spatula',
            'large mixing bowl',
            'small bowl',
            'colander/strainer',
            'cutting board and knife',
        ],
        instructions: {
            prep: [
                'Prep the vegetables and set in a small bowl. Then slice chicken and season generously with salt, pepper, oregano, thyme, rosemary, basil and garlic powder (you will be adding some more later optionally).',
            ],
            cook: [
                'In a large pot, bring water and salt to a boil.',
                'Add pasta to pot and cook until al dente (tender but center is still a little firm).',
                'Drain in a colander/strainer and save some of the starchy water for later.',
                'In a large mixing bowl, add the pasta and toss with a little oil.',
                'While the pasta is cooking you could cook the chicken and veggies, in a pan over medium heat, melt 1 Tbsp of butter.',
                'Once butter melts, brown chicken in a pan over medium-high heat, 2 to 3 minutes per side. Make sure that it\'s cooked through, cook chicken in batches if necessary.',
                'Once chicken is cooked, place in a medium bowl.',
                'Saute the vegetables with a little bit of butter in the same pan that the chicken was cooked in. Add the vegetables in with the chicken.',
                'Once everything is cooked pour in the tomato sauce and add any more of the seasonings as desired.',
                'Let sauce warm up a little before adding pasta directly in a pan. When you do add the pasta in, also add a little of the starchy pasta water.',
                'Mix until all of the ingredients are completely mixed and warm.',
            ],
            serve: [
                'Add some parsley right before serving and enjoy this simple Italian pasta dish.'
            ]
        }
    },
    {
        id: 19,
        img: 'alfredo',
        name: 'Alfredo',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 10,
        waitTime: 0,
        cookTime: 40,
        totalTime: 50,
        ingredients: [
            { name: 'fettuccine noodles', amount: '12 oz', additionalDetails: '', optional: false },
            { name: 'olive oil (for tossing and sauteing)', amount: '', additionalDetails: '', optional: false },
            { name: 'green bell pepper', amount: '2/3', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1/2', additionalDetails: '', optional: false },
            { name: 'chicken breast', amount: '2', additionalDetails: 'sliced', optional: false },
            { name: 'heavy cream', amount: '2 c', additionalDetails: '', optional: false },
            { name: 'butter', amount: '4 Tbsp', additionalDetails: '', optional: false },
            { name: 'nutmeg', amount: '2 pinches', additionalDetails: '', optional: false },
            { name: 'shredded parmesan', amount: '1 1/2 c', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'large pot',
            'large pan',
            'cutting board and knife',
            'mixing bowl',
            'small and medium bowls',
            'colander/strainer',
        ],
        instructions: {
            prep: [
                'Prep the vegetables and set in a small bowl. Then cut the chicken into 1/4" slices and season with salt and pepper.',
            ],
            cook: [
                'In a large pot, bring water and salt to a boil.',
                'Add pasta to pot and cook until al dente (tender but center is still a little firm).',
                'Drain in a colander/strainer and save some of the starchy water for later.',
                'In a large mixing bowl, add the pasta and toss with a little oil.',
                'In a pan over medium heat, melt 1 Tbsp of butter.',
                'Once butter melts, brown chicken in a pan over medium-high heat, 2 to 3 minutes per side. Make sure that it\'s cooked through, cook chicken in batches if necessary.',
                'Once chicken is cooked, place in a medium bowl.',
                'Saute the vegetables with a little bit of butter in the same pan that the chicken was cooked in. Add the vegetables in with the chicken.',
                'In the same pan over medium heat, melt the remaining butter.',
                'Mix together heavy cream and nutmeg before pouring into the pan and cook until it simmers, then for another 2 minutes.',
                'Set to a low heat and slowly mix in the parmesan, chicken, veggies, pasta, a little starchy noodle water, salt and pepper.',
            ],
            serve: [
                'Serve and enjoy the nostalgic creamy, delicious chicken alfredo!',
            ]
        }
    },
    {
        id: 20,
        img: pho,
        name: 'Vietnamese Pho',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 10,
        waitTime: 0,
        cookTime: 50,
        totalTime: 60,
        ingredients: [
            { name: 'rice noodles', amount: '12 oz', additionalDetails: '', optional: false },
            { name: 'beef broth (alternative to Pho Seasoning)', amount: '10 c', additionalDetails: '', optional: false },
            { name: 'beef tenderloin', amount: '', additionalDetails: 'sliced', optional: false },
            { name: 'onion', amount: '1', additionalDetails: 'halved + sliced', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'salt (to taste + boiling)', amount: '', additionalDetails: '', optional: false },
            { name: 'cilantro (optional topping)', amount: '', additionalDetails: '', optional: true },
            { name: 'green onion (optional topping)', amount: '', additionalDetails: '', optional: true },
            { name: 'bean sprout (optional topping)', amount: '', additionalDetails: '', optional: true },
            { name: 'mint (optional topping)', amount: '', additionalDetails: '', optional: true },
            { name: 'lime juice (optional topping)', amount: '', additionalDetails: '', optional: true },
            { name: 'soy sauce (optional topping)', amount: '', additionalDetails: '', optional: true },
        ],
        supplies: [
            'stove',
            'medium and large pot',
            'cutting board and knife',
            'small and medium bowls',
            'strainer',
            'liquid measuring cup',
        ],
        instructions: {
            prep: [
                'Prep beef by cutting it into 1/4" thick slices then marinade it with salt and pepper.',
            ],
            cook: [
                'Add beef broth and the beef into a large pot and put over high heat and bring to a boil. Keep it covered.',
                'Cut the onion into slices and add to the pot of broth.',
                'While the beef and broth are cooking, prep the rest of the veggie toppings (if you decide to use them).',
                'Check occasionally, but the beef should turn a nice brown color (and bloodless), and the broth should be boiling. Note: do not check too often to prevent the steam from releasing.',
                'When the beef is getting close to being cooked, start boiling another medium pot of water with salt for the noodles. Note: the noodles will need to be completely submerged in the boiling water so make sure that the strainer will sink low enough in the water. You may need to add more water.',
                'When the beef is cooked, lower the heat to a warm heat.',
                'Once the water in the medium pot begins to boil, put the strainer in the pot with some of the noodle (best to cook the noodles in batches so it can cook thoroughly).',
                'Cook until the noodles are soft. This should be about 5 minutes. Be careful not to cook them too long or else they will fall apart.',
            ],
            serve: [
                'When everything is ready, place the noodle batches in each respective bowl to serve, and pour the hot broth over the noodles.',
                'Serve with any additional toppings and enjoy this simple delicious Vietnamese cuisine. Also this dish is pronounced \'fuh\'.'
            ]
        }
    },
    {
        id: 21,
        img: scrambledEggs,
        name: 'Scrambled Eggs',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 1,
        prepTime: 5,
        waitTime: 0,
        cookTime: 15,
        totalTime: 20,
        ingredients: [
            { name: 'eggs', amount: '3', additionalDetails: '', optional: false },
            { name: 'milk', amount: '1/4 c', additionalDetails: '', optional: false },
            { name: 'sour cream', amount: '1 spoonful', additionalDetails: '', optional: false },
            { name: 'green pepper', amount: '1/8', additionalDetails: 'diced', optional: false },
            { name: 'onion', amount: '1/8', additionalDetails: 'diced', optional: false },
            { name: 'roma tomato', amount: '1/8', additionalDetails: 'diced', optional: false },
            { name: 'cooked ham', amount: '1 slice', additionalDetails: 'diced', optional: false },
            { name: 'butter (for pan)', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'basil (to taste)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'stove',
            'frying pan',
            'cutting board and knife',
            'spatula',
            'measuring cups',
            'medium bowl',
        ],
        instructions: {
            prep: [
                'Mix together the eggs, milk, sour cream, salt, pepper, and basil. Allow the seasonings some time to enrich the flavor.',
                'While the seasonings are doing their thing, prep all the cutting of these ingredients (and any additional ingredients that you may want to add to your eggs). Be sure any meats are cooked or else you will need to add some additional time for those ingredients to cook.',
            ],
            cook: [
                'Once the ingredients are prepped, heat up a pan over medium-high heat. Add just a little butter when the pan is hot.',
                'Once butter has melted, add the vegetables and ham being sure they are spread around the pan to ensure proper browning.',
                'Cook for about 3 - 4 minutes being sure to stir occasionally to prevent burnt pieces.',
                'Now pour in the egg batter over the vegetables.',
                'While still keeping it over the heat, tilt and angle the pan so the runny egg on top can spread to more parts of the pan and you can even take the spatula and lift the edges of the cooking egg and let gravity do its job to have the runny egg batter fill underneath it. Allow to cook for just a few minutes.',
                'Start scrambling the eggs and continue to cook until the egg pieces are brownish-yellow (and you can cook them to your preferred egg state).',
            ],
            serve: [
                'Serve and enjoy this nice warm start to a beautiful day!'
            ]
        }
    },
    {
        id: 22,
        img: lasagna,
        name: 'Lasagna',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 12,
        prepTime: 15,
        waitTime: 90,
        cookTime: 180,
        totalTime: 195,
        ingredients: [
            { name: 'Italian sausage', amount: '1 lb', additionalDetails: '', optional: false },
            { name: 'ground beef', amount: '3/4 lb', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1/2 c', additionalDetails: 'minced', optional: false },
            { name: 'garlic', amount: '2 cloves', additionalDetails: 'crushed', optional: false },
            { name: 'crushed tomato', amount: '1-28 oz can', additionalDetails: '', optional: false },
            { name: 'tomato paste', amount: '', additionalDetails: '', optional: false },
            { name: 'tomato sauce', amount: '2-6.5 oz can', additionalDetails: '', optional: false },
            { name: 'water', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'sugar', amount: '2 Tbsp', additionalDetails: '', optional: false },
            { name: 'basil', amount: '1.5 tsp', additionalDetails: '', optional: false },
            { name: 'fennel seeds', amount: '1/2 tsp', additionalDetails: '', optional: false },
            { name: 'salt', amount: '1.5 tsp', additionalDetails: '', optional: false },
            { name: 'black pepper', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'parsley', amount: '4 Tbsp', additionalDetails: '', optional: false },
            { name: 'lasagna noodles', amount: '12 noodles', additionalDetails: '', optional: false },
            { name: 'ricotta cheese', amount: '16 oz', additionalDetails: '', optional: false },
            { name: 'egg', amount: '1', additionalDetails: '', optional: false },
            { name: 'mozzarella cheese', amount: '3/4 lb', additionalDetails: 'sliced', optional: false },
            { name: 'parmesan cheese', amount: '3/4 c', additionalDetails: 'grated', optional: false },
        ],
        supplies: [
            'stove',
            'oven',
            'large pan',
            'spatula',
            'pot',
            'baking pan',
            'measuring cups',
            'measuring spoons',
            'cutting board + knife',
            'colander',
            'mixing bowl',
        ],
        instructions: {
            prep: [
                'Prep Italian sausage by peeling the casing then cut into small pieces.',
            ],
            cook: [
                'Heat the large pan over medium-high heat and place sausage inside the pan once hot (no oil needed).',
                'After the sausage cooks a little, add the ground beef, onions, and garlic and cook until browned.',
                'Mix into the pan: the crushed tomatoes, tomato sauce, tomato paste and water.',
                'Add the seasonings: sugar, fennel seeds, basil, 1 tsp salt, pepper, 2 Tbsp parsley.',
                'Let the meat sauce simmer on low heat and cover for 1.5 hours.',
                'While the meat sauce is simmering, mix together the ricotta cheese, egg, and remaining parsley and salt in a mixing bowl and set to the side.',
                'About 20 minutes before the simmering stops (or depending on how many lasagna noodles you can fit inside the pot give enough time for the number of iterations about 10 minutes per batch and an initial few minutes for the water to boil), start a pot of water and lightly salt to cook the lasagna noodles until boil.',
                'Add the noodles to the pot and cook for about 8 - 10 minutes (make sure the noodles are submerged).',
                'Drain and rinse noodles with cold water. Repeat this process per batch if needed. Note: you may reuse the same boiling water but you may need to add some more water.',
                'Preheat oven to 375ºF.',
                'Once the meat sauce and noodles are ready, it\'s time to layer the lasagna in a baking pan.',
                'Using a 1/2 cup measuring cup, spread 1 1/2 cup of meat sauce in baking pan.',
                'Layer with 6 noodles length-wise over the meat sauce.',
                'Add half of the ricotta cheese mix over the noodles.',
                'Layer with a few slices of mozzarella.',
                'Add again 1 1/2 cup of meat sauce.',
                'Add 1/4 cup of Parmesan cheese.',
                'Layer with remaining noodles, mozzarella, and Parmesan cheese (in that order).',
                'Cover this with tin foil (trying not to let the cheese touch the cheese).',
                'Bake for 25 minutes.',
                'Remove the foil, and bake for another 25 minutes.',
                'Let cool for at least 15 minutes.',
            ],
            serve: [
                'Serve and enjoy this splash of Italian goodness.'
            ]
        }
    },
    {
        id: 23,
        img: eggCasserole,
        name: 'Egg Casserole',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 6,
        prepTime: 15,
        waitTime: 0,
        cookTime: 60,
        totalTime: 75,
        ingredients: [
            { name: 'white bread slices', amount: '8', additionalDetails: 'cubed', optional: false },
            { name: 'shredded cheddar cheese', amount: '2 c', additionalDetails: '', optional: false },
            { name: 'cooked ham', amount: '1 1/4 c', additionalDetails: 'diced', optional: false },
            { name: 'onion', amount: '', additionalDetails: 'diced', optional: false },
            { name: 'bell pepper', amount: '1/4 c', additionalDetails: 'diced', optional: false },
            { name: 'eggs', amount: '6', additionalDetails: '', optional: false },
            { name: 'milk', amount: '3 c', additionalDetails: '', optional: false },
            { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'pepper', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'ketchup (optional serving)', amount: '', additionalDetails: '', optional: false },
            { name: 'salsa (optional serving)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'oven',
            'mixing bowl',
            'baking pan',
            'cutting board + knife',
            'fork',
            'measuring cups',
            'measuring spoons',
            'refrigerator',
            'aluminum foil',
        ],
        instructions: {
            prep: [
                'Cut the bread, ham, onion, and bell peppers.',
                'Mix together eggs, milk, salt, and pepper in the mixing bowl.',
                'Layer the base of the baking pan with the cubes of bread.',
                'Pour the egg batter over the bread, add the veggies, and cheese.',
                'Cover with tin foil and refrigerate for at least 8 hours (or overnight).',
            ],
            cook: [
                'Once ready to cook, preheat oven to 350ºF.',
                'Uncover casserole and bake for 40 minutes - 1 hour (or until it sets). This mostly depends on your oven.',
            ],
            serve: [
                'Once the casserole is cooked, let cool for a few minutes.',
                'Serve and enjoy this simple, hot breakfast feast.'
            ]
        }
    },
    {
        id: 24,
        img: kebabs,
        name: 'Kebabs',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 6,
        prepTime: 10,
        waitTime: 0,
        cookTime: 30,
        totalTime: 40,
        ingredients: [
            { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'teriyaki sauce', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'vegetable oil', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'garlic powder', amount: '1', additionalDetails: '', optional: false },
            { name: 'chicken', amount: '2 lbs', additionalDetails: '', optional: false },
            { name: 'bell pepper', amount: '2', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1', additionalDetails: '', optional: false },
            { name: 'salt (to taste)', amount: '', additionalDetails: '', optional: false },
            { name: 'pepper (to taste)', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'cutting board + knife',
            'ziploc bag',
            'bamboo skewer',
            'oven',
            'baking sheet',
            'aluminum foil',
        ],
        instructions: {
            prep: [
                'Make the marinade in a ziploc bag: adding soy sauce, sprite, oil, and garlic powder.',
                'Cut the chicken into 1-inch pieces and marinate for 1 to 3 hours.',
                'Cut the veggies into large pieces.',
            ],
            cook: [
                'Preheat oven to 450ºF (whenever you are ready to actually cook).',
                'Place aluminum foil on the baking sheet.',
                'Thread the skewers with chicken and veggies leaving enough space between to allow the pieces to get cooked thoroughly.',
                'Place the finished skewers on the baking sheet with space in between each other.',
                'Once the oven is 450ºF, cook the kebabs for 15 to 25 minutes (cook time will depend on the size of meat).'
            ],
            serve: []
        }
    },
    {
        id: 25,
        img: frenchToast,
        name: 'French Toast',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 2,
        prepTime: 5,
        waitTime: 0,
        cookTime: 10,
        totalTime: 15,
        ingredients: [
            { name: 'egg', amount: '2', additionalDetails: '', optional: false },
            { name: 'vanilla', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'cinnamon', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'milk', amount: '3/4 c', additionalDetails: '', optional: false },
            { name: 'bread', amount: '8', additionalDetails: '', optional: false },
            { name: 'butter', amount: '8', additionalDetails: '', optional: false },
        ],
        supplies: [
            'medium bowl',
            'frying pan',
            'rubber spatula',
            'measuring spoon',
            'measuring cup',
        ],
        instructions: {
            prep: [
                'Mix eggs, vanilla, cinnamon, and milk together.',
                'Dredge bread in on both sides in batter one at a time right before frying.',
            ],
            cook: [
                'Heat a frying pan over medium heat and add some butter to pan.',
                'Brown each side of bread (about 30 seconds on each side).',
            ],
            serve: [
                'Serve and add fruits, syrup, and all your favorite toppings.'
            ]
        }
    },
    {
        id: 26,
        img: chickenPotPie,
        name: 'Chicken Pot Pie',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 4,
        prepTime: 10,
        waitTime: 0,
        cookTime: 60,
        totalTime: 70,
        ingredients: [
            { name: 'cooked chicken', amount: '2 1/2 c', additionalDetails: '', optional: false },
            { name: 'butter', amount: '1/3 c', additionalDetails: '', optional: false },
            { name: 'flour', amount: '1/3 c', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1/3 c', additionalDetails: '', optional: false },
            { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false },
            { name: 'pepper', amount: '1/4 tsp', additionalDetails: '', optional: false },
            { name: 'chicken broth', amount: '1 3/4 c', additionalDetails: '', optional: false },
            { name: 'milk', amount: '2/3 c', additionalDetails: '', optional: false },
            { name: 'frozen peas', amount: '5 oz', additionalDetails: '', optional: false },
            { name: 'frozen carrots', amount: '5 oz', additionalDetails: '', optional: false },
            { name: 'refrigerated pie crust', amount: '15 oz', additionalDetails: '', optional: false },
        ],
        supplies: [
            'aluminum foil',
            'frying pan',
            'rubber spatula',
            'measuring spoons',
            'measuring cups',
            'pie pan',
        ],
        instructions: {
            prep: [],
            cook: [
                'Heat a pan over medium heat and add butter.',
                'Add flour, onion, salt, and pepper to pan and cook until bubbling.',
                'Mix milk and broth into the mixture and stir constantly until boils for 1 minute.',
                'Mix in chicken, peas, and carrots until hot.',
                'Preheat the oven to 425ºF.',
                'Roll the pie crust inside pie pan and add chicken mixture inside.',
                'Roll the remaining dough on top of the mixture and turn edges over pie pan.',
                'Bake the pie for 35 minutes or until golden brown.'
            ],
            serve: []
        }
    },
    {
        id: 27,
        img: beefBulgogi,
        name: 'Korean Beef Bulgogi',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 6,
        prepTime: 10,
        waitTime: 480,
        cookTime: 25,
        totalTime: 55,
        ingredients: [
            { name: 'beef', amount: '3 lbs', additionalDetails: 'cubed', optional: false },
            { name: 'pear', amount: '1', additionalDetails: 'finely diced', optional: false },
            { name: 'sesame oil', amount: '4 Tbsp', additionalDetails: '', optional: false },
            { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'brown sugar', amount: '4 Tbsp', additionalDetails: '', optional: false },
            { name: 'garlic', amount: '6 cloves', additionalDetails: 'minced', optional: false },
            { name: 'ginger', amount: '2 Tbsp', additionalDetails: 'peeled and diced', optional: false },
            { name: 'gochujang', amount: '2 Tbsp', additionalDetails: '', optional: false },
            { name: 'vegetable oil', amount: '2 Tbsp', additionalDetails: '', optional: false },
            { name: 'green onion', amount: '4', additionalDetails: 'sliced', optional: false },
            { name: 'sesame seeds', amount: '2 tsp', additionalDetails: '', optional: false },
            { name: 'rice', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'ziploc',
            'peeler',
            'cutting board + knife',
            'measuring spoons',
            'stove',
            'frying pan',
        ],
        instructions: {
            prep: [
                'Marinade the beef overnight with the pear, sesame oil, soy sauce, brown sugar, garlic, ginger, and gochujang sauce inside ziploc bag.',
            ],
            cook: [
                'Heat frying pan over medium heat and add 1 Tbsp vegetable and cook beef in batches.',
                'Flip beef over and cook. Repeat for additional batch.',
            ],
            serve: [
                'Serve over rice and top with green onion and sesame seeds.'
            ]
        }
    },
    {
        id: 28,
        img: smores,
        name: 'S\'mores',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 2,
        prepTime: 1,
        waitTime: 0,
        cookTime: 5,
        totalTime: 6,
        ingredients: [
            { name: 'graham cracker', amount: '2', additionalDetails: '', optional: false },
            { name: 'marshmallow', amount: '2', additionalDetails: '', optional: false },
            { name: 'Hershey chocolate pieces', amount: '6', additionalDetails: '', optional: false },
        ],
        supplies: [
            'aluminum foil',
            'baking sheet',
            'oven',
        ],
        instructions: {
            prep: [
                'Lay aluminum foil on baking sheet and turn on oven to broil.',
                'Place graham cracker halves on baking sheet and place marshmallows on each half.',
            ],
            cook: [
                'Bake inside the oven for about 3 minutes (or browned as desired).',
                'Take tray out and add graham crackers with 3 pieces of chocolate.',
                'Flip marshallow and bake for an additional 2 minutes.',
            ],
            serve: [
                'Enjoy the sweet tastes of a campfire indoors.'
            ]
        }
    },
    {
        id: 29,
        img: beefStroganoff,
        name: 'Beef Stroganoff',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 7,
        prepTime: 12,
        waitTime: 0,
        cookTime: 45,
        totalTime: 57,
        ingredients: [
            { name: 'beef', amount: '3 lbs', additionalDetails: 'sliced', optional: false },
            { name: 'medium onion', amount: '4', additionalDetails: 'sliced', optional: false },
            { name: 'mushroom', amount: '1 lb', additionalDetails: 'sliced', optional: false },
            { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', optional: false },
            { name: 'butter', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'beef broth', amount: '3 c', additionalDetails: '', optional: false },
            { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false },
            { name: 'worchestershire sauce', amount: '2 tsp', additionalDetails: '', optional: false },
            { name: 'flour', amount: '1/2 c', additionalDetails: '', optional: false },
            { name: 'sour cream', amount: '3 c', additionalDetails: '', optional: false },
            { name: 'noodles', amount: '6 c', additionalDetails: 'cooked', optional: false },
        ],
        supplies: [
            'cutting board + knife',
            'stove',
            'frying pan',
            'spatula',
        ],
        instructions: {
            prep: [],
            cook: [
                'Heat pan over medium-high heat and add butter.',
                'Cook mushroom, garlic, and onion until tender and set aside.',
                'Brown beef.',
                'Add 2 cup of broth, salt and worchestershire sauce until boiling.',
                'Lower heat. Cover and simmer for 15 minutes.',
                'Add remaining broth, flour and vegetables. Heat until boiling. Stir occasionally.',
                'Add sour cream. Heat until hot and solid color.',
            ],
            serve: [
                'Serve over noodles.',
            ]
        }
    },
    {
        id: 30,
        img: hamburger,
        name: 'Hamburger',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 8,
        prepTime: 5,
        waitTime: 0,
        cookTime: 50,
        totalTime: 55,
        ingredients: [
            { name: 'ground turkey', amount: '3 lbs', additionalDetails: '', optional: false },
            { name: 'egg', amount: '1', additionalDetails: '', optional: false },
            { name: 'bread crumb', amount: '', additionalDetails: '', optional: false },
            { name: 'onion', amount: '1/4', additionalDetails: 'diced', optional: false },
            { name: 'red onion', amount: '1', additionalDetails: '', optional: false },
            { name: 'pickle', amount: '', additionalDetails: '', optional: false },
            { name: 'tomato', amount: '', additionalDetails: '', optional: false },
            { name: 'spinach', amount: '', additionalDetails: '', optional: false },
            { name: 'cheese slices', amount: '8', additionalDetails: '', optional: false },
            { name: 'mushroom', amount: '', additionalDetails: '', optional: false },
            { name: 'hamburger bun', amount: '8', additionalDetails: '', optional: false },
        ],
        supplies: [
            'aluminum foil',
            'large mixing bowl',
        ],
        instructions: {
            prep: [
                'Preheat oven to 425ºF.',
                'Mix together turkey, egg, bread crumb, and onion inside mixing bowl.',
                'Ball up meat mixture and flatten into patties.',
                'Place aluminum foil on baking sheet.',
            ],
            cook: [
                'Place patties on baking sheet and bake for 30 minutes.',
                'Broil for 5 minutes.',
            ],
            serve: [
                'Serve on hamburger bun with preferred toppings and condiments (and fries or preferred side optional).',
            ]
        }
    },
    // {
    //     id: 31,
    //     img: 'hospitalityChicken',
    //     name: 'Hospitality Chicken',
    //     author: 'Kevin Ung',
    //     liked: false,
    //     crockpot: false,
    //         servings: '',
    //         prepTime: '',
    //         cookTime: ''
    //     },
    //     ingredients: [
    //         // { name: '', amount: '', additionalDetails: '', optional: false },
    //     ],
    //     supplies: [
    //         // { name: 'aluminum foil',
    //     ],
    //     instructions: {
    //          prep: [],
    //          cook: [], 
    //          serve: []
    //     }
    // },
    // {
    //     id: 32,
    //     img: 'calzone',
    //     name: 'Calzone',
    //     author: 'Kevin Ung',
    //     liked: false,
    //     crockpot: false,
    //         servings: '',
    //         prepTime: '',
    //         cookTime: ''
    //     },
    //     ingredients: [
    //         // { name: '', amount: '', additionalDetails: '', optional: false },
    //     ],
    //     supplies: [
    //         // { name: 'aluminum foil',
    //     ],
    //     instructions: {
    //          prep: [],
    //          cook: [], 
    //          serve: []
    //     }
    // },
    {
        id: 33,
        img: wraps,
        name: 'Wraps',
        author: 'Kevin Ung',
        liked: false,
        crockpot: false,
        servings: 1,
        prepTime: 1,
        waitTime: 0,
        cookTime: 2,
        totalTime: 3,
        ingredients: [
            { name: 'tortilla', amount: '1', additionalDetails: '', optional: false },
            { name: 'lunch meat slices', amount: '4', additionalDetails: 'preferred', optional: false },
            { name: 'spinach', amount: '', additionalDetails: '', optional: false },
            { name: 'cheese slices', amount: '3', additionalDetails: '', optional: false },
            { name: 'tomato', amount: '1/2', additionalDetails: 'sliced', optional: false },
            { name: 'honey mustard', amount: '', additionalDetails: '', optional: false },
        ],
        supplies: [
            'plate',
        ],
        instructions: {
            prep: [
                'Place tortilla on a plate and lay on toppings in the center of tortilla as desired.',
            ],
            cook: [
                'Roll the edge towards the center of the tortilla and continue to completely roll wrap.'
            ],
            serve: []
        }
    },
];

module.exports = recipes;