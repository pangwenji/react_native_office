import { Colors } from '@/utils/colors';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import NavigationBar from '../navigationbar';
import Spinner from '../spinner';


const onSelect = (argument:any) => { 

}

//返回上一页
const goBack = () => { 
  // const {navigator} = this.props;
  // navigator.pop();
}

const _renderItem = (data: any) => { 
  let { item } = data;
  return (
    <TouchableHighlight onPress={()=>onSelect(data)}>
        <View style={styles.BigView}>
            <View style={styles.leftView}>
              <Text style={styles.textStyle} numberOfLines={1}>{item.officeFormData.name}</Text>
            </View>
            <View style={styles.rightView}>
              <Image style={styles.postButton} source={require('../img/icon/icon-next.png')}/>
            </View>
        </View>
    </TouchableHighlight>
  );
}

const OfficeList: React.FC = (props: any) => { 
  let {officeTemplateList } = props;
  return(
    <View style={styles.background}>
        <NavigationBar title={''} titleColor={Colors.WHITE}
          backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
          leftButtonIcon={require('../img/office/icon-backs.png')}/>
        <FlatList
          data={officeTemplateList.templateListData}
          renderItem={_renderItem}/>
        <View>
          <Spinner visible={officeTemplateList.templateListFetching} text={'加载中,请稍后...'}/>
        </View>
    </View>
 );
}

const styles = StyleSheet.create({
  BigView:{
    backgroundColor:'white',
    borderBottomWidth:1,
    borderBottomColor:Colors.LIGHT_GREY,
    flexDirection: 'row',
    height:44,
  },
  leftView:{
    flex:9.5,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    flexDirection:'row',
  },
  background:{
    flex: 1,
    backgroundColor: Colors.GRAY_GAY,
  },
 postButton: {
    width: 8,
    height: 13,
		margin: 15,
		alignSelf: 'center',
		justifyContent: 'center'
	},
  textStyle:{
    fontSize:14,
    color:Colors.BLACK,
  },
  rightView: {}
});

export default OfficeList;