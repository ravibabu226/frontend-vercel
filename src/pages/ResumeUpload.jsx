import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const ResumeUpload = () => {
    const [file, setFile] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setAnalysisResult(null);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setAnalyzing(true);
        setAnalysisResult(null);

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await fetch('/api/resume/analyze', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                setAnalysisResult(data.data);
            } else {
                console.error("Analysis failed");
            }
        } catch (error) {
            console.error("Error uploading resume:", error);
            // Fallback for demo if backend is not running
            setAnalysisResult({
                score: 75,
                skills: ['React (Fallback)', 'JavaScript', 'HTML'],
                missingSkills: ['Backend (Fallback)', 'Cloud'],
                suggestions: ['Backend not reachable - showing demo data']
            });
        } finally {
            setAnalyzing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Upload Your Resume</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Let our AI analyze your resume and benchmark it against industry standards.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="p-8">
                        <div className={`border-2 border-dashed rounded-lg p-12 text-center ${file ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}>
                            <input
                                type="file"
                                id="resume-upload"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
                                {file ? (
                                    <>
                                        <FileText className="h-12 w-12 text-blue-500 mb-4" />
                                        <span className="text-lg font-medium text-gray-900">{file.name}</span>
                                        <span className="text-sm text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                    </>
                                ) : (
                                    <>
                                        <Upload className="h-12 w-12 text-gray-400 mb-4" />
                                        <span className="text-lg font-medium text-gray-900">Click to upload or drag and drop</span>
                                        <span className="text-sm text-gray-500 mt-1">PDF or DOCX (Max 5MB)</span>
                                    </>
                                )}
                            </label>
                        </div>

                        {file && !analyzing && !analysisResult && (
                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={handleUpload}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                                >
                                    Analyze Resume
                                </button>
                            </div>
                        )}

                        {analyzing && (
                            <div className="mt-8 text-center">
                                <Loader className="h-10 w-10 text-blue-600 animate-spin mx-auto mb-4" />
                                <p className="text-lg text-gray-700 font-medium">Analyzing your resume against 1000+ job descriptions...</p>
                            </div>
                        )}

                        {analysisResult && (
                            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Analysis Result</h3>
                                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                            <span className="text-sm text-gray-500">Resume Score:</span>
                                            <span className={`text-xl font-bold ${analysisResult.score >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                                                {analysisResult.score}/100
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500" /> Strong Skills
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {analysisResult.skills.map(skill => (
                                                    <span key={skill} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                                <AlertCircle className="h-5 w-5 text-orange-500" /> Missing / Weak Areas
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {analysisResult.missingSkills.map(skill => (
                                                    <span key={skill} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 border-t border-blue-200 pt-4">
                                        <h4 className="font-semibold text-gray-700 mb-2">Identify Improvements</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            {analysisResult.suggestions.map((suggestion, idx) => (
                                                <li key={idx}>{suggestion}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 flex justify-center">
                                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                                            Generate Roadmap Based on This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeUpload;
