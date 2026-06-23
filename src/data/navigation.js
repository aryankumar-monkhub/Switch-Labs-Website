export const navigationConfig = {
    solutions: {
        label: 'Solutions',
        path: '/solutions',
        items: [
            { label: 'Overview', path: '/solutions', description: 'Complete transformation stack' },
            { type: 'divider' },
            { label: 'Vehicles & Operations', path: '/solutions/vehicles-operations', icon: '🚛', description: 'Full-stack EV-as-a-Service' },
            { label: 'Infrastructure', path: '/solutions/infrastructure', icon: '⚡', description: 'Charging & swapping stations' },
            { label: 'Intelligence Platform', path: '/solutions/intelligence', icon: '🧠', description: 'Route optimization & energy management' }
        ]
    },

    network: {
        label: 'Network',
        path: '/network',
        items: [
            { label: 'Operational Corridors', path: '/network/corridors', icon: '🗺️', description: 'Interactive route map' },
            { label: 'Charging Infrastructure', path: '/network/infrastructure', icon: '🔌', description: 'Station locations & specs' },

        ]
    },
    impact: {
        label: 'Impact',
        path: '/impact',
        items: [
            { label: 'ROI Calculator', path: '/impact/calculator', icon: '🧮', description: 'Calculate your savings' },
            { label: 'Environmental Impact', path: '/impact/environmental', icon: '🌱', description: 'Carbon reduction metrics' },
            { label: 'Economic Analysis', path: '/impact/economic', icon: '💵', description: 'TCO comparison & analysis' },

        ]
    },
    company: {
        label: 'Company',
        path: '/company',
        items: [
            { label: 'About Us', path: '/company/about', description: 'Our mission & story' },
            { label: 'Leadership Team', path: '/company/team', description: 'Meet our team' },
            { label: 'Investors', path: '/company/investors', description: 'Backed by industry visionaries' },
            { label: 'Partners', path: '/company/partners', description: 'Strategic OEM partners' },
            { label: 'Careers', path: '/company/careers', description: 'Join our team' },
            { label: 'Newsroom', path: '/company/newsroom', description: 'Press releases & media' }
        ]
    },
    resources: {
        label: 'Resources',
        path: '/resources',
        items: [
            { label: 'Blog', path: '/resources/blog', icon: '📝', description: 'Industry insights & updates' },

            { label: 'Implementation Guides', path: '/resources/guides', icon: '📚', description: 'Step-by-step guides' },

            { label: 'FAQ', path: '/resources/faq', icon: '❓', description: 'Frequently asked questions' }
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
        { label: 'Investors', path: '/company/investors' },
        { label: 'Partners', path: '/company/partners' },
        { label: 'Careers', path: '/company/careers' },
        { label: 'Newsroom', path: '/company/newsroom' }
    ],
    resources: [
        { label: 'Blog', path: '/resources/blog' },

        { label: 'Guides', path: '/resources/guides' },
        { label: 'FAQ', path: '/resources/faq' }
    ],
    legal: [
        { label: 'Privacy Policy', path: '/policies' },
        { label: 'Terms & Conditions', path: '/terms-and-conditions' },
        { label: 'Cookie Policy', path: '/policies#cookies' },
        { label: 'Site Map', path: '/site-map' }
    ]
};
