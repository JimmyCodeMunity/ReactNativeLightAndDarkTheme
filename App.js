import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View} from 'react-native';

export default function App() {
  const {colorScheme,toggleColorScheme} = useColorScheme([]);
  return (
    <View className="justify-center items-center flex-1 dark:bg-black">
      <Text className="dark:text-white text-lg">Toggle Theme</Text>
      <Switch value={colorScheme=='dark'} onChange={toggleColorScheme}/>
      <Text className="dark:text-white">On toggle switch,the theme changes</Text>
      <StatusBar style={colorScheme=='dark'?'light':'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
