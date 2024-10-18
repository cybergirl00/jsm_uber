import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import OAuth from '@/components/OAuth'

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const onSigninPress = () => {}
  return (
    <ScrollView
     className='flex-1 bg-white '>
      <View className='flex-1 bg-white '>
        <View className='relative w-full h-[250px] '>

          <Image 
          source={images.signUpCar}
          className='z-0  w-full h-[250px] '
          />

          <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>Welcome 👋 </Text>
        </View>

        <View className='p-5'>
           <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
           <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton title='Sign In' onPress={onSigninPress} className='mt-6' />

          <OAuth />
          <Link href='/sign-up' className='text-lg text-center mt-10 text-general-200'>
          <Text>Don't have an account?{" "} </Text>
          <Text className='text-primary-500'>Create one </Text>
          </Link>
        </View>
      </View>
     </ScrollView>
  )
}

export default SignIn