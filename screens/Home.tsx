import React from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PaletteBar from '../components/PaletteBar';

const Home = ({ navigation }) => {
    const COLORS = [
        {
            palette: 'Rainbow', colors: [
                { colorName: 'Red', hexCode: '#FF0000' },
                { colorName: 'Orange', hexCode: '#FF7F00' },
                { colorName: 'Yellow', hexCode: '#FFFF00' },
                { colorName: 'Green', hexCode: '#00FF00' },
                { colorName: 'Violet', hexCode: '#8B00FF' },
            ]
        },
        {
            palette: 'Frontend Masters', colors: [
                { colorName: 'Red', hexCode: '#c02d28' },
                { colorName: 'Black', hexCode: '#3e3e3e' },
                { colorName: 'Grey', hexCode: '#8a8a8a' },
                { colorName: 'White', hexCode: '#ffffff', isLight: true },
                { colorName: 'Orange', hexCode: '#e66225' },
            ]
        },
        {
            palette: 'Solarized', colors: [
                { colorName: 'Base03', hexCode: '#002b36' },
                { colorName: 'Base02', hexCode: '#073642' },
                { colorName: 'Base01', hexCode: '#586e75' },
                { colorName: 'Base00', hexCode: '#657b83' },
                { colorName: 'Base0', hexCode: '#839496' },
                { colorName: 'Base1', hexCode: '#93a1a1' },
                { colorName: 'Base2', hexCode: '#eee8d5', isLight: true },
                { colorName: 'Base3', hexCode: '#fdf6e3', isLight: true },
                { colorName: 'Yellow', hexCode: '#b58900' },
                { colorName: 'Orange', hexCode: '#cb4b16' },
                { colorName: 'Red', hexCode: '#dc322f' },
                { colorName: 'Magenta', hexCode: '#d33682' },
                { colorName: 'Violet', hexCode: '#6c71c4' },
                { colorName: 'Blue', hexCode: '#268bd2' },
                { colorName: 'Cyan', hexCode: '#2aa198' },
                { colorName: 'Green', hexCode: '#859900' },
            ]
        }
    ];

    const navigateToPalette = (palette) => {
        navigation.navigate('ColorPalette', { name: palette.palette, colors: palette.colors })
    }


    return (
        <View>
            <FlatList
                data={COLORS}
                renderItem={({ item }) => <PaletteBar goToPalette={() => navigateToPalette(item)} name={item.palette} colors={item.colors} />}
                keyExtractor={item => item.palette} />
        </View>

    );
}

export default Home;