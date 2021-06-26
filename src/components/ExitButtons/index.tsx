import React from 'react';

import {
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title?: string;
    closeModal?: () => void;
    signOut?: () => void; 
}

export function ExitButtons( {title,closeModal, signOut, ...rest} : Props){
  return (
    <View style={styles.container}>
        <View style={styles.exitText}>
            <Text style={styles.text1}>
                Deseja sair do Game
            <Text style={styles.text2}>
                Play 
            </Text>
            {' ?'}
            </Text>
        </View>
        <View style={styles.exitOptions}>
            <TouchableWithoutFeedback 
                onPress = {closeModal}
                style={styles.optionNo}
            >
                <Text style={styles.textNo} >
                Não
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress = {signOut} 
                //{...rest}
            >
                <View style={styles.optionYes}>
                    <Text style={styles.textYes} >
                        {title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
}