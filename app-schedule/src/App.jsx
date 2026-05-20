import { StatusBar } from "expo-status-bar"; // Controla a barra de status do celular.
import { SafeAreaProvider } from "react-native-safe-area-context"; // Provê contexto de área segura para toda a árvore.
import AppNavigator from "./src/navigation/AppNavigator"; // Importa o navegador que define as telas do app.

export default function App() {
  // Declara e exporta o componente principal.
  return (
    <SafeAreaProvider>
      {" "}
      // Envolve todo o app para que componentes filhos // saibam onde ficam o
      notch, barra de status etc.
      <StatusBar style="auto" /> // Ajusta a barra de status ao tema do celular.
      <AppNavigator /> // Renderiza o sistema de navegação com todas as telas.
    </SafeAreaProvider>
  );
}
