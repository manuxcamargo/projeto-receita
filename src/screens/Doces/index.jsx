import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <StatusBar style="auto" />
          <Text style={styles.title}>Doces</Text>
          <Image
            style={styles.stretch}
            source={require("../../../assets/mousse.png")}
          />

          <Text>MOUSSE DE MORANGO </Text>
          <Text>
            Ingredientes: 1 lata de leite condensado, 1 lata de creme de leite
            sem soro, 1 lata de suco de morango
          </Text>
          <Text>
            Modo de Preparo: Adicione o leite condensado no liquidificador.
            Depois adicione o creme de leite, logo após coloque o suco ou fruta
            e bata por pelo menos 2 minutos. Leve a geladeira e deixe gelar por
            1 hora e está pronto.
          </Text>

          <Image
            style={styles.stretch}
            source={require("../../../assets/bolo.png")}
          />

          <Text>BOLO DE CHOCOLATE </Text>
          <Text>
            Ingredientes: Massa: 4 ovos chocolate em pó 4 colheres (sopa) de
            chocolate em pó manteiga 2 colheres (sopa) de manteiga farinha de
            trigo 3 xícaras (chá) de farinha de trigo açúcar 2 xícaras (chá) de
            açúcar fermento em pó químico 2 colheres (sopa) de fermento leite 1
            xícara (chá) de leite Cobertura: 2 colheres (sopa) de manteiga
            chocolate em pó 7 colheres (sopa) de chocolate em pó creme de leite
            2 latas de creme de leite com soro açúcar 3 colheres (sopa) de
            açúcar
          </Text>
          <Text>
            Modo de Preparo: Modo de Preparo: Massa Em um liquidificador
            adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo,
            o açúcar e o leite, depois bata por 5 minutos. Adicione o fermento e
            misture com uma espátula delicadamente. Em uma forma untada, despeje
            a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40
            minutos. Não se esqueça de usar uma forma alta para essa receita:
            como leva duas colheres de fermento, ela cresce bastante! Outra
            solução pode ser colocar apenas uma colher de fermento e manter a
            sua receita em uma forma pequena. Calda Em uma panela, aqueça a
            manteiga e misture o chocolate em pó até que esteja homogêneo.
            Acrescente o creme de leite e misture bem até obter uma consistência
            cremosa. Desligue o fogo e acrescente o açúcar.
          </Text>

          <Image
            style={styles.stretch}
            source={require("../../../assets/pave.png")}
          />

          <Text>PAVÊ DE CHOCOLATE </Text>
          <Text>
            Ingredientes: 1 pacote de bolacha maisena leite 1/2 copo de leite
            chocolate em pó 1 colher (sobremesa) de chocolate em pó Creme branco
            leite condensado 1 lata de leite condensado leite de vaca 1 lata de
            leite de vaca (use a medida da lata de leite condensado) amido de
            milho 1 colher (sobremesa) de amido de milho gema de ovo 2 gemas
            Creme de chocolate leite condensado 1 lata de leite condensado leite
            de vaca 1 lata de leite de vaca (a medida da lata de leite
            condensado) amido de milho 1 colher (sobremesa) de amido de milho
            gema de ovo 2 gemas chocolate em pó 4 colheres de chocolate em pó
            Cobertura clara de ovo 4 claras açúcar 4 colheres de açúcar creme de
            leite 1 lata de creme de leite sem soro
          </Text>
          <Text>
            Modo de Preparo: Em uma tigela, misture o leite e o chocolate em pó
            até que esteja completamente dissolvido. Molhe as bolachas no leite
            e reserve. Creme branco Em uma panela, leve todos os ingredientes ao
            fogo médio e misture até obter uma consistência grossa e cremosa.
            Creme de chocolate Repita o processo feito no creme branco. Para a
            cobertura Bata as claras em neve com o açúcar até obter um creme
            consistente, adicione o creme de leite e misture delicadamente.
            Montagem Em um refratário grande, despeje o creme branco, metade das
            bolachas, creme de chocolate, bolachas e claras em neve. Repita o
            processo até preencher todo o refratário e leve à geladeira por 40
            minutos.
          </Text>

          <TouchableOpacity
            style={styles.navButtonText}
            onPress={() => navigation.navigate("Salada")}
          >
            <Text>Salada</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButtonText}
            onPress={() => navigation.navigate("Massas")}
          >
            <Text style={styles.navButtonText}>Massas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
