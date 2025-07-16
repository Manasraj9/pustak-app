import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BASE_URL = 'https://pustak-app-backend.onrender.com';

const OrdersScreen = () => {
  const { id, title } = useLocalSearchParams();
  const [customerName, setCustomerName] = useState('');
  const router = useRouter();

  const handleOrder = async () => {
    if (!customerName) {
      Alert.alert("Please enter a customer name");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          book_id: id,
          customer_name: customerName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert(
          "Order Successful",
          `Order placed for "${title}" by ${customerName}`,
          [{ text: "OK", onPress: () => router.back() }]
        );
        setCustomerName('');
      } else {
        Alert.alert("Error", data.message || "Something went wrong");
      }
    } catch (error) {
      Alert.alert("Network Error", "Please check your connection.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Order for:</Text>
      <Text style={styles.book}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter customer name"
        value={customerName}
        onChangeText={setCustomerName}
      />

      <Button title="Place Order" onPress={handleOrder} />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  book: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
    borderRadius: 6,
  },
});
