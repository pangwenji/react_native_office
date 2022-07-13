import { ViewHeight } from '@/utils/index';
import React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native';


const commonTouchable = (props: any, type: string) => { 
  let {bg,fontColor,text,iconRadius,icon, onClick,top} = props;
  return (
    <TouchableHighlight style={{marginTop: top?top:1}} onPress={() => onClick()} >
      <View style={
              {
                height: ViewHeight / 14,
                backgroundColor: bg ? bg : '#ffffff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {type === 'nextIcon' ? <Image style={{marginLeft: 10,width: (ViewHeight /14)*0.5,height: (ViewHeight /14)*0.5,borderRadius: iconRadius?iconRadius:4}} source={icon} /> : <View />}
             <Text style={{marginLeft: 10, flex: 1,color: fontColor?fontColor:'#333',}}>{text}</Text>
             <Image style={styles.nextIcon} source={require('../img/icon/icon-next.png')} />
          </View>
      </TouchableHighlight>
    )
}

const Line: React.FC = (props:any) => { 

  let { type } = props;
  switch (type) { 
    case 'nextIcon':
        commonTouchable(props,'nextIcon')
      break;
      case 'next':
        commonTouchable(props,'next')
      break;
      case 'text':
        commonTouchable(props,'text')
      break;
    default:
      break;
  }
  return(
      <View style={{flexWrap: 'wrap'}}>
        <Text style={{marginLeft: 10}}>
            type: 类型('text','next','nextIcon'){'\n'}
            height: item高度，默认为界面高度的1/14{'\n'}
            top:上边距（外）默认值：1{'\n'}
            bg: 背景色，默认白色{'\n'}
            text:中间文本（type为‘text’时，文本居中显示）{'\n'}
            fontSize:文本字体大小，默认为18{'\n'}
            fontColor:文本字体颜色，默认黑色{'\n'}
            icon:左边图标（仅type为‘nextIcon’时显示）{'\n'}
            iconRadius:图标弧度，默认4{'\n'}
            onClick:点击响应函数{'\n'}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  nextIcon: {
    width: 8,
    height: 14,
    marginRight: 10,
  }
});
export default Line;