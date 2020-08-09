import React, {useState, useEffect} from "react";
import {View, ScrollView, Text, ActivityIndicator} from "react-native";
import {Feather} from '@expo/vector-icons'
import {useFocusEffect} from "@react-navigation/native";
import {BorderlessButton, RectButton} from "react-native-gesture-handler";
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage'
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeader from "../../components/page-header";
import TeacherItem, {Teacher} from "../../components/teacher-item";

import api from "../../services/api";
import styles from "./styles";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [weekday, setWeekDay] = useState('1');
  const [time, setTime] = useState('8:00');
  const [subject, setSubject] = useState('Matematica');

  const [showTimePicker, setShowTimePicker] = useState(true);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isLoadingTeacherList, setIsLoadinTeacherList] = useState(false);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachersIds = JSON.parse(response)
          .map((teacher: Teacher) => {
            return teacher.id;
          })
        setFavorites(favoritedTeachersIds);
      }
    })
  }

  function handleToggleTimePicker() {
    setShowTimePicker(!showTimePicker);
  }

  function onChangeTime(event: any, time: Date | undefined) {
    if (time instanceof Date) {
      setTime(`${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`);
    }
    setShowTimePicker(false);
  }

  function onChangeWeekday(weekday: string) {
    console.log(weekday)
    console.log(subject)
    setWeekDay(weekday)
  }

  function onChangeSubject(subject: string) {
    console.log(subject)
    console.log(weekday)
    setSubject(subject)
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit() {
    loadFavorites();
    setIsLoadinTeacherList(true);
    await api.get('classes', {
      params: {
        subject,
        weekday,
        time,
      }
    }).then(result => {
      setTeachers(result.data);
      setIsFiltersVisible(false);
      setIsLoadinTeacherList(false);
    }).catch(onerror => {
      setIsLoadinTeacherList(false);
      setIsFiltersVisible(true);
    });
  }

  useEffect(() => {
    setShowTimePicker(false)
  }, [showTimePicker])

  useFocusEffect(() => {
    loadFavorites();
  })

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}>

        {isFiltersVisible &&
        (
          <View style={styles.searchForm}>
            <View>
              <Text style={styles.label}>Materia</Text>
              <View style={styles.inputPickerBlock}>
                <Picker
                  style={styles.inputPicker}
                  selectedValue={subject}
                  itemStyle={styles.inputPickerItem}
                  mode={"dialog"}
                  onValueChange={(itemValue, itemIndex) =>
                    onChangeSubject(itemValue.toString())
                  }>
                  <Picker.Item label="Matematica" value="Matematica"/>
                  <Picker.Item label="Geografia" value="Geografia"/>
                  <Picker.Item label="Artes" value="Artes"/>
                  <Picker.Item label="Programacao" value="Programacao"/>
                  <Picker.Item label="Quimica" value="Quimica"/>
                </Picker>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <View style={styles.inputPickerBlock}>
                  <Picker
                    style={styles.inputPicker}
                    selectedValue={weekday}
                    itemStyle={styles.inputPickerItem}
                    mode={"dialog"}
                    onValueChange={(itemValue, itemIndex) =>
                      onChangeWeekday(itemValue.toString())
                    }>
                    <Picker.Item label="Segunda-Feira" value="1"/>
                    <Picker.Item label="Terca-Feira" value="2"/>
                    <Picker.Item label="Quarta-Feira" value="3"/>
                    <Picker.Item label="Quinta-Feira" value="4"/>
                    <Picker.Item label="Sexta-Feira" value="5"/>
                  </Picker>
                </View>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Qual Horario?</Text>
                <View style={styles.inputPickerBlock}>
                  <BorderlessButton
                    style={styles.inputPickerButton}
                    onPress={handleToggleTimePicker}>
                    <Text style={styles.inputPickerButtonText}>
                      {time}
                    </Text>
                  </BorderlessButton>
                </View>
                {showTimePicker && (
                  <DateTimePicker
                    timeZoneOffsetInMinutes={700}
                    value={new Date()}
                    mode={"time"}
                    is24Hour={true}
                    display="clock"
                    locale="pt-BR"
                    onChange={(event, time) => {
                      onChangeTime(event, time);
                    }}
                  />
                )}
              </View>


            </View>
            <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>

          </View>
        )}
      </PageHeader>

      {!isLoadingTeacherList && (
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          {teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited={favorites.includes(teacher.id)}
              />)
          })}
        </ScrollView>
      )}
      <View>
        <ActivityIndicator
          style={styles.activeIndicator}
          size="large"
          color="#8257e5"
          animating={isLoadingTeacherList}/>
      </View>
    </View>
  )
}

export default TeacherList;
