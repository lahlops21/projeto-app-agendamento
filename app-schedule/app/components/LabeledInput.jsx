import { StyleSheet, Text, TextInput, View } from "react-native";


const INPUT_BG = '#f5f5f5';
const INPUT_BORDER = '#e8e8e8';
const LABEL_COLOR = '#36454f';

export default function LabeledInput({label, ...rest}){
   
    return (
        <View style={styles.wrapper}> {/* Tipo uma div */}
            
            {/* Se o label for pasado, exiba o label, se não, exiba 'não informado'. */}
            <Text style={styles.lable}>                
                {label ? label: "Não Informado"} 
            </Text>  {/*  Vem do React Native   */}
            

            <TextInput // Nativo do textInput um placeholder. Através das props, ele tem não só a caixinha mas também um placeholder
            style ={styles.input}
            placeholderTextColor="#b5b5b5"           
            {...rest}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    wrapper: {
       width: '100%',      // Faz o componente ocupar toda a larura disponível
       marginBottom: 14    // Define o espaço abaixo do campo                                  
    },
    lable : {
        marginBottom: 6, 
        color: LABEL_COLOR,       // Cor do texto da label, utilizando constante
        fontSize: 14,             // Tamanho da fonte
        fontWeight: 600,          // Peso da fonte (semi-negrito)
    },
    input : {

        backgroundColor: INPUT_BG,                  // Define a cor de fundo do campo
        borderRadius: 8,                            // Arredonda os cantos dos campos
        paddingHorizontal: 14,                      // Define espaçamento interno esquerdo/direito
        paddingVertical: 12,                        // Define o espaçamento interno de cima/baixo
        borderWidth:1,                              // Define espessura da borda
        borderColor: INPUT_BORDER,                  // Define a cor da borda do input
        shadowColor: '#000',                      // Define a cor da borda da sombra
        textShadowOffset: { width: 1, height: 2},   // Define a posição da sombra
        shadowOpacity: 0.08,                        // Define a transparência
        shadowRadius: 6,                            // Define o arredondamento da sombra 
        fontSize: 14,                               // Define o tamanho da fonte 
        color: '#222'                             // Define a cor do texto     
    },
})