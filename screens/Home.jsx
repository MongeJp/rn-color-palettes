import React, { useCallback, useState, useEffect } from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PaletteBar from '../components/PaletteBar';

const Home = ({ navigation }) => {

    const [colorPalettes, setColorPalettes] = useState([]);

    // Method to get the color palettes from an external api
    const handleFetchColorPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
        const palettes = await result.json();
        if (palettes) setColorPalettes(palettes);
    });

    useEffect(() => {
        handleFetchColorPalettes();
    }, []);

    const navigateToPalette = (palette) => {
        navigation.navigate('ColorPalette', { name: palette.paletteName, colors: palette.colors })
    }


    return (
        <View>
             <FlatList
                data={colorPalettes}
                renderItem={({ item }) => <PaletteBar goToPalette={() => navigateToPalette(item)} name={item.paletteName} colors={item.colors} />}
                keyExtractor={item => item.paletteName} />
        </View>

    );
}

export default Home;