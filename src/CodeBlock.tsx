/* eslint-disable complexity */
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const CodeBlock: React.FC<{before: boolean}> = ({before}) => {
	const frame = useCurrentFrame();
	let pxTransform: number = 20;
	let pxOpacity: number = 0;
	if (!before) {
		if (frame > 30) {
			pxTransform = interpolate(frame, [30, 80], [20, 0], {
				extrapolateRight: 'clamp',
			});
			pxOpacity = interpolate(frame, [30, 80], [0, 1], {
				extrapolateRight: 'clamp',
			});
		}
	}

	return (
		<pre className="pt-3">
			<code className="grid leading-4">
				<span
					className="relative  m-1 px-4  text-xl before:inline-block before:w-6 before:text-gray-500 before:content-['1']"
					style={{
						transform: `translateY(-20px)`,
					}}
				>
					<span className="text-pink-400">import</span>
					<span className="text-gray-300"> {`{ FormEvent }`} </span>
					<span className="text-pink-400">from</span>
					<span> </span>
					<span className="text-green-400">'react'</span>
					<span>;</span>
				</span>
				<span
					className="relative  m-1 px-4  text-xl before:inline-block before:w-6 before:text-gray-500 before:content-['2']"
					style={{
						transform: `translateY(-20px)`,
					}}
				/>
				<span
					className="relative  m-1 px-4  text-xl before:inline-block before:w-6 before:text-gray-500 before:content-['3']"
					style={{
						transform: `translateY(-20px)`,
					}}
				>
					<span className="text-pink-400">export</span>
					<span className=""> </span>
					<span className="text-pink-400">default</span>
					<span className=""> </span>
					<span className="text-pink-400">function</span>
					<span className=""> </span>
					<span className="text-purple-400">Page</span>
					<span className="text-gray-300">{`() {`}</span>
				</span>
				<span
					className="relative  m-1 px-4  text-xl before:inline-block before:w-6 before:text-gray-500 before:content-['4']"
					style={{
						transform: `translateY(-20px)`,
					}}
				>
					<span className="">{'   '}</span>
					<span className="text-pink-400">async</span>
					<span className=""> </span>
					<span className="text-pink-400">function</span>
					<span className=""> </span>
					<span className="text-purple-400">onSubmit</span>
					<span className="text-gray-300">(event</span>
					<span className="text-pink-400">:</span>
					<span className=""> </span>
					<span className="text-purple-400">FormEvent</span>
					<span className="text-gray-300">&lt;</span>
					<span className="text-purple-400">HTMLFormElement</span>
					<span className="text-gray-300">{`>) {`}</span>
				</span>
				<span
					className={`relative m-1 border-l-2 border-l-green-500 bg-green-800/20 px-4 
														 py-1 text-xl before:inline-block before:w-6 
														 before:text-gray-400 before:content-[attr(data-attr)]`}
					style={{
						// Transform: `translateY(-20px)`,
						opacity: pxOpacity,
						display: `${frame > 35 ? 'block' : 'none'}`,
					}}
					data-attr="5 ++"
				>
					<span className="">{'   '}</span>
					<span className="text-blue-400">event</span>
					<span className="text-purple-400">.preventDefault</span>
					<span className="text-gray-300">();</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
													 before:text-gray-500 ${
															frame > 30
																? "before:content-['6']"
																: "before:content-['5']"
														}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				/>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['7']" : "before:content-['6']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'   '}</span>
					<span className="text-pink-400">const</span>
					<span className=""> </span>
					<span className="text-blue-400">formData</span>
					<span className=""> </span>
					<span className="text-gray-300">=</span>
					<span className=""> </span>
					<span className="text-pink-400">new</span>
					<span className=""> </span>
					<span className="text-purple-400">FormData</span>
					<span className="text-gray-300">(</span>
					<span className="text-blue-400">event</span>
					<span className="text-gray-300">.currentTarget);</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['8']" : "before:content-['7']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'   '}</span>
					<span className="text-pink-400">const</span>
					<span className=""> </span>
					<span className="text-blue-400">response</span>
					<span className=""> </span>
					<span className="">=</span>
					<span className=""> </span>
					<span className="text-pink-400">await</span>
					<span className=""> </span>
					<span className="text-purple-400">fetch</span>
					<span className="text-gray-300">(</span>
					<span className="text-green-400">'/api/submit'</span>
					<span className="">,</span>
					<span className="text-gray-300">{` {`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['9']" : "before:content-['8']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{'     '}method</span>
					<span className="text-pink-400">:</span>
					<span className=""> </span>
					<span className="text-green-400">'POST'</span>
					<span className="text-gray-300">,</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['10']" : "before:content-['9']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'     '}body</span>
					<span className="text-pink-400">:</span>
					<span className=""> formData</span>
					<span className="">,</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['11']" : "before:content-['10']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`   });`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['12']" : "before:content-['11']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				/>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['13']" : "before:content-['12']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'    '}</span>
					<span className="text-gray-500">
						"// Handle response if necessary"
					</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['14']" : "before:content-['13']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'    '}</span>
					<span className="text-pink-400">const</span>
					<span className=""> </span>
					<span className="text-blue-400">data</span>
					<span className=""> </span>
					<span className="text-gray-300">=</span>
					<span className=""> </span>
					<span className="text-pink-400">await</span>
					<span className=""> </span>
					<span className="text-blue-400">response</span>
					<span className="text-purple-400">.json</span>
					<span className="text-gray-300">();</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['15']" : "before:content-['14']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'    '}</span>
					<span className="text-gray-500">\"// ..."</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['16']" : "before:content-['15']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`   }`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['17']" : "before:content-['16']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				/>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['18']" : "before:content-['17']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="">{'   '}</span>
					<span className="text-pink-400">return</span>
					<span className="">{` (`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['19']" : "before:content-['18']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{'      <'}</span>
					<span className="text-green-400">form</span>
					<span className=""> </span>
					<span className="text-purple-400">onSubmit</span>
					<span className="text-pink-400">=</span>
					<span className="text-gray-300">{`{onSubmit}>`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['20']" : "before:content-['19']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`         <`}</span>
					<span className="text-green-400">input</span>
					<span className=""> </span>
					<span className="text-purple-400">type</span>
					<span className="text-pink-400">=</span>
					<span className="text-green-400">"text"</span>
					<span className=""> </span>
					<span className="text-purple-400">name</span>
					<span className="text-pink-400">=</span>
					<span className="text-green-400">"name"</span>
					<span className="text-gray-300"> /&gt;</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['21']" : "before:content-['20']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`         <`}</span>
					<span className="text-green-400">button</span>
					<span className=""> </span>
					<span className="text-purple-400">type</span>
					<span className="text-pink-400">=</span>
					<span className="text-green-400">"submit"</span>
					<span className="text-gray-300">&gt;Submit&lt;/</span>
					<span className="text-green-400">button</span>
					<span className="text-gray-300">&gt;</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['22']" : "before:content-['21']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`      </`}</span>
					<span className="text-green-400">form</span>
					<span className="text-gray-300">&gt;</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['23']" : "before:content-['22']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{`   );`}</span>
				</span>
				<span
					className={`relative m-1  px-4 text-xl before:inline-block before:w-6 
								before:text-gray-500 ${
									frame > 30 ? "before:content-['24']" : "before:content-['23']"
								}`}
					style={{
						transform: `translateY(-${pxTransform}px)`,
					}}
				>
					<span className="text-gray-300">{` }`}</span>
				</span>
			</code>
		</pre>
	);
};
