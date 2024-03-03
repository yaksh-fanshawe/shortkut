// Library Imports
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as _ from "lodash";
// Component Imports
import { AppTextInput, AppHeader } from "../../components";
import { Color, Screen } from "../../utils";

// Constants
const list: string[] = [
  "Braids",
  "Natural Hair",
  "Haircut",
  "Men's Haircut",
  "Locs",
  "Silk Press",
  "Weaves",
  "Eyelashes",
  "Nails",
];

// Interface
interface LandingPageProps {
  navigation: any;
}

// Component
const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  const [search, setSearchChange] = useState("");

  const searchService = (text: string): string[] => {
    if (text == "") {
      return list;
    }
    let newList: string[] = [];
    _.forEach(list, (service) => {
      if (_.includes(_.toLower(service), _.toLower(text))) {
        newList.push(service);
      }
    });
    return newList;
  };

  const onTap = (item: string) => {
    navigation.navigate(Screen.SearchScreen, { selectedService: item });
  };

  return (
    <View>
      <AppHeader />
      <View style={styles.mainView}>
        <AppTextInput
          value={search}
          placeholder={"Search"}
          onChangeText={setSearchChange}
          editable
        />
        <FlatList
          data={searchService(search)}
          keyExtractor={(item) => `searchServiceItem-${item}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => onTap(item)}>
                <Text style={styles.cardTitle}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default LandingPage;

// Default Props
LandingPage.defaultProps = {
  navigation: null,
};

// Styles
const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Color.blueShadow,
    marginVertical: 5,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Color.regularText,
  },
  mainView: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});
