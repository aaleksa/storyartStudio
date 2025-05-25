import React, { useRef, RefObject } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { commonStyles as styles } from '../styles/styles';

export default function HomeScreen() {
  const fairyRef = useRef<LottieView | null>(null);
  const dragonRef = useRef<LottieView | null>(null);
  const unicornRef = useRef<LottieView | null>(null);

 const triggerAnimation = (ref: React.RefObject<LottieView | null>) => {
    ref.current?.reset();
    ref.current?.play();
  };

  return (
    <ImageBackground source={require('@/assets/images/night-sky-bg-2.png')} style={styles.container}>
      <LottieView
        source={require('../assets/animations/stars.json')}
        autoPlay
        loop
        style={styles.starsAnimation}
      />

      <LinearGradient colors={['#FF00FF', '#00FFFF', '#FF00FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradientTitle}>
        <Text style={styles.title}>Казкова студія</Text>
      </LinearGradient>

      {/*Menu buttons */}
      <View style={styles.menuContainer}>
        <Link href="/create" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🧚‍♀️ Створити нову казку</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/gallery" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🖼 Моя галерея</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/settings" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🛡 Налаштування / Батьківський контроль</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/*Decorative characters */}
      <View style={styles.charactersContainer}>
        <TouchableOpacity onPress={() => triggerAnimation(fairyRef)}>
          <LottieView
            ref={fairyRef}
            source={require('../assets/animations/fairy.json')}
            autoPlay={false}
            loop={false}
            style={styles.character}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => triggerAnimation(dragonRef)}>
          <LottieView
            ref={dragonRef}
            source={require('@/assets/animations/dragon.json')}
            autoPlay={false}
            loop={false}
            style={styles.character}
          />
        </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => triggerAnimation(unicornRef)}>
          <LottieView
            ref={unicornRef}
            source={require('@/assets/animations/unicorn.json')}
            autoPlay={false}
            loop={false}
            style={styles.character}
          /> */}
        {/* </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
}
