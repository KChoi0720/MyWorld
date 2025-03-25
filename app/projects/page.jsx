import React from 'react';
import Form from '@/components/Form';

const projects = [
  {
    title: 'Sales Analysis and Prediction',
    description: 'This is a description of Project 1.',
  },
  {
    title: 'Cloud Computing',
    description: 'This is a description of Project 2.',
  },
  {
    title: 'Salesforce',
    description: 'This is a description of Project 3.',
  },
];

const Projects = () => {
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto max-w-[800px] font-serif'>
          I am still working on this project page.
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        {projects.map((project, index) => (
          <div key={index} className='bg-tertiary p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>{project.title}</h3>
            <p className='text-gray-700'>{project.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
