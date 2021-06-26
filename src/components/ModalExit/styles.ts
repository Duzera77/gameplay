import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 170,
        justifyContent: 'space-around',
    },
    overlay: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        backgroundColor: theme.colors.overlay,
    },
});