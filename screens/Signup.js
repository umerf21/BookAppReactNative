import React, {useCallback} from 'react';
import { View,  Button } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
//import * as booksAPI from '../data/BooksAPI'


const Signup =() => {

    const navigation = useNavigation()
   return ( <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Button title={"login"} onPress={() => navigation.navigate("Login")}/>
    </View>)
}

export default Signup