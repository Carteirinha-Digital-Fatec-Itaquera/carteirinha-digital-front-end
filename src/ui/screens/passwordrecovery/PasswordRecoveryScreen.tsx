import { Image, View } from 'react-native';
import { NavigationProps } from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import { ButtonComp } from '../../components/button/ButtonComp';
import { TitleComp } from '../../components/title/TitleComp';
import { InputComp } from '../../components/input/InputComp';
import { Dispatch, SetStateAction, useState } from 'react';
import { backgroundColor } from '../../themes/Color';
import { styles } from './style';

export default function PasswordRecoveryScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")

  const [part1, setPart1] = useState(true)
  const [part2, setPart2] = useState(false)

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/fatec_itaquera_logo.png")} style={styles.logo} />
      <View style={styles.subcontainer}>
        {part1 && (
        <PasswordRecoveryPart1Comp navigateBackButton={() => navigate("Login")} navigateNextStepButton={() => {
          setPart1(false)
          setPart2(true)
        }} value={email} setValue={setEmail} />
        )}
        {part2 && (
        <PasswordRecoveryPart2Comp navigateBackButton={() => {
          setPart1(true)
          setPart2(false)
        }} navigateNextStepButton={() => {

        }} value={code} setValue={setCode} />
        )}
     </View>
    </View>
  );
}

type PasswordRecoveryCompProps = {
  navigateBackButton: () => void,
  value: string, 
  setValue: Dispatch<SetStateAction<string>>,
  navigateNextStepButton: () => void,
}

function PasswordRecoveryPart1Comp({ navigateBackButton, value, setValue, navigateNextStepButton }: PasswordRecoveryCompProps) {
  return (
    <>
      <TitleComp text="Recuperação de senha" size={20} showButton={true} actionButton={navigateBackButton} />
      <InputComp label="E-mail institucional" placeholder="Ex: fulano@fatec.sp.gov.br" value={value} onChangeText={setValue} />
      <ButtonComp text="Enviar E-mail" action={() => navigateNextStepButton()} color={backgroundColor} />
    </>
  )
}

function PasswordRecoveryPart2Comp({ navigateBackButton, value, setValue, navigateNextStepButton }: PasswordRecoveryCompProps) {
  return (
    <>
      <TitleComp text="Recuperação de senha" size={20} showButton={true} actionButton={navigateBackButton} />
      <InputComp label="Insira o código" placeholder="Ex: fulano@fatec.sp.gov.br" value={value} onChangeText={setValue} />
      <ButtonComp text="Enviar código" action={navigateNextStepButton} color={backgroundColor} />
    </>
  )
}

