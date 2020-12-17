import React, {useState, useEffect} from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Story from './Story';

const {width} = Dimensions.get('window');
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === 'ios' ? 2 : 1.2;

const StoriesModal = ({stories}) => {
  const [x, setX] = useState(new Animated.Value(0));
  let myRefs = stories.map(() => React.createRef());

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

        const translateX1 = x
          .interpolate({
            inputRange,
            outputRange: [width / 2, -width / 2],
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

        myRefs[index].current.resetAnimation();
      }),
    );
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        {stories
          .map((story, i) => (
            <Animated.View
              ref={stories[i]}
              style={StyleSheet.absoluteFill}
              key={i}>
              <Story story={story} ref={myRefs[i]} />
            </Animated.View>
          ))
          .reverse()}
      </View>
      <Animated.ScrollView
        horizontal
        style={StyleSheet.absoluteFill}
        contentContainerStyle={{width: width * stories.length}}
        snapToInterval={width}
        decelerationRate={0.99}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x},
              },
            },
          ],
          {useNativeDriver: true},
        )}
      />
    </>
  );
};

export default StoriesModal;