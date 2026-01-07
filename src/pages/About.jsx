import React from 'react';
import { Users, Target, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About AI Career Navigator</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Democratizing career guidance for every student, regardless of their background or college tier.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center">
                            <div className="mb-6 inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg w-fit">
                                <Target className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To bridge the employability gap by providing world-class, AI-driven career mentorship to students from Tier-2 and Tier-3 cities. We believe talent is distributed equally, but opportunity is not. We are here to change that.
                            </p>
                        </div>
                        <div className="bg-blue-600 p-12 text-white flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6">Why We Exist</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                                    <span>Lack of personalized guidance in traditional education.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                                    <span>Disconnect between academic syllabus and industry needs.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                                    <span>Need for affordable, accessible mentorship 24/7.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Team/Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Student First</h3>
                        <p className="text-gray-600">Every feature we build is designed with the student's success in mind.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
                        <p className="text-gray-600">Making high-quality career guidance accessible to everyone, everywhere.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Impact Driven</h3>
                        <p className="text-gray-600">Measuring our success by the careers we help launch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
