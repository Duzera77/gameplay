import React from 'react';
import { Image } from 'react-native';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124130699/original/f94dc5f2291f3a7647c8c2f106fbf22c61d5a029/make-a-discord-bot-for-you.png'
    return(
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'        
        />

    );
}
