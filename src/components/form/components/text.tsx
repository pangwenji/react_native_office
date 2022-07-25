import { Colors } from "@/utils/colors";
import React from "react";
import { Text, View } from "react-native";

import commonStyles from "./commonstyle";


// userName={userName} row={row}

interface IProps { 
    userName: any,
    row:any
}

const Texts: React.FC<IProps>= (props: IProps) => {
    let { row} = props;
    let arrFiles = [];
    if (row.detailType === 'file') {
        let rowContent = eval('(' + row.content + ')');
        for (let i = 0; i < rowContent.length; i++) {
            let file:{fileName:string} = {fileName:''};
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
                    {row.title}
                </Text>
            </View>
            <View style={[commonStyles.contentContainer, { marginRight: 4, }]}>
                {
                    row.content ? <Text style={{ textAlign: 'right', color: Colors.BLACK, marginRight: 15 }}>
                        {

                            arrFiles.length > 0 ? <Text style={{ textAlign: 'right', color: Colors.BLACK }}>
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