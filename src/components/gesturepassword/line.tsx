import React, { useRef, forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import { getTransform, isEquals } from "./helper";

interface IProp { 
	color?: string
	start: {
		x: number,
		y:number
	},
	end: {
		x: number,
		y:number
	},
}

//使用React.forwardRef  穿透给父组件使用
const Lines = forwardRef((props: IProp, refparams: any) => { 
	let { start, end, color } = props;
	if ( isEquals(start, end) ) return null;
	let transform = getTransform(start, end);
	let length = transform.d;
	let angle = transform.a + 'rad';
	let moveX = transform.x;
	let moveY = transform.y;
	return (
		<View ref={refparams} style={[
			styles.line,
			{
				backgroundColor: color,
				left: start.x,
				top: start.y,
				width: length
			},
			{
				transform: [
					{ translateX: moveX },
					{ translateY: moveY },
					{ rotateZ: angle }]
			}
		]} />
	)
})

const  styles = StyleSheet.create({
	line: {
		position: 'absolute',
		height: 1
	}
  });

export default Lines;