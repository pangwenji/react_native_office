import { ViewWidth } from '@/utils/index';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProp {
  title: string,
  onClick: () => ({}),
  url: string
  type: string
}

const renderImage = (type: string) => {
  switch (type) {
    case 'purchase':
      return (<Image style={styles.itemIcon} source={require('@/assets/office/office_expense.png')}/>)
    case 'personnel':
      return (<Image style={styles.itemIcon} source={require('@/assets/office/office_attendance.png')} />)
    case 'administration':
      return (<Image style={styles.itemIcon} source={require('@/assets/office/office_overtime.png')} />)
    case 'finance':
      return (<Image style={styles.itemIcon} source={require('@/assets/office/office_cost.png')} />)
  }
}

const GridItem: React.FC<IProp> = (props: IProp) => {
  let { onClick, title, type } = props;
  return (
    <TouchableOpacity onPress={() => onClick} >
      <View style={styles.item}>
        {renderImage(type)}
        <Text style={styles.itemText}>{title}</Text>
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
    width: ITME_ICON_VALUE,
    height: ITME_ICON_VALUE,
  },
  itemText: {
  },
});

export default GridItem;