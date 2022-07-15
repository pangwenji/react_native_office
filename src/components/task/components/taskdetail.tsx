import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import { Colors } from '@/utils/colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const onPress = (props:any) => { 
	const {navigator, route} = props;
    navigator.push({
      name: "TaskApproval",
      component: TaskApprovalContainer,
      taskId: route.taskId,
      processInstanceId: route.processInstanceId,
    });
}

const renderFAB = (props:any) => { 
	const {route} = props;
    if(route.type === 'approval'){
      return (
        <TouchableOpacity style={{width: 56,height: 56,borderRadius: 28,backgroundColor: Colors.mainColor,
            position: 'absolute',bottom: 10,right: 10,elevation: 4,justifyContent: 'center',alignItems: 'center'}}
            onPress={onPress}
          onLongPress={()=>console.log('长按隐藏图标,未处理')}>
          <Image style={{width: 32,height: 32}} source={require('../img/icon/icon-fb-edit.png')}/>
        </TouchableOpacity>
      );
    }else{
      return (<View/>);
    }
}

const renderHistoricView = (props:any) => { 
	const {taskDetail} = props;
    return taskDetail.historicTasks.map((rowData:any)=>{
      if(rowData.deleteReason === '跳过')
        return;
      return (
        <View style={{flexDirection: 'row', }}>
          <View style={{position: 'absolute',flex: 1,width: 1,height:1000,marginLeft:27,backgroundColor:'#ccc',}}/>
          <View style={{width: 56,alignItems: 'center',elevation: 2}}>
            <Image style={{marginTop: 8,width: 48,height: 48,borderRadius: 24,borderWidth: 2,borderColor: '#fff',}} source={require('../img/icon/icon-avatar.png')}/>
          </View>
          <View style={{marginTop: 14,elevation: 2}}>
            <Image source={require('../img/icon/icon-arrow.png')} style={{width: 5,height: 10,}}/>
          </View>
          <View style={{flex: 1,marginTop:8,marginBottom:8,marginRight: 8,padding: 8,backgroundColor:'#fff', borderRadius:2, elevation: 2}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
              <View style={{flexDirection: 'row',alignItems: 'center',}}>
                <Text style={{color: '#333',fontSize: 15,}}>{rowData.assignee}</Text>
              </View>
              <Text style={{fontSize: 15,marginTop:2,color: '#999',}}>{rowData.endTime}</Text>
            </View>
            <View style={{marginTop:4,}}>
              <Text style={{fontSize: 12,marginRight: 8}}>{rowData.approvalRemark}</Text>
              <Text style={{fontSize: 13,color: '#444',alignSelf: 'flex-end'}}>{rowData.approvalComments}</Text>
            </View>
          </View>
        </View>
      );
    });
}

const commonRenderText = (title:string) => {
	return  <Text style={{color:'#999', fontSize: 14}}>单号:{title}</Text>
 }

const processNo = (props: any) => { 
	let { route } = props;
    return	route.type === 'link' ? commonRenderText(route.linkedProcessNo) : commonRenderText(route.processNo) 
}

const goBack = () => { 
	// const {navigator} = this.props;
    // navigator.pop();
}

const renderTableView = (props:any) => { 
	const {taskDetail, navigator} = props;
    return  taskDetail.tableList.map((rowData:any) => {
      return (
        <TouchableOpacity onPress={() => {
          navigator.push({
            name: "ReadTable",
            component: readTable,
            tableData: rowData,
          });
        }}>
          <Text style={{alignSelf:'center',marginTop:8,marginBottom:8,color:'#36a9e1',fontSize:16,}}>{rowData.code}>></Text>
        </TouchableOpacity>
      );
    });
}

const renderTaskView = (props:any) => { 
	const {taskDetail, route, navigator} = props;
    return taskDetail.content.map((rowData:any)=>{
      if (rowData.hide){
        return(<View></View>)
      }
      if(rowData.type === 'text' && rowData.detailType === 'file') {
        //屏蔽模板下载 仅web端需要
        if(rowData.title === ' ')
          return;
        return (<AttachmentDownload {...this.props} row={rowData} processInstanceId={route.processInstanceId} navigator={navigator}/>);
      } else if (rowData.type === 'text' && rowData.detailType === 'linked_process_no') {
        return (
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 8,marginRight: 4,marginTop:5,textAlign: 'right',color: '#333',fontSize:15,}}>{rowData.title}:</Text>
            <TouchableOpacity onPress={()=>{
                navigator.push({
                  name: "TaskDetail",
                  component: TaskDetail,
                  type: 'link',
                  linkedProcessNo: rowData.content,
                  processNo: route.processNo,
                  processTitle: route.processTitle,
                  });}}>
              <Text style={{marginLeft: 4,color: '#317ef3',marginRight:8,fontSize:15,marginTop:5,flex:1,}} multiline={true}>{rowData.content}</Text>
            </TouchableOpacity>
          </View>);
      } else {
        return (
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 8,marginRight: 4,marginTop:5,textAlign: 'right',color: '#333',fontSize:15,}}>{rowData.title}:</Text>
            <Text style={{marginLeft: 4,color: '#999',marginRight:8,fontSize:15,marginTop:5,flex:1,}} multiline={true}>{rowData.content}</Text>
          </View>
          );
        }
    });
}

const TaskDetail: React.FC = (props:any) => { 
  const {taskDetail, route} = props;
  return (
    <View style={styles.container}>
      <NavigationBar
        title={'任务详情'} titleColor={Colors.WHITE}
        backgroundColor={Colors.mainColor} onLeftButtonPress={goBack}
        leftButtonIcon={require('../img/office/icon-backs.png')}/>

      <ScrollView style={{backgroundColor: '#EFEFEF',}}>
        <View style={{backgroundColor: 'white',margin: 8,borderRadius: 2,elevation: 3,padding: 8}}>
          {processNo(props)}
          <Text style={{color: '#111',margin: 8,marginTop:16,fontSize:20,textAlign:'center',}}>{taskDetail.name}</Text>
          <View>
            {renderTaskView(props)}
          </View>
          {renderTableView(props)}
        </View>
          {renderHistoricView(props)}
        <View style={{flexDirection: 'row', alignItems: 'center',marginBottom: 8,}}>
          <View style={{width: 10,height: 10,borderRadius: 5,borderWidth: 2,borderColor: Colors.mainBackground,backgroundColor:'#ccc',marginLeft: 22,}}/>
          <Text style={{marginLeft: 8,color: '#333',fontSize:15,}}>发起申请</Text>
        </View>
      </ScrollView>
      {renderFAB()}
      <View>
        <Spinner visible={taskDetail.taskDetailFetching} text={'加载中,请稍后...'}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'column'
	},
	postsListView: {
	  backgroundColor: Colors.mainBackground,
	},
	tableCell: {
	  height: 48,
	  width: 96,
	  borderWidth: 1,
	  borderColor: '#ccc',
	  justifyContent: 'center',
	  alignItems: 'center',
	}
  });
  
export default TaskDetail;