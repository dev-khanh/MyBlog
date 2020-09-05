/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import {
    ViewContent, imagesViewContainer, imagesBackgound, viewBackground, textBold, viewTextOverlod, textCountter, FullView,
    textRed,
} from '../../total/style';
import { reformatDate } from '../../total/libs';
export default class FlatlistHorizontal extends PureComponent {
    render() {
        return (
            <FlatList
                data={this.props.arrryas}
                renderItem={(item) => this.renderItem(item.item)}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        );
    }
    renderItem = (item) => {
        var formatDay = reformatDate(item.published);
        var updateDay = reformatDate(item.updated);
        return (
            <View style={FullView}>
                <View style={ViewContent}>
                    <View
                        style={imagesViewContainer}>
                        <ImageBackground
                            style={imagesBackgound}
                            source={{
                                uri: item.arraysImage,
                            }}>
                            <View style={viewBackground}>
                                <Text style={textRed}>{formatDay}</Text>
                                <Text style={textBold}>{updateDay}</Text>
                            </View>
                            <View style={viewTextOverlod}>
                                <Text style={textCountter}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </View>
        );
    }
}
