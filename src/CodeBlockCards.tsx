import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const CodeBlockCards: React.FC<{before: boolean}> = ({before}) => {
	const frame = useCurrentFrame();
	let pxTransform: number = 0;
	let pxOpacity: number = 0;
	if (!before) {
		if (frame > 30) {
			pxTransform = interpolate(frame, [30, 80], [0, 20], {
				extrapolateRight: 'clamp',
			});
			pxOpacity = interpolate(frame, [80, 120], [0, 1], {
				extrapolateRight: 'clamp',
			});
		}
	}

	return (
		<pre className="pt-3">
			<code className="grid leading-4">
				<span
					className="relative m-1  px-4 text-xl before:inline-block before:w-6 
								   before:text-gray-500 before:content-['1']"
				>
					<span className="text-blue-400">{`  movies`}</span>
					<span className="text-purple-400">.map</span>
					<span className="text-gray-300">((movie)</span>
					<span className=""> </span>
					<span className="text-pink-400">{`=>`}</span>
					<span className=""> </span>
					<span className="text-gray-300">{`{`}</span>
				</span>
				<span
					className="relative m-1  px-4 text-xl before:inline-block before:w-6 
								   before:text-gray-500 before:content-['2']"
				>
					<span className="text-pink-400">{'   return'}</span>
					<span className="text-gray-300"> (</span>
				</span>
				<span
					className="relative m-1  px-4 text-xl before:inline-block before:w-6 
								   before:text-gray-500 before:content-['3']"
				>
					<span className="text-gray-300">{'      <'}</span>
					<span className="text-green-400">div</span>
					<span className="text-gray-300">{`>`}</span>
				</span>
				<span
					className="relative m-1  px-4 text-xl before:inline-block before:w-6 
								   before:text-gray-500 before:content-['4']"
				>
					<span className="text-gray-300">{`         <`}</span>
					<span className="text-green-400">a</span>
					<span className=""> </span>
					<span className="text-purple-400">href</span>
					<span className="text-pink-400">=</span>
					<span className="text-gray-300">{`{`}</span>
					<span className="text-green-400">`/details/</span>
					<span className="text-pink-400">{'${'}</span>
					<span className="text-blue-400">movie</span>
					<span className="text-gray-300">.id</span>
					<span className="text-pink-400">{'}'}</span>
					<span className="text-green-400">`</span>
					<span className="text-gray-300">{`}>`}</span>
				</span>
				<span
					className="relative m-1  px-4 text-xl before:inline-block before:w-6 
								   before:text-gray-500 before:content-['5']"
				>
					<span className="text-gray-300">{`           <`}</span>
					<span className="text-green-400">img</span>
				</span>
				<span
					className={`relative m-1 border-l-2 border-l-green-500 bg-green-800/20 px-4 
														 py-1 text-xl before:inline-block before:w-6 
														 before:text-gray-400 before:content-[attr(data-attr)]`}
					style={{
						opacity: pxOpacity,
						display: `${frame > 80 && !before ? 'block' : 'none'}`,
					}}
					data-attr="6 +"
				>
					<span className="text-purple-400">
						{'             transition:name'}
					</span>
					<span className="text-pink-400">=</span>
					<span className="text-gray-300">{`{`}</span>
					<span className="text-blue-400">movie</span>
					<span className="text-gray-300">.name</span>
					<span className="text-gray-300">{`}`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['7']" : "before:content-['6']"
								}`}
					style={{
						transform: `translateY(${pxTransform}px)`,
					}}
				>
					<span className="text-purple-400">{`             class`}</span>
					<span className="text-pink-400">=</span>
					<span className="text-green-400">"inset-0 h-full w-full"</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['8']" : "before:content-['7']"
								}`}
					style={{
						transform: `translateY(${pxTransform}px)`,
					}}
				>
					<span className="text-purple-400">{`             src`}</span>
					<span className="text-pink-400">=</span>
					<span className="text-gray-300">{`{`}</span>
					<span className="text-blue-400">movie</span>
					<span className="text-gray-300">.url</span>
					<span className="text-gray-300">{`}`}</span>
					<span className="text-gray-300">{` />`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['9']" : "before:content-['8']"
								}`}
					style={{
						transform: `translateY(${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`         </`}</span>
					<span className="text-green-400">a</span>
					<span className="text-gray-300">{`>`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['10']" : "before:content-['9']"
								}`}
					style={{
						transform: `translateY(${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`      </`}</span>
					<span className="text-green-400">div</span>
					<span className="text-gray-300">&gt;</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['11']" : "before:content-['10']"
								}`}
					style={{
						transform: `translateY(${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`   )`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['12']" : "before:content-['11']"
								}`}
					style={{
						transform: `translateY(${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{` }`}</span>
				</span>
			</code>
		</pre>
	);
};
