import React from 'react'
import { Text, View } from 'react-native'
import { colors } from '../utills/Colors'

const ProfileScreen = () => {
    return (
        <View className="flex-1" style={{ backgroundColor: colors.backgroundBlack }}>
            <Text className={`text-white`}>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen;