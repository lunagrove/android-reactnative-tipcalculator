import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [billAmount, setBillAmount] = useState(1.00);
  const [tipPercent, setTipPercent] = useState(15.0);

  const generateRandomBill = () => {
    const randomBillAmount = Math.floor(Math.random() * 400) + 1;
    setBillAmount(randomBillAmount);
  }

  var tipAmount = tipPercent / 100 * billAmount;
  var totalAmount = billAmount + tipAmount;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Tip</Text>
      <TouchableOpacity style={styles.button} onPress={generateRandomBill}>
        <Text style={styles.buttonText}>Generate Random Bill</Text>
      </TouchableOpacity>
      <Text style={styles.billAmount}>${billAmount.toFixed(2)}</Text>

      <View style={styles.radioButtonRow}>
        <RadioButton.Item
          value={10.0}
          status={tipPercent === 10.0 ? "checked" : "unchecked"}
          onPress={() => setTipPercent(10.0)}
          color="white"
          uncheckedColor="white"
        />
        <Text style={{color: '#ffffff', fontSize: 18}}>{'10%'}</Text>
      </View>
      <View style={styles.radioButtonRow}> 
        <RadioButton.Item
          value={15.0}
          status={tipPercent === 15.0 ? "checked" : "unchecked"}
          onPress={() => setTipPercent(15.0)}
          color="white"
          uncheckedColor="white"
        />
        <Text style={{color: '#ffffff', fontSize: 18}}>{'15%'}</Text>
      </View>
      <View style={styles.radioButtonRow}> 
        <RadioButton.Item
          value={18.0}
          status={tipPercent === 18.0 ? "checked" : "unchecked"}
          onPress={() => setTipPercent(18.0)}
          color="white"
          uncheckedColor="white"
        />
        <Text style={{color: '#ffffff', fontSize: 18}}>{'18%'}</Text>
      </View>
      <View style={styles.radioButtonRow}> 
        <RadioButton.Item
          value={20.0}
          status={tipPercent === 20.0 ? "checked" : "unchecked"}
          onPress={() => setTipPercent(20.0)}
          color="white"
          uncheckedColor="white"
        />
        <Text style={{color: '#ffffff', fontSize: 18}}>{'20%'}</Text>
      </View>
      <View style={styles.totalLine}>
        <Text style={{...styles.totalTitle, marginTop: 20}}>Bill amount:</Text>
        <Text style={{...styles.totalValue, marginTop: 20, marginBottom: 10}}>${billAmount.toFixed(2)}</Text>
      </View>

      <View style={{...styles.totalLine, borderBottomWidth: 2, borderBottomColor: '#828787' }}>
        <Text style={styles.totalTitle}>Tip amount:   ({tipPercent}%)</Text>
        <Text style={styles.totalValue}>${tipAmount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.totalLine}>
        <Text style={styles.totalTitle}>Total:</Text>
        <Text style={styles.totalValue}>${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36403f',
    alignItems: 'center',
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  button: {
    width: '100%',
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: '#31ebd8',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#36403f',
    fontSize: 18,
    fontWeight: 'bold',
  },
  billAmount: {
    backgroundColor: '#FFFFFF', 
    color: 'black',
    height: 60,
    width: '60%',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 15, 
    marginBottom: 30,  
  },
  radioButtonRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    color: '#FFFFFF',
  },
  totalLine: {
    marginTop: 8,
    width: '98%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalTitle: {
    color: '#31ebd8',
    textAlign: 'right',
    fontSize: 20,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 50,
  },
  totalValue: {
    color: '#31ebd8',
    textAlign: 'right',
    fontSize: 20,
    marginRight: 50,
  },
});
