import React, {useState, useEffect} from 'react';
import {Animated, Dimensions, StyleSheet, PanResponder} from 'react-native';
import {styles} from './styles';
import Story from './Story';

const {width, height} = Dimensions.get('window');
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === 'ios' ? 2 : 1.2;

const StoriesModal = ({stories, onShowStoriesModal, storyToShow}) => {
  const [activeStory, setActiveStory] = useState(storyToShow);
  const [x, setX] = useState(new Animated.Value(storyToShow * width));
  const [y, setY] = useState(new Animated.Value(0));
  const [swipeHorizontal, setSwipeHorizontal] = useState(false);
  const [swipeVertical, setSwipeVertical] = useState(false);
  const [xTemp, setXTemp] = useState(null);

  let myRefs = stories.map(() => React.createRef());
  let mainRef = React.createRef();

  useEffect(() => {
    x.addListener(() =>
      stories.forEach((story, index) => {
        const offset = index * width;
        const inputRange = [offset - width, offset + width];
        const translateX = x
          .interpolate({
            inputRange,
            outputRange: [width / ratio, -width / ratio],
            extrapolate: 'clamp',
          })
          .__getValue();

        const rotateY = x
          .interpolate({
            inputRange,
            outputRange: [`${angle}rad`, `-${angle}rad`],
            extrapolate: 'clamp',
          })
          .__getValue();

        const parsed = parseFloat(
          rotateY.substr(0, rotateY.indexOf('rad')),
          10,
        );
        const alpha = Math.abs(parsed);
        const gamma = angle - alpha;
        const beta = Math.PI - alpha - gamma;
        const w = width / 2 - ((width / 2) * Math.sin(gamma)) / Math.sin(beta);
        const translateX2 = parsed > 0 ? w : -w;

        const style = {
          transform: [
            {perspective},
            {translateX},
            {rotateY},
            {translateX: translateX2},
          ],
        };
        story.current.setNativeProps({style});
      }),
    );
    x.setValue(x._value); // Trigger listener to show right story instead of first

    y.addListener(() => {
      const style = {
        transform: [
          {translateY: y.__getValue()},
          {
            scale: y
              .interpolate({inputRange: [0, height], outputRange: [1, 0]})
              .__getValue(),
          },
        ],
      };
      mainRef.current.setNativeProps({style});
    });

    myRefs[activeStory].current.startStoryTimer();
  }, []);

  swipeHorizontalLeadsToPrevStory = (vx) => {
    return (
      activeStory !== 0 &&
      x._value < xTemp &&
      (xTemp - x._value > width / 2 || vx > 0.5)
    );
  };

  prevStory = () => {
    if (activeStory !== 0) {
      Animated.timing(x, {
        toValue: width * (activeStory - 1),
        duration: 500,
        useNativeDriver: false,
      }).start();
      myRefs[activeStory].current.resetStoryTimer();
      myRefs[activeStory - 1].current.startStoryTimer();
      setActiveStory(activeStory - 1);
    } else {
      Animated.timing(x, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  onPrevItem = () => {
    if (
      activeStory === 0 &&
      myRefs[activeStory].current.state.storyToRenderIndex === 0
    ) {
      return;
    } else if (myRefs[activeStory].current.state.storyToRenderIndex === 0) {
      prevStory();
    } else {
      myRefs[activeStory].current.prevItem();
    }
  };

  swipeHorizontalLeadsToNextStory = (vx) => {
    return (
      activeStory !== stories.length - 1 &&
      x._value > xTemp &&
      (x._value - xTemp > width / 2 || vx < -0.5)
    );
  };

  nextStory = () => {
    if (activeStory !== stories.length - 1) {
      Animated.timing(x, {
        toValue: width * (activeStory + 1),
        duration: 500,
        useNativeDriver: false,
      }).start();
      myRefs[activeStory].current.resetStoryTimer();
      myRefs[activeStory + 1].current.startStoryTimer();
      setActiveStory(activeStory + 1);
    }
  };

  onNextItem = () => {
    if (
      activeStory === stories.length - 1 &&
      myRefs[activeStory].current.state.storyToRenderIndex ===
        stories[activeStory].stories.length - 1
    ) {
      return;
    } else if (
      myRefs[activeStory].current.state.storyToRenderIndex ===
      stories[activeStory].stories.length - 1
    ) {
      nextStory();
    } else {
      myRefs[activeStory].current.nextItem();
    }
  };

  onPressIn = () => {
    myRefs[activeStory].current.pauseStoryTimer();
  };

  onMove = (gestureState) => {
    const {dx, dy} = gestureState;
    if (swipeHorizontal || (Math.abs(dy) < 5 && Math.abs(dx) > 5)) {
      if (!swipeHorizontal) {
        setSwipeHorizontal(true);
        setXTemp(x._value);
      }
      x.setValue(xTemp - dx);
    } else if (swipeVertical || (Math.abs(dx) < 5 && dy > 5)) {
      if (!swipeVertical) {
        setSwipeVertical(true);
      }
      y.setValue(dy);
    }
  };

  onReleaseWithSwipeHorizontal = (vx) => {
    setSwipeHorizontal(false);
    if (swipeHorizontalLeadsToPrevStory(vx)) {
      prevStory();
    } else if (swipeHorizontalLeadsToNextStory(vx)) {
      nextStory();
    } else {
      Animated.timing(x, {
        toValue: xTemp,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    setXTemp(null);
  };

  onReleaseWithSwipeVertical = () => {
    setSwipeVertical(false);
    if (y._value > 50) {
      onShowStoriesModal();
    } else {
      Animated.timing(y, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  onRelease = (gestureState) => {
    const {dx, dy, x0, y0, vx, vy} = gestureState;
    myRefs[activeStory].current.resumeStoryTimer();
    if (swipeHorizontal) {
      return onReleaseWithSwipeHorizontal(vx);
    }
    if (swipeVertical) {
      return onReleaseWithSwipeVertical();
    }
    if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
      if (x0 < width / 3) {
        onPrevItem();
      } else {
        onNextItem();
      }
    }
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) =>
        evt.nativeEvent.pageY < height - 162,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        evt.nativeEvent.pageY < height - 162,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        onPressIn();
      },
      onPanResponderMove: (evt, gestureState) => {
        onMove(gestureState);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        onRelease(gestureState);
      },
    }),
  ).current;

  return (
    <>
      <Animated.View
        {...panResponder.panHandlers}
        style={styles.mainContainer}
        ref={mainRef}>
        {stories
          .map((story, i) => (
            <Animated.View
              ref={stories[i]}
              style={StyleSheet.absoluteFill}
              key={i}>
              <Story story={story} ref={myRefs[i]} nextStory={nextStory} />
            </Animated.View>
          ))
          .reverse()}
      </Animated.View>
    </>
  );
};

export default StoriesModal;
