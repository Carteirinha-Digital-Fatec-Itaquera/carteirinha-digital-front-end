import { View } from 'react-native';
import { NavigationProps } from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import { ButtonComp } from '../../components/button/ButtonComp';
import { TitleComp } from '../../components/title/TitleComp';

export default function LoginScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <View>
      <TitleComp text="Login" />
      <ButtonComp text="Ir para home" action={() => navigate("Home")} color='#7fa2b6ff' />
    </View>
  );
}
