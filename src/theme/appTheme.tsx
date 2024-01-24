import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000'
    },
    text: {
        fontSize: 15,
        color: '#7A7A7A'
    },
    section: {
        marginTop: 10,
        marginBottom: 20
    },
    input: {
        borderWidth: 1.5,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 20
    },
    label: {
        color: 'rgba(0,0,0,0.6)',
    },
    buttonEnabled: {
        marginTop: 20,
        backgroundColor: '#1676F3',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    textButton: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonDisabled: {
        marginTop: 20,
        backgroundColor: '#7A7A7A',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        padding: 20,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        borderRadius: 16
    },
    sectionsUnselect: {
        backgroundColor: 'rgba(142, 188, 247,0.5)',
        height: 50,
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
    },
    textFlat1: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textFlat2: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    sectionsSelect: {
        backgroundColor: 'rgba(142, 188, 247,1)',
        height: 50,
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
    },
});