import {Pressable, Text, StyleSheet} from "react-native"; 

// Declaração das constantes para estilização 
const BG_BUTTON = "#00213d";
const TEXT_PRIMARY = "#fff";

// Exportação do componente de reuso 
export default function Button() {
    return(
        <View style={styles.button}>
            <Pressable>
                <Text style= {styles.title}>
                    <E>ENTRAR</E>
                </Text>
            </Pressable>
        
        </View>
    )
}

// Criando o stylesheet (essa constante é na verdade a cópia de um objeto)
// a constante de folha de estilo fica aqui embaixo
const styles = StyleSheet.create({  
    button: {
        backgroundColor: BG_BUTTON
    },
    
    title: {  
        color: TEXT_PRIMARY, 
    }

  })

