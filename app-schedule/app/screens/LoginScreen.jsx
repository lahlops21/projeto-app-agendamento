import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LabeledInput from "../components/LabeledInput";
import ButtonForm from "../components/ButtonForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen(){
    
    return (
        <SafeAreaView style ={styles.safeArea}> 
            <ScrollView>
                <Text style ={styles.title}>Faça login na sua conta </Text>
                <View style ={styles.form}>   
                    
                    <LabeledInput 
                    label = "Email" 
                    placeholder = 'Insira seu endereço de email: '
                    keyboardType = 'email-adress'
                            
                    />
                                        
                    <LabeledInput 
                    label = "Senha" 
                    placeholder = 'Insira sua senha: '
                    secureTextEntry = {true} />

                    <ButtonForm
                    textButton= "Entrar"
                    
                    />
                    <TouchableOpacity style = {styles.forget}> 
                        <Text style = {styles.forgetText}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <View style = {styles.footer}>
                    <TouchableOpacity> 
                        <Text style = {styles.footerText}>Ainda nâo tem conta?</Text>
                        <Text style = {styles.footerLink}>Faça seu cadastro</Text>
                    </TouchableOpacity>
                    </View>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight:"700",
        textAlign: "center",
        color: "#333",
        marginBottom: 26
    },

    form: {
        padding: 16
    },

    forgetText: {
        color: "#00213d",
        fontSize: 13,
        fontWeight: "700",
        fontFamily: "Public sans",
        textDecorationLine: "underline"
        
    },

    forget: {

        marginTop: 14,
        alignSelf: "center" // Centraliza em relação ao pai dele, que é a view
        
    }


})

