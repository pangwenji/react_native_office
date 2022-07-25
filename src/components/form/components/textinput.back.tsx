import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import { ViewHeight } from "@/utils/index";
import { Colors } from "@/utils/colors";
import React from "react";
import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";

const next = () => {
    // const {dispatch, staffList, route} = this.props;
    // Alert.alert('', `确认提交?`,[{text: '确定',onPress : ()=>{
    //   dispatch(startHandleTimeConsuming());
    //   dispatch(fetchOtherApproval(route.taskId, route.type, staffList.userId, staffList.remark));
    // }}, {text: "取消"}],);
}

const goBack = () => {
    // const {navigator} = this.props;
    // navigator.pop();
}

const TextInputs: React.FC<Form.IProps> = (props: Form.IProps) => {
    const {  staffList, taskApproval } = props;
    let rightButtonTitle = '';
    let staffData = staffList.staffData;
    for (let i = 0; i < staffData.length; i++) {
        if (staffData[i].select) {
            rightButtonTitle = '下一步';
            break;
        }
    }
    return (
        <View style={styles.container}>
            <NavigationBar title={'备注'} titleColor={Colors.WHITE}
                leftButtonIcon={require('@/assets/office/icon-backs.png')} rightButtonTitle='提交'
                rightButtonTitleColor={'#fff'} backgroundColor={Colors.ORANGE}
                onLeftButtonPress={goBack} onRightButtonPress={next} />

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.main}>
                    <TextInput
                        style={{ textAlignVertical: 'top', fontSize: 14, height: ViewHeight / 5, }}
                        placeholder={'请输入备注信息'}
                        underlineColorAndroid={'transparent'}
                        multiline={true}
                        numberOfLines={5}
                        maxLength={100}
                        // onChangeText={(remark) => dispatch(changeStaffRemark(remark))}
                    />
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Spinner visible={taskApproval.otherCommitting} text={'提交中,请稍后...'} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ORANGE
    },
    main: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        height: ViewHeight / 5,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.LIGHT_GREY,
        borderWidth: 1,
    },
});
export default TextInputs;