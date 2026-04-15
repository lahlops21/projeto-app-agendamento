import {ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LabeledInput from "../components/LabeledInput";
import ButtonForm from "../components/ButtonForm";

export default function RegisterAll(){

return(
    <SafeAreaView>
        <ScrollView>
            <Text>Agora, mais alguns dados sobre você</Text>
            <View>
                <LabeledInput
                    label = "CEP" 
                    placeholder = 'Insira seu CEP'                    
                />
                <LabeledInput
                    label = "Endereço" 
                    placeholder = 'Insira seu endereço'                    
                />
                <LabeledInput
                    label = "Complemento" 
                    placeholder = 'Insira seu complemento'                    
                />
                <LabeledInput
                    label = "Telefone" 
                    placeholder = '(00) 00000-0000'                    
                />

                <ButtonForm
                    textButton = 'Voltar'
                    
                    
                />
            </View>
        </ScrollView>
    </SafeAreaView>

)
}