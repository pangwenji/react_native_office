import React from 'react';
import { Text, TextInput, View } from 'react-native';
import commonStyles from './commonstyle';

const onChange = () => {
    this.props.onUserInput(this.state.row.name, text);
    this.setState({
        text: text,
    });
}

const TextInt: React.FC = () => {
    let _maxLength = 500;
    if (this.state.row.maxLength && this.state.row.maxLength != '') {
        _maxLength = Number(this.state.row.maxLength);
    }
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
                    onChangeText={onChange}
                    underlineColorAndroid={'transparent'}
                    maxLength={_maxLength}
                    value={this.state.text} />
            </View>
        </View>
    );
}

export default TextInt;