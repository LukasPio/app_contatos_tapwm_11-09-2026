import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#0f766e' }, headerTintColor: '#fff', contentStyle: { backgroundColor: '#f1f5f9' } }}>
      <Stack.Screen name="index" options={{ title: 'Contatos · Lucas' }} />
      <Stack.Screen name="cadastro" options={{ title: 'Criar conta' }} />
      <Stack.Screen name="contatos/index" options={{ title: 'Minha agenda', headerBackVisible: false }} />
      <Stack.Screen name="contatos/novo" options={{ title: 'Novo contato' }} />
      <Stack.Screen name="contatos/[id]" options={{ title: 'Editar contato' }} />
    </Stack>
  );
}
