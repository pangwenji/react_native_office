import React, { useEffect } from 'react';
import { View } from 'react-native';

const handleChange = (text: string, props: any) => {
	let { onUserInput } = props;
	onUserInput(text)
}
const Hide: React.FC = (props: any) => {
	let { row } = props;
	useEffect(() => {
		if (row.name) {
			!row.content ? handleChange('hide', props) : handleChange(row.content, props)
		}
	}, [])
	return (
		<View style={{ height: 0, }} />
	);
}
export default Hide;