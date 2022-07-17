import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

const TextInputs: React.FC = () => {
    const { dispatch, staffList, taskApproval } = this.props;
    let rightButtonTitle = '';
    let staffData = staffList.staffData;
    for (let i = 0; i < staffData.length; i++) {
        if (staffData[i].select) {
            rightButtonTitle = '下一步';
            break;
        }
    }
    const dismissKeyboard = require('dismissKeyboard');
    return (
        <View style={styles.container}>
            <NavigationBar title={'备注'} titleColor={Colors.white}
                leftButtonIcon={require('../img/office/icon-backs.png')} rightButtonTitle='提交'
                rightButtonTitleColor={'#fff'} backgroundColor={Colors.mainColor}
                onLeftButtonPress={this.onLeftBack} onRightButtonPress={this.doNext} />

            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={styles.main}>
                    <TextInput
                        style={{ textAlignVertical: 'top', fontSize: 14, height: deviceHeight / 5, }}
                        placeholder={'请输入备注信息'}
                        underlineColorAndroid={'transparent'}
                        multiline={true}
                        numberOfLines={5}
                        maxLength={100}
                        onChangeText={(remark) => dispatch(changeStaffRemark(remark))} />
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Spinner visible={taskApproval.otherCommitting} text={'提交中,请稍后...'} />
            </View>
        </View>
    );
}

export default TextInputs;