import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';

function NoInternet() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("gotoCallEveryTime");
      NetInfo.fetch().then(networkState => {
        // console.log("Connection type - ", networkState.type);
        // console.log("Is connected? - ", networkState.isConnected);
        if (networkState.isConnected) {
          setIsConnected(false);
          setModalVisible(!isModalVisible);
        } else {
          setIsConnected(true);
          setModalVisible(!isModalVisible);
        }
      });
      // NetInfo.addEventListener((state) => {
      //   // console.warn("called");
      //   //console.warn(state.isInternetReachable);

      //   setModalVisible(!isModalVisible);
      // });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isConnected && (
        <Modal isVisible={isModalVisible} backdropColor="rgba(0,0,0,0.1)">
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              marginHorizontal: 16,
              borderRadius: 10,
              paddingHorizontal: 16,
              paddingVertical: 16,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Please turn on internet/wifi on your mobile
            </Text>
          </View>
        </Modal>
      )}
    </>
  );
}

export default NoInternet;
