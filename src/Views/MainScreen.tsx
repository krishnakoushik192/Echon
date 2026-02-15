import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../utills/Colors';
import { fonts } from '../utills/fonts';

type User = {
    id: number;
    name: string;
    image?: string;
    lastMessage: string;
    lastMessageTime: string;
};

const users: User[] = [
    {
        id: 1,
        name: 'Koushik',
        image: 'https://res.cloudinary.com/dyjwv6dnl/image/upload/v1745404598/p_koushik_tyei2l.jpg',
        lastMessage: 'hello',
        lastMessageTime: '12:00',
    },
    {
        id: 2,
        name: 'Arief',
        image: 'https://res.cloudinary.com/dyjwv6dnl/image/upload/v1745403463/Arief1_cmssad.jpg',
        lastMessage: 'hello',
        lastMessageTime: '12:00',
    },
    {
        id: 3,
        name: 'Hemanth RB',
        lastMessage: 'hello',
        lastMessageTime: '12:00',
    },
    {
        id: 4,
        name: 'Narayana NIAT',
        lastMessage: 'hello',
        lastMessageTime: '12:00',
    },
];

const getInitials = (name: string): string => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
};

const UserAvatar = ({ user }: { user: User }) => {
    if (user.image) {
        return (
            <TouchableOpacity>
                <Image
                    source={{ uri: user.image }}
                    className='w-14 h-14 rounded-full'
                    resizeMode="cover"
                />
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity className='w-14 h-14 bg-gray-200 rounded-full items-center justify-center'>
            <Text className='text-xl text-center' style={[fonts.SemiBold]}>
                {getInitials(user.name)}
            </Text>
        </TouchableOpacity>
    );
};

const ChatItem = ({ user }: { user: User }) => {
    return (
        <View className='flex-row items-start p-5'>
            <UserAvatar user={user} />
            <View className='flex-1 flex-col items-start justify-start ml-3'>
                <Text className='text-2xl text-left' style={[{ color: 'white' }, fonts.SemiBold]}>
                    {user.name}
                </Text>
                <Text className='text-base text-left' style={[fonts.Cormorant.Bold, { color: colors.iconColor }]}>
                    {user.lastMessage}
                </Text>
            </View>
            <View>
                <Text className='text-gray-400 text-sm'>{user.lastMessageTime}</Text>
            </View>
        </View>
    );
};

const MainScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: colors.backgroundBlack }} edges={['bottom', 'left', 'right']}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ChatItem user={item} />}
            />
        </SafeAreaView>
    );
};

export default MainScreen;