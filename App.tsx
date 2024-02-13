import { useRef, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.View`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;
const AnimateBox = Animated.createAnimatedComponent(Box);

export default function App() {
  const [up, setUp] = useState(false);
  const toggle = () => setUp((prev) => !prev);
  const Y = useRef(new Animated.Value(0)).current;
  const handlePress = () => {
    Animated.timing(Y, {
      toValue: up ? 200 : -200,
      useNativeDriver: true,
    }).start(toggle);
  };
  return (
    <Container>
      <TouchableOpacity onPress={handlePress}>
        <AnimateBox style={{ transform: [{ translateY: Y }] }} />
      </TouchableOpacity>
    </Container>
  );
}
