import { Colors } from "@/utils/colors";
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import commonStyles from "./commonstyle";

const select = (idx: string | any) => {
    // let name = this.state.row.name + fileIndex;
    // let extraData = {};
    // extraData.type = 'fj';
    // extraData.name = '' + this.state.row.name;
    // extraData.index = fileIndex;
    // this.props.onUserInput(name, result, extraData);
    // this.props.onUserInput(`${name}OriginalFileName`, fileName);
    // let file = {};
    // file.fileName = fileName;
    // file.fileIndex = fileIndex;
    // //删除附件
    // if(fileName == ''){
    //   for(let i = 0; i < this.state.arrUploadFiles.length; i++){
    //     if(this.state.arrUploadFiles[i].fileIndex == fileIndex){
    //       let tmpArrUploadFiles = this.state.arrUploadFiles;
    //       tmpArrUploadFiles.splice(i, 1);
    //       this.setState({
    //         arrUploadFiles: tmpArrUploadFiles,
    //       });
    //     }
    //   }
    // //添加附件
    // } else {
    //   let tmpArrUploadFiles = this.state.arrUploadFiles;
    //   //如果被选择的附件继续从１开始，说明用户重新上传了，此时清空之前的文件数组
    //   if(fileIndex == 1)
    //     tmpArrUploadFiles = [];
    //   tmpArrUploadFiles.push(file);
    //   this.setState({
    //     arrUploadFiles: tmpArrUploadFiles,
    //   });
    // }
}

const onPress = () => {
    // this.props.navigator.push({
    //     name: 'fileSelect',
    //     component: FileSelect,
    //     selectFile: this.selectFile.bind(this),
    //   });
}

const FileUpLoad: React.FC = () => {
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {this.state.row.title}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', }}>
                {
                    arrUploadFiles.map((file) => {
                        return (
                            <View style={styles.container}>
                                <View style={commonStyles.titleContainer}>
                                    <Text style={commonStyles.title}>
                                        {file.fileIndex}
                                    </Text>
                                </View>

                                <View style={[styles.contentContainer]}>
                                    <Text numberOfLines={3} allowFontScaling={true} style={styles.content}>
                                        {file.fileName}
                                    </Text>
                                </View>

                                <TouchableOpacity onPress={() => {
                                    if (file.fileName && file.fileName != '') {
                                        Alert.alert('', '确定删除该附件?', [{
                                            text: '确定', onPress: () => {
                                                select(file.fileIndex);
                                            }
                                        }, { text: '取消', onPress: () => { } }]);
                                    }
                                }}>
                                    <Image source={require('@/assets/img/icon/sq_icon_del.png')} style={styles.pic} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('@/assets/img/icon/sq_icon_upload.png')} style={styles.pic} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,

    },
    content: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
        alignItems: 'center',
        width: 180,
    },
    pic: {
        marginRight: 16,
        alignItems: 'center',
        height: 32,
        width: 32,
    },

});

export default FileUpLoad;