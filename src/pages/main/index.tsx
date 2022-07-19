import Spinner from "@/components/spinner";
import TabBar from "@/components/tarbar";
import { ViewHeight } from "@/utils/index";
import React, { useState } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import HomeScreen from "../home";
import Office from "../office";
import SettingsScreen from "../settings";



const ImageInfo = (name: string, url: string, paddingTop?: number) => {
	return (
		<Image
			name={name}
			selectedStyle={
				{ tintColor: '#ef6c00' }
			}
			style={
				[
					{
						width: 22,
						height: 34,
						paddingTop: paddingTop ? paddingTop : 0
					}
				]
			}
			selectedIconStyle={
				{
					borderTopWidth: 2,
					borderTopColor: '#ef6c00'
				}}
			source={require(url)}
		/>
	)
}

const commonPage = (type: string, props: any) => {
	switch (type) {
		case 'infomation':
			return <HomeScreen {...props} />
		case 'office':
			return <Office {...props} />
		case 'setting':
			return <SettingsScreen {...props} />
		default:
			return <View />
	}
}

const main: React.FC = (props) => {
	let [page, setPage] = useState(true)
	return (
		<View style={styles.container}>
			<View style={styles.mainPage}>
				{commonPage('infomation', props)}
				{commonPage('office', props)}
				{commonPage('setting', props)}
			</View>
			<TabBar selected={page} style={{ backgroundColor: '#322a33', bottom: 0, }}
				onSelect={el => setPage(el.props.name)}>
				{
					ImageInfo('message', '@/assets/img/icon/icon-home-active.png')
				}
				{
					ImageInfo('office', '@/assets/img/icon/icon-office-active.png')
				}
				{
					ImageInfo('setting', '@/assets/img/icon/icon-setting-active.png', 2)
				}
			</TabBar >
			<View>
				<Spinner visible={this.state.loading} text={'更新中,请稍后...'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mainPage: {
		height: Platform.OS === 'ios' ? ViewHeight - 50 : ViewHeight - 75,
	}
});
export default main;