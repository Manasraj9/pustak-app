import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View, ActivityIndicator } from 'react-native';

const BASE_URL = 'https://pustak-app-backend.onrender.com';

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch(`${BASE_URL}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch books:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading books...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Book List</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push(
                `/orders?id=${item.id}&title=${encodeURIComponent(item.title)}`
              )
            }
            style={{
              padding: 15,
              backgroundColor: '#f2f2f2',
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: '#888' }}>by {item.author}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
