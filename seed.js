const mongoose = require('mongoose')
const Product = require('./models/Products')

const Product = [
    {
        name: "Premium Raisins",
        image: "https://unsplash.com/photos/a-pile-of-raisins-sitting-on-top-of-a-table-sZSoW9Fz104",
        price: 2000,
        quantity : "250g",
        discription: "Indulge in the rich taste and natural sweetness of our premium-quality raisins. Carefully sourced from the finest grapes, these soft, chewy, and flavorful raisins are packed with essential nutrients. Naturally dried to preserve their rich taste, they are free from artificial additives and preservatives."
    },
    {
        name: "Premium Mixed Nuts",
        image: "https://unsplash.com/photos/a-close-up-of-a-mixture-of-nuts-ZFCFHrSb170",
        price: 3000,
        quantity : "250g",
        description: "Enjoy the perfect combination of crunch, flavor, and nutrition with our premium-quality mixed nuts. Carefully selected and expertly roasted (if applicable), this wholesome mix includes a variety of nuts, offering a delicious and healthy snack for all occasions. Packed with essential nutrients, these nuts are perfect for boosting energy, enhancing meals, and satisfying cravings in a healthy way."
    },
    {
        name:"Premium Walnuts",
        image: "https://unsplash.com/photos/a-pile-of-walnuts-is-shown-in-this-image-T0lO4xUwUj8",
        price:2000,
        quantity : "250g",
        description:"Enjoy the rich, earthy flavor and crunchy texture of our premium-quality walnuts. Sourced from the finest farms, these walnuts are packed with essential nutrients, including omega-3 fatty acids, protein, fiber, and antioxidants. Whether you snack on them directly or add them to your favorite dishes, our walnuts provide a healthy and delicious way to fuel your body.",
    },
    {
        name:"Premium Whole Walnuts",
        image:"https://unsplash.com/photos/a-pile-of-walnuts-sitting-next-to-each-other-VYtrytRqVKM",
        price:4000,
        quantity : "250g",
        description:"Experience the rich, nutty flavor of our premium whole walnuts, sourced from the finest farms to ensure top quality and freshness. These walnuts come in their natural shells, preserving their crisp texture and essential nutrients. Packed with omega-3 fatty acids, protein, fiber, and antioxidants, they are a perfect healthy snack or an excellent ingredient for various recipes."
    },
    {
        name : "Sun-Kissed Apricot Jewels",
        image : "https://unsplash.com/photos/brown-almond-nuts-on-brown-wooden-surface-0iPn8Xb4-_s",
        price : 5000,
        quantity : "300g",
        description : "Savor the golden luxury of our Sun-Kissed Apricot Jewels—naturally dried to perfection for a tender, sweet-tart bite. Grown in sun-drenched orchards and carefully handpicked, these apricots are rich in fiber, vitamins, and antioxidants. A deliciously wholesome snack, elegant charcuterie addition, or gourmet baking essential—pure indulgence, without compromise."
    },
     {
        name : "AmberGlow Dried Orange Crescents",
        image : "https://unsplash.com/photos/a-bunch-of-oranges-that-are-cut-in-half-6hVvQ03mtLQ",
        price : 300,
        quantity : "200g",
        description : "Radiant citrus reimagined. Our AmberGlow Dried Orange Crescents are slow-dried to intensify their natural sweetness, creating a vibrant balance of tangy and floral notes. Each sun-hued crescent is rich in vitamin C and adds gourmet charm to teas, cocktails, desserts, or artisanal grazing boards. A sensory delight—both visually stunning and deliciously versatile."
    },
    {
        name : "Blush Gold Apricot Halves",
        image : "https://unsplash.com/photos/a-wooden-spoon-filled-with-lots-of-brown-noodles-p2sfRuAhjJ4",
        price : 600,
        quantity : "150g",
        description : "Experience the artisan-crafted luxury of our Blush Gold Apricot Halves - nature's candy at its finest. Each velvety-soft half is sun-dried at peak ripeness to preserve its honeyed sweetness and vibrant sunset hue. These antioxidant-rich jewels elevate everything from cheese boards to tagines, offering a perfect balance of gourmet indulgence and wholesome nutrition."
    },
    {
        name : "Crimson Fire Dried Chilies",
        image : "https://unsplash.com/photos/a-pile-of-dried-red-peppers-on-a-black-surface-Y8yw7izmBCc",
        price : 450,
        quantity : "100g",
        description : "Ignite your culinary creations with our Crimson Fire Dried Chilies—hand-selected for their intense heat and smoky-sweet depth. Sun-dried to perfection, these vibrant red chilies deliver a bold, complex flavor that elevates salsas, curries, rubs, and artisanal spice blends. A fiery pantry essential for chefs and home cooks alike."
    },
    {
        name : "Black Pearl Figs - Nature's Velvet Delight",
        image : "https://unsplash.com/photos/brown-stones-ohILd_5ntd4",
        price : 1000,
        quantity : "400g",
        description : "Sun-dried Black Pearl Figs – velvety, jammy, and naturally sweet. Perfect for snacking, cheese boards, or gourmet recipes. No sugar added, just pure indulgence."
    },
    {
        name : "Royal Harvest Nut & Fruit Medley",
        image : "https://plus.unsplash.com/premium_photo-1668677227454-213252229b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : 600,
        quantity : "270g",
        description : "Experience gourmet snacking with our Royal Harvest blend - a luxurious mix of premium nuts and sun-dried fruits. This artisanal combination offers the perfect balance of crunchy almonds, buttery cashews, sweet raisins and chewy apricots, creating a symphony of textures and flavors in every handful. Carefully curated for discerning palates, this nutrient-rich medley is ideal for healthy snacking, elegant entertaining, or as a gourmet baking ingredient."
    },
    {
        name : "Golden Harvest Peanuts",
        image : "https://unsplash.com/photos/a-close-up-of-a-pile-of-peanuts-ZJH2FCq6tGc",
        price : 200,
        quantity : "250g",
        description : "Savor the rich, earthy goodness of our Golden Harvest Peanuts - carefully selected for their perfect crunch and robust flavor. These premium kernels are gently roasted to unlock their natural nutty sweetness, making them an ideal protein-packed snack, recipe enhancer, or gourmet gift. Enjoy them straight from the pouch, sprinkled over salads, or as the star ingredient in your homemade treats."
    },
    {
        name : "Persian Emerald Pistachios",
        image : "https://unsplash.com/photos/a-large-pile-of-seeds-sitting-on-top-of-a-table-IY4hKtI7N74",
        price : 500,
        quantity : "250g",
        description : "Indulge in the buttery richness of our Persian Emerald Pistachios – hand-sorted, naturally split premium kernels with vibrant green flesh and a signature sweet-nutty flavor. Grown in sun-drenched orchards and dry-roasted to perfection, these jewel-toned nuts offer satisfying crunch for gourmet snacking, pastry garnishes, or Middle Eastern cuisine. A luxurious source of plant protein, fiber and antioxidants."
    },
    {
        name : "Golden Harvest Chickpeas",
        image : "https://unsplash.com/photos/a-pile-of-chickpeas-sitting-on-top-of-a-table-oRbh2IVHTyU",
        price : 800,
        quantity : "250g",
        description : "Discover the wholesome goodness of our Golden Harvest Chickpeas – sun-dried to perfection for optimal texture and nutty flavor. These versatile legumes are a powerhouse of plant-based protein and fiber, ideal for crafting creamy hummus, crispy roasted snacks, or hearty stews. Carefully sorted for uniform size and quality, they cook up tender every time, making them a kitchen essential for health-conscious food lovers."
    },
    {
        name : "Midnight Roast Coffee Beans",
        image : "https://unsplash.com/photos/a-pile-of-coffee-beans-on-a-white-surface-a2_aakYZkow",
        price : 700,
        quantity : "250g",
        description : "Awaken your senses with our Midnight Roast Coffee Beans – small-batch roasted Arabica beans with deep chocolate notes and a velvety finish. Ethically sourced from high-altitude estates and roasted to perfection, these aromatic gems deliver a balanced cup with hints of caramel and a subtle citrus brightness. Perfect for pour-over, espresso, or French press brewing."
    },
    {
        name : "Golden Crown Peanuts",
        image : "https://unsplash.com/photos/a-pile-of-peanuts-sitting-next-to-each-other-oaHbcA4ETzQ",
        price : 300,
        quantity : "500g",
        description : "Indulge in the rich, buttery goodness of our Golden Crown Peanuts – hand-selected for their plump kernels and perfect crunch. Dry-roasted to enhance their natural nutty sweetness, these premium Virginia peanuts are a protein-packed delight for snacking, baking, or crafting artisanal peanut butter. Each bite offers wholesome energy and irresistible flavor."
    },
    {
        name : "Royal Nut Medley",
        image : "https://unsplash.com/photos/a-large-pile-of-nuts-sitting-next-to-each-other-gXLFAWv4TCc",
        price : 370,
        quantity : "200g",
        description : "Experience gourmet indulgence with our Royal Nut Medley – a majestic blend of hand-selected almonds, cashews, walnuts, and pecans, lightly roasted to golden perfection. This artisanal combination delivers a symphony of textures and flavors, from buttery smoothness to satisfying crunch, all packed with plant-based protein and heart-healthy fats. Perfect for elegant entertaining, mindful snacking, or elevating desserts."
    },
    {
        name : "Pearl White Couscous",
        image : "https://unsplash.com/photos/a-close-up-of-a-bunch-of-white-balls-9A7S6d9-Jp4",
        price : 200,
        quantity : "300g",
        description : "Discover our Pearl White Couscous - delicate, handcrafted durum wheat pearls that transform ordinary meals into gourmet experiences. These pillowy-soft orbs with their signature al dente bite are perfect for creating vibrant Mediterranean salads, creamy risotto-style dishes, or as an elegant base for seafood and stews. Quick-cooking yet impressively versatile, each pearl absorbs flavors beautifully while maintaining its perfect spherical shape."
    },
    {
        name : "Midnight Peppercorns",
        image : "https://unsplash.com/photos/black-round-fruits-on-white-background-sYwFNHnJza4",
        price : 400,
        quantity : "150g",
        description : "Harness the bold, aromatic power of our Midnight Peppercorns - hand-harvested at peak ripeness and sun-dried to preserve their intense, complex flavor. These jet-black jewels deliver vibrant heat with subtle citrusy notes, freshly grinding into culinary gold for steaks, sauces, and global cuisines. A must-have pantry essential that elevates every dish from ordinary to extraordinary."
    },
    {
        name : "Ceylon Cinnamon Quills - The True Cinnamon",
        image : "https://unsplash.com/photos/brown-wooden-round-bowl-with-white-background-xWRwCmhcWDM",
        price : 350,
        quantity : "200g",
        description : "Experience the delicate, sweet complexity of our Ceylon Cinnamon Quills - hand-rolled from the inner bark of Sri Lanka's finest cinnamon trees. Unlike common cassia, these golden-brown quills offer a mellow warmth with citrusy notes, perfect for crafting artisan teas, infusing spirits, or elevating both sweet and savory dishes. The world's most prized cinnamon, delivered in its purest form."
    },
    {
        name : "Emerald Sun Kiwis - Nature's Sweet-Tart Jewels",
        image : "https://unsplash.com/photos/green-and-brown-fruits-oPsaQVRaXKI",
        price : 2000,
        quantity : "500g",
        description : "Discover the perfect balance of sweet and tangy with our Emerald Sun Kiwis - handpicked at peak ripeness for vibrant green flesh bursting with tropical flavor. Each fuzzy-brown package reveals a juicy, seed-speckled interior packed with more vitamin C than oranges. Enjoy as a refreshing snack, elegant dessert garnish, or blended into smoothies for a nutrient-packed boost."
    },
    {
        name : "Golden Sunflower Kernels",
        image : "https://unsplash.com/photos/a-close-up-of-a-pile-of-sunflower-seeds-Xku7nuvaM4A",
        price : 200,
        quantity : "100g",
        description : "Unlock the pure, nutty goodness of our Golden Sunflower Kernels – carefully hulled and lightly roasted to preserve their delicate flavor and satisfying crunch. Packed with plant-based protein, vitamin E, and heart-healthy fats, these versatile seeds elevate salads, baked goods, and snacks. Perfect for mindful munching, gourmet cooking, or adding a nutritious boost to your favorite dishes."
    },
    {
        name : "Onyx & Gold Sesame Duo",
        image : "https://unsplash.com/photos/a-close-up-of-a-bunch-of-brown-and-black-speckles-DPB7dwhnV5I",
        price : 300,
        quantity : "250g",
        description : "Harness the power of our Onyx & Gold Sesame Duo - a harmonious blend of nutty black and buttery tan sesame seeds, revered in Asian medicine for millennia. This artisan combination offers double the texture and nutrition, with the black seeds' robust earthiness complementing the golden seeds' delicate sweetness. Perfect for garnishing sushi, baking artisanal breads, or crafting tahini with layered complexity."
    }
    // {
    //     name : ,
    //     image : ,
    //     price : ,
    //     quantity : ,
    //     description : 
    // }

    
]