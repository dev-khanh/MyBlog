/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import HeaderInfor from './widget/HeaderInfor';
import { flex, marginTop, marginTopHeight } from '../total/style';
import CardView from './widget/CardView';
import CardViewFlatList from './widget/CardViewFlatList';
class InforUser extends Component {
  render() {
    return (
      <View style={flex}>
        <HeaderInfor />
        <View style={marginTop}>
          <CardView
            textName="Duong Quoc Khanh"
            profileImg="https://banner2.cleanpng.com/20180715/pjs/kisspng-businessperson-computer-icons-clip-art-red-bus-icon-5b4affbfc57958.6944989215316417918089.jpg"
          />
        </View>
        <View style={marginTopHeight}>
          <CardView
            call={() => this.setOnClickCallNumber()}
            textName="+(84) 0344 34 1900"
            profileImg="https://img.favpng.com/7/21/25/whatsapp-mobile-phones-messaging-apps-email-png-favpng-g8Y1Wrnm67ZdYVabdaCpbJwcJ.jpg"
          />
        </View>
        <View style={marginTopHeight}>
          <CardView
            call={() => this.setOnClickCallEmail()}
            textName="devdqkhanh@gmail.com"
            profileImg="https://www.clipartmax.com/png/middle/116-1167514_email-icon-color-a-beam-asm-pst-20k-frame-rails-frames-envelope.png"
          />
        </View>
        <View style={marginTopHeight}>
          <CardView
            call={() => this.setOnClickCallWeb()}
            textName="www.tpkvidamme.blogspot.com"
            profileImg="https://www.druckerfachmann.de/wp-content/uploads/2014/08/DEVK-Logo-wag-rgb_gro%C3%9F1.png"
          />
        </View>
        <View style={marginTopHeight}>
          <CardView
            call={() => this.setOnClickCallMap()}
            textName="176 Nguyen Thi Thap, Q7, HCM"
            profileImg="https://e7.pngegg.com/pngimages/525/794/png-clipart-green-map-navigation-icon-wellington-high-school-new-york-city-unity-hospital-address-wakefield-location-icon-miscellaneous-angle-thumbnail.png"
          />
        </View>
        <View style={{ marginTop: 100 }}>
          <CardViewFlatList rendPDF={() => this.setOnclickCard()} />
        </View>
      </View>
    );
  }
  setOnclickCard = () => {
    this.props.sendParamsUrl({
      title: 'https://www.topcv.vn/xem-cv/4bbcc822689bc9e1925896e27e3e26cb',
    });
    this.props.navigation.navigate('ShowPDF');
  };
  setOnClickCallNumber = () => {
    Linking.openURL('tel:0344341900');
  };
  setOnClickCallEmail = () => {
    Linking.openURL('mailto:devdqkhanh@gmail.com');
  };
  setOnClickCallWeb = () => {
    // Linking.openURL('https://tpkvidamme.blogspot.com/');
    this.props.sendParamsUrl({
      title: 'https://tpkvidamme.blogspot.com/',
    });
    this.props.navigation.navigate('ShowPDF');
  };
  setOnClickCallMap = () => {
    this.props.navigation.navigate('MapView');
  };
}
export default InforUser;
