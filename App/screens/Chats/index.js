import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {getConversations} from '/services/fakeApi';
import ChatsConversationList from './components/ChatsConversationList/index';
import ChatsHeader from './components/ChatsHeader/index';
import {getStories} from '/services/fakeApi';
import ChatsStoriesList from './components/ChatsStoriesList/index';
import StoriesModal from '../StoriesModal';

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

  componentDidMount() {
    this._loadData();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView style={{flex: 1}}>
          <ChatsHeader />
          <View style={styles.separator}></View>
          <ChatsStoriesList
            stories={this.state.stories}
            onShowStoriesModal={this.showStoriesModal}
          />
          <View style={styles.separator}></View>
          <ChatsConversationList conversations={this.state.conversations} />
        </SafeAreaView>
        {this.state.showStoriesModal && (
          <StoriesModal stories={this.state.stories} />
        )}
      </View>
    );
  }
}

export default Chats;
