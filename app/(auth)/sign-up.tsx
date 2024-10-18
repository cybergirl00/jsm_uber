import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import OAuth from '@/components/OAuth'

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onSignupPress = () => {}
  return (
    <ScrollView
     className='flex-1 bg-white '>
      <View className='flex-1 bg-white '>
        <View className='relative w-full h-[250px] '>

          <Image 
          source={images.signUpCar}
          className='z-0  w-full h-[250px] '
          />

          <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>Create Your Account</Text>
        </View>

        <View className='p-5'>
        <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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

          <CustomButton title='Sign up' onPress={onSignupPress} className='mt-6' />

          <OAuth />
          <Link href='/sign-in' className='text-lg text-center mt-10 text-general-200'>
          <Text>Already have an account?{" "} </Text>
          <Text className='text-primary-500'>Log in </Text>
          </Link>
        </View>
      </View>
     </ScrollView>
  )
}

export default SignUp