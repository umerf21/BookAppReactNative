import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    Button,
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images } from '../constants'
import {myBooksData, categoriesData} from '../data/BookData'
import RenderHeader from '../components/Home/HomeHeader'
import RenderButtonSection from '../components/Home/RenderButtonSection'
import RenderMyBooksSection from '../components/Home/RenderBookSection'
import RenderCategoryHeader from '../components/Home/RenderCategoryHeader'
import RenderCategoryData from '../components/Home/RenderCategoryData';

const Home = () => {

    const userProfile = {
        name: 'Umer Faheem',
        point: '200'
    }

    const [profile, setprofile] = useState(userProfile)
    const [myBook, setMyBook] = useState(myBooksData)
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, SetSelectedCategory] = React.useState(1);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Button title="test" onPress={()=>console.log(typeof myBook)}/>

            {/* Header Section */}
            <View style={{ height: 100, marginTop: 20 }}>
                <RenderHeader name={profile.name} point={profile.point}/>
                {/* <RenderButtonSection/> */}
            </View>


            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>

                {/* books Section */}
                <View>
                    <RenderMyBooksSection myBook={myBook}/>
                    
                </View>

                {/* Category Section */}
                <View style={{ marginTop: SIZES.padding }}>

                    {/* category heading */}
                    <View>
                        <RenderCategoryHeader 
                        propSetSelectedCategory={SetSelectedCategory} 
                        propCategories={categories}
                        selectedCategory={selectedCategory}/>
                    </View>
                    <View>
                        <RenderCategoryData categories={categories} selectedCategory={selectedCategory}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home