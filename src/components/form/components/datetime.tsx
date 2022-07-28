import { Colors } from "@/utils/colors";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import commonStyles from "./commonstyle";


const onPress = () => {
    // NativeModules.DateAndroid.showTimepicker((date)=>{}, (hour, minute)=>{
    //     if(hour < 10){
    //       hour = `0${hour}`;
    //     }
    //     if(minute < 10){
    //       minute = `0${minute}`;
    //     }
    //     this.setState({
    //       time: hour+':'+minute,
    //     });
    //     this.props.onUserInput(this.state.row.name, this.state.date + ' ' + this.state.time);
    //   });
}

const openShow = () => { }

const DateTime: React.FC<Form.IProps> = (props: Form.IProps) => {
    let { row } = props;
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {row.title}
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <Button
                        title={''}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                        linearGradientProps={{
                            Colors: ['#FF9800', '#F44336'],
                            start: [1, 0],
                            end: [0.2, 0],
                        }}
                        buttonStyle={{
                            borderWidth: 0,
                            borderColor: 'transparent',
                            borderRadius: 20
                        }}
                        onPress={() => openShow()}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.instructions}>{'00:00'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        margin: 5,
    },
    button: {
        height: 36,
        width: 180,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        justifyContent: 'center'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 55,
        marginTop: 8,
        marginBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
    },
    calendarContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 4,
    },
    postImage: {
        width: 38,
        height: 38
    }
});


export default DateTime;