import React from 'react'
import { FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
    return (
        <FlatList
            style={{ marginVertical: 15 }}
            data={route.params.colors}
            renderItem={({ item }) => <ColorBox colorHex={item.hexCode} colorName={item.colorName} isLight={item.isLight} />}
            keyExtractor={item => item.colorName} />
    );
};

export default ColorPalette;