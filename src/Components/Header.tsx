import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ImgUrls } from '../utills/ImgUrls';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchAreaIcon, SidebarLeftIcon } from '@hugeicons/core-free-icons';
import { colors } from '../utills/Colors';
import { fonts } from '../utills/fonts';
import { useNavigation } from '@react-navigation/native';

const Header = ({ onMenuPress }: { onMenuPress?: () => void }) => {
    const navigation = useNavigation<any>();
    return (
        <View className="flex-row items-center w-full p-4 border-b border-[#FFD700] space-x-4" style={{ backgroundColor: colors.backgroundBlack }}>
            <TouchableOpacity onPress={onMenuPress}>
                <HugeiconsIcon
                    icon={SidebarLeftIcon}
                    size={30}
                    color={colors.iconColor}
                    strokeWidth={2}
                />
            </TouchableOpacity>
            <View style={{ backgroundColor: colors.backgroundBlack, width: '85%', }}>
                <Text className="text-white text-2xl tracking-[0.3em] text-center" style={fonts.SemiBold}>ECHON</Text>
                <Text className="text-lg text-center" style={[fonts.Cormorant.Regular, { color: colors.iconColor }]}>Where people truly connect</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <HugeiconsIcon
                    icon={SearchAreaIcon}
                    size={30}
                    color={colors.iconColor}
                    strokeWidth={2}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header;  