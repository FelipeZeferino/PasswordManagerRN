import { React, useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function PasswordCard({ data, removePassword }) {
  const [visible, setVisible] = useState(true);
  return (
    <Pressable style={styles.card} onLongPress={removePassword}>
      <Text style={styles.text}>
        {visible ? data : [...data].map((letter) => letter && "*")}{" "}
      </Text>
      <Pressable
        onPress={() => {
          setVisible((prevState) => !prevState);
        }}
      >
        <Ionicons
          name={`${visible ? "eye-off" : "eye"}`}
          size={25}
          color={"white"}
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFF",
  },
});
