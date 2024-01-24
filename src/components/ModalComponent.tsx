import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Header } from './Header';
import { InstructionsSection } from './InstructionsSection';
import { Button } from './Button';
import { styles } from '../theme/appTheme';
import { modalProps } from '../interfaces/modalInterface';
import { useState } from 'react';
import { Credit } from '../interfaces/creditsInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const ModalComponent = ({ isVisible, hide, datos }: modalProps) => {

    const [selectedId, setSelectedId] = useState<number>();
    const [selectedItem, setSelectedItem] = useState<Credit>();
    const navigator = useNavigation();

    const selected = async (item: Credit) => {
        setSelectedId(item.id);
        setSelectedItem(item);
        try {
            const jsonValue = JSON.stringify(item);
            await AsyncStorage.setItem('credito', jsonValue);
        } catch (e) {
            console.error('Error al guardar el valor')
        }
    }

    return (
        <>
            <Modal animationType='slide' visible={isVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Header title='¡Felicidades!' />
                        <InstructionsSection text='Encontramos estos créditos perfectos para ti.' />
                        <FlatList
                            style={{ flexGrow: 0 }}
                            data={datos}
                            extraData={selectedId}
                            renderItem={({ item }) =>
                                <>
                                    <TouchableOpacity
                                        style={selectedId === item.id ? styles.sectionsSelect : styles.sectionsUnselect}
                                        onPress={() => selected(item)}
                                    >
                                        <View style={styles.viewPosition}>
                                            <Text style={styles.textFlat1}>{item.name} </Text>
                                            <Text style={styles.textFlat2}> {item.value}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </>
                            }
                        />
                        <Button text='Seleccionar crédito'disabled={selectedItem != undefined ? false : true} onPress={() => { hide(), navigator.replace('CreditAcceptedScreen', selectedItem) }} />
                    </View>
                </View>
            </Modal>
        </>
    )

}
