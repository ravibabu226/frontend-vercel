import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ResumeUpload from './pages/ResumeUpload';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import MockInterview from './pages/MockInterview';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import About from './pages/About';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/upload-resume" element={<ResumeUpload />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/roadmap" element={<Roadmap />} />
                        <Route path="/interview" element={<MockInterview />} />
                    </Routes>
                </main>
                <footer className="bg-gray-800 text-white py-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} AI Smart Career Navigator. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
