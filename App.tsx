import React from "react";
import { Text, View } from "react-native";
import AdmLoginScreen from './src/login/AdmLoginScreen';
import ClienteLoginScreen from './src/login/ClienteLoginScreen';
import ProfissionalLoginScreen from "./src/login/ProfissionalLoginScreen";
import ClienteCadastroScreen from "./src/login/ClienteCadastroScreen";
import ProfissionalCadastroScreen from "./src/login/ProfissionalCadastroScreen";
function App(): JSX.Element {

   return (
   //<AdmLoginScreen />
   //<ClienteLoginScreen />
   //<ProfissionalLoginScreen />
   //<ClienteCadastroScreen />
   <ProfissionalCadastroScreen/>
   );

}

export default App