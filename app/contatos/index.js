// app/contatos/index.js

import { useCallback, useState } from 'react';

import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

import { useRouter, useFocusEffect } from 'expo-router';

import api, { fotoUrl, setAuthToken } from '../../lib/api';

import { estilos } from '../../styles/estilos';



export default function ListaContatos() {

  const [contatos, setContatos] = useState([]);

  const router = useRouter();
  const [busca, setBusca] = useState('');
  const filtrados = contatos.filter((contato) =>
    [contato.nome, contato.email, contato.telefone].some((valor) =>
      String(valor || '').toLocaleLowerCase().includes(busca.trim().toLocaleLowerCase())
    )
  );



  const carregar = async () => {

    try {

      const { data } = await api.get('/contatos');

      setContatos(data);

    } catch (err) {

      Alert.alert('Erro ao carregar contatos');

    }

  };



  const excluir = async (id) => {

    try {

      await api.delete(`/contatos/${id}`);

      carregar();

    } catch (e) {

      Alert.alert('Erro ao excluir');

    }

  };



  useFocusEffect(

    useCallback(() => {

      carregar();

    }, [])

  );



  return (

    <View style={estilos.container}>
      <Text style={estilos.titulo}>Minha agenda</Text>
      <Text style={estilos.subtitulo}>Lucas · {contatos.length} contato(s)</Text>
      <Button title="Sair" onPress={() => { setAuthToken(null); router.replace('/'); }} />
      <TextInput placeholder="Buscar por nome, email ou telefone" value={busca} onChangeText={setBusca} style={estilos.input} />

      <Button title="Novo contato" onPress={() => router.push('/contatos/novo')} />



      <FlatList

        data={filtrados}
        ListEmptyComponent={<Text style={estilos.subtitulo}>Nenhum contato encontrado.</Text>}

        keyExtractor={(item) => String(item.id)}

        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => router.push(`/contatos/${item.id}`)} style={estilos.card}>

            <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>

            {item.foto ? (

              <Image

                source={{ uri: fotoUrl(item.foto) }}

                style={{ width: 100, height: 100, marginVertical: 6 }}

              />

            ) : null}

            <Button title="Excluir" onPress={() => excluir(item.id)} />

          </TouchableOpacity>

        )}

      />

    </View>

  );

}
