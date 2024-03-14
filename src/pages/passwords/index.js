import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import { useStorage } from "../../hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { PasswordCard } from "./components/passwordCard";

export function Passwords() {
  const [savedPasswords, setSavedPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
      setSavedPasswords(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item) {
    const passwords = await removeItem("@pass", item);
    setSavedPasswords(passwords);
  }
  return (
    <>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={savedPasswords}
          renderItem={({ item }) => (
            <PasswordCard
              data={item}
              removePassword={() => {
                handleDeletePassword(item);
              }}
            />
          )}
          keyExtractor={(item) => String(item)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#F3F3FF", height: "100%", padding: 18 },
  header: { backgroundColor: "#392de9", height: "10%", alignItems: "center" },
  title: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
});
