import { Image, View } from 'react-native';
import { NavigationProps } from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import { ButtonComp } from '../../components/button/ButtonComp';
import { TitleComp } from '../../components/title/TitleComp';
import { useState } from 'react';
import { InputComp } from '../../components/input/InputComp';
import { styles } from './style';
import { backgroundColor } from '../../themes/Color';
import { TextClickableComp } from '../../components/textclickable/TextClickableComp';
import { SpacerComp } from '../../components/spacer/SpacerComp';

export default function SignUpScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  const [cpf, setCpf] = useState("")

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/fatec_itaquera_logo.png")} style={styles.logo} />
      <View style={styles.subcontainer}>
        <SpacerComp vertical={20} />
        <TitleComp text="Primeiro Acesso" size={20} />
        <SpacerComp vertical={40} />
        <InputComp label="CPF" placeholder="Ex: 000.000.000-00" value={cpf} onChangeText={setCpf} />
        <SpacerComp vertical={60} />
        <ButtonComp text="Enviar CPF" action={() => {}} color={backgroundColor} />
        <SpacerComp vertical={30} />
        <TextClickableComp text="Este não é seu primeiro acesso? Clique aqui" action={() => navigate("Login")} />
      </View>
    </View>
  );
}
