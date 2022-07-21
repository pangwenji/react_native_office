import React from 'react';
import PasswordGesture from 'react-native-smart-gesture-password';
import { Button } from 'react-native-smart-button';
// onStart?: () => void,
// onEnd?: (password: string) => void,
// onReset?: () => voidimport PasswordGesture from 'react-native-gesture-password';
// https://blog.csdn.net/zoujian1990520/article/details/80701355


const onStart = () => { }
const onFinish = (input:any) => { }
const onReset = () => { }

const top = () => { 
    return 
}

const bottom = () => { }

const Gesture: React.FC = (props: any) => {
    let {isWarning} = props;
    return (
        <PasswordGesture
            ref='pg'
            style={{ padding: 20 }}
            isWarning={isWarning}
            interval={500}
            warningColor={'blue'}
            warningDuration={1500}
            allowCross={true}
            topComponent={top}
            bottomComponent={bottom}
            onStart={() => onStart()}
            onFinish={(input: any) => onFinish(input)}
            onReset={()=> onReset()}
        />
    );
}
export default Gesture;