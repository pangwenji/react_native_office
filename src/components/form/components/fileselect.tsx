import NavigationBar from '@/components/navigationbar';
import { ViewHeight } from '@/utils/';
import { ViewWidth } from '@/utils/';
import { Colors } from '@/utils/colors';
import React from 'react';
import { Alert, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Spinner } from 'react-native-material-kit';

const suffixName = [
    'apk', 'doc', 'docx', 'jpg',
    'm4a', 'mp4', 'pdf', 'ppt',
    'pptx', 'rar', 'txt', 'xls',
    'xlsx', 'zip', 'png', 'mp3'
]



const arrow = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Image style={{ width: 20, height: 20 }} source={require('../../img/icon/icon-agree.png')} />
        </View>
    )
}

const refresh = () => {
    FileManager.readDir(currentPath).then((result) => {
        let tempArr = [];
        for (var i = 0; i < result.length; i++) {
            if (result[i].name != '.DS_Store') {
                tempArr.push(result[i])
            }
        }
        this.setState({
            fileList: tempArr,
        });
    }).catch((error) => {
        console.log(error);
    });
}

const goBack = () => {
    if (this.state.upLoading == false) {
        if (currentPath != root) {
            let pathAry = currentPath.split('/');
            let newPath = '';
            let i = 0;
            for (; i < pathAry.length - 1; i++) {
                if (pathAry[i] != '') {
                    newPath = newPath + '/' + pathAry[i];
                }
            }
            currentPath = newPath;
            refresh();
        } else {
            this.props.navigator.pop();
        }
    }
}

const clickFile = () => {
    if (rowData.isDirectory()) {
        currentPath = rowData.path;
        refresh();
    } else {
        let fileList = this.state.fileList;
        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].name == rowData.name)
                fileList[i].select = fileList[i].select ? false : true;
        }
        this.setState({
            fileList: fileList,
        });
    }
}

const renderItem = () => {
    if (this.state.fileList.length) {
        return this.state.fileList.map((rowData) => {
            let icon;
            if (rowData.isDirectory()) {
                icon = fileIcons.get('directory');
            } else {
                let ary = rowData.name.split('.');
                let end = ary[ary.length - 1].toLowerCase();
                if (suffixName.includes(end)) {
                    icon = fileIcons.get(end);
                }
                else {
                    icon = fileIcons.get('file');
                }
            }
            return (
                <View style={[{ flex: 1 }, { justifyContent: 'center' }]}>
                    <TouchableOpacity onPress={() => clickFile(rowData)}>
                        <View style={{ height: 56, flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 9 }}>
                                <Image source={icon} style={{ width: 40, height: 40, marginLeft: 16, marginRight: 16, marginTop: 8, marginBottom: 8 }} />
                                <Text numberOfLines={3} style={{ width: ViewWidth - 80 }}>{rowData.name}</Text>
                            </View>
                            {rowData.select && arrow()}
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 1, marginLeft: 16, backgroundColor: '#ccc' }} />
                </View>
            );
        });
    } else {
        return (
            <View style={[{ flex: 1 }, { justifyContent: 'center' }]}>
                <Text numberOfLines={0} style={styles.textStyle} >{
                    Platform.OS === 'ios' ? '未发现附件,请把文件放置于该APP的Documents文件夹下!' : '未发现文件!'
                }</Text>
            </View>
        );
    }
}

const inArray = (val: string) => {
    let arr = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'png', 'jpg', 'jpeg', 'bmp', 'gif'];
    return arr.indexOf(val) !== -1 ? true : false;
}

const startHandleTimeConsuming = () => {

}

const doUpload = () => {
    let form = new FormData();
    let file = arrUploadFiles.pop();
    form.append('fileName', file.fileName);
    form.append('model', 'form');
    form.append('files', file);
    fetch(api.OFFICE_LIST_UPLOADFILE_URL, {
        body: form,
        method: "post",
        headers: { "Content-Type": "multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d" }
    }).then((response) => {
        return response.json();
    }).then((responseData) => {
        if (responseData.code === 'success') {
            fileIndex += 1;
            this.setState({
                spinnerContent: '已上传: ' + fileIndex + '/' + totalFileNum,
            });
            //回调所选文件信息
            this.props.route.selectFile(responseData.path, file.fileName, fileIndex);
            if (arrUploadFiles.length > 0)
                doUpload();
            else {
                this.setState({
                    upLoading: false,
                });
                this.props.dispatch(stopHandleTimeConsuming());
                Alert.alert('提示', '文件上传成功!', [{ text: '确定', onPress: () => { } }]);
                this.props.navigator.pop();
            }
        } else {
            this.setState({
                upLoading: false,
            });
            this.props.dispatch(stopHandleTimeConsuming());
            Alert.alert('提示', responseData.msg, [{ text: '确定', onPress: () => { } }]);
        }
    }).catch((error) => {
        this.setState({
            upLoading: false,
        });
        this.props.dispatch(stopHandleTimeConsuming());
        Alert.alert('提示', '文件上传失败,请重新上传!', [{ text: '确定', onPress: () => { } }]);
        console.log('error-->>', error);
    })

}

const upload = () => {
    Alert.alert('', '确认上传?', [{
        text: '上传', onPress: () => {
            arrUploadFiles.length = 0;
            let fileList = this.state.fileList;
            for (let i = 0; i < fileList.length; i++) {
                if (fileList[i].select) {
                    if (fileList[i].size >= 10000000) {
                        Alert.alert('', '文件:\"' + fileList[i].name + '\""大小超过10M', [{ text: '确认', onPress: () => { } }]);
                        return;
                    }
                    let extension = fileList[i].name.split('.');
                    if (!inArray(extension.pop())) {
                        Alert.alert('', '文件:\"' + fileList[i].name + '\""格式不支持', [{ text: '确认', onPress: () => { } }]);
                        return;
                    }
                    let uploadFile = {};
                    uploadFile.uri = `file://${fileList[i].path}`;
                    uploadFile.type = 'application/octet-stream';
                    uploadFile.name = Base64Encode(fileList[i].name);
                    uploadFile.fileName = fileList[i].name;
                    arrUploadFiles.push(uploadFile);
                }
            }
            if (arrUploadFiles.length > 10) {
                Alert.alert('', '文件个数超过10个', [{ text: '确认', onPress: () => { } }]);
                return;
            }
            this.setState({
                upLoading: true,
            });
            totalFileNum = arrUploadFiles.length;
            fileIndex = 0;
            this.props.dispatch(startHandleTimeConsuming());
            doUpload();
        }
    }, { text: '取消', onPress: () => { } }])
}

const FileSelect: React.FC = () => {
    let rightButtonTitle = '';
    let fileList = this.state.fileList;
    for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].select) {
            rightButtonTitle = '上传';
            break;
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <NavigationBar title={'文件选择'} titleColor={Colors.WHITE}
                backgroundColor={Colors.ORANGE} rightButtonTitle={rightButtonTitle}
                rightButtonTitleColor={'#fff'} onRightButtonPress={upload}
                leftButtonIcon={require('../../img/office/icon-backs.png')}
                onLeftButtonPress={goBack} />
            <ScrollView style={{ position: 'absolute', flex: 1, height: ViewHeight - 60, width: ViewWidth }}>
                {renderItem()}
            </ScrollView>
            <View>
                {/* <Spinner visible={this.state.upLoading} text={this.state.spinnerContent} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ff8c00',
    },
});

export default FileSelect;