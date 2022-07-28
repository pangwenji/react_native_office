import { Colors } from "@/utils/colors";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "./commonstyle";
import FileSelect from "./fileselect";

type extraDataProp = {
    type?: string,
    name?: string,
    index?:number
}

const selectFile = (fileIndex:  number,props:any) => {
    let [arrUploadFiles, setUploadFile] = useState();
    let {onUserInput,row } = props;
    let name = row.name + fileIndex;
    let extraData:extraDataProp = {};
    extraData.type = 'fj';
    extraData.name = '' + row.name;
    extraData.index = fileIndex;
    // onUserInput(name, result, extraData);
    // onUserInput(`${name}OriginalFileName`, fileName);
    let file:{fileName:string,fileIndex:number} = {
        fileName: "",
        fileIndex: 0
    };
    let fileName = '';
    file.fileName = fileName;
    file.fileIndex = fileIndex;
    //删除附件
    if (fileName == '') {
        // for (let i = 0; i < arrUploadFiles.length; i++) {
        //     if (arrUploadFiles[i].fileIndex == fileIndex) {
        //         let tmpArrUploadFiles:any = arrUploadFiles;
        //         tmpArrUploadFiles.splice(i, 1);
        //         setUploadFile(tmpArrUploadFiles)
        //     }
        // }
        //添加附件
    } else {
        let tmpArrUploadFiles = arrUploadFiles;
        //如果被选择的附件继续从１开始，说明用户重新上传了，此时清空之前的文件数组
        if (fileIndex == 1)
        //     tmpArrUploadFiles = [];
        // tmpArrUploadFiles.push(file);
        setUploadFile(tmpArrUploadFiles)
    }
}

const select = (props: any) => {
    let {navigator } = props;
    navigator.push({
        name: 'fileSelect',
        component: FileSelect,
        selectFile: selectFile(1,props),
      });
}

const Upload: React.FC<Form.IProps> = (props: Form.IProps) => {
    let { row } = props;
    let [arrUploadFiles, setArrUploadFiles] = useState([]);
    useEffect(() => { 
        if (row.content && row.fileName) { 
            selectFile(1, props);
        }
    },[])
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {row.title}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', }}>
                {
                    arrUploadFiles.map((file: {fileIndex:number,fileName:string}) => {
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
                                                selectFile(file.fileIndex,props);
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
            <TouchableOpacity onPress={select}>
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

export default Upload;