import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';



interface IProps { 
  visible: boolean,
  text: string
  size?: string,
  overlayColor?: string,
  floatColor?: string
  color?:string
}

// const SIZES = ['small', 'normal', 'large'];

let deflautProp = {
  visible: false,
  color: '#ff9800',
  size: 'large', // 'normal',
  overlayColor: 'rgba(0, 0, 0, 0.25)',
  floatColor: 'rgba(0, 0, 0, 0.45)',
};
const Spinner: React.FC<IProps> = (props: IProps) => {
  let styleAttr = 'Inverse';
  let { visible,size = 'large',overlayColor,floatColor,color,text} = props
  useEffect(() => { 
    deflautProp.visible = visible;
  },[visible])
  if (!deflautProp.visible)
  return (
    <View />
  );
 
  switch (size) {
    case 'small':
      styleAttr = 'SmallInverse';
      size = 'small';
      break;
    case 'large':
      styleAttr = 'LargeInverse';
      size = 'large';
      break;
    }
    return (
      <Modal visible={visible} transparent>
          <View style={styles.container} key={'spinner' + Date.now()}>
                <View style={[styles.background, {backgroundColor: overlayColor}]}>
                      <View style={[styles.float, {backgroundColor:floatColor}]}>
                            <GiftedSpinner
                              color={color}
                              size={size}
                              style={{ flex: 1 }}
                              styleAttr={styleAttr}/>
                                <Text style={{ color: color, fontSize: 16, marginTop: 5, }}>
                                   {text}</Text>
                      </View>
                </View>
          </View>
    </Modal>
    )
}

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  float: {
    height: 150,
    width: 260,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
   }
});
