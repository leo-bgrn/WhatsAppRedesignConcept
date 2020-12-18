import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {View, SafeAreaView, FlatList, KeyboardAvoidingView} from 'react-native';
import {getConversationId} from '/services/fakeApi';
import ConversationHeader from './components/ConversationHeader';
import Texting from '/components/Texting';
import Message from './components/Message';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const Conversation = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState(null);
  const theme = useTheme();

  _loadData = () => {
    setIsLoading(true);
    getConversationId(navigation.state.params.conversationId).then(
      (conversation) => {
        setConversation(conversation);

        setIsLoading(false);
      },
    );
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

  navigationGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    _loadData();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={{flex: 1}}>
          <ConversationHeader
            conversation={conversation}
            navigationGoBack={navigationGoBack}
          />
          <View style={[styles.separator, {backgroundColor: COLORS[theme].grey4}]}></View>
          <FlatList
            inverted
            data={conversation != null ? conversation.messages : []}
            style={styles.messagesList}
            keyExtractor={(message) => message.messageId}
            renderItem={(message) => (
              <Message message={message.item} conversation={conversation} />
            )}
          />
          <View style={{height: 10}}></View>
          <Texting />
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Conversation;
