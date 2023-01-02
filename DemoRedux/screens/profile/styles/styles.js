import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    icon:{
        width:24,
        height:24
    },
    icon16:{
        width: 16,
        height: 16
    },
    appbar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    appbar__title:{
        fontSize: 16,
        fontWeight: '600'
    },
    header:{
        justifyContent: 'center',
        alignItems:'center'
    },
    header__image:{
        width:80, 
        height: 80, 
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'black'
    },
    form: {
        padding: 16
    },
    mLeft8:{
        marginLeft:8
    },
    mTop16:{
        marginTop:16
    },
    mTop32:{
        marginTop:32
    },
    input: {
        marginTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        height: 42,
        width: '100%',
        backgroundColor: '#F5F5F8',
        borderRadius: 21
    },
    submit:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        backgroundColor: 'black',
        borderRadius: 26
    },
    submit__text:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }
})