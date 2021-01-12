import React from 'react'
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PaletteBar = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.goToPalette}>
            <Text style={styles.text}>
                {props.name}
            </Text>
            <FlatList
                style={styles.list}
                data={props.colors.slice(0, 5)}
                renderItem={({ item }) =>
                    <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
                }
                keyExtractor={item => item.hexCode}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginVertical: 7,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17
    },
    box: {
        width: 30,
        height: 30,
        marginTop: 8,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 5,
    },
    list: {
        flexDirection: 'row'
    }
});
export default PaletteBar;