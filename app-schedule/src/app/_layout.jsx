import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (<Drawer 
    // define o estilo do drawer, objeto complexo
    screenOptions={{
      drawerStyle:{
        backgroundColor: "#B6B7B9"
      },
      drawerLabelStyle: "#000"
    }} >
 

  <Drawer.Screen
  name = "LoginScreen"
  options={{
    headerShown: false
  }} />
   </Drawer>
  );
}
