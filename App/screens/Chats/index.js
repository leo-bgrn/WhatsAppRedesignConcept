import React from 'react';
import {View, SafeAreaView, Dimensions} from 'react-native';
import {styles} from './styles';
import {getConversations} from '/services/fakeApi';
import ChatsConversationList from './components/ChatsConversationList/index';
import ChatsHeader from './components/ChatsHeader/index';
import {getStories} from '/services/fakeApi';
import ChatsStoriesList from './components/ChatsStoriesList/index';
import StoriesModal from '../StoriesModal';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      isLoading: false,
      stories: [],
      showStoriesModal: false,
    };
    this.showStoriesModal = this.showStoriesModal.bind(this);
  }

  showStoriesModal() {
    this.setState({
      showStoriesModal: !this.state.showStoriesModal,
    });
  }

  _loadData() {
    this.setState({isLoading: true});
    getConversations().then((conversations) => {
      getStories().then((stories) => {
        this.setState({
          conversations: conversations,
          isLoading: false,
          stories: stories,
        });
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
          <ChatsHeader />
          <View style={styles.separator}></View>
          {this.state.isLoading && this._displayLoading()}
          {!this.state.isLoading && (
            <ChatsStoriesList
              stories={this.state.stories}
              onShowStoriesModal={this.showStoriesModal}
            />
          )}
          {!this.state.isLoading && <View style={styles.separator}></View>}
          {!this.state.isLoading && (
            <ChatsConversationList conversations={this.state.conversations} />
          )}
        </SafeAreaView>
        {this.state.showStoriesModal && (
          <StoriesModal stories={this.state.stories} />
        )}
      </View>
    );
  }
}

export default Chats;
