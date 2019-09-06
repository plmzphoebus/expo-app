import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { selectKeyIndex } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class KeysButtons extends Component {
    render() {

        const { keys, selectedValues: { selectedKeyIndex }, selectKeyIndex } = this.props;

        const keyButtons = keys.map(key => key.shortKey ? '/' : key.key);

        const { containerStyle, buttonStyle, selectedTextStyle } = styles;

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text h3>Key</Text>
                <Text h1 style={{ marginBottom: 2 }}>{keys[selectedKeyIndex].key}</Text>
                <ButtonGroup
                    onPress={index => selectKeyIndex(index)}
                    selectedIndex={selectedKeyIndex}
                    containerStyle={containerStyle}
                    selectedButtonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                    buttons={keyButtons}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: 'white'
    },
    selectedTextStyle: {
        color: 'orange',
        fontWeight: '900'
    }
};

const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });

export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);