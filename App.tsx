import {View, Platform} from 'react-native';
import React from 'react';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetExample from './src/screens/Get/GetExample';
import PutExample from './src/screens/Put/PutExample';
import PostExample from './src/screens/Post/PostExample';
import DeleteExample from './src/screens/Delete/DeleteExample';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              padding: 10,
            }}>
            <Text
              style={{
                color: isFocused ? colors.primary : colors.text,
                textAlign: 'center',
              }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      // tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false, sceneStyle: {borderWidth: 1}}}
      detachInactiveScreens={true}>
      <Tab.Screen
        name="Get"
        component={GetExample}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="get-app" color={color} size={size} />
          ),
          tabBarLabel: 'Get',
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostExample}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="post-add" color={color} size={size} />
          ),
          tabBarLabel: 'Post',
        }}
      />
      <Tab.Screen
        name="Put"
        component={PutExample}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="edit-note" color={color} size={size} />
          ),
          tabBarLabel: 'Put',
        }}
      />
      <Tab.Screen
        name="Delete"
        component={DeleteExample}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="delete" color={color} size={size} />
          ),
          tabBarLabel: 'Delete',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
