import { Colors } from '@/utils/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './commonstyle';
import { Checkbox } from 'react-native-material-kit'
const handleChange = (str: string) => { }

const CheckBoxs: React.FC = () => {
    let CheckBoxSelectedData = this.state.CheckBoxSelectedData;
    let { row } = props;

    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {this.state.row.title}
                </Text>
            </View>
            <View style={commonStyles.contentContainer}>
                <View style={styles.row}>
                    {
                        row.items.map((row) => {
                            let isChecked = false;

                            if (this.state.row.content && this.state.row.content.contains(row)) {
                                isChecked = true;
                                handleChange(this.state.row.content);
                                CheckBoxSelectedData.push(row);
                            }
                            return (
                                <View style={styles.col}>
                                    <Checkbox checked={isChecked} borderOnColor={Colors.ORANGE} borderOffColor={Colors.LIGHT_ORANGE} fillColor={Colors.mainColor} onCheckedChange={(e) => {
                                        if (e.checked == true) {
                                            if (CheckBoxSelectedData.length > 0)
                                                CheckBoxSelectedData[CheckBoxSelectedData.length] = ',' + row;
                                            else
                                                CheckBoxSelectedData[CheckBoxSelectedData.length] = row;
                                        } else {
                                            var i = 0;
                                            for (; i < CheckBoxSelectedData.length; i++) {
                                                if (CheckBoxSelectedData[i].contains(row)) {
                                                    CheckBoxSelectedData.splice(i, 1);
                                                    break;
                                                }
                                            }
                                        }
                                        if (CheckBoxSelectedData[0] && CheckBoxSelectedData[0].contains(','))
                                            CheckBoxSelectedData[0] = CheckBoxSelectedData[0].split(',')[1];
                                        handleChange(CheckBoxSelectedData.join(""));
                                    }} />
                                    <Text style={styles.legendLabel}>{row}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 7,
        alignItems: 'center',
    },
    legendLabel: {
        textAlign: 'center',
        color: Colors.BLACK,
        fontSize: 12,
        fontWeight: '300'
    }
});

export default CheckBoxs;