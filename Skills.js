import React from 'react';

const Skills = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <span className="bg-blue-200 px-4 py-2 rounded">HTML</span>
        <span className="bg-blue-200 px-4 py-2 rounded">CSS</span>
        <span className="bg-blue-200 px-4 py-2 rounded">JavaScript</span>
        <span className="bg-blue-200 px-4 py-2 rounded">React</span>
      </div>
    </section>
  );
};

export default Skills;