import {
	AbsoluteFill,
	staticFile,
	OffthreadVideo,
	// useVideoConfig,
} from 'remotion';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';

// Import {Logo} from './Logo';
// Import {Subtitle} from './Subtitle';
// Import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Terminal} from './Terminal';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = () =>
	// 	{
	// 	// titleText: propOne,
	// 	// titleColor: propTwo,
	// 	// logoColor: propThree,
	// }
	{
		// const {width, height} = useVideoConfig();

		return (
			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={360}>
					<AbsoluteFill className="items-center justify-center bg-gray-950">
						<div
							className="flex h-full w-full items-center justify-center 
													bg-[url('./assets/background.svg')]"
						>
							<Terminal before />
							<OffthreadVideo
								startFrom={60}
								endAt={420}
								src={staticFile('output.webm')}
								className="min-h-[300px] w-full rounded-lg p-[1px] md:min-h-[360px] lg:min-h-[480px] lg:w-1/2"
							/>
						</div>
					</AbsoluteFill>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={fade()}
					timing={linearTiming({durationInFrames: 30})}
				/>
				<TransitionSeries.Sequence durationInFrames={450}>
					<AbsoluteFill className="items-center justify-center bg-gray-950">
						<div
							className="flex h-full w-full items-center justify-center
							 bg-[url('./assets/background.svg')]"
						>
							<Terminal before={false} />
							<OffthreadVideo
								startFrom={520}
								endAt={990}
								src={staticFile('output.webm')}
								className="min-h-[300px] w-full rounded-lg p-[1px] md:min-h-[360px] lg:min-h-[480px] lg:w-1/2"
							/>
						</div>
					</AbsoluteFill>
				</TransitionSeries.Sequence>
			</TransitionSeries>
		);
	};
