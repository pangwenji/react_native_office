import React from "react";
import { Text, View } from "react-native";
import commonStyles from "./commonstyle";
const Spinner: React.FC = () => {
    var items = this.state.row.items;
    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {this.state.row.title}
                </Text>
            </View>
            <View style={commonStyles.contentContainer}>
                {/* <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.sValue}
                    onValueChange={(data) => { this.handleChange(data) }}
                    mode={'dropdown'}>
                    {items.map((data) => {
                        return (
                            <Picker.Item label={data} value={data} />
                        );
                    })}
                </Picker> */}
            </View>
        </View>
    );
}

export default Spinner;