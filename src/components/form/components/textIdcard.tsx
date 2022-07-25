import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import commonStyles from "./commonstyle";


const onChange = (text:string,props: any, setText: Function) => {
    let { onUserInput,row} = props;
      onUserInput(row.name, text);
      setText(text);
}

const TextCard: React.FC<Form.IProps> = (props: Form.IProps) => {
    let [text, setText] = useState('');
    let { row} = props;

    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {row.title}
                </Text>
            </View>
            <View style={[commonStyles.contentContainer, { height: 48, marginRight: 4, }]}>
                <TextInput
                    style={{ height: 48, textAlign: 'right', fontSize: 14, }}
                    placeholder={'请输入' + row.title}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => onChange(text,props,setText)}
                    maxLength={500}
                    value={text} />
            </View>
        </View>
    );
}

export default TextCard;