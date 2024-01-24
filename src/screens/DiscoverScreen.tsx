import { KeyboardAvoidingView, Platform, ScrollView, View, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { Header } from '../components/Header';
import { InstructionsSection } from '../components/InstructionsSection';
import { Input } from '../components/Input';
import { useForm } from '../hooks/useForm';
import { Button } from '../components/Button';
import { useState } from 'react';
import { ModalComponent } from '../components/ModalComponent';
import credits from '../services/creditsAPI';
import { Credit, CreditsResponse } from '../interfaces/creditsInterface';

export const DiscoverScreen = () => {

    const { form, onChange } = useForm({
        name: '',
        email: ''
    });

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [listCredits, setListCredits] = useState<Credit[]>([]);

    const hideModal = () => {
        setIsVisibleModal(!isVisibleModal);
        creditos();
    }

    const creditos = async () => {
        const resp = await credits.get<CreditsResponse>('2156ae74-9927-4f44-8960-dbdbd0d798ac');
        setListCredits(resp.data.data)
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View>
                    <Header title='Descubre tu crédito' />
                    <InstructionsSection text='Llena el siguiente formulario para conocer los créditos que tenemos disponibles para ti.' />
                    <Input label='Nombre' placeHolder='Introduce tu nombre' autoCap='words' onChange={(value) => onChange(value, 'name')} />
                    <Input label='Email' placeHolder='Introduce tu email' autoCap='none' keybType='email-address' onChange={(value) => onChange(value, 'email')} />
                    <Button text='Descubrir créditos' disabled={form.email != '' && form.name != '' ? false : true} onPress={() => hideModal()} />
                    <ModalComponent isVisible={isVisibleModal} hide={hideModal} datos={listCredits} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )

}
