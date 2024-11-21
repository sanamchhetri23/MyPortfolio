// Project.jsx
import React from 'react';

const Project = () => {
    return (
        <section id="project" className="p-6">
            <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
            <p className="text-lg text-center">Here are some of the projects I've worked on:</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Project Cards */}
                <div className="project-card bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Project 1</h2>
                    <p>A brief description of Project 1.</p>
                </div>
                <div className="project-card bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Project 2</h2>
                    <p>A brief description of Project 2.</p>
                </div>
                <div className="project-card bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Project 3</h2>
                    <p>A brief description of Project 3.</p>
                </div>
            </div>
        </section>
    );
};

export default Project;
