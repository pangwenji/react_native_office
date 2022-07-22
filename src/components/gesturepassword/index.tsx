import { ViewWidth,ViewHeight} from '@/utils/index';
import React, { useEffect, useState } from 'react';
import { isPointInCircle } from './helper';
import {
	StyleSheet,
	Text,
	View,
	PanResponder,
	GestureResponderEvent,
	PanResponderGestureState
} from 'react-native';
import Line from './line';
import Circle from './circle';

const Radius = ViewWidth / 10; //屏幕 横向 
// let circle: Array<circleProp> = []
let isMoving: boolean = false;
let lastIndex: number = -1;
let sequence: number;
type circleProp = {
	isActive: boolean,
	x: number,
	y: number
}

//移动
const onMove = (event:Event, gestureState:any) => { }

const getTouchChar = (touch:any) => {
    var x = touch.x;
	var y = touch.y;
	for (let i=0; i < 9; i++) {
		if ( isPointInCircle({x, y}, circle[i], Radius) ) {
			return i;
		}
	}
	return false;
}

const resetActive = (circle:Array<circleProp>,setCircle:Function,lines:Array<any>, setLines:Function) => { 
	setLines(lines);
	for (let i = 0; i < 9; i++) {
		circle[i].isActive = false;
	}
	setCircle(circle)
	// this.props.onReset && this.props.onReset();
}

const setActive = (index:number,circle:Array<circleProp>,setCircle:Function) => { 
	circle[index].isActive = true;
	setCircle(circle);
}

//开始
const onStart = (event: GestureResponderEvent, gestureState: PanResponderGestureState,circle:Array<circleProp>,setCircle:Function,lines:Array<any>, setLines:Function) => { 
	let x = event.nativeEvent.pageX;
	let y = event.nativeEvent.pageY - Top;

	let lastChar = getTouchChar({x, y});
	if ( lastChar ) {
		isMoving = true;
		lastIndex = lastChar
		sequence = lastChar;
		resetActive(circle,setCircle,lines, setLines);
		setActive(lastIndex,circle,setCircle,);

		var point = {
			x: circle[lastIndex].x,
			y: circle[lastIndex].y
		};

		this.refs.line.setNativeProps({start: point, end: point});

		// this.props.onStart && this.props.onStart();

		// if ( this.props.interval>0 ) {
		// 	clearTimeout(this.timer);
		// }
	}
}

//结束
const onEnd = (event: Event, gestureState: any) => { }

//画圆形
const renderCircles = (circle:Array<circleProp>,props: any) => {
	let array:Array<any>= [], fill, color;
	let { status, wrongColor, rightColor } = props;
	circle.forEach((c, i) =>{
		fill = c.isActive;
		color = status === 'wrong' ? wrongColor : rightColor;
		array.push(
			<Circle
				key={'c_' + i}
				fill={fill}
				color={color}
				x={c.x}
				y={c.y}
				r={Radius}
			/>
		)
	});

	return array;
 }

//画直线
const renderLines = () => { }

//初始化circlu数据
const initCircleValue = (circle:Array<circleProp>) => { 
	let Margin = Radius;
	for (let i = 0; i < 9;i++) { 
        let p = i % 3; //取模 求余数
		let q = Number(i / 3);// 整除
		circle.push({
			isActive: false,
			x: p * (Radius * 2 + Margin) + Margin + Radius,
			y: q * (Radius * 2 + Margin) + Margin + Radius
		});
	}
}

const GesturePassword: React.FC = (props: any) => { 
	let [circle, setCircle] = useState([]);
	let [lines, setLines] = useState([]);
	let _panResponder: any;
	let {
		status,
		wrongColor,
		rightColor,
		children,
		style,
		textStyle,
	} = props;
  let [message] = useState('')
  let color = status === 'wrong' ? wrongColor : rightColor;
  //初始化画板
	useEffect(() => { 
		initCircleValue(circle)
		_panResponder = PanResponder.create({
            // 要求成为响应者：
			// 返回ture时，表示该组件愿意成为触摸事件的响应者，如触摸点击。默认返回false
            onStartShouldSetPanResponder: (event:GestureResponderEvent, gestureState:PanResponderGestureState) => true,
           // 返回ture时，表示该组件愿意成为触摸(滑屏)事件的响应者，如触摸滑屏，默认返回false。
			onStartShouldSetPanResponderCapture: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => true,
           // 与onStartShouldSetPanResponder相同，当此组件A里包含了子组件B也为触摸事件响应者时，若此时设为true，则父组件A优先级更高
			onMoveShouldSetPanResponder: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => true,
           
            // 与onMoveShouldSetPanResponder相同，当此组件A里包含了子组件B也为触摸事件响应者时，若此时设为true，则父组件A优先级更高
			onMoveShouldSetPanResponderCapture: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => true,
            // 开始手势操作
            onPanResponderGrant: (event:GestureResponderEvent, gestureState:PanResponderGestureState) => onStart(event, gestureState,circle,setCircle,lines, setLines),
            // 移动操作
            onPanResponderMove: (event:GestureResponderEvent, gestureState:PanResponderGestureState) => onMove(event, gestureState),
            // 手势松开时触发该事件
            onPanResponderRelease: (event:GestureResponderEvent, gestureState:any) => onEnd(event, gestureState)
        });
	},[]) // 相当于componentWillMount 只执行一次
	
  return (
      <View style={[styles.frame, style, {flex: 1}]}>
          <View style={styles.message}>
              <Text style={[styles.msgText, textStyle, {color: color}]}>
                  {message || props.message}
              </Text>
          </View>
          <View style={styles.board} {..._panResponder.panHandlers}>
              {renderCircles(circle,props)}
              {renderLines()}
              <Line color={color} />
          </View>
          {children}
      </View>
  )
}

const Top = (ViewHeight - ViewWidth) / 2.0 * 1.5;

const  styles = StyleSheet.create({
    frame: {
        backgroundColor: '#292B38'
    },
    board: {
        position: 'absolute',
        left: 0,
        top: Top,
        width: ViewWidth,
        height: ViewHeight
    },
    message: {
        position: 'absolute',
        left: 0,
        top: Top / 2.2,
        width: ViewWidth,
        height: Top / 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    msgText: {
        fontSize: 14
    }
});

export default GesturePassword;