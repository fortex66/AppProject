import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi My name is Frozen!!</Text>
      
      <Button onPress={()=> navigation.navigate('Components')} title="Go to Components Demo"/>

      <Button onPress={() => navigation.navigate('List')} title="Go to List Demo" />
      
      <Button onPress={() => navigation.navigate('Image')} title="Go to Image Demo"/>
    </View>


    
  )
};

// StyleSheet 함수를 사용하는 이유
// 주어진 요소에 적용하려는 다양한 규칙의 유효성을 확인하기 위해 사용한다.
// StyleSheet을 사용하면 경고창이 아닌 에러창이 나와서 쉽게 알수 있다.
// StyleSheet을 사용하지 않고 바로 인라인으로 작성하면 경고창만 나온다.

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

