import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#28283b',
          marginTop: 20,
          marginHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 6,
          elevation: 2,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}
        onPress={() => setShowMenu(!showMenu)}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="bars" size={25} color="#FFFFFF" />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            flex: 1,
          }}>
          <Text
            style={{color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>
            Menu
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="angle-down" size={25} color="#FFFFFF" />
        </View>
      </TouchableOpacity>

      {showMenu && (
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: '#FFFFFF',
            elevation: 2,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
          }}>
          <Text style={{fontWeight: 'bold'}}>Home</Text>
          <Text>Profil</Text>
          <Text>Tentang Kami</Text>
        </View>
      )}
    </View>
  );
};

export default App;
