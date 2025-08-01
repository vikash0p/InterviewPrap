import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaVuejs, FaNodeJs, FaPhp, FaPython, FaJava,
   FaGitAlt, FaDocker, FaAws, FaDatabase, FaMobileAlt, FaCogs, FaTools } from 'react-icons/fa';
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

export const PRACTICAL_INTERVIEWS_DATA: CategoryItem[] = [
  {
    id: 'cat-1',
    slug: 'frontend',
    label: 'FRONTEND',
    comingSoon: false,
    actionLabel: 'Solve Frontend Interview Tasks',
    icon: <FaCode className="text-blue-400" />,
    technologies: [
      { id: 'tech-1', slug: 'html', label: 'HTML', icon: <FaHtml5 className='text-orange-500' />, category: 'frontend', actionLabel: 'Solve HTML Interview Questions', comingSoon: false },
      { id: 'tech-2', slug: 'css', label: 'CSS', icon: <FaCss3Alt className='text-blue-500' />, category: 'frontend', actionLabel: 'Fix and Style Layouts', comingSoon: false },
      { id: 'tech-3', slug: 'javascript', label: 'JAVASCRIPT', icon: <FaJsSquare className='text-yellow-400' />, category: 'frontend', actionLabel: 'Implement JS Interview Logic', comingSoon: false },
      { id: 'tech-4', slug: 'typescript', label: 'TYPESCRIPT', icon: <SiTypescript className='text-blue-600' />, category: 'frontend', actionLabel: 'Apply TypeScript in Scenarios', comingSoon: false },
      { id: 'tech-5', slug: 'react', label: 'REACT', icon: <FaReact className='text-sky-500' />, category: 'frontend', actionLabel: 'Build Components in React', comingSoon: false },
      { id: 'tech-6', slug: 'angular', label: 'ANGULAR', icon: <FaAngular className='text-red-500' />, category: 'frontend', actionLabel: 'Answer Angular Interview Tasks', comingSoon: true },
      { id: 'tech-7', slug: 'vue', label: 'VUE', icon: <FaVuejs className='text-green-500' />, category: 'frontend', actionLabel: 'Solve Vue.js Coding Challenges', comingSoon: true },
      { id: 'tech-8', slug: 'svelte', label: 'SVELTE', icon: <SiSvelte className='text-orange-400' />, category: 'frontend', actionLabel: 'Apply Svelte in UI Problems', comingSoon: true },
      { id: 'tech-9', slug: 'nextjs', label: 'NEXT.JS', icon: <SiNextdotjs className='text-white' />, category: 'frontend', actionLabel: 'Build Pages in Next.js', comingSoon: false }
    ]
  },
  {
    id: 'cat-2',
    slug: 'backend',
    label: 'BACKEND',
    comingSoon: false,
    actionLabel: 'Solve Backend Interview Problems',
    icon: <FaServer className="text-green-400" />,
    technologies: [
      { id: 'tech-10', slug: 'nodejs', label: 'NODE.JS', icon: <FaNodeJs className='text-green-500' />, category: 'backend', actionLabel: 'Build Backend in Node.js', comingSoon: false },
      { id: 'tech-11', slug: 'express', label: 'EXPRESS', icon: <FaServer className='text-gray-500' />, category: 'backend', actionLabel: 'Implement Express APIs', comingSoon: false },
      { id: 'tech-12', slug: 'php', label: 'PHP', icon: <FaPhp className='text-indigo-500' />, category: 'backend', actionLabel: 'Write PHP Interview Solutions', comingSoon: false },
      { id: 'tech-13', slug: 'python', label: 'PYTHON', icon: <FaPython className='text-yellow-500' />, category: 'backend', actionLabel: 'Solve Python Coding Tasks', comingSoon: false },
      { id: 'tech-14', slug: 'django', label: 'DJANGO', icon: <SiDjango className='text-green-700' />, category: 'backend', actionLabel: 'Create APIs in Django', comingSoon: false },
      { id: 'tech-15', slug: 'ruby-on-rails', label: 'RUBY ON RAILS', icon: <SiRubyonrails className='text-red-500' />, category: 'backend', actionLabel: 'Build Features with Rails', comingSoon: false },
      { id: 'tech-16', slug: 'java', label: 'JAVA', icon: <FaJava className='text-red-700' />, category: 'backend', actionLabel: 'Complete Java Interview Scenarios', comingSoon: false },
      { id: 'tech-17', slug: 'spring', label: 'SPRING', icon: <SiSpring className='text-green-600' />, category: 'backend', actionLabel: 'Code REST APIs with Spring', comingSoon: false },
      { id: 'tech-18', slug: 'dotnet', label: '.NET', icon: <SiDotnet className='text-purple-600' />, category: 'backend', actionLabel: 'Solve .NET Backend Tasks', comingSoon: false }
    ]
  },
  {
    id: 'cat-3',
    slug: 'database',
    label: 'DATABASE',
    comingSoon: false,
    actionLabel: 'Design and Query Databases',
    icon: <FaDatabase className="text-yellow-400" />,
    technologies: [
      { id: 'tech-19', slug: 'mongodb', label: 'MONGODB', icon: <SiMongodb className='text-green-700' />, category: 'database', actionLabel: 'Query MongoDB Data Sets', comingSoon: false },
      { id: 'tech-20', slug: 'postgresql', label: 'POSTGRESQL', icon: <SiPostgresql className='text-blue-700' />, category: 'database', actionLabel: 'Design Postgres Schemas', comingSoon: false },
      { id: 'tech-21', slug: 'mysql', label: 'MYSQL', icon: <SiMysql className='text-blue-500' />, category: 'database', actionLabel: 'Solve MySQL Interview Queries', comingSoon: false },
      { id: 'tech-22', slug: 'redis', label: 'REDIS', icon: <SiRedis className='text-red-600' />, category: 'database', actionLabel: 'Implement Redis Logic', comingSoon: false },
      { id: 'tech-23', slug: 'graphql', label: 'GRAPHQL', icon: <SiGraphql className='text-pink-500' />, category: 'database', actionLabel: 'Design GraphQL Queries', comingSoon: false }
    ]
  },
  {
    id: 'cat-4',
    slug: 'mobile-development',
    label: 'MOBILE DEVELOPMENT',
    comingSoon: false,
    actionLabel: 'Build Mobile Interview Apps',
    icon: <FaMobileAlt className="text-purple-400" />,
    technologies: [
      { id: 'tech-24', slug: 'react-native', label: 'REACT NATIVE', icon: <FaReact className='text-blue-400' />, category: 'mobile-development', actionLabel: 'Create Cross-platform UIs', comingSoon: false },
      { id: 'tech-25', slug: 'flutter', label: 'FLUTTER', icon: <SiFlutter className='text-sky-400' />, category: 'mobile-development', actionLabel: 'Build UIs with Widgets', comingSoon: false },
      { id: 'tech-26', slug: 'swift', label: 'SWIFT', icon: <SiSwift className='text-orange-400' />, category: 'mobile-development', actionLabel: 'Develop iOS Interview Apps', comingSoon: false },
      { id: 'tech-27', slug: 'kotlin', label: 'KOTLIN', icon: <SiKotlin className='text-purple-500' />, category: 'mobile-development', actionLabel: 'Code Android Interview Tasks', comingSoon: false }
    ]
  },
  {
    id: 'cat-5',
    slug: 'computer-science',
    label: 'COMPUTER SCIENCE',
    comingSoon: false,
    actionLabel: 'CS Interview Preparation',
    icon: <FaBrain className="text-red-400" />,
    technologies: [
      { id: 'tech-28', slug: 'data-structures', label: 'DATA STRUCTURES', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Implement Interview Structures', comingSoon: false },
      { id: 'tech-29', slug: 'algorithms', label: 'ALGORITHMS', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Solve Algorithmic Problems', comingSoon: false },
      { id: 'tech-30', slug: 'oop', label: 'OOP', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Apply OOP Concepts', comingSoon: false },
      { id: 'tech-31', slug: 'functional-programming', label: 'FUNCTIONAL PROGRAMMING', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Use Functional Patterns', comingSoon: false },
      { id: 'tech-32', slug: 'design-patterns', label: 'DESIGN PATTERNS', icon: <FaCogs className='text-gray-500' />, category: 'computer-science', actionLabel: 'Apply Design Pattern Solutions', comingSoon: false }
    ]
  },
  {
    id: 'cat-7',
    slug: 'system-design',
    label: 'SYSTEM DESIGN',
    comingSoon: false,
    actionLabel: 'Practice System Design Interviews',
    icon: <FaNetworkWired className="text-indigo-400" />,
    technologies: [
      { id: 'tech-37', slug: 'microservices', label: 'MICROSERVICES', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Design Microservices Architecture', comingSoon: false },
      { id: 'tech-38', slug: 'monolith', label: 'MONOLITH', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Structure Monolith Systems', comingSoon: false },
      { id: 'tech-39', slug: 'cloud-architecture', label: 'CLOUD ARCHITECTURE', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Propose Cloud Solutions', comingSoon: false },
      { id: 'tech-40', slug: 'scaling', label: 'SCALING', icon: <FaNetworkWired className='text-indigo-500' />, category: 'system-design', actionLabel: 'Plan for System Scaling', comingSoon: false }
    ]
  },
  {
    id: 'cat-8',
    slug: 'devops',
    label: 'DEVOPS',
    comingSoon: false,
    actionLabel: 'DevOps Interview Readiness',
    icon: <FaTools className="text-gray-400" />,
    technologies: [
      { id: 'tech-41', slug: 'git', label: 'GIT', icon: <FaGitAlt className='text-red-500' />, category: 'devops', actionLabel: 'Solve Git Operations', comingSoon: false },
      { id: 'tech-42', slug: 'docker', label: 'DOCKER', icon: <FaDocker className='text-blue-500' />, category: 'devops', actionLabel: 'Use Docker in Scenarios', comingSoon: false },
      { id: 'tech-43', slug: 'aws', label: 'AWS', icon: <FaAws className='text-orange-500' />, category: 'devops', actionLabel: 'Apply AWS Interview Skills', comingSoon: false },
      { id: 'tech-44', slug: 'gcp', label: 'GCP', icon: <SiGooglecloud className='text-yellow-400' />, category: 'devops', actionLabel: 'Answer GCP-Based Problems', comingSoon: false }
    ]
  }
];
