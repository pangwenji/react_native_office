import {Dimensions} from 'react-native';
const {height:ViewHeight,width:ViewWidth} = Dimensions.get('window');
export { ViewHeight, ViewWidth }

export const goBack = (props: any) => { 
  console.log(props,'props')
  let { navigation } = props;
  navigation.goBack();
}