# COMPONENTES DO REACT NATIVE

<Text></Text> -> Como se fosse o p do HTML, garda texto. Tem que estar pelo menos dentro de uma view
<View></View> -> Como a div do HTML
<Pressable></Pressable> -> Envolve um elemento a ser pressionado
StyleSheet -> Cria uma folha de estilo para estilização.

# Comandos do REACTIVE NATIVE

1. npm create-expo-app@3 nome-do-projeto -> Cria um app
   react native com o nome desejado na versão 3.
2. npm start -> Prepara/roda o servidor para ser executado
3. npm run reset-project -> rseta o projeto para uma versão mais limpa
4. npm i ou npm install -> Instala todas as bibliotecas necessárias do node.

# Cases

snake_case -> nome_do_projeto
cammelCase -> nomeDoProjeto
PascalCase -> NomeDoProjeto
kebab-case -> nome-do-projeto

# Cases em REACT NATIVE

arquivo -> `snake_case`, mas pode ser cammelCase em alguns casos

componente -> `PascalCase`

função -> `cammelCase`

## Estrutura do projeto vollmed

🗂️ app

- 📂components
  -- 🟥 Button.jsx
  -- 🤖 LabeledInput.jsx
- 📂services
- 📂screens
  -- 📲 LoginScreen.jsx
  -- 🗒️ RegisterScreen.jsx

## OBS

1. Em react native, as propriedades também sã conhecidas como props.
2. Quando você for criar a estilização através do stylesheet, a constante deverá estar no padrão cammelCase `BOA PRÁTICA`
3. Na customização do styles, será necessário deixar uma vírgula após cada seletor e após cada propriedade dentro do seletor `BOA PRÁTICA`
4. Por padrão, quand criamos uma propredade no React Native, ele inutiliza as outras nativas. Passamos o "...rest" para indicar que queremos usar os dois.

## Props Primitivas

keyboardType = 'email-adress' -> É uma prop do TextInput que otimiza o teclado
para entrada de email, exibido caracteres como "@" e "." de forma mais acessível

securityTextEntry = {true} -> É uma prop que oculta o texto didgitado, ideal para campos de senha.

## Components Primitivos

<SafeAreaView> -> Garante que o conteúdo seja exibido dentro das áreas seguras da tela,
evitando sobreposição com elementos do sistema como a barra de status

<ScrollView> -> É um componente que permite a rolagem do conteúdo quando ele
exede oespaço disponível na tela, garantindo que todos os campos do formulário
sejam acessíveis mesmo em dispositivos menores.

<TouchableOpacity> -> É um componente que cria uma área clicável.

## Boa Pratica

-imagens são por padrão snake_case

## Estrutura do Projeto

Eu vou ter um arquivo obrigatório que irá importar



## Trabahando com navegação no React Native 

1. Link da documentação -> `https://reactnavigation.org/docs/getting-started`
2. Instalar o core do react navigation -> `npm install @react-navigation/native`
3. Instalar as dependências de ajustes -> `npx expo install react-native-screens react-native-safe-area-context`
4. Instalar a dependência para utilizar a forma stack native (pilha nativa) no projeto -> `npm install @react-navigation/native-stack`
obs: Para trabalhar com navegação, somente precisamos de instalar o native e depois as dependências par mobile e não precisamos de web. 


# Consumindo dados de uma api via react native 
-- services 
 - api.js 
 - authService.js 

 


