/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import {
    row,
    containerCardPDFCardList,
    cardPDF,
    profileImgCardPDF,
    textCardList,
    colorGrayPDFCardList,
    containerViewCardList,
    contaienrViewButtonCardList,
    containerViewTextCardList,
} from '../../total/style';
let DATA = [
    {
        id: '',
        imageapp: 'https://raw.githubusercontent.com/dev-khanh/flutter_demo/master/assets/images/vietcoicon.png',
        name: 'VietCo',
        subname: 'My application',
    },
    {
        id: 'com.smartbus_qc',
        imageapp: 'https://lh3.googleusercontent.com/E3ygnrD9RDsJJe_U8dedps02kaHxBVvB0t0sHgmF0zr5CJE8tPdZTjNc1eH3jEgPy2s=s180-rw',
        name: 'SmartBus - Xe \nBuýt Thông Minh',
        subname: 'My application',
    },
    {
        id: 'com.sateco_pressure_app',
        imageapp: 'https://lh3.googleusercontent.com/FTVKD7NH6SJF0ECTsC9-v4PjEtaWFMpaf4-b7V0v2j1VpQ6j6x0GhMrtbaElSXpNhYs=s180-rw',
        name: 'E.CAPT TAB',
        subname: 'My application',
    },
    {
        id: 'com.vtrack',
        imageapp: 'https://lh3.googleusercontent.com/w2zt-fQ2Ha0YidncJiorb3qUSpt_-i0lPwqzLC_-1uUAD863xp1y7OqgSD3eQEBeriM=s180-rw',
        name: 'Vtrack',
        subname: 'My application',
    },
];
export default class CardViewFlatList extends PureComponent {
    render() {
        return (
            <View>
                <FlatList
                    data={DATA}
                    renderItem={(item) => this.renderItem(item.item)}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
            </View>
        );
    }
    renderItem = (item) => {
        // console.log(item.id);
        return (
            <View style={containerCardPDFCardList}>
                <View style={cardPDF}>
                    <View style={row}>
                        <Image
                            style={profileImgCardPDF}
                            source={{
                                uri: item.imageapp,
                            }}
                        />
                        <View>
                            <Text style={textCardList(item.id)}>{item.name}</Text>
                            <Text style={colorGrayPDFCardList(item.id)}>{item.subname}</Text>
                            <View style={containerViewCardList}>
                                <TouchableOpacity onPress={() => this.props.clickInstallsApp(item.id)}>
                                    <View style={contaienrViewButtonCardList}>
                                        <Text style={containerViewTextCardList}>Install</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}
