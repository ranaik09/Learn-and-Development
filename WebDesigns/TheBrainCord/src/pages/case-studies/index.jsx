import React from 'react';
import Layout from '../../components/Layout';
import { CaseStudy } from '../../types';

const caseStudies: CaseStudy[] = [
  {
    title: 'Case Study 1',
    description: 'Description of case study 1.',
    link: '/case-studies/case-study-1',
  },
  {
    title: 'Case Study 2',
    description: 'Description of case study 2.',
    link: '/case-studies/case-study-2',
  },
  {
    title: 'Case Study 3',
    description: 'Description of case study 3.',
    link: '/case-studies/case-study-3',
  },
];

const CaseStudiesPage: React.FC = () => {
  return (
    <Layout>
      <h1>Case Studies</h1>
      <ul>
        {caseStudies.map((study, index) => (
          <li key={index}>
            <h2>{study.title}</h2>
            <p>{study.description}</p>
            <a href={study.link}>Read more</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CaseStudiesPage;