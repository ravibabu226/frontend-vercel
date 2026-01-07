import React from 'react';
import { ArrowRight, BookOpen, Target, TrendingUp, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Hero Section */}
            <section className="bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 opacity-50 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                            Be Career Ready 🚀
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                            Not just a Job Portal.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Your Personal Career Mentor.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                            AI-powered guidance to bridge the skill gap. We analyze your resume, create a roadmap, and prep you for interviews.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/upload-resume" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2">
                                Start Free Assessment <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link to="/features" className="bg-white text-gray-700 border border-gray-300 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition duration-300">
                                Explore Features
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center relative">
                        {/* Decorative blob */}
                        <div className="absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-4 right-4"></div>

                        {/* Hero Image / Illustration Placeholder */}
                        <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-sm w-full transform rotate-3 hover:rotate-0 transition duration-500">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">👩‍🎓</div>
                                <div>
                                    <div className="font-bold text-gray-900">Student Profile</div>
                                    <div className="text-sm text-green-500 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Job Ready</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Skills Score</span>
                                    <span className="font-bold text-blue-600">92/100</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[92%]"></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-2">Recommended Role</p>
                                    <p className="font-bold text-gray-800">Full Stack Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Everything you need to get hired
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Four powerful tools. One seamless journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link to="/upload-resume" className="group">
                            <FeatureCard
                                icon={<Cpu className="h-8 w-8 text-white" />}
                                title="AI Resume Analyzer"
                                description="Upload your resume and get instant feedback on strength, gaps, and improvements."
                                color="bg-blue-500"
                                hoverColor="group-hover:ring-blue-500"
                            />
                        </Link>
                        <Link to="/upload-resume" className="group">
                            <FeatureCard
                                icon={<Target className="h-8 w-8 text-white" />}
                                title="Skill Gap Detection"
                                description="Identify missing skills compared to your college syllabus and market demands."
                                color="bg-green-500"
                                hoverColor="group-hover:ring-green-500"
                            />
                        </Link>
                        <Link to="/roadmap" className="group">
                            <FeatureCard
                                icon={<TrendingUp className="h-8 w-8 text-white" />}
                                title="Personalized Roadmap"
                                description="Get a week-by-week learning plan tailored to your goals and current level."
                                color="bg-purple-500"
                                hoverColor="group-hover:ring-purple-500"
                            />
                        </Link>
                        <Link to="/interview" className="group">
                            <FeatureCard
                                icon={<BookOpen className="h-8 w-8 text-white" />}
                                title="Interview Readiness"
                                description="Practice with AI-driven mock interviews and get real-time confidence scores."
                                color="bg-orange-500"
                                hoverColor="group-hover:ring-orange-500"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, color, hoverColor }) => (
    <div className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-xl ring-2 ring-transparent ${hoverColor}`}>
        <div className={`p-4 rounded-full ${color} mb-6 shadow-lg`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

export default LandingPage;
