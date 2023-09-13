import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { Slot, Stack } from "expo-router";

export default function _layout(){
  return (
    <>
      <GluestackUIProvider config={config.theme}>
        <Stack />
      </GluestackUIProvider>
    </>
  )
}