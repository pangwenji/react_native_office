import {Dimensions} from 'react-native';
const {height:ViewHeight,width:ViewWidth} = Dimensions.get('window');
export { ViewHeight, ViewWidth }

export const goBack = (props:any) => { 
  let { navigation } = props;
  navigation.goBack();
}