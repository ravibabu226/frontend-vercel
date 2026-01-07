import React, { useState } from 'react';
import { CheckCircle, Circle, Lock, Loader, ArrowRight } from 'lucide-react';

const Roadmap = () => {
    const [goal, setGoal] = useState('');
    const [steps, setSteps] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/roadmap/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ goal: goal || "Full Stack Developer" }),
            });
            const data = await response.json();

            if (data.success) {
                setSteps(data.roadmap.steps);
            } else {
                setError(data.message || "Failed to generate roadmap");
            }
        } catch (err) {
            console.error(err);
            // Fallback for demo
            setSteps([
                { week: 1, topic: "Backend Integration Failed", status: "pending" },
                { week: 2, topic: "Check Server Logs", status: "pending" }
            ]);
            setError("Could not connect to backend.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Personalized Learning Roadmap</h1>
                    <p className="text-gray-600 mb-6">Enter your dream job role, and our AI will craft a 4-week mastery plan for you.</p>

                    <form onSubmit={handleGenerate} className="flex gap-4 max-w-lg mx-auto">
                        <input
                            type="text"
                            className="flex-1 rounded-md border-gray-300 shadow-sm px-4 py-2 border focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Data Scientist, React Developer"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center"
                        >
                            {loading ? <Loader className="animate-spin h-5 w-5" /> : <>Generate <ArrowRight className="ml-2 h-4 w-4" /></>}
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                {steps && (
                    <div className="relative border-l-2 border-gray-200 ml-3 space-y-12 animate-in fade-in zoom-in duration-500">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pl-8">
                                {/* Icon Status */}
                                <div className="absolute -left-[9px] bg-white">
                                    {step.status === 'completed' ? (
                                        <CheckCircle className="h-5 w-5 text-green-500 fill-green-50" />
                                    ) : step.status === 'in-progress' ? (
                                        <Circle className="h-5 w-5 text-blue-500 fill-blue-50 animate-pulse" />
                                    ) : (
                                        <Lock className="h-5 w-5 text-gray-300" />
                                    )}
                                </div>

                                <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">{step.topic}</h3>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                            Week {step.week}
                                        </span>
                                    </div>
                                    <p className="text-gray-600">Focus on this topic to advance your career.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Roadmap;
