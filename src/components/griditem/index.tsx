import { ViewWidth } from '@/utils/index';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProp { 
  row: any,
  onClick: (row: any) => ({}),
  icon?:string
}
const GridItem: React.FC<IProp> = (props: IProp) => { 
  // let {images } =  useSelector<any>(state =>state.office)
  let images:Array<any> = []
  let {onClick,row,icon} = props
  return(
    <TouchableOpacity onPress={()=>onClick(row)} >
      <View style={styles.item}>
          {/* <Image style={styles.itemIcon} source={require('')}/> */}
          <Text style={styles.itemText}>{row.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const ITEM_VALUE = ViewWidth / 3 - 11;
const ITME_ICON_VALUE = ITEM_VALUE * 0.6;
const styles = StyleSheet.create({
  item: {
    width: ITEM_VALUE,
    height: ITEM_VALUE,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    margin: 5,
  },
  itemIcon: {
    width:ITME_ICON_VALUE,
    height: ITME_ICON_VALUE,
  },
  itemText: {
  },
});

export default GridItem;