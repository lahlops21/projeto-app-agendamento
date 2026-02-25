import {Pressable, Text, StyleSheet} from "react-native";

const BG_BUTTON = "#00213d";
const TEXT_PRIMARY = "#fff";


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
const styles = StyleSheet.create({  
    button: {
        backgroundColor: BG_BUTTON
    },
    
    title: {  
        color: TEXT_PRIMARY, 
    }

  })