import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../types/navigation';

const MainScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-2xl font-bold text-blue-500'>MainScreen</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} className='p-4 bg-slate-900 rounded-md'>
                <Text className='text-white'>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainScreen