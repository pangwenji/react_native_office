import Spinner from '@/components/spinner';
import { Colors } from '@/utils/colors';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';

const changeLoginAuth = ({ username, password }: { username?: string, password?: string }) => { }

const login = () => {
	// const {dispatch, login} = this.props;
	// dispatch(fetchLogin(login.username, login.password));
	// dispatch(startHandleTimeConsuming());
}

const Login: React.FC = (props: any) => {
	const { dispatch, logins } = props;
	const dismissKeyboard = require('dismissKeyboard');
	return (
		<View style={styles.container}>
			<View style={{ alignItems: 'center', marginTop: 32 }}>
				<Image style={{ width: 90, height: 90, margin: 8, borderRadius: 0, }} source={require('../img/icon/logo.png')} />
			</View>

			<View style={{ margin: 16, backgroundColor: '#fff', elevation: 4 }}>
				<TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
					<View style={{ flexDirection: 'row', height: 48, alignItems: 'center' }}>
						<Image style={{ width: 32, height: 32, margin: 8 }} source={require('../img/icon/icon-user.png')} />
						<TextInput style={{ height: 48, flex: 1 }}
							placeholder={'请输入用户名'}
							value={logins.username}
							underlineColorAndroid={'transparent'}
							autoCapitalize={'none'}
							autoCorrect={false}
							onChangeText={(username) => dispatch(changeLoginAuth({ username: username }))} />
					</View>
				</TouchableWithoutFeedback>

				<View style={{ marginLeft: 8, height: 1, backgroundColor: '#ccc', marginRight: 8 }} />
				<TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
					<View style={{ flexDirection: 'row', height: 48, backgroundColor: 'white', alignItems: 'center' }}>
						<Image style={{ width: 32, height: 32, margin: 8 }} source={require('@/assets/img/icon/icon-lock.png')} />
						<TextInput style={{ height: 48, flex: 1 }}
							placeholder={'请输入密码'}
							value={logins.password}
							underlineColorAndroid={'transparent'}
							secureTextEntry={true}
							onChangeText={(password) => dispatch(changeLoginAuth({ password: password }))} />
					</View>
				</TouchableWithoutFeedback>

			</View>

			<View style={{ marginTop: 32, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: Colors.ORANGE }}>
				<TouchableHighlight
					onPress={login}
					underlayColor={'#999'}
					style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ fontSize: 16, color: 'white', fontWeight: '300', }}>登 录</Text>
				</TouchableHighlight>
			</View>

			<View>
				<Spinner visible={logins.logining} text={'登录中,请稍后...'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.GRAY_GAY,
	},
});
export default Login;