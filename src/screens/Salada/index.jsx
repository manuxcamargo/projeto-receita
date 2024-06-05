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
          <Text style={styles.title}>Salada</Text>
          <Image
            style={styles.stretch}
            source={require("../../../assets/salada-frango.png")}
          />

          <Text>SALADA GOURMET DE FRANGO </Text>
          <Text>
            Ingredientes: 1 unidade de alface romana 1 xícara de croutons Frango
            peito de frango 250 g de peito de frango sal sal a gosto
            pimenta-do-reino pimenta-do-reino a gosto azeite 1 fio de azeite
            Molho limão suco de 1 limão mostarda 1 colher (chá) de mostarda
            molho inglês 1 colher (chá) de molho inglês queijo parmesão ralado
            30 g de parmesão ralado alho 2 dentes de alho sal sal a gosto
            pimenta-do-reino pimenta-do-reino a gosto azeite 200 ml de azeite
          </Text>
          <Text>
            Modo de Preparo: Tempere o peito de frango com sal e
            pimenta-do-reino. Cozinhe o peito de frango em uma frigideira com 1
            fio de azeite. Fatie o peito de frango e reserve. Molho: Misture no
            liquidificador: o suco de limão, a mostarda, o molho inglês, o
            parmesão ralado, o alho, o sal e a pimenta-do-reino. Bata bem e vá
            acrescentando o azeite até emulsificar. Lave a alface e sirva com o
            peito de frango, os croutons e o molho.{" "}
          </Text>

          <Image
            style={styles.stretch}
            source={require("../../../assets/salada-torrada.png")}
          />

          <Text>SALADA GOURMET DE TORRADA </Text>
          <Text>
            Ingredientes: 1 cabeça de alface tomate-cereja 8 tomates cereja 1/4
            do maço de agrião pão de forma 2 pães de forma maionese Maionese
            cebolinha Cebolinha pimenta-do-reino Pimenta-do-reino orégano seco
            Orégano sal Sal azeite Azeite queijo parmesão Queijo parmesão
          </Text>
          <Text>
            Modo de Preparo: Coloque um pouco de maionese sobre os 2 pães de
            forma (apenas para untar). Coloque um pouco de pimenta do reino e
            orégano Coloque para torrar no micro-ondas por 1 minutos e 30
            segundos. O pão de forma deve ficar durinho, como torrada. Com uma
            faca, faça 3 tirinhas na vertical e 4 na horizontal (resumindo:
            pique em quadradinhos). Reserve. Enquanto o pão estiver torrando no
            microondas, faça a salada: Lave bem todas as verduras. Coloque todas
            as folhas do alface, uma sobre a outra, enrole e corte em tiras.
            Desfolhe o agrião. Corte cada tomate cereja em 3 ou 2 pedacinhos.
            Pique a cebolinha bem fininha. Misture tudo. Adicione sal (costumo
            colocar de 3 a 4 pitadas bem caprixadas). Adicione 1 pitada de
            pimenta-do-reino, misture tudo. Adicione um pouco de azeite Adicione
            queijo parmesão (eu coloco bastante queijo). Por cima da salada
            jogue os crotons (pão de forma torrado e temperado).
          </Text>
          <Image
            style={styles.stretch}
            source={require("../../../assets/salada-kani.png")}
          />

          <Text>SALADA GOURMET DE KANI </Text>
          <Text>
            Ingredientes: alface crespa tomate-cereja tomate cereja cebola roxa
            1/2 cebola roxa manga 1 manga morango 6 morangos cenoura 1 cenoura
            queijo coalho 100 g de queijo coalho kani 100 g de kani
          </Text>
          <Text>
            Modo de Preparo: Corte a alface em tiras. Corte os tomates cerejas
            no meio. Corte a cebola em rodelas. Rale a cenoura. Corte a manga em
            cubos e os morangos ao meio. Corte o queijo coalho e o kani em
            cubinhos. Coloque os ingredientes em uma travessa e misture tudo com
            cuidado pra não machucar os ingredientes. Por último, coloque em uma
            recipientes de vidro e sirva.
          </Text>

          <TouchableOpacity
            style={styles.navButtonText}
            onPress={() => navigation.navigate("Doces")}
          >
            <Text>Doces</Text>
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
