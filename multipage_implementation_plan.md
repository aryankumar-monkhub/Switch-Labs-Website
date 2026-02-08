# Multi-Page Website Implementation Plan
## Switch Labs Website Transformation

---

## 🎯 Executive Summary

Transform the current single-page application into a comprehensive multi-page website with:
- **Hierarchical navigation** with dropdown menus
- **Dedicated pages** for each major section
- **Case studies** and success stories
- **Legal/compliance pages** (Terms, Policies, Privacy)
- **Resource center** (Blog, Downloads, Documentation)
- **Enhanced SEO** through proper page structure

---

## 📊 Current State Analysis

### Existing Single-Page Sections
1. Hero Section
2. Impact Calculator (Simulate Your Transition)
3. Transformation Stack (Solutions)
4. Corridor Map (Our Corridors)
5. Credibility (Testimonials + Partners + Investors)
6. Footer with Lead Form

### Current Navigation
- Simple anchor links to sections
- No dropdown menus
- Limited page structure
- Footer links partially implemented (About Us, Policies, T&C, Site Map)

---

## 🏗️ Proposed Site Architecture

### **1. HOME PAGE** (`/`)
**Purpose:** Landing page with overview and primary CTAs

**Sections:**
- Hero Section (existing)
- Value Proposition Cards (new - 3 key benefits)
- Featured Case Study Carousel (new)
- Quick Impact Calculator (simplified version)
- Trust Indicators (clients, stats)
- Latest News/Updates (new - 3 recent items)
- CTA Section

---

### **2. SOLUTIONS** (`/solutions`)
**Purpose:** Detailed breakdown of transformation stack

**Dropdown Menu Items:**
- `/solutions/overview` - Full transformation stack overview
- `/solutions/vehicles-operations` - EV-as-a-Service details
- `/solutions/infrastructure` - Charging & swapping stations
- `/solutions/intelligence` - Route optimization & energy management
- `/solutions/financing` - Financial models & ROI calculator

**Page Structure:**
- Hero banner with solution overview
- Detailed pillar breakdowns (existing TransformationStack component enhanced)
- Technical specifications
- Integration process timeline
- FAQ section
- CTA: "Schedule a Technical Consultation"

---

### **3. CASE STUDIES** (`/case-studies`)
**Purpose:** Showcase real-world implementations and success stories

**Dropdown Menu Items:**
- `/case-studies` - All case studies (grid view)
- `/case-studies/jk-lakshmi` - JK Lakshmi Cement case study
- `/case-studies/dalmia` - Dalmia Cement case study
- `/case-studies/industry/cement` - Cement industry overview
- `/case-studies/industry/steel` - Steel industry overview

**Individual Case Study Page Structure:**
```
- Client logo & industry tag
- Challenge statement
- Solution implemented
- Results (metrics, graphs)
- Testimonial quote
- Timeline visualization
- Related case studies
- CTA: "See How We Can Help You"
```

**Case Study Data Structure:**
```javascript
{
  id: "jk-lakshmi-2024",
  client: "JK Lakshmi Cement",
  industry: "Cement Manufacturing",
  location: "Sirohi - Kalol Corridor",
  challenge: "High diesel costs and emission targets",
  solution: ["15 EV trucks", "Dedicated charging infrastructure", "Route optimization"],
  results: {
    carbonReduction: "40%",
    costSavings: "₹2.5Cr annually",
    fleetGrowth: "1 → 15 trucks",
    uptime: "99.2%"
  },
  testimonial: "We started with 1 pilot...",
  timeline: "6 months pilot → Full deployment",
  images: [...],
  relatedStudies: ["dalmia-cement", "upl-logistics"]
}
```

---

### **4. OUR NETWORK** (`/network`)
**Purpose:** Showcase operational corridors and expansion plans

**Dropdown Menu Items:**
- `/network/corridors` - Interactive map (existing CorridorMap enhanced)
- `/network/infrastructure` - Charging station locations
- `/network/expansion` - Upcoming routes & timeline

**Page Structure:**
- Interactive India map with zoom functionality (existing, enhanced)
- Corridor details cards
- Infrastructure stats dashboard
- Expansion roadmap (Q3 2026, Q4 2026, 2027)
- Regional coverage heatmap

---

### **5. IMPACT** (`/impact`)
**Purpose:** Environmental and economic impact showcase

**Dropdown Menu Items:**
- `/impact/calculator` - Full ROI calculator (existing ImpactCalculator)
- `/impact/environmental` - Carbon savings, sustainability metrics
- `/impact/economic` - Cost analysis, TCO comparison
- `/impact/reports` - Download impact reports

**Page Structure:**
- Interactive calculator (existing, enhanced)
- Real-time impact dashboard (aggregate metrics)
- Comparison charts (EV vs Diesel)
- Industry benchmarks
- Downloadable reports (PDF)
- CTA: "Calculate Your Savings"

---

### **6. COMPANY** (`/company`)
**Purpose:** About Switch Labs, team, mission, values

**Dropdown Menu Items:**
- `/company/about` - Mission, vision, story
- `/company/team` - Leadership team
- `/company/investors` - Investor information (existing Credibility section)
- `/company/partners` - OEM partners (existing)
- `/company/careers` - Job openings
- `/company/newsroom` - Press releases, media coverage

**About Page Structure:**
- Company story & timeline
- Mission statement
- Core values
- Team profiles (photos, bios, LinkedIn)
- Investor section (existing)
- Partner logos (existing)

**Careers Page:**
- Open positions list
- Company culture highlights
- Benefits & perks
- Application form

---

### **7. RESOURCES** (`/resources`)
**Purpose:** Educational content and downloads

**Dropdown Menu Items:**
- `/resources/blog` - Industry insights, updates
- `/resources/whitepapers` - Technical documents
- `/resources/guides` - Implementation guides
- `/resources/webinars` - Recorded sessions
- `/resources/faq` - Frequently asked questions

**Blog Post Structure:**
```javascript
{
  title: "The Economics of Heavy-Duty EV Transition",
  slug: "economics-heavy-duty-ev-transition",
  author: "Switch Labs Team",
  date: "2026-01-15",
  category: "Industry Insights",
  tags: ["EV", "ROI", "Logistics"],
  excerpt: "...",
  content: "...",
  relatedPosts: [...],
  downloadablePDF: true
}
```

---

### **8. CONTACT** (`/contact`)
**Purpose:** Multiple contact methods and lead capture

**Page Structure:**
- Contact form (existing Footer form, enhanced)
- Office locations & map
- Phone numbers by department
- Email addresses
- Social media links
- "Request a Demo" CTA
- "Schedule a Site Visit" CTA

---

### **9. LEGAL PAGES**

#### `/policies` - Privacy Policy
- Data collection practices
- Cookie policy
- Third-party services
- User rights
- Contact for privacy concerns

#### `/terms-and-conditions` - Terms of Service
- Website usage terms
- Service agreements
- Intellectual property
- Limitation of liability
- Dispute resolution

#### `/site-map` - Site Map
- Hierarchical list of all pages
- Quick navigation
- XML sitemap link for SEO

---

## 🎨 Navigation Structure

### **Primary Navigation (Top Bar)**

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Solutions ▼  Case Studies ▼  Network ▼  Impact ▼  │
│          Company ▼    Resources ▼    Contact   [Get Quote]  │
└─────────────────────────────────────────────────────────────┘
```

### **Dropdown Menu Design**

**Solutions Dropdown:**
```
┌────────────────────────────────┐
│ Overview                       │
│ ─────────────────────────────  │
│ 🚛 Vehicles & Operations       │
│ ⚡ Infrastructure               │
│ 🧠 Intelligence Platform        │
│ 💰 Financing Options            │
└────────────────────────────────┘
```

**Case Studies Dropdown:**
```
┌────────────────────────────────┐
│ All Case Studies               │
│ ─────────────────────────────  │
│ Featured                       │
│  • JK Lakshmi Cement           │
│  • Dalmia Cement               │
│ ─────────────────────────────  │
│ By Industry                    │
│  • Cement Manufacturing        │
│  • Steel Production            │
│  • Logistics & Distribution    │
└────────────────────────────────┘
```

**Network Dropdown:**
```
┌────────────────────────────────┐
│ 🗺️  Operational Corridors       │
│ 🔌 Charging Infrastructure     │
│ 📈 Expansion Plans              │
└────────────────────────────────┘
```

**Impact Dropdown:**
```
┌────────────────────────────────┐
│ 🧮 ROI Calculator               │
│ 🌱 Environmental Impact         │
│ 💵 Economic Analysis            │
│ 📊 Download Reports             │
└────────────────────────────────┘
```

**Company Dropdown:**
```
┌────────────────────────────────┐
│ About Us                       │
│ Leadership Team                │
│ Investors                      │
│ Partners                       │
│ Careers                        │
│ Newsroom                       │
└────────────────────────────────┘
```

**Resources Dropdown:**
```
┌────────────────────────────────┐
│ 📝 Blog                         │
│ 📄 Whitepapers                  │
│ 📚 Implementation Guides        │
│ 🎥 Webinars                     │
│ ❓ FAQ                          │
└────────────────────────────────┘
```

### **Footer Navigation**

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                                     │
│                                                             │
│  SOLUTIONS        COMPANY         RESOURCES      LEGAL      │
│  Overview         About Us        Blog           Privacy    │
│  Vehicles         Team            Whitepapers    Terms      │
│  Infrastructure   Investors       Guides         Cookies    │
│  Intelligence     Partners        FAQ            Sitemap    │
│  Financing        Careers                                   │
│                   Newsroom                                  │
│                                                             │
│  CONTACT                          FOLLOW US                 │
│  +91 XXX XXX XXXX                 [LinkedIn] [Twitter]     │
│  info@switchlabs.in               [YouTube] [Instagram]    │
│                                                             │
│  © 2026 Switch Labs Private Limited. All Rights Reserved.  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technical Implementation

### **Phase 1: Foundation (Week 1-2)**

#### 1.1 Install Dependencies
```bash
npm install react-router-dom
# Already installed
```

#### 1.2 Create Folder Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Navbar.jsx          # Enhanced with dropdowns
│   │   ├── Footer.jsx          # Enhanced with sections
│   │   ├── Dropdown.jsx        # Reusable dropdown component
│   │   └── Breadcrumbs.jsx     # Navigation breadcrumbs
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── SEO.jsx             # SEO meta tags component
│   └── [existing components]
├── pages/
│   ├── Home.jsx
│   ├── solutions/
│   │   ├── SolutionsOverview.jsx
│   │   ├── VehiclesOperations.jsx
│   │   ├── Infrastructure.jsx
│   │   ├── Intelligence.jsx
│   │   └── Financing.jsx
│   ├── case-studies/
│   │   ├── CaseStudiesIndex.jsx
│   │   ├── CaseStudyDetail.jsx
│   │   └── IndustryOverview.jsx
│   ├── network/
│   │   ├── Corridors.jsx
│   │   ├── Infrastructure.jsx
│   │   └── Expansion.jsx
│   ├── impact/
│   │   ├── Calculator.jsx
│   │   ├── Environmental.jsx
│   │   ├── Economic.jsx
│   │   └── Reports.jsx
│   ├── company/
│   │   ├── About.jsx
│   │   ├── Team.jsx
│   │   ├── Investors.jsx
│   │   ├── Partners.jsx
│   │   ├── Careers.jsx
│   │   └── Newsroom.jsx
│   ├── resources/
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Whitepapers.jsx
│   │   ├── Guides.jsx
│   │   ├── Webinars.jsx
│   │   └── FAQ.jsx
│   ├── Contact.jsx
│   ├── legal/
│   │   ├── Policies.jsx
│   │   ├── TermsAndConditions.jsx
│   │   └── SiteMap.jsx
│   └── NotFound.jsx
├── data/
│   ├── caseStudies.js
│   ├── blogPosts.js
│   ├── teamMembers.js
│   ├── corridors.js
│   └── navigation.js          # Navigation structure config
└── utils/
    ├── seo.js
    └── analytics.js
```

#### 1.3 Create Layout Component
```jsx
// src/components/layout/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadModal from '../LeadModal';
import FloatingCTA from '../FloatingCTA';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onGetStarted={() => setIsModalOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer onAction={() => setIsModalOpen(true)} />
      <FloatingCTA onClick={() => setIsModalOpen(true)} />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Layout;
```

#### 1.4 Create Navigation Configuration
```javascript
// src/data/navigation.js
export const navigationConfig = {
  solutions: {
    label: 'Solutions',
    items: [
      { label: 'Overview', path: '/solutions' },
      { label: 'Vehicles & Operations', path: '/solutions/vehicles-operations', icon: '🚛' },
      { label: 'Infrastructure', path: '/solutions/infrastructure', icon: '⚡' },
      { label: 'Intelligence Platform', path: '/solutions/intelligence', icon: '🧠' },
      { label: 'Financing Options', path: '/solutions/financing', icon: '💰' }
    ]
  },
  caseStudies: {
    label: 'Case Studies',
    items: [
      { label: 'All Case Studies', path: '/case-studies' },
      { type: 'divider' },
      { label: 'Featured', type: 'header' },
      { label: 'JK Lakshmi Cement', path: '/case-studies/jk-lakshmi' },
      { label: 'Dalmia Cement', path: '/case-studies/dalmia' },
      { type: 'divider' },
      { label: 'By Industry', type: 'header' },
      { label: 'Cement Manufacturing', path: '/case-studies/industry/cement' },
      { label: 'Steel Production', path: '/case-studies/industry/steel' }
    ]
  },
  // ... more navigation items
};
```

---

### **Phase 2: Core Pages (Week 3-4)**

#### 2.1 Home Page Transformation
- Extract sections into reusable components
- Add featured case study carousel
- Add latest news section
- Optimize hero for conversion

#### 2.2 Solutions Pages
- Create overview page with all pillars
- Create individual pillar pages with deep-dive content
- Add technical specifications
- Add integration process timeline

#### 2.3 Case Studies
- Create case study data structure
- Build case study index page (grid/list view)
- Build case study detail template
- Add filtering by industry/location

---

### **Phase 3: Enhanced Features (Week 5-6)**

#### 3.1 Network Pages
- Enhance CorridorMap with route details
- Create infrastructure page with charging station map
- Build expansion roadmap page

#### 3.2 Impact Pages
- Enhance calculator with more parameters
- Create environmental impact dashboard
- Create economic analysis page
- Add downloadable PDF reports

#### 3.3 Company Pages
- Build About Us page with timeline
- Create team profiles page
- Enhance investors section
- Create careers page with job listings

---

### **Phase 4: Resources & Content (Week 7-8)**

#### 4.1 Blog System
- Create blog index with categories
- Build blog post template
- Add search and filtering
- Implement pagination

#### 4.2 Resource Library
- Create whitepapers listing
- Build guides section
- Add webinar recordings
- Create comprehensive FAQ

#### 4.3 Contact & Legal
- Enhance contact page
- Create detailed privacy policy
- Create terms and conditions
- Build interactive sitemap

---

### **Phase 5: Navigation & UX (Week 9)**

#### 5.1 Enhanced Navbar
```jsx
// Key features:
- Dropdown menus with hover/click
- Mega menu for case studies
- Mobile responsive hamburger menu
- Sticky on scroll
- Active state indicators
- Search functionality (optional)
```

#### 5.2 Breadcrumbs
```jsx
// Example: Home > Case Studies > Cement Industry > JK Lakshmi
<Breadcrumbs />
```

#### 5.3 Internal Linking Strategy
- Related content suggestions
- "You might also like" sections
- Cross-linking between case studies and solutions

---

### **Phase 6: SEO & Performance (Week 10)**

#### 6.1 SEO Implementation
```jsx
// src/components/common/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => (
  <Helmet>
    <title>{title} | Switch Labs</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <link rel="canonical" href={url} />
  </Helmet>
);
```

#### 6.2 Performance Optimization
- Lazy loading for routes
- Image optimization
- Code splitting
- Caching strategy

#### 6.3 Analytics
- Google Analytics 4 setup
- Event tracking for CTAs
- Conversion tracking
- Heatmap integration (Hotjar/Microsoft Clarity)

---

## 📝 Content Requirements

### **Case Studies (Priority 1)**
Need to create 5-8 detailed case studies:
1. JK Lakshmi Cement (Sirohi-Kalol)
2. Dalmia Cement (Dalmiapuram-Karaikal)
3. UPL Logistics (Ankaleshwar-Jhagadia)
4. Tata Steel (Ahiwara-Raipur)
5. JSW Group (Kalamboli-Khopoli)

Each needs:
- Challenge statement (200 words)
- Solution description (300 words)
- Results & metrics (quantified)
- Testimonial quote
- 3-5 high-quality images
- Timeline visualization

### **Blog Posts (Priority 2)**
Initial 10 blog posts:
1. "The Economics of Heavy-Duty EV Transition in India"
2. "How Cement Manufacturers Are Cutting Costs with EVs"
3. "Understanding Total Cost of Ownership: EV vs Diesel"
4. "The Future of Freight: India's EV Infrastructure Roadmap"
5. "Case Study Deep Dive: JK Lakshmi's 40% Cost Reduction"
6. "Regulatory Landscape for Commercial EVs in India"
7. "Battery Technology for Heavy-Duty Applications"
8. "Route Optimization: The Secret to EV Fleet Success"
9. "Financing Your EV Transition: Options and Strategies"
10. "Carbon Credits and Sustainability Reporting for Fleets"

### **Whitepapers (Priority 3)**
3-5 technical documents:
1. "Complete Guide to Heavy-Duty EV Transition" (20 pages)
2. "ROI Analysis: EV vs Diesel for Industrial Logistics" (15 pages)
3. "Infrastructure Planning for EV Fleet Operations" (12 pages)
4. "Sustainability Reporting Framework for Transport Fleets" (10 pages)

### **Team Profiles (Priority 2)**
- CEO/Founder profile
- CTO profile
- Head of Operations
- Head of Sales
- 3-4 key team members
- Advisory board members

---

## 🎨 Design System Enhancements

### **Component Library Expansion**

#### Dropdown Component
```jsx
<Dropdown
  trigger="Solutions"
  items={navigationConfig.solutions.items}
  megaMenu={false}
/>
```

#### Card Variants
- Case Study Card
- Blog Post Card
- Team Member Card
- Stat Card
- Testimonial Card

#### Page Templates
- Standard Page (with sidebar)
- Full-Width Page
- Split Layout (image + content)
- Grid Layout (case studies, blog)

---

## 🔄 Migration Strategy

### **Step 1: Parallel Development**
- Build new pages alongside existing single-page app
- Test new navigation structure
- Ensure all existing functionality works

### **Step 2: Content Migration**
- Move existing sections to appropriate pages
- Enhance with additional content
- Maintain existing CTAs and forms

### **Step 3: Gradual Rollout**
- Deploy to staging environment
- User testing
- SEO validation
- Performance testing
- Production deployment

### **Step 4: Redirects**
- Set up 301 redirects for any changed URLs
- Update sitemap.xml
- Submit to Google Search Console

---

## 📊 Success Metrics

### **User Engagement**
- Pages per session (target: 3+)
- Average session duration (target: 2+ minutes)
- Bounce rate (target: <40%)

### **Conversion**
- Lead form submissions
- Calculator usage
- Case study downloads
- Contact form submissions

### **SEO**
- Organic traffic growth
- Keyword rankings
- Backlinks
- Domain authority

---

## 🚀 Implementation Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1: Foundation** | Week 1-2 | Folder structure, Layout, Navigation config |
| **Phase 2: Core Pages** | Week 3-4 | Home, Solutions, Case Studies |
| **Phase 3: Enhanced Features** | Week 5-6 | Network, Impact, Company pages |
| **Phase 4: Resources** | Week 7-8 | Blog, Resources, Legal pages |
| **Phase 5: Navigation** | Week 9 | Enhanced navbar, breadcrumbs, UX |
| **Phase 6: SEO & Launch** | Week 10 | SEO, performance, analytics, launch |

**Total Timeline: 10 weeks**

---

## 🔧 Technical Stack

### **Core**
- React 19.2
- React Router DOM 6.x
- Framer Motion (animations)

### **New Dependencies**
```bash
npm install react-helmet-async  # SEO meta tags
npm install react-markdown      # Blog content rendering
npm install date-fns            # Date formatting
npm install react-paginate      # Pagination
npm install react-share         # Social sharing
```

### **Optional Enhancements**
```bash
npm install @tanstack/react-query  # Data fetching
npm install zustand                # State management
npm install react-hot-toast        # Notifications
```

---

## 📋 Next Steps

1. **Review & Approve** this implementation plan
2. **Content Creation** - Start gathering case study materials
3. **Design Mockups** - Create high-fidelity designs for new pages
4. **Development Kickoff** - Begin Phase 1 implementation
5. **Stakeholder Alignment** - Ensure all teams are aligned on timeline

---

## 🎯 Priority Order

### **Must Have (MVP)**
1. Enhanced navigation with dropdowns
2. Case Studies section (3-5 studies)
3. Solutions detail pages
4. Company About page
5. Legal pages (Privacy, Terms)

### **Should Have**
1. Blog system with 5-10 posts
2. Network/Corridors enhanced page
3. Team profiles
4. Contact page enhancement

### **Nice to Have**
1. Resource library
2. Webinars section
3. Advanced search
4. Multi-language support

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-08  
**Status:** Ready for Review
