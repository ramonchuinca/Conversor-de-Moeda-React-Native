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
import { ResultCard } from "./src/ResultCard";
import { exchangeRateApi } from "./src/services/api";
import { useState } from "react";

export default function App() {

  const [amount, setAmount] = useState('');
  const [fromCurrencies, setFromCurrencies] = useState('USD');
  const [toCurrencies, setToCurrencies] = useState('BRL');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState('false');
  const [exchangeRate, setExchangeRate] = useState('null');

  async function fetchExchangeRate() {
    const data = await exchangeRateApi('BRL');
    console.log(data);
  }

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
              {currencies.map((currencies =>

                <Button
                  variant='primary'
                  key={currencies.code}
                  currencies={currencies}
                  onPress={() => setFromCurrencies(currencies.code)}
                  isSelected={fromCurrencies === currencies.code}
                  
                >
                </Button>

              ))}
            </View>

            <Input label="Valor:" />

            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapButtonText}>
                ↑ ↓
              </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para: </Text>

            <View style={styles.currenciesGrid}>
              {currencies.map((currencies =>

                <Button
                  variant='secondary'
                  key={currencies.code}
                  currencies={currencies}
                  onPress={() => setToCurrencies(currencies.code)}
                  isSelected={toCurrencies === currencies.code}
                >
                </Button>

              ))}
            </View>

          </View>

          <TouchableOpacity
            style={styles.convertButton}
            onPress={fetchExchangeRate}
          >
            <Text style={styles.swapButtonText}>
              Converta
            </Text>
          </TouchableOpacity>

          <ResultCard />

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
