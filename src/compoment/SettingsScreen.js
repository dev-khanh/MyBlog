/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { WebView } from 'react-native-webview';
export default class SettingsScreen extends PureComponent {
    render() {
        return <WebView source={{ uri: 'https://www.youtube.com/channel/UC4gzeX8s8xtrxLxcF5y0VDA' }} />;
    }
}
