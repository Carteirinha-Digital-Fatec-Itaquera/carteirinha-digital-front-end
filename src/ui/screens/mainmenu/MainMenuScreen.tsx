import { Image, View } from 'react-native';
import { NavigationProps } from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import { ButtonComp } from '../../components/button/ButtonComp';
import { TitleComp } from '../../components/title/TitleComp';
import { backgroundColor } from '../../themes/Color';
import { styles } from './style';

export default function MainMenuScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/images/fatec_itaquera_logo.png")} 
        style={styles.logo} 
      />
      <View style={styles.subcontainer}>
        <TitleComp text="Bem-vindo, Fulano" size={18} />
        
        <ButtonComp 
          text="Carteirinha" 
          action={() => navigate("Carteirinha")} 
          color={backgroundColor} 
        />
        
        <ButtonComp 
          text="Configurações" 
          action={() => navigate("Settings")} 
          color={backgroundColor} 
        />
        
        <ButtonComp 
          text="Ajuda" 
          action={() => navigate("Help")} 
          color={backgroundColor} 
        />
        
        <ButtonComp 
          text="Sair" 
          action={() => navigate("Login")} 
          color={backgroundColor} 
        />
      </View>
    </View>
  );
}