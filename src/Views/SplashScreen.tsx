import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SplashScreen = () => {
    const navigation = useNavigation();
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-2xl font-bold text-blue-500'>SplashScreen</Text>
            <TouchableOpacity onPress={() => (navigation as any).navigate('MainScreen')} className='p-4 bg-slate-900 rounded-md'>
                <Text className='text-white'>Go to MainScreen</Text>
            </TouchableOpacity>
        </View>
    )
};

export default SplashScreen;