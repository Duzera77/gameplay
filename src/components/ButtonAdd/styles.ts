import { StyleSheet} from 'react-native';

import { theme } from '../../global/styles/themes';


export const styles = StyleSheet.create ({
    container: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});