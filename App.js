import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Home from './src/components/Home';
import Image from './src/components/Image';
import Menu from './src/components/Menu';
const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#bdbdbd',
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 9,
          backgroundColor: '#FFFFFF',
          elevation: 2,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#1d5eff' : '#FFFFFF',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Home')}>
          <Text style={{color: activeMenu == 'Home' ? '#FFFFFF' : '#9ea3b0'}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Image' ? '#1d5eff' : '#FFFFFF',
            elevation: activeMenu == 'Image' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Image')}>
          <Text style={{color: activeMenu == 'Image' ? '#FFFFFF' : '#9ea3b0'}}>
            Image
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Menu' ? '#1d5eff' : '#FFFFFF',
            elevation: activeMenu == 'Menu' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Menu')}>
          <Text
            style={{color: activeMenu == 'Menu' ? '#FFFFFF' : '#9ea3b0'}}>
            Menu
          </Text>
        </TouchableOpacity>
      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Image' && <Image />}
      {activeMenu == 'Menu' && <Menu />}
      
    </View>
  );
};

export default App;