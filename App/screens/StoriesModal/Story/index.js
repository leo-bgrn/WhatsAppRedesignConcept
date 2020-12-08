import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  Animated,
} from 'react-native';
import {styles} from './styles';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyTimer: new Animated.Value(0),
    };
  }

  _startStoryTimer() {
    Animated.timing(this.state.storyTimer, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }

  resetAnimation = () => {
    this.state.storyTimer.setValue(0);
    this._startStoryTimer();
  };

  componentDidMount() {
    this._startStoryTimer();
  }

  render() {
    const {story} = this.props;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={{borderRadius: 15}}
          source={{uri: story.stories[0].image}}>
          <View style={styles.timerContainer}>
            <View style={styles.timerNotFilled}>
              <Animated.View
                style={[
                  styles.timerFilled,
                  {flex: this.state.storyTimer},
                ]}></Animated.View>
            </View>
          </View>
          <View style={styles.topContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={{uri: story.person.profilPicture}}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{story.person.displayName}</Text>
              <Text style={styles.dateText}>
                {story.stories[0].datetime.fromNow(true)}
              </Text>
            </View>
          </View>
          <View style={styles.bottomContainer}></View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Story;
