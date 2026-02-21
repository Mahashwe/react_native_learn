import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>This is a simple modal example</Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    height: 150,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
  },
});
