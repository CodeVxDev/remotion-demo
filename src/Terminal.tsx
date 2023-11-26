import React from 'react';

export const Terminal: React.FC = () => {
	return (
		<div
			className="h-[300px] w-full rounded-lg p-[1px] dark:bg-gradient-to-bl dark:from-gray-400/30 dark:via-gray-500 dark:to-gray-400/30
      md:h-[360px] lg:h-[480px] lg:w-1/2 shadow-slate-400 drop-shadow-lg shadow-sm"
		>
			<div
				className="h-full overflow-hidden rounded-lg bg-neutral-400/40
          px-5 pb-6 pt-4 font-mono text-sm leading-normal text-gray-800
          subpixel-antialiased shadow-lg dark:bg-gray-800 dark:text-gray-100"
			>
				<div className="top mb-2 flex">
					<div className="h-3 w-3 rounded-full bg-red-500"></div>
					<div className="ml-2 h-3 w-3 rounded-full bg-orange-300"></div>
					<div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
				</div>
				<div className="mt-4 flex flex-col md:flex-row">
					<div className="flex">
						<span className="angled-div-logo z-20 self-center p-1">Test</span>
						{/* <Folder className="mr-1 h-4 w-4" />~/Projects/SoberBlog</span */}
					</div>
					<p
						className="mt-2 self-start pl-2 md:mt-0 md:self-center"
						id="typewriterp"
					>
						omz reload
					</p>
				</div>
			</div>
		</div>
	);
};
