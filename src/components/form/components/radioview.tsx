import { Colors } from "@/utils/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import commonStyles from "./commonstyle";
import { RadioButton, RadioButtonGroup } from 'react-native-material-kit';

const handleChange = (args: any) => { }

const RadioView: React.FC = () => {
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
                            if (this.state.row.content && this.state.row.content === row) {
                                isChecked = true;
                                handleChange(row);
                            }
                            return (
                                <View style={styles.col}>
                                    <RadioButton checked={isChecked} borderOnColor={Colors.ORANGE}
                                        borderOffColor={Colors.LIGHT_ORANGE}
                                        fillColor={Colors.ORANGE}
                                        onCheckedChange={(e) => {
                                            if (e.checked == true) {
                                                handleChange(row);
                                            }
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
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 3,
        marginBottom: 8,
        paddingLeft: 10,
        paddingRight: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 7,
    },
    legendLabel: {
        textAlign: 'center',
        color: Colors.BLACK,
        fontSize: 12,
        fontWeight: '300'
    }
});

export default RadioView;