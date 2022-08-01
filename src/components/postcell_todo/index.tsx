import { Colors } from '@/utils/colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const renderUserName = (props:any) => { 
  const {post, type} = props;
  let statusColor:string = Colors.LIGHT_ORANGE;
  if(post.status == '同意')
    statusColor = 'green';
  else if(post.status == '不同意')
    statusColor = 'red';
  return (
    <Text style={
      [
        styles.currentName,
        { color: statusColor }
      ]}
      numberOfLines={1}>{post.status}
    </Text>
  );
};

const renderDelegateType = () => { }

const renderStatus=()=>{}
interface IProps { 
  post?: any,
  type?: string,
  onSelect: (args: any) => {}
}

const PostCell: React.FC<any> = (props: any) => { 
  console.log(props,'ggg')
  const {post, type} = props;
  // let titleColor = (post.timeOut ? '#f00' : '#333');
  // let timeTitle = (type === "已办任务" ? props.post.endTime : props.post.startTime);
  return (
    <TouchableOpacity onPress={post => { }}>
      <View style={styles.BigView}>

        <View style={styles.leftView}>
          <View style={styles.topText}>
            <Text style={{ fontSize: 14, color: '#f00' }} numberOfLines={1}>{'已办任务'}--{'经办'}</Text>
          </View>
          <View style={styles.bottomText}>
            {(type === "待办" || type === "已办任务" || type === "代理任务") && renderUserName(props)}
            {(type === "代理任务") && renderDelegateType()}
            {(type === "我的申请" || type === "已办任务" || type === "代理任务") && renderStatus()}
            <Text style={styles.timeTitle}>{'2022-07-22 12:34:12'}</Text>
          </View>
        </View>

        <View style={styles.rightView}>
          <Image style={styles.postButton} source={require('@/assets/img/icon/icon-next.png')}/>
        </View>

      </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  BigView:
  {
    backgroundColor:'white',
    borderBottomWidth:1,
    borderBottomColor:Colors.LIGHT_GREY,
    flexDirection: 'row',
    height:60,
  },
  leftView:
  {
    flex:9.5,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    flexDirection:'column',
  },
  rightView:
  {
    flex:0.5,
    marginTop:10,
    marginBottom:10,
    marginRight:10,
  },
  topText:
  {
    flex:1,
  },
  bottomText:
  {
    flex:1,
    flexDirection:'row',
  },

  textTitle:
  {
    fontSize:14,
    color:Colors.BLACK,
  },
  userName:
  {
    flex:4,
    marginTop:5,
    fontSize:11,
    color:Colors.GREY,
    textAlign: 'left',
  },
  delegateType:
  {
    flex:2,
    marginTop:5,
    fontSize:11,
    color:Colors.GREY,
    textAlign: 'left',
  },
  currentName:
  {
    flex:3,
    marginTop:5,
    fontSize:11,
    color:Colors.LIGHT_ORANGE,
    textAlign: 'left',
  },
  timeTitle:
  {
    flex:5,
    marginTop:5,
    fontSize:11,
    color:Colors.GREY,
    textAlign: 'right',
  },
  postButton:
  {
    width: 8,
    height: 13,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop:10,
  }
});

export default PostCell