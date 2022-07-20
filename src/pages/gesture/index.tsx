import React from 'react';
import PasswordGesture from 'react-native-gesture-password';
// onStart?: () => void,
// onEnd?: (password: string) => void,
// onReset?: () => voidimport PasswordGesture from 'react-native-gesture-password';

const Gesture: React.FC = () => {
    return (
        <PasswordGesture
            ref='pg'
            status={this.state.status}
            message={this.state.message}
            interval={500}
            onStart={() => this.onStart()}
            onEnd={(input) => this.onEnd(input)}
            onReset={this._renderChilder()}
        />
    );
}
export default Gesture;