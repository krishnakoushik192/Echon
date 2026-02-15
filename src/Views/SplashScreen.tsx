import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { PermissionsAndroid, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import type { RootStackParamList } from '../types/navigation';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Notification03Icon } from '@hugeicons/core-free-icons'
import Contacts, { Contact } from 'react-native-contacts';

const SplashScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [contacts, setContacts] = useState<Contact[]>([]);
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
    })
        .then((res) => {
            // console.log('Permission: ', res);
            Contacts.getAll()
                .then((contacts) => {
                    // work with contacts

                    setContacts(contacts);
                    // console.log(contacts);
                })
                .catch((e) => {
                    console.log(e);
                });
        })
        .catch((error) => {
            console.error('Permission error: ', error);
        });
    return (
        <ScrollView className='flex-1 bg-white'>
            <Text className='text-2xl font-bold text-blue-500'>SplashScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Chats', { id: 1 })} className='p-4 bg-slate-900 rounded-md'>
                <Text className='text-white'>Go to MainScreen</Text>
            </TouchableOpacity>
            <View>
                <HugeiconsIcon icon={Notification03Icon} size={24} color='black' />
            </View>
            <View>
                {contacts.map((contact) => (
                    <View key={contact.recordID} className='flex-row items-center justify-between'>
                        <Text>{contact.displayName}</Text>
                        <Text>{contact.phoneNumbers?.[0]?.number}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
};

export default SplashScreen;