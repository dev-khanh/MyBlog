/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { wrapper, swiperContainer, viewContainer, slide1, slide2, slide3, imageSwiper } from '../total/style';
import { hendleShowList } from '../total/libs';
export default class MainScreen extends PureComponent {
    state = {
        setEnable: true,
    }
    componentDidMount() {
        this.props.fetchInitData();
    }
    render() {
        let arrryas = hendleShowList(this.props.arraysBloc);
        console.log(arrryas);
        return (
            <Swiper ref={null} containerStyle={wrapper} scrollEnabled={this.state.setEnable} index={0}>
                <View style={swiperContainer}>
                    <View style={viewContainer}>
                        <Swiper autoplay index={1}
                            onTouchStart={(e) => {
                                this.setState({ setEnable: false });
                            }}
                            onTouchEnd={(e) => {
                                this.setState({ setEnable: true });
                            }}
                            onMomentumScrollEnd={(e) => {
                                this.setState({ setEnable: true });
                            }}>
                            <View style={slide1}>
                                <Image style={imageSwiper} source={{ uri: arrryas[0] }} />
                            </View>
                            <View style={slide2}>
                                <Image style={imageSwiper} source={{ uri: arrryas[1] }} />
                            </View>
                            <View style={slide3}>
                                <Image style={imageSwiper} source={{ uri: arrryas[2] }} />
                            </View>
                        </Swiper>
                    </View>
                </View>
            </Swiper>
        );
    }
}
