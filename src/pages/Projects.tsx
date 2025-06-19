import React from 'react';
import { Github, ExternalLink, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Crop Recommendation System',
      image: '/crop.jpg',
      github: 'https://github.com/alwinud/crop-recommendation',
      demo: 'https://crop-recommend.onrender.com',
      caseStudy: '/case-study/crop-recommendation',
      description: 'A machine learning model to recommend crops based on soil, weather, and location.',
      status: 'Completed',
      tags: ['Machine Learning', 'Flask', 'Render']
    },
    {
      title: 'Predictive Maintenance System',
      image: '/maintenance.jpg',
      github: 'https://github.com/alwinud/predictive-maintenance',
      demo: 'https://predictive-maintenance.onrender.com',
      caseStudy: '/case-study/predictive-maintenance',
      description: 'System that predicts machine failures using real vibration data from an industrial drill.',
      status: 'In Progress',
      tags: ['IoT', 'ML', 'Sensor Data']
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:underline hover:text-accent/80 transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">All Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-border rounded-lg shadow-md bg-background hover:shadow-lg transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4 hidden md:block"
            />

            {/* Title + Status */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-col gap-2 text-sm mb-3">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-500 hover:underline flex items-center gap-1"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} /> Try it
              </a>
              <Link
                to={project.caseStudy}
                className="text-purple-500 hover:underline flex items-center gap-1"
              >
                <FileText size={16} /> View Case Study
              </Link>
            </div>

            {/* Tags - Show only on medium and above */}
            <div className="flex flex-wrap gap-2 mt-auto hidden md:flex">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
