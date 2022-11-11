/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import React, { useState, useEffect } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const tema = {

    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000'
    }
}


const tema2 = {

    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#BF5B04'
    }
}


export default function Main() {

    const [value, setValue] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setValue(2);
        }, 3000)
    }, [])

    return (
        <PaperProvider theme={ value === 1 ? tema : tema2 }>
            <App>

            </App>
        </PaperProvider>

    );
}

AppRegistry.registerComponent(appName, () => Main);
