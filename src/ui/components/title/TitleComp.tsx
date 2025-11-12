import React from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

type TitleProps = {
    text: string,
    size?: number
}

export const TitleComp = ({ text, size = 14 }: TitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {fontSize: size}]}>{ text }</Text>
            <View style={styles.divider} />
        </View>
    )
}