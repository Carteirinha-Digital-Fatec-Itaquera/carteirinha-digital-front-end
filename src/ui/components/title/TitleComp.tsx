import React from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

type TitleProps = {
    text: string
}

export const TitleComp = ({ text }: TitleProps) => {
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{ text }</Text>
            <View style={styles.divider} />
        </View>
    )
}