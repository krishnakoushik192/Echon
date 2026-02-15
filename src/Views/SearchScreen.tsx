import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'

const SearchScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-black'>
            <View>
                <Header />
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen