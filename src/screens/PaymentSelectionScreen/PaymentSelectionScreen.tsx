import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Color, Screen } from '../../utils'; // Ensure to import Screen from the appropriate location
import { AppHeader } from '../../components';

interface PaymentSelectionScreenProps {
    navigation : any,
    route : any
}

const PaymentSelectionScreen: React.FC<PaymentSelectionScreenProps> = ({ navigation, route }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  // Dummy data for tip percentages
  const tipPercentages = [10, 15, 20, 25];

  // Dummy data for other details
  const details = [
    { label: 'Price', value: '$' + route.params.selectedService.price },
    // { label: 'Previously Selected', value: 'Type: ABC, Price: $50' },
    { label: 'Tip', value: `$${tipPercentage * 0.01 * route.params.selectedService.price }` },
    { label: 'Taxes', value: '$5' },
    { label: "Total", value: `$${route.params.selectedService.price + tipPercentage * 0.01 * route.params.selectedService.price  + 5}`, isBold: true}
  ];


  const handleApplyPay = () => {
    // Logic for applying payment
    console.log('Applying payment...');
  
        // Navigate to PaymentSelectionScreen with the selected date and time
        navigation.navigate(Screen.AcknowledgementScreen, { });
  };

  const handleBookWithCard = () => {
    // Logic for booking with card


    
        // Navigate to PaymentSelectionScreen with the selected date and time
        // navigation.navigate(Screen.AcknowledgementScreen, {  });

  };

  const onPressBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
        <AppHeader isBackButton onPressBack={onPressBack} />
      <View style={styles.mainContainer}>
        {/* <View style={styles.timingContainer}>
          <Text style={styles.selectedTimeText}>{`Selected Time: ${selectedTime}`}</Text>
        </View> */}
        <View style={styles.tipContainer}>
          <Text style={styles.label}>Select Tip Percentage:</Text>
          <View style={styles.tipButtonContainer}>
            {tipPercentages.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.tipButton, {backgroundColor: tipPercentage === item ? Color.blueCard : Color.blueShadow}]}
                onPress={() => setTipPercentage(item)}
              >
                <Text style={styles.tipButtonText}>{`${item}%`}</Text>
              </TouchableOpacity>
            ))} 
          </View>
        </View>
        <View style={styles.lineSeparator} />
        <View style={styles.detailsContainer}>
          {details.map((detail, index) => (
            <View key={index} style={styles.detailItem}>
              <Text style={[styles.label, detail.isBold && styles.boldText]}>{detail.label}:</Text>
              <Text style={[styles.value, detail.isBold && styles.boldText]}>{detail.value}</Text>
            </View>
          ))}
        </View>
        {/* <View style={styles.promoContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Enter Promo Code"
            value={promoCode}
            onChangeText={(text) => setPromoCode(text)}
          />
        </View> */}
        {/* <TouchableOpacity style={styles.applyPayButton} onPress={handleApplyPay}>
          <Text style={styles.applyPayText}>Apply Pay</Text>
        </TouchableOpacity> */}
        <View style={styles.lineSeparator} />
        <TouchableOpacity style={styles.bookWithCardButton} onPress={handleBookWithCard}>
          <Text style={styles.bookWithCardText}>Book With Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  timingContainer: {
    marginBottom: 20,
  },
  selectedTimeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tipContainer: {
    marginBottom: 20,
  },
  tipButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  tipButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems:'center',
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 10,
    width: '45%', // Adjusted width for the 3x2 grid
  },
  tipButtonText: {
    fontSize: 16,
  },
  lineSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginVertical: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    textAlign: 'right',
  },
  promoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  promoInput: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  applyPayButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  applyPayText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookWithCardButton: {
    backgroundColor: Color.blueCard,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  bookWithCardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentSelectionScreen;
