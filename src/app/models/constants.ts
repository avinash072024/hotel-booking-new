export class Constants {
    public static APP_NAME_STR1: string = 'Luxe';
    public static APP_NAME_STR2: string = 'Stay';
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
    ]
}