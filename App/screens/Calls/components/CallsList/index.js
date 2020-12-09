import React from 'react';
import {styles} from './styles';
import {FlatList, View, Text} from 'react-native';
import CallsListItem from './CallsListItem';

class CallsList extends React.Component {
  renderSeparator() {
    return <View style={styles.separator}></View>;
  }

  renderLastItem() {
    return (
      <View style={styles.lastItemContainer}>
        <Text style={styles.lastItemText}>You doesn't have any other call</Text>
      </View>
    );
  }

  render() {
    const data = [...this.props.calls, 'LAST_ITEM'];
    return (
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(call) => data.indexOf(call).toString()}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={(call) => {
          if (call.item === 'LAST_ITEM') {
            return this.renderLastItem();
          }
          return <CallsListItem call={call} />;
        }}
      />
    );
  }
}

export default CallsList;
