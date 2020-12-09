import React from 'react';
import {View, Text, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {styles} from './styles';
import CallsHeader from './components/CallsHeader';
import {getCalls} from '/services/fakeApi';
import CallsList from './components/CallsList';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;

class Calls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [],
      isLoading: false,
    };
  }

  _loadData() {
    this.setState({isLoading: true});
    getCalls().then((calls) => {
      this.setState({
        calls: calls,
        isLoading: false,
      });
    });
  }

  _displayLoading() {
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
  }

  componentDidMount() {
    this._loadData();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView style={{flex: 1}}>
          <CallsHeader />
          <View style={styles.separator}></View>
          {this.state.isLoading && this._displayLoading()}
          {!this.state.isLoading && <CallsList calls={this.state.calls} />}
        </SafeAreaView>
      </View>
    );
  }
}

export default Calls;
