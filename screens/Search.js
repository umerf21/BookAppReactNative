import React, { useState } from 'react';
import {Text, TouchableOpacity, Image, TextInput,ImageBackground, KeyboardAvoidingView, SafeAreaView, View,FlatList, Button } from 'react-native'
import { COLORS, FONTS, images,icons, SIZES } from '../constants';
import SearchBox from '../components/Search/Searchbox'
import { useNavigation } from '@react-navigation/native';
import {myBooksData, categoriesData} from '../data/BookData'

const Search = () => {
    const navigation = useNavigation()
    const [searchbookn,  setSearchBookN] = useState(searchresult)
    const [searchresult, setSearchhResult] = useState([''])

    let a = [];

    const getDataFromSearch = (item) => {
         setSearchhResult(item)
    }

    const renderitem1 = ({item}) => {
        return(
            <View>
                <Text>{item.title}</Text>
            </View>
        )}




    // const renderitem = ({item}) => {
    //     return(
    //         <TouchableOpacity
    //              style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}
    //                 onPress={() => navigation.navigate("Bookdetails", {book : item})}>
                        
    //                     {/* Book Cover */}
    //                 <Image
    //                     source={item.imageLinks}
    //                     resizeMode="cover"
    //                     style={{ width: 100, height: 150, borderRadius: 10 }}
    //                 />

    //                 <View style={{ flex: 1, marginLeft: SIZES.radius }}>
    //                     {/* Book name and author */}
    //                     <View>
    //                         <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.title}</Text>
    //                         <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.volumeInfo.authors}</Text>
    //                     </View>

    //                     {/* Book Info */}
    //                     <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
    //                         <Image
    //                            source={item.imageLinks}
    //                             resizeMode="contain"
    //                             style={{
    //                                 width: 20,
    //                                 height: 20,
    //                                 tintColor: COLORS.lightGray
    //                             }}
    //                         />
    //                         <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>100</Text>

    //                         <Image
    //                             source={icons.read_icon}
    //                             resizeMode="contain"
    //                             style={{
    //                                 width: 20,
    //                                 height: 20,
    //                                 tintColor: COLORS.lightGray
    //                             }}
    //                         />
    //                         <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>12</Text>
    //                     </View>

                        
    //                     </View>
    //         </TouchableOpacity>
    //     )
    // }

    // const searchvalue = (book) => {
    //     let a = book
    //     //console.log("Parenttt"+a)
    // }
    
    
    //console.log("Parent" +searchbookn);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black, marginTop:SIZES.padding2, }}>
            <View style={{margin:SIZES.radius}}>
                <SearchBox  
                //callBackResult={getDataFromSearch} 
                />
                {/* <Button title={"Test"} onPress={() => {
                    setSearchhResult(a) 
                    //console.log(searchresult)
                }}/> */}

            </View>
            <View>
            {/* <FlatList
            data={
                !(searchresult === undefined || searchresult.length === 0)
                  ? searchresult : []
              }
            renderItem={renderitem1}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            //extraData={searchbookn}
            /> */}
        </View>
        </SafeAreaView>
    )
}

export default Search;