import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {styles} from './styles';
import CallsHeader from './components/CallsHeader';
import {getCalls} from '/services/fakeApi';
import CallsList from './components/CallsList';
import LottieView from 'lottie-react-native';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const windowWidth = Dimensions.get('window').width;

export default Calls = () => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  _loadData = () => {
    setIsLoading(true);
    getCalls().then((calls) => {
      setCalls(calls);
      setIsLoading(false);
    });
  };

  _displayLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          source={require('/assets/lottieAnimations/loadingAnimation.json')}
          autoPlay
          loop
          style={{width: windowWidth * 0.3, aspectRatio: 1}}
        />
      </View>
    );
  };

  useEffect(() => {
    _loadData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={{flex: 1}}>
        <CallsHeader />
        <View style={[styles.separator, {backgroundColor: COLORS[theme].grey4,}]}></View>
        {isLoading && _displayLoading()}
        {!isLoading && <CallsList calls={calls} />}
      </SafeAreaView>
    </View>
  );
};
