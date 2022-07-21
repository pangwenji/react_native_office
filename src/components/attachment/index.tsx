import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WebViews from "../webview";
import FileManager from 'react-native-fs'
import ToastTip from "../notification";
import Intent from 'react-native-android-intent';
const download = (file) => { 
	let content = this.state.content;
    let index = content.indexOf(file);
    if(file.status === ''){return}
    if(file.status === '立即查看'){
      if(Platform.OS === 'ios'){
        let arr = file.localName.split(".");
        let url = `${filePath}${file.localName}`;
         const {navigator, dispatch} = this.props;
        //  dispatch(changeWebviewUrl(url));
        //  navigator.push({
        //   name: 'WebViews',
        //   component: WebViews,
        // });
      }else{
        let openPath = `${filePath}${file.localName}`;
        Intent.open(openPath, (isOpen) => {
        //   if(isOpen) {
        //   } else {
        //     Alert.alert('提示',`手机未安装可以打开${file.localName}的APP,请将${filePath}${file.localName}复制到其他设备查看!`,[{text: '确定',onPress: ()=>{}}]);
		// 	}
			!isOpen ? <ToastTip message={`提示,手机未安装可以打开${file.localName}的APP,请将${filePath}${file.localName}复制到其他设备查看!` } /> : null
        });
      }
    }

    if(file.status === '立即下载' || file.status === '下载失败,请重新下载...' ){
      content[index].status = '下载中....';
      let url = api.OFFICE_LIST_DOWNLOADFILE_URL + file.remoteName;
		FileManager.mkdir(filePath).then(() => { 
			FileManager.downloadFile({})
		})
    //     FileManager.downloadFile(url,`${filePath}${file.localName}`).then((success)=>{
    //       content[index].status = '立即查看';
    //       this.setState({content: content,})
    //     }).catch((error)=>{
    //       content[index].status = '下载失败,请重新下载...';
    //       this.setState({content: content,})
    //     });
    //   }).catch((error)=>{
    //   });
      this.setState({content: content,})
      return;
    }
  }

const Attachment: React.FC = () => { 
  let content = this.state.content;
    let _this = this;
    let fileView = content.map((file:any,index:number) =>{
      return(
        <TouchableOpacity key={index} onPress={()=>download(file)}>
          <Text style={styles.file} numberOfLines={1}>{file.status} : {file.localName}</Text>
        </TouchableOpacity>
      )
    });
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.tile}>{this.state.row.title}:</Text>
        <View style={{flex: 1, flexDirection: 'column'}}>
          {fileView}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
	file: {
	  flex:1,
	  marginTop:5,
	  marginLeft: 4,
	  marginRight:4,
	  fontSize:15,
	  color: '#317ef3',
	  overflow:'hidden',
	},
	tile: {
	  marginLeft: 8,
	  marginRight: 4,
	  marginTop:5,
	  textAlign: 'right',
	  color: '#333',
	  fontSize:15,
	},
});

export default Attachment;