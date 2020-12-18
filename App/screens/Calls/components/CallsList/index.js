import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {FlatList, View, Text} from 'react-native';
import CallsListItem from './CallsListItem';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const CallsList = ({calls}) => {
  const theme = useTheme();

  renderSeparator = () => {
    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: COLORS[theme].grey4},
        ]}></View>
    );
  };

  renderLastItem = () => {
    return (
      <View style={styles.lastItemContainer}>
        <Text style={[styles.lastItemText, {color: COLORS[theme].grey3}]}>
          You doesn't have any other call
        </Text>
      </View>
    );
  };

  const data = [...calls, 'LAST_ITEM'];
  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(call) => data.indexOf(call).toString()}
      ItemSeparatorComponent={renderSeparator}
      renderItem={(call) => {
        if (call.item === 'LAST_ITEM') {
          return renderLastItem();
        }
        return <CallsListItem call={call} />;
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CallsList;
