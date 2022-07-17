import { Colors } from "@/utils/colors";
import React from "react";
import { Text, View } from "react-native";

import commonStyles from "./commonstyle";

const Texts: React.FC = () => {
    let arrFiles = [];
    if (this.state.row.detailType === 'file') {
        let rowContent = eval('(' + this.state.row.content + ')');
        for (let i = 0; i < rowContent.length; i++) {
            let file = {};
            for (let key in rowContent[i]) {
                file.fileName = rowContent[i][key];
            }
            arrFiles.push(file);
        }
    }

    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {this.state.row.title}
                </Text>
            </View>
            <View style={[commonStyles.contentContainer, { marginRight: 4, }]}>
                {
                    this.state.row.content ? <Text style={{ textAlign: 'right', color: Colors.black, marginRight: 15 }}>
                        {

                            arrFiles.length > 0 ? <Text style={{ textAlign: 'right', color: Colors.black }}>
                                {row.fileName}
                            </Text> : <Text />
                        }
                    </Text> : null
                }
            </View>
        </View>
    );
}

export default Texts;