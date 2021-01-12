import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = props => {
    const { colorHex, colorName, isLight } = props;
    return (
        <View style={[styles.container, { backgroundColor: colorHex }]}>
            <Text style={[styles.text, { color: isLight ? 'black' : 'white' }]}>{colorName}: {colorHex}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
});

export default ColorBox;