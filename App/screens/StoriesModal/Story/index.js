import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  Animated, TouchableOpacity
} from 'react-native';
import {styles} from './styles';

class Story extends React.Component {
  constructor(props) {
    super(props);
    const storiesNotSeen = this.props.story.stories.filter(
      (story) => !story.seen,
    );
    this.state = {
      storyTimer: new Animated.Value(0),
      storyToRender:
        storiesNotSeen.length > 0
          ? storiesNotSeen[0]
          : this.props.story.stories[this.props.story.stories.length - 1],
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

  onPressPreviousStory() {
    console.log('Previous story');
  }

  onPressNextStory() {
    console.log('Next story');
  }

  render() {
    const {story} = this.props;

    return (
      <SafeAreaView
        style={styles.mainContainer}
        onPress={this.onPressPreviousStory}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={{borderRadius: 15}}
          source={{uri: this.state.storyToRender.image}}>
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
                {this.state.storyToRender.datetime.fromNow(true)}
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
