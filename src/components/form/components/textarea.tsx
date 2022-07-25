import { Colors } from "@/utils/colors";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";



const onChange = () => {
    // this.props.onUserInput(this.state.row.name, text);
    // this.setState({
    //   text: text,
    // });

}


const TextArea: React.FC<Form.IProps> = (props: Form.IProps) => {
    let {row,text} = props;
    let _maxLength = 500;
    if (row.maxLength && row.maxLength != '') {
        _maxLength = Number(row.maxLength);
    }
    return (
        <View style={{
            height: 116, flex: 1,
            backgroundColor: Colors.WHITE, borderBottomColor: Colors.LIGHT_GREY, borderBottomWidth: 1,
        }}>

            <Text style={styles.text}>
                {row.title}
            </Text>

            <TextInput
                underlineColorAndroid={'transparent'}
                placeholder={'请输入' + row.title}
                style={styles.textInput}
                value={text}
                multiline={true}
                maxLength={_maxLength}
                onChangeText={onChange} />

        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        height: 32,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 12,
        textAlign: 'left',
        alignItems: 'center',
        fontSize: 16,
        color: Colors.BLACK
    },
    textInput: {
        textAlign: 'left',
        height: 72,
        marginLeft: 16,
        marginRight: 16,
        flex: 1,
        fontSize: 14 
    }
})

export default TextArea;