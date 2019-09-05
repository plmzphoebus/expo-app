import React, { Component } from 'react';
import { View, Image, Platform } from 'react-native';
import { Asset } from 'expo-asset';
import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT } from '../constants';

const cacheImages = (images) => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Asset.fromModule(image).downloadAsync();
});


class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appIsReady: false
        }
    }

    static navigationOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#3296F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: (
            <Image
                source={icon}
                style={styles.imageStyle}
            />
        )
    });

    componentWillMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([icon]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                {/*  Chord Modal  */}

                {/*  Content  */}
            </View>
        );
    }
}

const styles = {
    imageStyle: {
        marginTop: 0,
        marginLeft: 10,
        width: 40,
        height: 40
    }
}

export default MainScreen;