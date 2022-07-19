import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import commonStyles from "./commonstyle";

const TextCard: React.FC = () => {
    let [text, setText] = useState('')
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {this.state.row.title}
                </Text>
            </View>
            <View style={[commonStyles.contentContainer, { height: 48, marginRight: 4, }]}>
                <TextInput
                    style={{ height: 48, textAlign: 'right', fontSize: 14, }}
                    placeholder={'请输入' + this.state.row.title}
                    underlineColorAndroid={'transparent'}
                    onChangeText={() => setText('')}
                    maxLength={500}
                    value={text} />
            </View>
        </View>
    );
}

export default TextCard;