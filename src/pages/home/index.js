import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { ModalPassword } from "../../components/modal";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modal, setModal] = useState(false);

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModal(true);
  }
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>{size} Caracteres</Text>
        <View style={styles.area}>
          <Slider
            style={styles.slider}
            minimumValue={6}
            maximumValue={20}
            minimumTrackTintColor="#392de9"
            thumbTintColor="#392de9"
            onValueChange={(e) => setSize(e.toFixed(0))}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
        <Modal visible={modal} animationType="fade" transparent={true}>
          <ModalPassword
            password={passwordValue}
            handleClose={() => setModal(false)}
          />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
  },
  area: {
    backgroundColor: "white",
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    borderRadius: 8,
    padding: 8,
  },
  slider: {},
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
