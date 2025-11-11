import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { NavigationProps } from '../../../routes';
import { ButtonComp } from '../../components/button/ButtonComp';
import { TitleComp } from '../../components/title/TitleComp';

export default function HomeScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <View>
      <TitleComp text="Home" />
      <ButtonComp text="Ir para login" action={() => navigate("Login")} color='#d3b2b2ff' />
    </View>
  );
}
