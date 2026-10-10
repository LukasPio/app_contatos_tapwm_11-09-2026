import { useState } from 'react';

import { View, Text, TextInput, Button, Alert } from 'react-native';

import { useRouter } from 'expo-router';

import api, { setAuthToken } from '../lib/api';

import { estilos } from '../styles/estilos';



export default function Login() {

  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');

  const router = useRouter();



  const entrar = async () => {

    try {

      const { data } = await api.post('/usuarios/login', { email, senha });

      setAuthToken(data.token);

      router.replace('/contatos');

    } catch (err) {

      Alert.alert('Erro ao entrar');

    }

  };



  return (

    <View style={estilos.container}>
      <Text style={estilos.titulo}>Contatos · Lucas</Text>
      <Text style={estilos.subtitulo}>Sua agenda em um só lugar.</Text>

      <TextInput keyboardType="email-address" placeholder="Email" value={email} onChangeText={setEmail} style={estilos.input} autoCapitalize="none" />

      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={estilos.input} />

      <Button title="Entrar" onPress={entrar} />

      <Button title="Cadastrar" onPress={() => router.push('/cadastro')} />

    </View>

  );

}
