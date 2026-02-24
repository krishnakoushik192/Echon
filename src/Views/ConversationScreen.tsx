import React, { useState } from 'react'
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utills/Colors'
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SentIcon } from '@hugeicons/core-free-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { random } from 'lodash-es'


const Data = [
    { "id": 1, "text": "Hello! Hope you're having a great day." },
    { "id": 2, "text": "Don't forget to complete your task today." },
    { "id": 3, "text": "Keep pushing forward. Progress matters." },
    { "id": 4, "text": "Meeting starts in 10 minutes." },
    { "id": 5, "text": "Your hard work will pay off soon." },
    { "id": 6, "text": "Stay consistent and trust the process." },
    { "id": 7, "text": "New update available. Check it out." },
    { "id": 8, "text": "Take a short break and refresh your mind." },
    { "id": 9, "text": "Well done! You completed today's goal." },
    { "id": 10, "text": "Tomorrow is another chance to improve." }
]


const ConversationScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<any[]>([]);
    const handleSendMessage = () => {
        if (message.trim() === '') {
            return;
        }
        const senderMsg = { id: Date.now(), text: message, type: 'sender' };
        const randomNumber = random(0, 9);
        const receiverMsg = { id: Date.now() + 1, text: Data[randomNumber].text, type: 'receiver' };
        setMessage('');
        setMessages((prev: any[]) => [...prev, senderMsg, receiverMsg]);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 16 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={10}
            >
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, gap: 10 }}>
                        {messages.map((msg) => (
                            msg.type === 'sender' ? (
                                <View
                                    key={msg.id}
                                    style={{
                                        alignSelf: 'flex-end',
                                        maxWidth: '80%',
                                        backgroundColor: 'transparent',
                                        padding: 10,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 0,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderColor: colors.iconColor,
                                        borderWidth: 2,
                                    }}
                                >
                                    <Text style={{ color: colors.iconColor }}>{msg.text}</Text>
                                </View>
                            ) : (
                                <View key={msg.id} style={{
                                    alignSelf: 'flex-start',
                                    maxWidth: '80%',
                                    backgroundColor: '#333333',
                                    padding: 10,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderCurve: 'circular',
                                }}>
                                    <Text style={{ color: colors.textColor }}>{msg.text}</Text>
                                </View>
                            )
                        ))}
                    </View>
                </ScrollView>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
                    <TextInput
                        placeholder="Type your message..."
                        placeholderTextColor={colors.iconColor}
                        style={{
                            flex: 1,
                            backgroundColor: colors.backgroundBlack,
                            borderRadius: 10,
                            padding: 10,
                            borderWidth: 1,
                            borderColor: colors.iconColor,
                            color: 'white'
                        }}
                        value={message}
                        onChangeText={setMessage}
                    />

                    <TouchableOpacity style={{ marginLeft: 8 }} onPress={handleSendMessage}>
                        <HugeiconsIcon
                            icon={SentIcon}
                            size={30}
                            color={colors.iconColor}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ConversationScreen