import { Stack } from "expo-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
    <Stack>
        <Stack.Screen name="index" options={{ title: "Home" , headerShown: false}} />
        <Stack.Screen name="circle" options={{ title: "Circle" , headerShown: false}} />
        <Stack.Screen name="map" options={{ title: "map",headerShown: false }} />
        <Stack.Screen name="event" options={{ title: "event",headerShown: false }} />
        <Stack.Screen name="profile" options={{ title: "profile",headerShown: false }} />
      </Stack>
      <Navbar />
    </>
  );
}
