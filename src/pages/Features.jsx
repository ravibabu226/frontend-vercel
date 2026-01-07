import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Target, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

const Features = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Powerful Features</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to go from Student to Hired Professional.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-12 flex flex-col justify-center">
                                <div className="mb-6 inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg w-fit">
                                    <Cpu className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Resume Analyzer</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Our advanced AI scans your resume against thousands of job descriptions. It identifies your strong points, formatting errors, and exactly what keywords you are missing for your target role.
                                </p>
                                <Link to="/upload-resume" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700">
                                    Analyze My Resume <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                            <div className="bg-blue-50 p-12 flex items-center justify-center">
                                {/* Placeholder for UI mockup or illustration */}
                                <div className="bg-white p-6 rounded-lg shadow-inner w-full max-w-sm">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-500">ATS Score</span>
                                        <span className="text-sm font-bold text-green-600">85/100</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 & 3 (Side by Side) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
                            <div className="mb-6 inline-flex items-center justify-center p-3 bg-green-100 rounded-lg w-fit">
                                <Target className="h-8 w-8 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skill Gap Detection</h2>
                            <p className="text-gray-600 mb-6">
                                Don't guess what you need to learn. We compare your current profile with live market data to tell you exactly which skills (e.g., "Docker", "Redux") you are missing for your dream job.
                            </p>
                            <Link to="/upload-resume" className="text-green-600 font-bold hover:underline">
                                Check My Skills &rarr;
                            </Link>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
                            <div className="mb-6 inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg w-fit">
                                <TrendingUp className="h-8 w-8 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personalized Roadmap</h2>
                            <p className="text-gray-600 mb-6">
                                Get a structured, week-by-week learning path generated just for you. Whether you want to be a Data Scientist or Frontend Dev, we curate the best resources and milestones.
                            </p>
                            <Link to="/roadmap" className="text-purple-600 font-bold hover:underline">
                                Generate Roadmap &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="bg-orange-50 p-12 flex items-center justify-center order-2 md:order-1">
                                <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-sm border border-gray-100">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                        <div className="flex-1 space-y-2 py-1">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs">AI Response...</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-12 flex flex-col justify-center order-1 md:order-2">
                                <div className="mb-6 inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg w-fit">
                                    <BookOpen className="h-8 w-8 text-orange-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Mock Interview AI</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Ace your next interview by practicing with our realistic AI interviewer. It asks contextual questions based on your role, listens to your answers, and provides feedback on technical accuracy and communication style.
                                </p>
                                <Link to="/interview" className="inline-flex items-center font-bold text-orange-600 hover:text-orange-700">
                                    Start Practice Session <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
