import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoadMoreFooter: React.FC = () => { 
  return (
    <View style={styles.footer}>
        <Text style={styles.footerTitle}>正在加载更多……</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
  },

  footerTitle: {
      marginLeft: 10,
      fontSize: 15,
      color: 'gray'
  }
})

export default LoadMoreFooter;