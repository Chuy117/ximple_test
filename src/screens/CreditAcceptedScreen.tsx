import { Text, View } from 'react-native';
import { Header } from '../components/Header';
import { InstructionsSection } from '../components/InstructionsSection';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import { creditAcceptedProps } from '../interfaces/creditAcceptedInterface';

export const CreditAcceptedScreen = ({ route }: creditAcceptedProps) => {

    const params = route.params;

    return (
        <View style={styles.container}>
            <Header title='Acepta tu crédito' />
            <InstructionsSection text='Confirma que has seleccionado el crédito deseado.' />
            <Text style={styles.label}>Crédito seleccionado:</Text>
            <FlatList
                style={{ flexGrow: 0 }}
                data={[params]}
                renderItem={({ item }) =>
                    <>
                        <View
                            style={styles.sectionsSelect}
                        >
                            <View style={styles.viewPosition}>
                                <Text style={styles.textFlat1}>{item.name} </Text>
                                <Text style={styles.textFlat2}> {item.value}</Text>
                            </View>
                        </View>
                    </>
                }
            />
            <Button text='Contratar' disabled={false} onPress={() => { }} />
        </View>
    )
}
