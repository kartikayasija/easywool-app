import { Box } from "@gluestack-ui/themed";
import { Stack } from "expo-router";

export default function Signup(){
  return (
    <>
      <Stack.Screen options={{headerShown:false}} />
      <Box>Signup Screen Here</Box>
    </>
  )
}