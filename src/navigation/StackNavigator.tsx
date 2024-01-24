import { createStackNavigator } from '@react-navigation/stack';
import { DiscoverScreen } from '../screens/DiscoverScreen';
import { CreditAcceptedScreen } from '../screens/CreditAcceptedScreen';
import { Credit } from '../interfaces/creditsInterface';

export type RootStackParams = {
    DiscoverScreen: undefined,
    CreditAcceptedScreen: Credit
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
            <Stack.Screen name="CreditAcceptedScreen" component={CreditAcceptedScreen} />
        </Stack.Navigator>
    );
}