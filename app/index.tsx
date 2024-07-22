import React from 'react'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "@/components";
import { COLORS, SIZES, icons, images } from "@/constants";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, padding:SIZES.medium }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={()=>{}} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={()=>{}} />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
            <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={()=>{
              if(searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}/>
            <Popularjobs />
            <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}