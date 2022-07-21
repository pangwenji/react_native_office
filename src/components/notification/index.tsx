import { ViewHeight,ViewWidth} from '@/utils/index';
import React, { useEffect } from 'react';
import { StyleSheet, View,TouchableOpacity,Image } from 'react-native';
import { WToast} from 'react-native-smart-tip';

const show = (message:string) => { 
  WToast.show({
    data: message,
    textColor: '#ffffff',
    backgroundColor: '#444444',
    duration: WToast.duration.LONG, //1.SHORT 2.LONG
    position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
  })
}
interface IProps { 
  message:string
}
const ToastTip: React.FC<IProps> = (props: IProps) => { 
  let {message} = props;
  useEffect(() => { 
    show(message)
  },[message])
  return (<View style={styles.containers} />)
}

const styles = StyleSheet.create({
  containers: {
    flex:1
  }
})

export default ToastTip;