import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, StyleSheet } from "react-native";

export default function ScreenContainer({dark = false}){
    return(
        // Vem do safe-area-context 
        <SafeAreaView
				style={[ styles.safe, dark && styles.safeDark ]}
				edges={['top','left', 'right','bottom']} // vem do proprio react native
				>
					<KeyboardAvoidingView>
						
					</KeyboardAvoidingView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
safe: {},
safeDark: {},
flex:{},
scroll: {},
inner: {}

})

