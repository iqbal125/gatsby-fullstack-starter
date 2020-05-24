import { FcSupport } from 'react-icons/fc';
import { FcAcceptDatabase } from 'react-icons/fc';
import { FcServices } from 'react-icons/fc';
import { FcCurrencyExchange } from 'react-icons/fc';
import { FcFilingCabinet } from 'react-icons/fc';
import { FcIphone } from 'react-icons/fc';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';

export const servicesWeb = [
  {
    id: 1,
    title: 'Front-End',
    icon: FcMultipleDevices,
    description: ['React', 'Redux', 'Gatsby', 'HTML, CSS, Javascript', 'Auth0', 'D3']
  },
  {
    id: 2,
    title: 'Server-Side',
    icon: FcFilingCabinet,
    description: ['Node.js', 'Serverless AWS Lambda', 'Java', 'REST API Design', 'Python Django']
  },
  {
    id: 3,
    title: 'DevOps',
    icon: FcSupport,
    description: ['Docker', 'AWS Suite', 'Jenkins', 'Travis CI', 'Git', 'JWT Authentication']
  },
  {
    id: 4,
    title: 'Databases',
    icon: FcAcceptDatabase,
    description: ['AWS RDS Setup', 'Postgres', 'DynamoDB', 'MySQL']
  },
  {
    id: 5,
    title: 'Mobile',
    icon: FcIphone,
    description: [
      'Responsive Web Design',
      'Progressive Web App',
      'Mobile Site Development',
      'React Native'
    ]
  }
];

export const otherServices = [
  {
    id: 1,
    title: 'Investment',
    icon: FcCurrencyExchange,
    description: ['Specializing in due diligence and private equity']
  },
  {
    id: 2,
    title: 'Healthcare',
    icon: FcSportsMode,
    description: ['Biotech', 'Pharma', 'Mobile', 'Genetics', 'Aging-in-place']
  },
  {
    id: 3,
    title: 'Engineering',
    icon: FcServices,
    description: ['Robotics', 'Automation', 'Process Control', 'Surveillance']
  }
];
