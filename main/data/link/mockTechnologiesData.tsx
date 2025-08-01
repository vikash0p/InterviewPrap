import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaVuejs, FaNodeJs, FaPhp, FaPython, FaJava,
   FaGitAlt, FaDocker, FaAws, FaDatabase, FaMobileAlt, FaCogs, FaTools, FaUsers } from 'react-icons/fa';
import { SiTypescript, SiSvelte, SiNextdotjs, SiDjango, SiRubyonrails, SiSpring, SiDotnet, SiPostgresql,
   SiMongodb, SiMysql, SiRedis, SiGraphql, SiFlutter, SiKotlin, SiSwift, SiGooglecloud } from 'react-icons/si';
import { FaCode, FaServer, FaBrain, FaNetworkWired } from 'react-icons/fa6';
import { ReactNode } from 'react';

export interface TechnologyItem {
  id: string;
  slug: string;
  label: string;
  category: string;
  actionLabel: string;
  comingSoon: boolean;
  icon: ReactNode;
}

export interface CategoryItem {
  id: string;
  slug: string;
  label: string;
  comingSoon: boolean;
  actionLabel: string;
  icon: ReactNode;
  technologies: TechnologyItem[];
}

export const MOCK_INTERVIEWS_DATA: CategoryItem[] = [
  {
    id: 'cat-1',
    slug: 'frontend',
    label: 'FRONTEND',
    comingSoon: false,
    actionLabel: 'Master Frontend Development',
    icon: <FaCode className="text-blue-400" />,
    technologies: [
      { id: 'tech-1', slug: 'html', label: 'HTML', icon: <FaHtml5 className='text-orange-500' />, category: 'frontend', actionLabel: 'Learn web page structure', comingSoon: false },
      { id: 'tech-2', slug: 'css', label: 'CSS', icon: <FaCss3Alt className='text-blue-500' />, category: 'frontend', actionLabel: 'Style beautiful websites', comingSoon: false },
      { id: 'tech-3', slug: 'javascript', label: 'JAVASCRIPT', icon: <FaJsSquare className='text-yellow-400' />, category: 'frontend', actionLabel: 'Master dynamic web development', comingSoon: false },
      { id: 'tech-4', slug: 'typescript', label: 'TYPESCRIPT', icon: <SiTypescript className='text-blue-600' />, category: 'frontend', actionLabel: 'Build type-safe applications', comingSoon: false },
      { id: 'tech-5', slug: 'react', label: 'REACT', icon: <FaReact className='text-sky-500' />, category: 'frontend', actionLabel: 'Create interactive UIs', comingSoon: false },
      { id: 'tech-6', slug: 'angular', label: 'ANGULAR', icon: <FaAngular className='text-red-500' />, category: 'frontend', actionLabel: 'Build enterprise applications', comingSoon: true },
      { id: 'tech-7', slug: 'vue', label: 'VUE', icon: <FaVuejs className='text-green-500' />, category: 'frontend', actionLabel: 'Develop progressive web apps', comingSoon: true },
      { id: 'tech-8', slug: 'svelte', label: 'SVELTE', icon: <SiSvelte className='text-orange-400' />, category: 'frontend', actionLabel: 'Build compiler-optimized apps', comingSoon: true },
      { id: 'tech-9', slug: 'nextjs', label: 'NEXT.JS', icon: <SiNextdotjs className='text-white' />, category: 'frontend', actionLabel: 'Create SSR applications', comingSoon: false }
    ]
  },
  {
    id: 'cat-2',
    slug: 'backend',
    label: 'BACKEND',
    comingSoon: false,
    actionLabel: 'Advance Backend Skills',
    icon: <FaServer className="text-green-400" />,
    technologies: [
      { id: 'tech-10', slug: 'nodejs', label: 'NODE.JS', icon: <FaNodeJs className='text-green-500' />, category: 'backend', actionLabel: 'Build server-side JavaScript', comingSoon: false },
      { id: 'tech-11', slug: 'express', label: 'EXPRESS', icon: <FaServer className='text-gray-500' />, category: 'backend', actionLabel: 'Create RESTful APIs', comingSoon: false },
      { id: 'tech-12', slug: 'php', label: 'PHP', icon: <FaPhp className='text-indigo-500' />, category: 'backend', actionLabel: 'Develop server-side scripts', comingSoon: false },
      { id: 'tech-13', slug: 'python', label: 'PYTHON', icon: <FaPython className='text-yellow-500' />, category: 'backend', actionLabel: 'Build versatile backends', comingSoon: false },
      { id: 'tech-14', slug: 'django', label: 'DJANGO', icon: <SiDjango className='text-green-700' />, category: 'backend', actionLabel: 'Develop Python web apps', comingSoon: false },
      { id: 'tech-15', slug: 'ruby-on-rails', label: 'RUBY ON RAILS', icon: <SiRubyonrails className='text-red-500' />, category: 'backend', actionLabel: 'Build MVC applications', comingSoon: false },
      { id: 'tech-16', slug: 'java', label: 'JAVA', icon: <FaJava className='text-red-700' />, category: 'backend', actionLabel: 'Enterprise backend development', comingSoon: false },
      { id: 'tech-17', slug: 'spring', label: 'SPRING', icon: <SiSpring className='text-green-600' />, category: 'backend', actionLabel: 'Java framework mastery', comingSoon: false },
      { id: 'tech-18', slug: 'dotnet', label: '.NET', icon: <SiDotnet className='text-purple-600' />, category: 'backend', actionLabel: 'Microsoft stack development', comingSoon: false }
    ]
  },
  {
    id: 'cat-3',
    slug: 'database',
    label: 'DATABASE',
    comingSoon: false,
    actionLabel: 'Database Expertise',
    icon: <FaDatabase className="text-yellow-400" />,
    technologies: [
      { id: 'tech-19', slug: 'mongodb', label: 'MONGODB', icon: <SiMongodb className='text-green-700' />, category: 'database', actionLabel: 'NoSQL document database', comingSoon: false },
      { id: 'tech-20', slug: 'postgresql', label: 'POSTGRESQL', icon: <SiPostgresql className='text-blue-700' />, category: 'database', actionLabel: 'Advanced relational database', comingSoon: false },
      { id: 'tech-21', slug: 'mysql', label: 'MYSQL', icon: <SiMysql className='text-blue-500' />, category: 'database', actionLabel: 'Popular open-source RDBMS', comingSoon: false },
      { id: 'tech-22', slug: 'redis', label: 'REDIS', icon: <SiRedis className='text-red-600' />, category: 'database', actionLabel: 'In-memory data store', comingSoon: false },
      { id: 'tech-23', slug: 'graphql', label: 'GRAPHQL', icon: <SiGraphql className='text-pink-500' />, category: 'database', actionLabel: 'Query language for APIs', comingSoon: false }
    ]
  },
  {
    id: 'cat-4',
    slug: 'mobile-development',
    label: 'MOBILE DEVELOPMENT',
    comingSoon: false,
    actionLabel: 'Mobile App Mastery',
    icon: <FaMobileAlt className="text-purple-400" />,
    technologies: [
      { id: 'tech-24', slug: 'react-native', label: 'REACT NATIVE', icon: <FaReact className='text-blue-400' />, category: 'mobile-development', actionLabel: 'Build cross-platform apps', comingSoon: false },
      { id: 'tech-25', slug: 'flutter', label: 'FLUTTER', icon: <SiFlutter className='text-sky-400' />, category: 'mobile-development', actionLabel: 'Create beautiful UIs', comingSoon: false },
      { id: 'tech-26', slug: 'swift', label: 'SWIFT', icon: <SiSwift className='text-orange-400' />, category: 'mobile-development', actionLabel: 'Develop iOS applications', comingSoon: false },
      { id: 'tech-27', slug: 'kotlin', label: 'KOTLIN', icon: <SiKotlin className='text-purple-500' />, category: 'mobile-development', actionLabel: 'Build Android apps', comingSoon: false }
    ]
  },
  {
    id: 'cat-5',
    slug: 'computer-science',
    label: 'COMPUTER SCIENCE',
    comingSoon: false,
    actionLabel: 'CS Fundamentals',
    icon: <FaBrain className="text-red-400" />,
    technologies: [
      { id: 'tech-28', slug: 'data-structures', label: 'DATA STRUCTURES', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Learn fundamental structures', comingSoon: false },
      { id: 'tech-29', slug: 'algorithms', label: 'ALGORITHMS', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Master problem-solving techniques', comingSoon: false },
      { id: 'tech-30', slug: 'oop', label: 'OOP', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Object-oriented principles', comingSoon: false },
      { id: 'tech-31', slug: 'functional-programming', label: 'FUNCTIONAL PROGRAMMING', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Learn functional paradigms', comingSoon: false },
      { id: 'tech-32', slug: 'design-patterns', label: 'DESIGN PATTERNS', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Software design solutions', comingSoon: false }
    ]
  },
  {
    id: 'cat-6',
    slug: 'behavioral',
    label: 'BEHAVIORAL',
    comingSoon: false,
    actionLabel: 'Professional Skills',
    icon: <FaUsers className="text-pink-400" />,
    technologies: [
      { id: 'tech-33', slug: 'teamwork', label: 'TEAMWORK', icon: <FaUsers className='text-purple-400' />, category: 'behavioral', actionLabel: 'Collaboration skills', comingSoon: false },
      { id: 'tech-34', slug: 'leadership', label: 'LEADERSHIP', icon: <FaUsers className='text-purple-400' />, category: 'behavioral', actionLabel: 'Leadership principles', comingSoon: false },
      { id: 'tech-35', slug: 'communication', label: 'COMMUNICATION', icon: <FaUsers className='text-purple-400' />, category: 'behavioral', actionLabel: 'Effective communication', comingSoon: false },
      { id: 'tech-36', slug: 'problem-solving', label: 'PROBLEM SOLVING', icon: <FaUsers className='text-purple-400' />, category: 'behavioral', actionLabel: 'Critical thinking skills', comingSoon: false }
    ]
  },
  {
    id: 'cat-7',
    slug: 'system-design',
    label: 'SYSTEM DESIGN',
    comingSoon: false,
    actionLabel: 'Architecture Patterns',
    icon: <FaNetworkWired className="text-indigo-400" />,
    technologies: [
      { id: 'tech-37', slug: 'microservices', label: 'MICROSERVICES', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Distributed systems architecture', comingSoon: false },
      { id: 'tech-38', slug: 'monolith', label: 'MONOLITH', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Traditional architecture', comingSoon: false },
      { id: 'tech-39', slug: 'cloud-architecture', label: 'CLOUD ARCHITECTURE', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Cloud-native solutions', comingSoon: false },
      { id: 'tech-40', slug: 'scaling', label: 'SCALING', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Scalable system patterns', comingSoon: false }
    ]
  },
  {
    id: 'cat-8',
    slug: 'devops',
    label: 'DEVOPS',
    comingSoon: false,
    actionLabel: 'DevOps & Tools',
    icon: <FaTools className="text-gray-400" />,
    technologies: [
      { id: 'tech-41', slug: 'git', label: 'GIT', icon: <FaGitAlt className='text-red-500' />, category: 'devops', actionLabel: 'Version control system', comingSoon: false },
      { id: 'tech-42', slug: 'docker', label: 'DOCKER', icon: <FaDocker className='text-blue-500' />, category: 'devops', actionLabel: 'Containerization platform', comingSoon: false },
      { id: 'tech-43', slug: 'aws', label: 'AWS', icon: <FaAws className='text-orange-500' />, category: 'devops', actionLabel: 'Cloud services platform', comingSoon: false },
      { id: 'tech-44', slug: 'gcp', label: 'GCP', icon: <SiGooglecloud className='text-yellow-400' />, category: 'devops', actionLabel: 'Google cloud platform', comingSoon: false }
    ]
  }
];