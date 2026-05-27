// Arquivos que iremos montar as nossas rota e configurar nossas telas 
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterAll from "../screens/RegisterAll";
import { createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="regsterscreen" component={RegisterScreen}/>
            <Stack.Screen name="regsterall" component={RegisterAll}/>
        </Stack.Navigator>
    )
}


