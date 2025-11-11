import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "./src/components/Button";
import { styles } from "./App.styles";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/input";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scrollView}>

        <View style={styles.content}>

          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subTitle}>Converta valores entre diferentes Moedas</Text>
          </View>

          <View style={styles.card}>

            <Text style={styles.label}>De:</Text>

            <View style={styles.currenciesGrid}>
            {currencies.map(( currencies =>

            <Button variant='secundary'
            key={currencies.code}
            currencies={currencies} 
            >
              
            </Button>
            ))}
               

            </View>
               <Input label="Valor:"/> 

               <TouchableOpacity style={styles.swapButton}>
                <Text style={styles.swapButtonText}>
                  ↑ ↓
                </Text>
               </TouchableOpacity>

               <Text style={styles.label}>Para: </Text>
               <View style={styles.currenciesGrid}>

                {currencies.map(( currencies =>

            <Button variant='primary'
            key={currencies.code}
            currencies={currencies} 
            >
              
            </Button>
            ))}
           </View>
          </View>

          <TouchableOpacity style={styles.convertButton}>
            <Text style={styles.swapButtonText}>
              Converta
            </Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
