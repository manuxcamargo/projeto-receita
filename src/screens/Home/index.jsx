import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Aqui temos as melhores receitas!</Text>
        <Image
          style={styles.stretch}
          source={require("../../../assets/doce.png")}
        />

        <TouchableOpacity
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Doces")}
        >
          <Text style={styles.navButtonText}>Doces</Text>
        </TouchableOpacity>

        <Image
          style={styles.stretch}
          source={require("../../../assets/massa.png")}
        />

        <TouchableOpacity
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Massas")}
        >
          <Text style={styles.navButtonText}>Massas</Text>
        </TouchableOpacity>

        <Image
          style={styles.stretch}
          source={require("../../../assets/salada.png")}
        />

        <TouchableOpacity
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Salada")}
        >
          <Text style={styles.navButtonText}>Salada</Text>
        </TouchableOpacity>

        <Image
          style={styles.stretch}
          source={require("../../../assets/manu.jpg")}
        />

        <TouchableOpacity
          style={styles.navButtonText}
          onPress={() => navigation.navigate("sobreMim")}
        >
          <Text style={styles.navButtonText}>Sobre Mim</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
