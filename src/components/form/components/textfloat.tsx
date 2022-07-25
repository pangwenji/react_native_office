import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import commonStyles from "./commonstyle";

const saveDecimal = (x:any) => {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        return x;
    }
    f_x = Math.round(f_x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}

const onChange = (text:string,props: any, setText: Function) => {
    let { onUserInput,row} = props;
      onUserInput(row.name, saveDecimal(text));
    setText(text);
}

const TextFloat: React.FC<Form.IProps | any> = (props: Form.IProps | any) => {
    let [row] = props;
    let [text, setText] = useState('');
    useEffect(() => { 
        setText(row.content)
    },[])
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {row.title}
                </Text>
            </View>
            <View style={[commonStyles.contentContainer, { height: 48, marginRight: 4, }]}>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    style={{ height: 48, textAlign: 'right', fontSize: 14, }}
                    placeholder={'请输入' + row.title}
                    onChangeText={(text) => onChange(text,props,setText)}
                    maxLength={500}
                    value={text} />
            </View>
        </View>
    );
}

export default TextFloat;