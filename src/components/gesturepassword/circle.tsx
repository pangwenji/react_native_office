import React from "react";
import { StyleSheet, View } from "react-native";

interface IProp {
	key: string;
	fill: boolean;
	color: any;
	x: number;
	y: number;
	r: number;
}

const Circle: React.FC<IProp> = (props:IProp) => { 
  let {color, fill, x, y, r} = props;
  return (
	  <View style={
		  [
			  styles.outer,
			  {
				  left: x - r,
				  top: y - r,
				  width: 2 * r,
				  height: 2 * r,
				  borderRadius: r
			  },
			  fill && { borderColor: color }
		  ]}>

		  {fill && <View style={{
			  width: 2 * r / 3,
			  height: 2 * r / 3,
			  borderRadius: r / 3,
			  backgroundColor: color
		  }} />}
      </View>
  )
}

const styles = StyleSheet.create({
    outer: {
        position: 'absolute',
        borderColor: '#8E91A8',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Circle;