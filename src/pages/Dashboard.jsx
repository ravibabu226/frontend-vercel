import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Target, Video, Clock } from 'lucide-react';

const Dashboard = () => {
    // Mock User Data
    const user = {
        name: "Ravi",
        college: "Tier-3 Engineering College",
        goal: "Full Stack Developer",
        progress: 35
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome back, {user.name} 👋</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                <Target className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Career Goal</p>
                                <p className="text-lg font-bold text-gray-900">{user.goal}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-100 rounded-full text-green-600">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Overall Progress</p>
                                <p className="text-lg font-bold text-gray-900">{user.progress}% Completed</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                <Award className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Badges Earned</p>
                                <p className="text-lg font-bold text-gray-900">2 Badges</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Action Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Roadmap</h2>
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4 py-2">
                                    <h3 className="font-semibold text-gray-800">Month 1: Fundamentals</h3>
                                    <p className="text-sm text-gray-600">HTML, CSS, Git basics</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                                    <h3 className="font-semibold text-gray-800">Month 2: JavaScript Deep Dive</h3>
                                    <p className="text-sm text-gray-600">ES6+, Async/Await, DOM Manipulation</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="border-l-4 border-gray-300 pl-4 py-2">
                                    <h3 className="font-semibold text-gray-400">Month 3: React & Frontend Architecture</h3>
                                    <p className="text-sm text-gray-400">Components, Hooks, State Management</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Link to="/roadmap" className="text-blue-600 hover:text-blue-800 font-medium">View Full Roadmap &rarr;</Link>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg shadow-md text-white">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">Practice for Interviews</h2>
                                    <p className="text-indigo-100 mb-4">Take an AI-powered mock interview tailored to your skills.</p>
                                    <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-bold text-sm hover:bg-indigo-50 transition">Start Mock Interview</button>
                                </div>
                                <Video className="h-16 w-16 text-indigo-200 opacity-50" />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Recommended Resources</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <BookOpen className="h-5 w-5 text-gray-400 mt-0.5" />
                                    <a href="#" className="text-sm text-blue-600 hover:underline">Namaste JavaScript (YouTube)</a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <BookOpen className="h-5 w-5 text-gray-400 mt-0.5" />
                                    <a href="#" className="text-sm text-blue-600 hover:underline">React Official Docs</a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <BookOpen className="h-5 w-5 text-gray-400 mt-0.5" />
                                    <a href="#" className="text-sm text-blue-600 hover:underline">Flexbox Froggy Game</a>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Job Probability</h2>
                            <div className="mb-2">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Frontend Developer</span>
                                    <span className="font-bold text-green-600">High</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Full Stack Developer</span>
                                    <span className="font-bold text-yellow-600">Medium</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
