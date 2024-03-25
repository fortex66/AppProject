import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// ...state를 사용하는 이유 : 미래에 상태 객체에 추가 속성을 추가할 수도 있으므로
reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + action.payload };
    case "Decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: 1 });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
