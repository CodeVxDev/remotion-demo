import React from 'react';
import {CodeBlockCards} from './CodeBlockCards';
import {CodeBlockMovieDetails} from './CodeBlockMovieDetails';

export const Terminal: React.FC<{before: boolean}> = ({before}) => {
	return (
		<div className="flex flex-col justify-evenly p-4 lg:min-h-full lg:w-1/2">
			{/* <div className="min-h-[300px] w-full rounded-lg bg-gray-900 p-[1px] shadow-sm shadow-slate-400 drop-shadow-lg md:min-h-[360px] lg:min-h-full lg:w-1/2"> */}
			<div
				className="min-h-full overflow-hidden rounded-lg 
				bg-gray-900 px-5 pb-6 pt-4 font-mono text-sm leading-normal
          text-gray-100 subpixel-antialiased shadow-lg outline outline-1 outline-slate-300/50"
			>
				<div className="top mb-2 flex items-center justify-start bg-gray-800 px-4">
					<div className="h-3 w-3 rounded-full bg-red-500" />
					<div className="ml-2 h-3 w-3 rounded-full bg-orange-300" />
					<div className="ml-2 h-3 w-3 rounded-full bg-green-500" />
					<div className="ml-4 flex border-t-2 border-t-blue-500 bg-gray-900 p-2 text-xl text-gray-400">
						components/MovieCards.astro
						<div className="ml-4 h-3 w-3 rounded-lg text-white">X</div>
					</div>
				</div>
				<div className="mt-4">
					{/* <CodeBlock /> */}
					<CodeBlockCards before={before} />
				</div>
			</div>
			{/* </div> */}
			{/* <div className="min-h-[300px] w-full rounded-lg bg-gray-900 p-[1px] shadow-sm shadow-slate-400 drop-shadow-lg md:min-h-[360px] lg:min-h-full lg:w-1/2"> */}
			<div
				className="min-h-full overflow-hidden rounded-lg
          bg-gray-900 px-5 pb-6 pt-4 font-mono text-sm
           leading-normal text-gray-100 subpixel-antialiased shadow-lg 
					outline outline-1 outline-slate-300/50"
			>
				<div className="top mb-2 flex items-center justify-start bg-gray-800 px-4">
					<div className="h-3 w-3 rounded-full bg-red-500" />
					<div className="ml-2 h-3 w-3 rounded-full bg-orange-300" />
					<div className="ml-2 h-3 w-3 rounded-full bg-green-500" />
					<div className="ml-4 flex border-t-2 border-t-blue-500 bg-gray-900 p-2 text-xl text-gray-400">
						pages/details/[id].astro
						<div className="ml-4 h-3 w-3 rounded-lg text-white">X</div>
					</div>
				</div>
				<div className="mt-4">
					{/* <CodeBlock /> */}
					<CodeBlockMovieDetails before={before} />
				</div>
				{/* </div> */}
			</div>
		</div>
	);
};
