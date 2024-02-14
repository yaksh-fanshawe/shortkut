import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AppTextInput } from "../../components";
import AppHeader from "../../components/Header";
import { Color } from "../../utils";

const LandingPage = () => {

    const [search, setSearchChange] = React.useState("")

    const list: string[] = ["Braids", "Natural Hair", "Hiarcut", "Men's Haircut", "Locs", "Silk Press", "Weaves", "Eyelashes", "Nails"]
    
    const searchService = function (text: string): string[] {
        if(text == ""){
            return list
        }
        var newList: string[] = []
        list.forEach((service) => {
            if(service.toLowerCase().includes(text.toLowerCase())){
                newList.push(service)
            }
        })
        return newList
    }

    const onTap = () => {
        console.log("implement your code here")
    }


    return (
        <View >
            <AppHeader />
            <View style={{paddingHorizontal: 15, paddingVertical: 12}}>
                < AppTextInput value={search} placeholder={"Search"} onChangeText={function (text: string): void {
                    setSearchChange(text)
                } } ></AppTextInput>
                <FlatList
                data={searchService(search)}
                keyExtractor={(item) => item}
                renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity style={style.card} onPress={onTap}>
                        <Text style={style.cardTitlt}>{item}</Text>
                      </TouchableOpacity>
                    );
                  }}
                  />
            </View>
        </View>
    );
};

export default LandingPage;


const style = StyleSheet.create({
    card: {
        width: "100%",
        paddingHorizontal : 20,
        paddingVertical: 12,
        backgroundColor: Color.blueShadow,
        marginVertical : 5,
        borderRadius : 8
    },
    cardTitlt : {
        fontSize : 16,
        fontWeight : "500",
        color: Color.regularText
    }
})