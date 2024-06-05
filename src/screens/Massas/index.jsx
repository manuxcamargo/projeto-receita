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
          <Text style={styles.title}>Massa</Text>
          <Image
            style={styles.stretch}
            source={require("../../../assets/panqueca.png")}
          />

          <Text>PANQUECA </Text>
          <Text>
            Ingredientes: 2 xícaras (chá) de farinha de trigo leite 2 xícaras
            (chá) de leite ovo 3 ovos sal 1 pitada de sal
          </Text>
          <Text>
            Bata todos os ingredientes no liquidificador por 2 minutos. Em
            seguida desligue e, com uma colher, misture a farinha que grudou no
            copo do liquidificador. Bata novamente só para misturar e reserve.
            Unte a frigideira com um fio de óleo e leve ao fogo até aquecer. Com
            o auxílio de uma concha, pegue uma porção de massa e coloque na
            frigideira, gire a frigideira para espalhar bem a massa. Abaixe o
            fogo e deixe dourar por baixo, em seguida vire do outro lado e deixe
            dourar, repita o processo com toda a massa.
          </Text>

          <Image
            style={styles.stretch}
            source={require("../../../assets/torta.png")}
          />

          <Text>TORTA DE FRANGO </Text>
          <Text>
            Ingredientes: Recheio peito de frango 500g de peito de frango sem
            pele caldo de galinha 1/2 litro de caldo de galinha óleo 4 colheres
            (sopa) de óleo alho 1 dente de alho amassado cebola 1 cebola picada
            tomate 3 tomates sem pele e sem sementes ervilha 1 xícara (chá) de
            ervilhas sal sal a gosto pimenta-do-reino pimenta-do-reino a gosto
            Massa leite 250 ml de leite óleo 3/4 de xícara (chá) de óleo ovo 2
            ovos farinha de trigo 1 e 1/2 xícara (chá) de farinha de trigo sal
            sal a gosto fermento em pó químico 1 colher (sopa) de fermento em pó
            queijo ralado queijo ralado a gosto
          </Text>
          <Text>
            Modo de Preparo: Recheio: Cozinhe o peito de frango no caldo até
            ficar macio. Separe 1 xícara (chá) de caldo do cozimento e reserve.
            Refogue os demais ingredientes e acrescente as ervilhas por último.
            Desfie o frango, misture ao caldo e deixe cozinhar até secar. Massa:
            Bata o leite, o óleo e os ovos no liquidificador em velocidade
            baixa. Acrescente aos poucos a farinha, o sal e o fermento. Despeje
            metade da massa em uma forma untada e adicione o recheio sobre ela.
            Cubra com o restante de massa e o queijo ralado. Leve ao forno
            preaquecido (180° C) até dourar.
          </Text>

          <Image
            style={styles.stretch}
            source={require("../../../assets/macarrao.png")}
          />

          <Text>MACARRÃO COM CAMARÃO </Text>
          <Text>
            Ingredientes: 1 kg de macarrão espaguete cozido al dente camarão 2
            kg de camarão limpo e lavado com suco de um limão milho 1 lata de
            milho molho de tomate 1 molho de tomate peneirado cebola 1 cebola
            ralada alho 2 dentes de alho ralados azeite 3 colheres (sopa) de
            azeite caldo de legumes 2 caldo de legumes sal sal a gosto salsa
            salsinha para polvilhar
          </Text>
          <Text>
            Modo de Preparo: Em uma panela coloque a cebola o alho e o azeite
            deixe dourar. Coloque o camarão e frite até que ele fique rosado.
            Coloque o molho de tomate e os caldos de legumes, mexa bem até
            dissolver os caldos. Acrescente o milho, mexa, acrescente um copo de
            água e deixe cozinhando. Quando o caldo engrossar coloque o macarrão
            e misture com cuidado para não esmagar o macarrão. Na hora de servir
            polvilhe a salsinha.
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
