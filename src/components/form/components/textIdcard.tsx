import React from "react";
import { Text, TextInput, View } from "react-native";

import commonStyles from "./commonstyle";

const onChange = () => {
    // this.props.onUserInput(this.state.row.name, text);
    // this.setState({
    //     text: text,
    // });
}

const TextCard: React.FC = () => {
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
                    onChangeText={onChange}
                    maxLength={500}
                    value={this.state.text} />
            </View>
        </View>
    );
}

export default TextCard;