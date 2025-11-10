import {Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button({variant = "primary", onPress, currencies}){
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={[

            styles.button,      
            variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary

        ]}>

            <Text style={styles.buttonText}>
                {currencies.code}
            </Text>

        </TouchableOpacity>
    )
}