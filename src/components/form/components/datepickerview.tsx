import { Colors } from '@/utils/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { FlatButton } from 'react-native-material-kit';
import commonStyles from './commonstyle';

const handleChange = () => { }

const Datepicker: React.FC = () => {
    // var contentView;
    // if (this.state.date) {
    //     contentView = this.state.date;
    //     handleChange(contentView);
    // } else {
    //     contentView = '点击选择日期';
    // }

    // var _this = this;
    //     .withText(contentView)
    // .withTextStyle({ color: 'gray', fontSize: 14 })
    // .withOnPress(() => {
    //     _this.props.refs.modalcalendar.refs.modal.show(_this);
    // }).build();

    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>
                    {/* {this.state.row.title} */}
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    {/* <FlatButton /> */}
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
