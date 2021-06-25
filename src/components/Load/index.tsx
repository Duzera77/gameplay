import React from 'react';

import {
    ActivityIndicator,
    View
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/themes';

export function Load(){
  return (
    <View style={styles.container}>
        <ActivityIndicator 
            size='large'
            color={theme.colors.primary}
        >

        </ActivityIndicator>
    </View>
  );
}