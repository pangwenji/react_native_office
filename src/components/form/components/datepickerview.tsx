import { Colors } from '@/utils/colors';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './commonstyle';
import {Button} from 'react-native-elements';

const openShow = () => { }

const Datepicker: React.FC<Form.IProps> = (props: Form.IProps) => {
    let [date,setDate] = useState('点击选择日期');
    let {row } = props;
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
                        title={date}
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
                        onPress={()=>setDate('')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        paddingLeft: 10,
        paddingRight: 10
    },
    calendarContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    postImage: {
        width: 38,
        height: 38
    }
});

export default Datepicker;
