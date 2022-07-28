import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import commonStyles from './commonstyle';
import StaffList from './stafflist';
const handleChange = () => {
    // this.props.onUserInput(this.state.row.name, userId);
    // this.setState({
    //   text: nickName,
    //   textColor: Colors.black,
    // });
}

const onPress = (props:any) => {
    const { navigator } = props;
    navigator.push({
        name: "StaffList",
        component: StaffList,
        // type: types.STAFF_LIST_CONTACT,
        onStaffSelect: handleChange,
    });
}

const SelectStaff: React.FC = (prop: any) => {
    let { row } = prop;
    let [text,setText] = useState('点击选择')
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {row.title}
                </Text>
            </View>
            <TouchableOpacity onPress={()=>onPress(prop)} style={commonStyles.contentContainer}>
                <Text style={[styles.search, { color: 'gray', marginRight: 4 }]}>{text}</Text>
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