import React from 'react';
import CircularSlider from './CircularSlider';
import { ReactComponent as DragIcon } from './assets/drag.svg';
import { ReactComponent as EmojiIcon } from './assets/emoji.svg';

const App = () => {
	const [isDragging, setIsDragging] = React.useState(false);
	const styles = {
		wrapper: {
			margin: '2rem',
		},

		h3: {
			margin: '3rem 0 2rem 0',
		},

		pre: {
			fontSize: '0.9rem',
			borderRadius: '0.3rem',
			backgroundColor: '#eeeeee',
			padding: '0.5rem',
		},

		slider: {
			padding: '0 0 0.5rem 0',
		},
	};

	return (
		<div style={styles.wrapper}>
			<div className={styles.slider}>
				<CircularSlider
					label='savings account'
					min={0}
					max={100}
					dataIndex={20}
					prependToValue='$'
					appendToValue='K'
					labelColor='#005a58'
					labelBottom={true}
					knobColor='#005a58'
					knobSize={72}
					progressColorFrom='#00bfbd'
					progressColorTo='#009c9a'
					progressSize={24}
					trackColor='#eeeeee'
					trackSize={24}>
					<DragIcon x='22' y='22' width='28px' height='28px' />
				</CircularSlider>
			</div>
		</div>
	);
};

export default App;
