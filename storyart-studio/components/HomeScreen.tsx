import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedLottieView from 'lottie-react-native';
import { useRef, RefObject } from 'react';
import { commonStyles as styles } from '../styles/styles';

export default function HomeScreen() {
  const fairyRef = useRef<AnimatedLottieView>(null);
  const dragonRef = useRef<AnimatedLottieView>(null);
  const unicornRef = useRef<AnimatedLottieView>(null);

  // Function to start animation
  const triggerAnimation = (ref: RefObject<AnimatedLottieView | null>) => {
    ref.current?.reset();
    ref.current?.play();
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/night-sky-bg-2.png')} 
      style={styles.container}
    >
      {/*Background animation */}
      <AnimatedLottieView
        source={require('@/assets/animations/stars.json')}
        autoPlay
        loop
        style={styles.starsAnimation}
      />
      
      <LinearGradient
        colors={['#FF00FF', '#00FFFF', '#FF00FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientTitle}
      >
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
          <AnimatedLottieView
            ref={fairyRef}
            source={require('@/assets/animations/fairy.json')}
            autoPlay={false}
            loop={false}
            style={styles.character}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => triggerAnimation(dragonRef)}>
          <AnimatedLottieView
            ref={dragonRef}
            source={require('@/assets/animations/dragon.json')}
            autoPlay={false}
            loop={false}
            style={styles.character}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => triggerAnimation(unicornRef)}>
          <AnimatedLottieView
            ref={unicornRef}
            source={require('@/assets/animations/unicorn.json')}
            autoPlay={false}
            loop={false}
            style={styles.character}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}