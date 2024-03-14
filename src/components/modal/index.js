import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { useStorage } from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose }) {
  const { saveItem } = useStorage();
  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password);
    alert("Senha salva com sucesso!");
    handleClose();
  }
  return (
    <View style={styles.container}>
      <View style={styles.modalWhiteBox}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable
          style={styles.innerContainer}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.innerText}>{password}</Text>
        </Pressable>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
            <Text>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText} onPress={handleCopyPassword}>
              Salvar Senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalWhiteBox: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  inputBox: {
    width: "70%",
    height: "25%",
    borderRadius: 8,
    backgroundColor: "black",
  },
  saveButton: {
    backgroundColor: "#392de9",
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  cancelButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "40%",
  },
  title: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  innerContainer: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  innerText: {
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    paddingTop: 24,
    flexDirection: "row",
  },
  saveButtonText: {
    fontWeight: "bold",
    color: "#FFF",
  },
});
