/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import SvgMessges from './SvgMessges';
import SvgSheare from './SvgSheare';
import {
    viewContainerHomePage, imagesBackgound, positionHomePage, titleHomePage, titleHomePage2, viewBetween, stySvgMess,
    styleTextMesss, styleSvgSheare, sytleViewContainMess,
} from '../../total/style';
export default class FlatListHomePage extends PureComponent {
    render() {
        return (
            <View style={viewContainerHomePage}>
                <ImageBackground style={imagesBackgound} source={{ uri: this.props.arraysImage }}>
                    <View style={positionHomePage}>
                        <Text style={titleHomePage}> {this.props.title} </Text>
                        <Text style={titleHomePage2}> {this.props.title} </Text>
                        <View style={viewBetween}>
                            <View style={sytleViewContainMess}>
                                <SvgMessges style={stySvgMess} />
                                <Text style={styleTextMesss}> 0 </Text>
                            </View>
                            <SvgSheare style={styleSvgSheare} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
