import NextSidebar from '@/components/mockInterviewComponents/nextjs-mock-components/NextSidebar';
import { NextMockData } from '@/main/data/nextData/NextMockData';
import { NextJsMetaData } from '@/main/meta/NextJsMetaData';
import React from 'react';

interface NextLayoutProps {
	children: React.ReactNode;
}

export const metadata = NextJsMetaData;
const ReactInterviewQuestionLayout = ({ children }: NextLayoutProps) => {
	return (
		<div className='w-full min-h-screen lg:flex lg:pl-1/4'>
			<NextSidebar data={NextMockData} />

			{/* Main Content */}
			<div className='lg:w-3/4 ml-auto p-6 lg:pl-8 bg-gradient-to-b from-gray-900 to-gray-900 min-h-screen'>
				<div className='prose prose-invert'>{children}</div>
			</div>
		</div>
	);
};

export default ReactInterviewQuestionLayout;
