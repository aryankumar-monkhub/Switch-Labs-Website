import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Solutions Pages
import SolutionsOverview from './pages/solutions/SolutionsOverview';
import VehiclesOperations from './pages/solutions/VehiclesOperations';
import Infrastructure from './pages/solutions/Infrastructure';
import IntelligencePlatform from './pages/solutions/IntelligencePlatform';

// Placeholder Pages (to be implemented)
import AboutUs from './pages/AboutUs';
import Policies from './pages/Policies';
import TermsAndConditions from './pages/TermsAndConditions';
import SiteMap from './pages/SiteMap';
import OperationalCorridors from './pages/network/OperationalCorridors';
import ChargingInfrastructure from './pages/network/ChargingInfrastructure';
import BlogList from './pages/resources/BlogList';
import BlogPost from './pages/resources/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsOverview />} />
            <Route path="/solutions/vehicles-operations" element={<VehiclesOperations />} />
            <Route path="/solutions/infrastructure" element={<Infrastructure />} />
            <Route path="/solutions/intelligence" element={<IntelligencePlatform />} />

            {/* Network */}
            <Route path="/network/corridors" element={<OperationalCorridors />} />
            <Route path="/network/infrastructure" element={<ChargingInfrastructure />} />

            {/* Impact */}
            <Route path="/impact/calculator" element={<PlaceholderPage title="ROI Calculator" />} />
            <Route path="/impact/environmental" element={<PlaceholderPage title="Environmental Impact" />} />
            <Route path="/impact/economic" element={<PlaceholderPage title="Economic Analysis" />} />


            {/* Company */}
            <Route path="/company/about" element={<AboutUs />} />
            <Route path="/company/team" element={<PlaceholderPage title="Leadership Team" />} />
            <Route path="/company/investors" element={<PlaceholderPage title="Investors" />} />
            <Route path="/company/partners" element={<PlaceholderPage title="Partners" />} />
            <Route path="/company/careers" element={<PlaceholderPage title="Careers" />} />
            <Route path="/company/newsroom" element={<PlaceholderPage title="Newsroom" />} />

            {/* Resources */}
            <Route path="/resources/blog" element={<BlogList />} />
            <Route path="/resources/blog/:slug" element={<BlogPost />} />

            <Route path="/resources/guides" element={<PlaceholderPage title="Implementation Guides" />} />

            <Route path="/resources/faq" element={<PlaceholderPage title="FAQ" />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Legal */}
            <Route path="/policies" element={<Policies />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/site-map" element={<SiteMap />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

// Placeholder Component for pages under development
const PlaceholderPage = ({ title }) => (
  <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
    <section className="container">
      <div className="section-header">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          {title}
        </h1>
        <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
          This page is currently under development.
        </p>
      </div>
      <div className="glass" style={{ padding: '4rem', textAlign: 'center', marginTop: '3rem', borderRadius: '12px' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
          We're working hard to bring you detailed content for this section.
        </p>
        <a href="/" className="button-primary">
          Return to Home
        </a>
      </div>
    </section>
  </div>
);

// 404 Page
const NotFound = () => (
  <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
    <section className="container">
      <div className="section-header">
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="/" className="button-primary">
          Go to Homepage
        </a>
      </div>
    </section>
  </div>
);

export default App;
