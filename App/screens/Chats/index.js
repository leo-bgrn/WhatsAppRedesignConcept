import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Dimensions} from 'react-native';
import {styles} from './styles';
import {getConversations} from '/services/fakeApi';
import ChatsConversationList from './components/ChatsConversationList/index';
import ChatsHeader from './components/ChatsHeader/index';
import {getStories} from '/services/fakeApi';
import ChatsStoriesList from './components/ChatsStoriesList/index';
import StoriesModal from '../StoriesModal';
import LottieView from 'lottie-react-native';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const windowWidth = Dimensions.get('window').width;

export default Chats = ({navigation}) => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [storyToShow, setStoryToShow] = useState(0);
  const [showStoriesModal, setShowStoriesModal] = useState(false);
  const theme = useTheme();

  showStoriesModalFunction = (index) => {
    setStoryToShow(index);
    setShowStoriesModal(!showStoriesModal);
  };

  _loadData = () => {
    setIsLoading(true);
    getConversations().then((conversations) => {
      getStories().then((stories) => {
        setConversations(conversations);
        setIsLoading(false);
        setStories(stories);
      });
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
        <ChatsHeader />
        <View
          style={[
            styles.separator,
            {backgroundColor: COLORS[theme].grey4},
          ]}></View>
        {isLoading && _displayLoading()}
        {!isLoading && (
          <ChatsStoriesList
            stories={stories}
            onShowStoriesModal={showStoriesModalFunction}
          />
        )}
        {!isLoading && (
          <View
            style={[
              styles.separator,
              {backgroundColor: COLORS[theme].grey4},
            ]}></View>
        )}
        {!isLoading && (
          <ChatsConversationList
            conversations={conversations}
            navigation={navigation}
          />
        )}
      </SafeAreaView>
      {showStoriesModal && (
        <StoriesModal
          stories={stories}
          onShowStoriesModal={showStoriesModalFunction}
          storyToShow={storyToShow}
        />
      )}
    </View>
  );
};
