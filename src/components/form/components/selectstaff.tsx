import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import commonStyles from './commonstyle';
const handleChange = () => {
    // this.props.onUserInput(this.state.row.name, userId);
    // this.setState({
    //   text: nickName,
    //   textColor: Colors.black,
    // });
}

const onPress = () => {
    const { navigator } = this.props;
    navigator.push({
        name: "StaffList",
        component: StaffList,
        type: types.STAFF_LIST_CONTACT,
        onStaffSelect: handleChange,
    });
}

const SelectStaff: React.FC = () => {
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {this.state.row.title}
                </Text>
            </View>
            <TouchableOpacity onPress={onPress} style={commonStyles.contentContainer}>
                <Text style={[styles.search, { color: this.state.textColor, marginRight: 4 }]}>{this.state.text}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    search: {
        textAlign: 'right',
        color: 'gray',
        marginRight: 15,
    },
});

export default SelectStaff;