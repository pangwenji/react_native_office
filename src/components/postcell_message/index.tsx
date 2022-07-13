import { ViewHeight } from '@/utils/';
import { Colors } from '@/utils/colors';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const _renderCountView = (props:any) => { 
  let count = props.post.count;
  if (count > 99) {
    count = '99+';
  }
  return (
    <View style={styles.circle}>
      <Text style={styles.count}>
        {count}
      </Text>
    </View>
  )
}

const PostCell: React.FC<any> = (props:any) => { 
  let { onSelect, post: {icon,title } } = props
  return (
      <TouchableHighlight onPress={props.onSelect}>
      <View style={styles.container}>
        <Image source={props.post.icon} style={styles.postImage}/>
          <View style={styles.postContainer}>
            <View style={styles.postDetailsContainer}>
              <Text style={styles.postTitle}>
                {props.post.title}
              </Text>
              <Text style={styles.postDetailsLine}>
                {props.post.content}
              </Text>
            </View>
            {props.post.count > "0" && _renderCountView(props)}
        </View>
      </View>
    </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:ViewHeight / 10,
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.LIGHT_GREY,
    borderBottomWidth: 1.5,
  },
  postContainer: {
    flex: 1,
    flexDirection: 'row',
    height:ViewHeight / 10,
    justifyContent: 'center',
  },
  postImage: {
    margin: 10,
    width: 30,
    height: 30,
  },
  postDetailsContainer: {
    margin: 2,
    flex: 1,
    height:ViewHeight / 10,
    justifyContent: 'center',
  },
  postTitle: {
    fontSize: 17,
    textAlign: 'left',
    marginBottom: 5,
    color: Colors.BLACK,
  },
  postDetailsLine: {
    fontSize: 14,
    color: 'gray',
  },
  circleContainer: {
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#fe0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  count: {
    fontSize: 10,
    color: Colors.WHITE,
    backgroundColor:'transparent'
  }
});

export default PostCell;