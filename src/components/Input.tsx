import { Text, TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { inputProps } from '../interfaces/inputInterface';

export const Input = ({ label, placeHolder, autoCap, keybType, onChange }: inputProps) => {

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                autoCapitalize={autoCap}
                keyboardType={keybType}
                onChangeText={onChange}
            />
        </View>
    )

}
