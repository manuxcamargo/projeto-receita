import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Doces from "./src/screens/Doces";
import Massas from "./src/screens/Massas";
import Salada from "./src/screens/Salada";
import sobreMim from "./src/screens/sobreMim";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "RECEITAS",
            headerStyle: {
              backgroundColor: "#f2b36f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="Doces"
          component={Doces}
          options={{
            title: "Doces",
            headerStyle: {
              backgroundColor: "#f2b36f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="Massas"
          component={Massas}
          options={{
            title: "Massas",
            headerStyle: {
              backgroundColor: "#f2b36f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="Salada"
          component={Salada}
          options={{
            title: "Salada",
            headerStyle: {
              backgroundColor: "#f2b36f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="sobreMim"
          component={sobreMim}
          options={{
            title: "sobreMim",
            headerStyle: {
              backgroundColor: "#f2b36f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
