export const navigationConfig = {
    solutions: {
        label: 'Solutions',
        path: '/solutions',
        items: [
            { label: 'Overview', path: '/solutions', description: 'Complete transformation stack' },
            { type: 'divider' },
            { label: 'Vehicles & Operations', path: '/solutions/vehicles-operations', icon: '🚛', description: 'End-to-end Electric Truck-as-a-Service—from vehicle deployment to fleet operations' },
            { label: 'Infrastructure', path: '/solutions/infrastructure', icon: '⚡', description: 'Charging & swapping stations' },
            { label: 'Intelligence Platform', path: '/solutions/intelligence', icon: '🧠', description: 'Route optimization & energy management' }
        ]
    },

    network: {
        label: 'Network',
        path: '/network',
        items: [
            { label: 'Operational Corridors', path: '/network/corridors', icon: '🗺️', description: 'Interactive route map' },

        ]
    },
    company: {
        label: 'Company',
        path: '/company',
        items: [
            { label: 'About Us', path: '/company/about', description: 'Our mission & story' },
            { label: 'Leadership Team', path: '/company/team', description: 'Meet our team' },
            { label: 'Newsroom', path: '/company/newsroom', description: 'Press releases & media' }
        ]
    },
    resources: {
        label: 'Resources',
        path: '/resources',
        items: [
            { label: 'Blog', path: '/resources/blog', icon: '📝', description: 'Industry insights & updates' },

            { label: 'Implementation Guides', path: '/resources/guides', icon: '📚', description: 'Step-by-step guides' },

            { label: 'FAQ', path: '/resources/faq', icon: '❓', description: 'Frequently asked questions' },
            { label: 'Gallery', path: '/resources/gallery', icon: '🖼️', description: 'Photo gallery' }
        ]
    }
};

export const footerNavigation = {
    solutions: [
        { label: 'Overview', path: '/solutions' },
        { label: 'Vehicles & Operations', path: '/solutions/vehicles-operations' },
        { label: 'Infrastructure', path: '/solutions/infrastructure' },
        { label: 'Intelligence', path: '/solutions/intelligence' }
    ],
    company: [
        { label: 'About Us', path: '/company/about' },
        { label: 'Team', path: '/company/team' },
        { label: 'Newsroom', path: '/company/newsroom' }
    ],
    resources: [
        { label: 'Blog', path: '/resources/blog' },

        { label: 'Guides', path: '/resources/guides' },
        { label: 'FAQ', path: '/resources/faq' },
        { label: 'Gallery', path: '/resources/gallery' }
    ],
    legal: [
        { label: 'Privacy Policy', path: '/policies' },
        { label: 'Terms & Conditions', path: '/terms-and-conditions' },
        { label: 'Cookie Policy', path: '/policies#cookies' },
        { label: 'Site Map', path: '/site-map' }
    ]
};
