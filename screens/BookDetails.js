import React from 'react';
import {
    Text,
    View,
    Button,
    ImageBackground,
    SafeAreaView,

} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import RenderBookinfoSection from '../components/BookDetails/RenderBookinfoSection'
import RenderBookDescription from '../components/BookDetails/RenderBookDescription'
import ButtonBookDetail from '../components/BookDetails/ButtonBookDetail'
//import {Route, useNavigation} from '@react-navigation/native'


//const route = Route;

const BookDetails = ({ route, navigation }) => {

    const [book, setBook] = React.useState(null);

    React.useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])



    if (book) {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>

                {/* Book Cover Section */}
                <View style={{ flex: .6, elevation: 5, backgroundColor: 'blue', borderRadius: 20 }}>
                    <RenderBookinfoSection bookinfo={book} />
                </View>

                {/* Book description */}
                <View style={{ flex: .4 }}>
                    <RenderBookDescription bookinfo={book} />
                </View>
                {/* BUttons  */}
                <View style={{ height: 70,justifyContent:'flex-end', alignItems:'flex-end', marginTop:SIZES.padding,marginRight:SIZES.radius }}>
                    <ButtonBookDetail />
                </View>
            </SafeAreaView>
        )
    }
    else {
        //console.log("Empty")
        return (<></>)
        //     <View style={{ flex: 1, backgroundColor: COLORS.gray }}>
        //         <Text style={{ ...FONTS.h2, color: COLORS.white }}>Nothing FOund</Text>
        //     </View>

        // ); 
    }
}

export default BookDetails