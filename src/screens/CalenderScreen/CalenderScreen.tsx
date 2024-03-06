import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Screen } from "../../utils"; // Ensure to import Screen from the appropriate location
import { AppHeader } from "../../components";
import _ from "lodash";
import moment from "moment";

interface CalenderScreenProps {
  navigation: any;
}

const CalenderScreen: React.FC<CalenderScreenProps> = ({ navigation }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    const generateTimeSlots = () => {
      const currentTime = moment().startOf('minute');
      const endOfDay = moment().endOf('day');
      const timeSlotDuration = 30; // in minutes

      // Find the next 30-minute interval
      const remainder = timeSlotDuration - (currentTime.minute() % timeSlotDuration);
      const roundedStartTime = currentTime.add(remainder, 'minutes').format('h:mm A');

      const slots: any = [];

      while (currentTime.isBefore(endOfDay)) {
        const startTime = currentTime.format('h:mm A');
        const endTime = currentTime.clone().add(timeSlotDuration, 'minutes').format('h:mm A');

        slots.push({ startTime, endTime });
        currentTime.add(timeSlotDuration, 'minutes'); // Move to the next 30-minute slot
      }

      setTimeSlots(slots);
    };

    generateTimeSlots();
  }, []);

  const onPressBack = () => {
    navigation.goBack();
  };

  const handleTimeSlotPress = (time: string) => {
    // Navigate to PaymentSelectionScreen with the selected date and time
    navigation.navigate(Screen.PaymentSelectionScreen, {
      selectedDate,
      selectedTime: time,
    });
  };

  const renderTimeSlots = () => {
    return _.map(timeSlots, ({startTime}, index) => (
      <TouchableOpacity
        key={index}
        style={styles.timeSlotButton}
        onPress={() => handleTimeSlotPress(startTime)}
      >
        <Text style={styles.timeSlotText}>{startTime}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader isBackButton onPressBack={onPressBack} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerText}>Choose a time</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
        <View style={styles.selectedDateContainer}>
          <Text
            style={styles.selectedDateText}
          >{`Selected date: ${selectedDate}`}</Text>
          <View style={styles.timeSlotsContainer}>{renderTimeSlots()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedDateContainer: {
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 16,
    marginBottom: 10,
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  timeSlotButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,
    alignItems: "center",
    width: 100, // Set a fixed width for the buttons
  },
  timeSlotText: {
    fontSize: 16,
  },
});
