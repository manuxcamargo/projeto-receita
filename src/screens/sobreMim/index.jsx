import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

export default function sobreMim() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <StatusBar style="auto" />
          <Text style={styles.title}>Sobre Mim</Text>
          <Image
            style={styles.stretch}
            source={require("../../../assets/manu.jpg")}
          />

          <Text>SOBRE MIM</Text>

          <Text>
            Manuela, aos 17 anos, é uma jovem apaixonada pela vida e pelas
            aventuras que o mundo tem a oferecer. Nascida e criada na
            encantadora cidade de Campinas, no interior de São Paulo, ela
            encontra inspiração em cada esquina e alegria em cada novo destino
            que descobre. Desde tenra idade, Manuela desenvolveu uma paixão por
            explorar novos lugares e culturas. Seus olhos brilham de empolgação
            sempre que surge uma oportunidade de viajar, seja para uma praia
            tranquila no litoral brasileiro, uma cidade cosmopolita no exterior
            ou até mesmo para uma aventura nas montanhas. Além de sua sede por
            novas experiências, Manuela também é uma estudante dedicada e
            curiosa. Seu amor por viagens se estende além dos destinos físicos,
            permeando também o mundo do conhecimento. Ela busca constantemente
            aprender sobre diferentes culturas, línguas e modos de vida,
            enriquecendo assim sua compreensão do mundo e seu apreço pela
            diversidade. Nos momentos em que não está planejando sua próxima
            viagem ou mergulhando em livros sobre lugares distantes, Manuela
            gosta de passar tempo com amigos e familiares, compartilhando
            histórias de suas aventuras e criando memórias que durarão a vida
            toda. Para Manuela, cada viagem é mais do que uma simples jornada. É
            uma oportunidade de se conectar com o mundo ao seu redor, de
            expandir seus horizontes e de descobrir mais sobre si mesma. Com um
            espírito aventureiro e uma mente aberta, ela está pronta para
            continuar explorando tudo o que o mundo tem a oferecer.
          </Text>

          <TouchableOpacity
            style={styles.navButtonText}
            onPress={() => navigation.navigate("Doces")}
          >
            <Text>Doces</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButtonText}
            onPress={() => navigation.navigate("Salada")}
          >
            <Text style={styles.navButtonText}>Salada</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
