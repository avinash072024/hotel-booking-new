export class Constants {
    public static APP_NAME_STR1: string = 'Lumina';
    public static APP_NAME_STR2: string = 'Grand';
    public static APP_NAME: string = `${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`;

    public static MOCK_DESTINATIONS_ARR: any = [
        { id: 1, name: 'Maldives', category: 'Beach', rooms: 12, size: 'large', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
        { id: 2, name: 'Swiss Alps', category: 'Mountain', rooms: 8, size: 'small', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80' },
        { id: 3, name: 'Tokyo', category: 'Urban', rooms: 25, size: 'medium', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' },
        { id: 4, name: 'Santorini', category: 'Beach', rooms: 15, size: 'medium', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80' },
        { id: 5, name: 'Bali', category: 'Tropical', rooms: 20, size: 'small', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' },
        { id: 6, name: 'Dubai', category: 'Urban', rooms: 40, size: 'large', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
        { id: 7, name: 'Amalfi Coast', category: 'Beach', rooms: 10, size: 'medium', image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?auto=format&fit=crop&w=800&q=80' },
        { id: 8, name: 'Paris', category: 'Urban', rooms: 30, size: 'small', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' }
    ]

    public static MOCK_OFFERS_ARR: any = [
        {
            id: 1,
            category: 'Romantic',
            title: 'Honeymoon Special',
            subtitle: 'Romantic Getaway',
            discount: '30% OFF',
            code: 'LOVE2026',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
            validUntil: 'Dec 2026'
        },
        {
            id: 2,
            category: 'Corporate',
            title: 'Business Elite',
            subtitle: 'Executive Comfort',
            discount: 'Flat $100',
            code: 'BIZEXEC',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            validUntil: 'Ongoing'
        },
        {
            id: 3,
            category: 'Seasonal',
            title: 'Seasonal Escape',
            subtitle: 'Winter Wonderland',
            discount: 'Buy 2 Get 1',
            code: 'WINTER26',
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
            validUntil: 'Mar 2026'
        },

        {
            id: 4,
            category: 'Romantic',
            title: 'Honeymoon Special',
            discount: '30% OFF',
            code: 'LOVE2026',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
            description: 'Includes a private candle-lit dinner, spa credits, and a sunset cruise for two.',
            validUntil: 'Dec 31, 2026'
        },
        {
            id: 5,
            category: 'Corporate',
            title: 'Business Elite Rate',
            discount: 'Flat $100 Off',
            code: 'BIZEXEC',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            description: 'Upgrade to executive suites with high-speed Wi-Fi and complimentary lounge access.',
            validUntil: 'Ongoing'
        },
        {
            id: 6,
            category: 'Seasonal',
            title: 'Winter Escape',
            discount: 'Stay 3, Pay 2',
            code: 'WINTER26',
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
            description: 'Experience the mountain magic. Book three nights and the third is on us.',
            validUntil: 'Mar 15, 2026'
        },
        {
            id: 7,
            category: 'Wellness',
            title: 'Spa & Zen Retreat',
            discount: '20% OFF',
            code: 'RELAX26',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            description: 'Rejuvenate your soul with inclusive massage therapy and morning yoga sessions.',
            validUntil: 'Aug 30, 2026'
        }
    ];

    public static MOCK_MENU_ARR: any = [
        // // --- INDIAN: MAHARASHTRIAN ---
        // {
        //     id: 1, name: 'Zunka Bhakar', price: 15, time: 'Lunch', cuisine: 'Indian',
        //     subCuisine: 'Maharashtrian', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1662510255857-4668f49557a5?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Traditional chickpea flour delicacy served with handmade bajra roti and spicy garlic chutney.'
        // },
        // {
        //     id: 2, name: 'Misal Pav', price: 12, time: 'Breakfast', cuisine: 'Indian',
        //     subCuisine: 'Maharashtrian', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1645177623574-2d1c48737233?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Spicy sprouted bean curry topped with crunchy farsan, served with buttery pav.'
        // },
        // {
        //     id: 3, name: 'Tambda Pandhra', price: 25, time: 'Dinner', cuisine: 'Indian',
        //     subCuisine: 'Maharashtrian', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Kolhapuri style red and white mutton broth, a spice lover’s delight.'
        // },

        // // --- INDIAN: PUNJABI ---
        // {
        //     id: 4, name: 'Butter Chicken', price: 22, time: 'Dinner', cuisine: 'Indian',
        //     subCuisine: 'Punjabi', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Succulent tandoori chicken simmered in a rich, velvety tomato and cream gravy.'
        // },
        // {
        //     id: 5, name: 'Amritsari Kulcha', price: 14, time: 'Breakfast', cuisine: 'Indian',
        //     subCuisine: 'Punjabi', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1606491956689-2ea8c5119c85?auto=format&fit=crop&w=800&q=80',
        //     desc: 'Crispy, clay-oven baked bread stuffed with spiced potatoes and served with tangy chole.'
        // },
        // {
        //     id: 6, name: 'Dal Makhani', price: 18, time: 'Lunch', cuisine: 'Indian',
        //     subCuisine: 'Punjabi', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Slow-cooked black lentils and kidney beans finished with white butter and cream.'
        // },

        // // --- INDIAN: SOUTH INDIAN ---
        // {
        //     id: 7, name: 'Masala Dosa', price: 10, time: 'Breakfast', cuisine: 'Indian',
        //     subCuisine: 'South Indian', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Thin rice and lentil crepe stuffed with tempered mashed potatoes and onions.'
        // },
        // {
        //     id: 8, name: 'Chicken Chettinad', price: 20, time: 'Dinner', cuisine: 'Indian',
        //     subCuisine: 'South Indian', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Spicy and aromatic chicken curry prepared with 18 authentic Chettinad spices.'
        // },
        // {
        //     id: 9, name: 'Appam & Stew', price: 16, time: 'Lunch', cuisine: 'Indian',
        //     subCuisine: 'South Indian', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Lacy rice pancakes served with a mild, creamy coconut milk vegetable stew.'
        // },

        // // --- CHINESE ---
        // {
        //     id: 10, name: 'Dim Sum Basket', price: 16, time: 'Breakfast', cuisine: 'Chinese',
        //     subCuisine: 'Cantonese', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Assorted steamed dumplings filled with water chestnuts, corn, and bok choy.'
        // },
        // {
        //     id: 11, name: 'Kung Pao Chicken', price: 19, time: 'Lunch', cuisine: 'Chinese',
        //     subCuisine: 'Szechuan', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Stir-fried chicken cubes with dried chilies, peanuts, and a savory-sweet sauce.'
        // },
        // {
        //     id: 12, name: 'Manchow Soup', price: 12, time: 'Dinner', cuisine: 'Chinese',
        //     subCuisine: 'Indo-Chinese', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
        //     desc: 'A spicy and tangy vegetable soup topped with crispy fried noodles.'
        // },

        // // --- ITALIAN ---
        // {
        //     id: 13, name: 'Egg Florentine', price: 17, time: 'Breakfast', cuisine: 'Italian',
        //     subCuisine: 'Tuscan', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Poached eggs served over sautéed spinach and toasted artisan ciabatta.'
        // },
        // {
        //     id: 14, name: 'Seafood Marinara', price: 28, time: 'Dinner', cuisine: 'Italian',
        //     subCuisine: 'Neapolitan', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Tagliatelle pasta tossed with fresh mussels, prawns, and calamari in red sauce.'
        // },
        // {
        //     id: 15, name: 'Pesto Gnocchi', price: 21, time: 'Lunch', cuisine: 'Italian',
        //     subCuisine: 'Genoese', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Soft potato pillows tossed in a vibrant basil pesto and topped with pine nuts.'
        // },

        // // --- AMERICAN ---
        // {
        //     id: 16, name: 'Buttermilk Pancakes', price: 14, time: 'Breakfast', cuisine: 'American',
        //     subCuisine: 'Classic', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Triple-stacked fluffy pancakes served with pure maple syrup and salted butter.'
        // },
        // {
        //     id: 17, name: 'BBQ Bacon Burger', price: 22, time: 'Lunch', cuisine: 'American',
        //     subCuisine: 'Texas Style', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Prime beef patty with hickory smoked bacon, sharp cheddar, and onion rings.'
        // },
        // {
        //     id: 18, name: 'Loaded Nachos', price: 15, time: 'Dinner', cuisine: 'American',
        //     subCuisine: 'Tex-Mex', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Crispy tortillas topped with molten cheese, jalapeños, and fresh guacamole.'
        // },

        // // --- BENGALI (Bonus to hit 20) ---
        // {
        //     id: 19, name: 'Luchi Alur Dom', price: 13, time: 'Breakfast', cuisine: 'Indian',
        //     subCuisine: 'Bengali', type: 'Veg',
        //     image: 'https://images.unsplash.com/photo-1626508035297-0cd27c397d67?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Fluffy fried refined flour bread served with a spiced potato curry.'
        // },
        // {
        //     id: 20, name: 'Machher Jhol', price: 24, time: 'Dinner', cuisine: 'Indian',
        //     subCuisine: 'Bengali', type: 'Non-Veg',
        //     image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80',
        //     desc: 'Traditional spicy fish curry cooked with mustard oil and tender potato wedges.'
        // }

        // INDIAN - MAHARASHTRIAN
        { id: 1, name: 'Zunka Bhakar', price: 15, time: 'Lunch', cuisine: 'Indian', subCuisine: 'Maharashtrian', type: 'Veg', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', desc: 'Handmade bajra roti with spiced chickpea flour.' },
        { id: 2, name: 'Misal Pav', price: 12, time: 'Breakfast', cuisine: 'Indian', subCuisine: 'Maharashtrian', type: 'Veg', image: 'https://images.pexels.com/photos/17223835/pexels-photo-17223835.jpeg?cs=srgb&dl=pexels-aditya-mara-425995080-17223835.jpg&fm=jpg', desc: 'Spicy moth bean curry with crunchy farsan.' },
        { id: 3, name: 'Puran Poli', price: 10, time: 'Dinner', cuisine: 'Indian', subCuisine: 'Maharashtrian', type: 'Veg', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', desc: 'Sweet lentil-stuffed flatbread with ghee.' },

        // INDIAN - PUNJABI
        { id: 4, name: 'Butter Chicken', price: 22, time: 'Dinner', cuisine: 'Indian', subCuisine: 'Punjabi', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', desc: 'Charred chicken in creamy tomato gravy.' },
        { id: 5, name: 'Amritsari Kulcha', price: 14, time: 'Breakfast', cuisine: 'Indian', subCuisine: 'Punjabi', type: 'Veg', image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=800&q=80', desc: 'Stuffed bread baked in a clay oven.' },
        { id: 6, name: 'Dal Makhani', price: 18, time: 'Lunch', cuisine: 'Indian', subCuisine: 'Punjabi', type: 'Veg', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', desc: 'Slow-cooked black lentils with cream.' },

        // INDIAN - SOUTH INDIAN
        { id: 7, name: 'Masala Dosa', price: 10, time: 'Breakfast', cuisine: 'Indian', subCuisine: 'South Indian', type: 'Veg', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', desc: 'Crispy rice crepe with potato filling.' },
        { id: 8, name: 'Chicken Biryani', price: 20, time: 'Lunch', cuisine: 'Indian', subCuisine: 'South Indian', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80', desc: 'Fragrant basmati rice with meat.' },
        { id: 9, name: 'Fish Fry', price: 19, time: 'Dinner', cuisine: 'Indian', subCuisine: 'South Indian', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80', desc: 'Spicy pan-fried seasonal fish.' },

        // CHINESE
        { id: 10, name: 'Dim Sums', price: 16, time: 'Breakfast', cuisine: 'Chinese', subCuisine: 'Cantonese', type: 'Veg', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80', desc: 'Steamed translucent vegetable dumplings.' },
        { id: 11, name: 'Hakka Noodles', price: 15, time: 'Lunch', cuisine: 'Chinese', subCuisine: 'Indo-Chinese', type: 'Veg', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80', desc: 'Stir-fried noodles with crisp veggies.' },
        { id: 12, name: 'Kung Pao Chicken', price: 19, time: 'Dinner', cuisine: 'Chinese', subCuisine: 'Szechuan', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80', desc: 'Spicy chicken stir-fry with peanuts.' },

        // ITALIAN
        { id: 13, name: 'Pancakes', price: 14, time: 'Breakfast', cuisine: 'American', subCuisine: 'Classic', type: 'Veg', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80', desc: 'Fluffy pancakes with maple syrup.' },
        { id: 14, name: 'Mushroom Risotto', price: 21, time: 'Lunch', cuisine: 'Italian', subCuisine: 'Milanese', type: 'Veg', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80', desc: 'Creamy arborio rice with porcini.' },
        { id: 15, name: 'Seafood Pasta', price: 28, time: 'Dinner', cuisine: 'Italian', subCuisine: 'Neapolitan', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80', desc: 'Linguine with fresh mussels and prawns.' },

        // AMERICAN
        { id: 16, name: 'Beef Burger', price: 18, time: 'Lunch', cuisine: 'American', subCuisine: 'Texas Style', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', desc: 'Grilled patty with cheddar and bacon.' },
        { id: 17, name: 'Pepperoni Pizza', price: 18, time: 'Dinner', cuisine: 'American', subCuisine: 'New York', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', desc: 'Thin crust with spicy pepperoni.' },
        { id: 18, name: 'Caesar Salad', price: 15, time: 'Breakfast', cuisine: 'American', subCuisine: 'Classic', type: 'Veg', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', desc: 'Romaine lettuce with parmesan and croutons.' },

        // INDIAN - BENGALI
        { id: 19, name: 'Luchi Alur Dom', price: 13, time: 'Breakfast', cuisine: 'Indian', subCuisine: 'Bengali', type: 'Veg', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80', desc: 'Bengali fried bread with potato curry.' },
        { id: 20, name: 'Fish Curry', price: 24, time: 'Dinner', cuisine: 'Indian', subCuisine: 'Bengali', type: 'Non-Veg', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80', desc: 'Traditional Bengali style spicy fish.' }
    ];
}