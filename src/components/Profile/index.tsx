import React, { useState } from 'react';
import { 
    KeyboardAvoidingView,
    Platform,
    View, 
    Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { ExitButtons } from '../ExitButtons';
import { ModalExit } from '../ModalExit';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    const [openExitModal, setOpenExitModal ] = useState(false);
    const { user, singOut } = useAuth();

    const handleOpenModal = ( ) => setOpenExitModal(true);

    const handleCloseModal = ( ) => setOpenExitModal(false);

    const handleSignOut = () => singOut();

    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <RectButton onPress={handleOpenModal}>
                <Avatar urlImage={user.avatar} />
            </RectButton>

            <View>
                <View style={styles.user} >
                    <Text style={styles.greeting} >
                        Olá,
                    </Text>

                    <Text style={styles.userName} >
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message} >
                    Hoje é dia de vitória
                </Text>
            </View>
            <ModalExit 
                visible={openExitModal}  
            >
                <ExitButtons
                    closeModal={handleCloseModal}
                    signOut={handleSignOut}
                    title={'Sim'}
                />
            </ModalExit>
        </KeyboardAvoidingView>
    );
}
