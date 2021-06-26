import { StyleSheet} from 'react-native';

import { theme } from '../../global/styles/themes';


export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6,
    },
    userName: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    singOutButton: {
        position: 'absolute',
        marginLeft: '55%',
        marginTop: '18%',
        width: 100,
        height: 40,
      },
    });