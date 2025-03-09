// src/components/Education/Education.jsx
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "University Name",
      duration: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Deep Learning applications in Natural Language Processing.",
      gpa: "3.8/4.0",
      achievements: [
        "Published 2 research papers",
        "Teaching Assistant for Data Structures course",
        "President of Computer Science Society"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      institution: "University Name",
      duration: "2016 - 2020",
      description: "Major in Computer Science and Engineering with focus on software development and database management.",
      gpa: "3.7/4.0",
      achievements: [
        "Dean's List all semesters",
        "Won National Coding Championship",
        "Led team of 5 for final year project"
      ]
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "School Name",
      duration: "2014 - 2016",
      description: "Science stream with Computer Science as elective.",
      gpa: "95%",
      achievements: [
        "School topper in Computer Science",
        "Science Club President",
        "Won Inter-school Programming Contest"
      ]
    }
  ];

  return (
    <div id="education" className="w-full py-20 bg-primary">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
          <div className="w-16 h-1 bg-accent rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent"></div>

          {/* Timeline Items */}
          {educationData.map((item, index) => (
            <div key={item.id} className="relative mb-16">
              {/* Timeline Item Container */}
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center z-10">
                  <FaGraduationCap className="text-primary text-2xl" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-accent mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-textSecondary text-sm">
                        {item.institution}
                      </p>
                      <p className="text-accent font-semibold mt-1">
                        {item.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-textSecondary mb-4">
                      {item.description}
                    </p>

                    {/* GPA */}
                    <div className="mb-4">
                      <span className="bg-primary px-3 py-1 rounded-full text-sm">
                        GPA: {item.gpa}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-accent font-semibold mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-textSecondary">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="mb-1">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;