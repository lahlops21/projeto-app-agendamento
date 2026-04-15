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
                    <Text style = {styles.footerText}>Ainda não tem conta?</Text>
                    <TouchableOpacity>                        
                        <Text style = {styles.footerLink}> Faça seu cadastro!</Text>
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
        color: "#6b6e71",
        marginBottom: 26
    },

    form: {
        width: "100%",
        marginTop: 16,
        paddingHorizontal: 20
    },

    forgetText: {
        color: "#00213d",
        fontSize: 13,
        fontWeight: "700", // pode usar "semi-bold" ou sem aspas. Mas é melhor usar assim. 
        textDecorationLine: "underline"
        
    },

    forget: {

        marginTop: 14,
        alignSelf: "center" // Centraliza em relação ao pai dele, que é a view
        
    },

    footer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
         
    },

    footerText: {
        fontSize: 13,
        color: "#3a3a3a"
    },

    footerLink: {
        color: "#0e73e8",
        // textDecorationLine: "underline",
        fontWeight: "700",
        fontSize: 13
    }


})

