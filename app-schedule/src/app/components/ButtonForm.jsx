import {Pressable, Text, StyleSheet, View} from "react-native"; 

// Declaração das constantes para estilização 
const BG_BUTTON = "#00213d";
const TEXT_PRIMARY = "#fff";
const BG_OPACITY = "#90989F"

// Exportação do componente de reuso 
export default function ButtonForm({textButton}) {
    return(
        <View style={styles.button}>
            <Pressable style = {styles.button}>
                <Text style= {styles.title}>
                    {textButton ? textButton: "Não Informado"} 
                </Text>

            
            </Pressable>
        
        </View>
    )
}

// Criando o stylesheet (essa constante é na verdade a cópia de um objeto)
// a constante de folha de estilo fica aqui embaixo
const styles = StyleSheet.create({  
    button: {
        backgroundColor: BG_BUTTON,
         borderRadius: 8,
         marginHorizontal: 20,
         marginVertical: 10
    
    },
    
    title: {  
        color: TEXT_PRIMARY, 
        marginVertical: 2,
        alignItems: "center",
        textAlign: "center",
        paddingVertical: 7,
        
    },
    
    buttonOpacity: {


    }

  })

