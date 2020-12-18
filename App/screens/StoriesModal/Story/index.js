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
      storyTimers: this.props.story.stories.map(() => new Animated.Value(0)),
      storyToRenderIndex: 0,
    };
  }

  pauseStoryTimer = () => {
    this.state.storyTimers[this.state.storyToRenderIndex].stopAnimation();
  };

  resumeStoryTimer = () => {
    const duration =
      5000 - this.state.storyTimers[this.state.storyToRenderIndex]._value * 50;
    Animated.timing(this.state.storyTimers[this.state.storyToRenderIndex], {
      toValue: 100,
      duration: duration,
      useNativeDriver: false,
    }).start(this.finishStoryTimer);
  };

  nextItem = () => {
    for (let item of this.state.storyTimers) {
      const index = this.state.storyTimers.indexOf(item);
      if (index <= this.state.storyToRenderIndex) {
        item.setValue(100);
      } else {
        item.setValue(0);
      }
    }
    this.startStoryTimer(this.state.storyToRenderIndex + 1);
    this.setState({
      storyToRenderIndex: this.state.storyToRenderIndex + 1,
    });
  };

  prevItem = () => {
    for (let item of this.state.storyTimers) {
      const index = this.state.storyTimers.indexOf(item);
      if (index < this.state.storyToRenderIndex - 1) {
        item.setValue(100);
      } else {
        item.setValue(0);
      }
    }

    this.startStoryTimer(this.state.storyToRenderIndex - 1);
    this.setState({
      storyToRenderIndex: this.state.storyToRenderIndex - 1,
    });
  };

  resetStoryTimer = () => {
    this.state.storyTimers[this.state.storyToRenderIndex].setValue(0);
  };

  startStoryTimer = (storyToStart) => {
    if (storyToStart == null) {
      storyToStart = this.state.storyToRenderIndex;
    }
    Animated.timing(this.state.storyTimers[storyToStart], {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start(this.finishStoryTimer);
  };

  renderStoryTimer(storyTimer, index) {
    return (
      <View style={styles.timerNotFilled} key={index}>
        <Animated.View
          style={[
            styles.timerFilled,
            {
              width: storyTimer.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}></Animated.View>
      </View>
    );
  }

  finishStoryTimer = ({finished}) => {
    if (!finished) return;
    if (this.state.storyToRenderIndex !== this.props.story.stories.length - 1) {
      this.nextItem();
    } else {
      this.props.nextStory();
    }
  };

  render() {
    const {story} = this.props;

    return (
      <SafeAreaView
        style={styles.mainContainer}
        onPress={this.onPressPreviousStory}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={{borderRadius: 15}}
          source={{uri: story.stories[this.state.storyToRenderIndex].image}}>
          <View style={styles.timerContainer}>
            {this.state.storyTimers.map((item, index) =>
              this.renderStoryTimer(item, index),
            )}
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
                {story.stories[this.state.storyToRenderIndex].datetime.fromNow(
                  true,
                )}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}></View>
          <View style={styles.bottomContainer}></View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Story;
