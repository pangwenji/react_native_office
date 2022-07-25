import { Colors } from '@/utils/colors';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
// import Calendar from 'react-native-calendar-android';
import Modal from 'react-native-modal/dist/modal';


const Calendars: React.FC = () => {
	let [isShow, setIsVisible] = useState(false)
	return (
		<Modal
			ref={'modal'}
			isVisible={isShow}
			animationInTiming={10}
			animationIn={'bounceInUp'}
			style={{ borderRadius: 10 }}
		>
			<View style={styles.container}>
				<View style={styles.calendarContainer}>
					{/* <Calendar
						width={300}
						topbarVisible={true}
						arrowColor={Colors.ORANGE}
						firstDayOfWeek="monday"
						showDate="all"
						currentDate={["2016/12/01"]}
						selectionMode="single"
						selectionColor={Colors.ORANGE}
						// selectedDates={["2015/11/20", "2015/11/30", 1448745712382]}
						onDateChange={() => setIsVisible(false)} /> */}
				</View>
				<TouchableHighlight style={styles.button} onPress={() => setIsVisible(false)} underlayColor={Colors.LIGHT_ORANGE}>
					<Text style={styles.buttonText}>取 消</Text>
				</TouchableHighlight>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	calendarContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 30,
		marginBottom: 10,
	},
	calendar: {
		flex: 1,
		justifyContent: 'center',
	},
	button: {
		backgroundColor: Colors.WHITE,
		justifyContent: 'center',
		borderRadius: 8,
		marginBottom: 40,
		marginLeft: 100,
		marginRight: 100,
		borderColor: Colors.ORANGE,
		borderWidth: 1,
	},
	buttonText: {
		alignSelf: 'center',
		fontSize: 18,
		color: Colors.ORANGE
	}
});


export default Calendars;