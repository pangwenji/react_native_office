import NavigationBar from '@/components/navigationbar';
import ToastTip from '@/components/notification';
import Spinner from '@/components/spinner';
import { Colors } from '@/utils/colors';
import React, { useEffect, useMemo } from 'react';
import { Alert, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';


const goBack = () => {
	// const {navigator} = this.props;
	// navigator.pop();
}

const checkPassword = (props: any) => {

	const { login, changePassword } = props;
	let reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,16}$/;
	if (changePassword.oldPassword === '' || changePassword.newPassword === '' || changePassword.confirmPassword === '') {
		toast('密码为空,请重新输入!')
	} else if (changePassword.newPassword == changePassword.oldPassword) {
		toast('新旧密码一致!')
	} else if (changePassword.newPassword != changePassword.confirmPassword) {
		toast('新密码两次输入不一致!')
	} else if (!reg.test(changePassword.newPassword)) {
	    toast('新密码必须为8-16位,且包含字母、数字和特殊字符!')
	} else {
		//   const {dispatch} = this.props;
		//   dispatch(fetchChangePassword(login.username, changePassword.oldPassword, changePassword.newPassword));
		//   dispatch(startHandleTimeConsuming());
	}
}
const toast = (message:string) => { 
	return (<ToastTip message={message} />)
}

const onChange = (password: string) => {
	// dispatch(changeUserPassword({newPassword: newPassword}))
}

const commonRenderTextInput = (placeholder: string) => {
	return (
		<TextInput
			secureTextEntry={true}
			clearButtonMode='while-editing'
			style={[styles.item, { marginTop: 20, }]}
			onChangeText={(password) => { onChange(password) }}
			placeholder={placeholder} />
	)
}

const ChangePassword: React.FC = (props: any) => {
	const { dispatch, changePassword } = props;
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.background}>
				<NavigationBar title={'修改密码'} titleColor={Colors.WHITE}
					backgroundColor={Colors.ORANGE}
					leftButtonIcon={require('@/assets/office/icon-backs.png')}
					onLeftButtonPress={goBack}
					rightButtonTitle={'确认'} rightButtonTitleColor={'#fff'}
					onRightButtonPress={checkPassword} />
					{commonRenderTextInput('旧密码')}
					{commonRenderTextInput('新密码')}
					<View style={styles.line} />
					{commonRenderTextInput('确认密码')}
				<View>
					<Spinner visible={changePassword.passwordChanging} text={'密码修改中,请稍后...'} />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: Colors.GRAY_GAY,
	},
	item: {
		height: 48,
		backgroundColor: Colors.WHITE,
	},
	line: {
		height: 1,
		backgroundColor: '#ccc',
	}
});

const ChangePasswords = React.memo(ChangePassword, (preProps, nextProps:any) => { 
    const {changePassword} = nextProps;
    if(changePassword.passwordChanged){
    //   nextProps.dispatch(stopHandleTimeConsuming());
      if(changePassword.changeResult == "success"){
        Alert.alert('','密码修改成功,请重新登陆!', [{text: '好', onPress: () => {
        //   global.storage.save({
        //      key: 'userName',  //注意:请不要在key中使用_下划线符号!
        //      rawData: {
        //      },
        //    });
        //   nextProps.dispatch(changeLoginAuth({password: ''}));
          nextProps.navigator.popToTop();}},]);
      }else if(changePassword.changeResult == 'failure'){
		  <ToastTip message={changePassword.msg} />
      }else if(changePassword.error){
		  <ToastTip message={changePassword.error} />
      }
    }
	return true;
})
export default ChangePasswords;