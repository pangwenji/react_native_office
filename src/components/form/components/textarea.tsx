import { Colors } from "@/utils/colors";
import React from "react";
import { Text, TextInput, View } from "react-native";


const onChange = () => {
    // this.props.onUserInput(this.state.row.name, text);
    // this.setState({
    //   text: text,
    // });
}

const TextArea: React.FC = () => {
    let _maxLength = 500;
    if (this.state.row.maxLength && this.state.row.maxLength != '') {
        _maxLength = Number(this.state.row.maxLength);
    }
    return (
        <View style={{
            height: 116, flex: 1,
            backgroundColor: Colors.white, borderBottomColor: Colors.lightgrey, borderBottomWidth: 1,
        }}>

            <Text style={{ height: 32, marginLeft: 16, marginRight: 16, marginTop: 12, textAlign: 'left', alignItems: 'center', fontSize: 16, color: Colors.black }}>
                {this.state.row.title}
            </Text>

            <TextInput
                underlineColorAndroid={'transparent'}
                placeholder={'请输入' + this.state.row.title}
                style={{ textAlign: 'left', height: 72, marginLeft: 16, marginRight: 16, flex: 1, fontSize: 14 }}
                value={this.state.text}
                multiline={true}
                maxLength={_maxLength}
                onChangeText={onChange} />

        </View>
    );
}

export default TextArea;