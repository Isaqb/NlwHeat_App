import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg';
import { UserPhotos } from '../UserPhotos';
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { user, sigOut } = useAuth();
    return (
        <View style={styles.container}>
            <LogoSvg />
            <View style={styles.logoutButton}>
                {user &&
                    <TouchableOpacity onPress={sigOut}>
                        <Text style={styles.logoutText}>Sair</Text>
                    </TouchableOpacity>}
                <UserPhotos imageUri={user?.avatar_url} />
            </View>


        </View>
    );
}