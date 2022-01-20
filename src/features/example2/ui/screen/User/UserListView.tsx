import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Overlay from '~core/ui/overlay/Overlay';
import User from '~features/example2/data/domain/user';
import ArticlePlaceholder from '../../component/ArticlePlaceholder';

interface Props {
  users: User[];
  error?: boolean;
  loading?: boolean;
}

const UserListView = ({ users, error, loading }: Props) => {
  if (error) {
    Overlay.open({
      renderContent: () => (
        <View
          style={{
            width: '100%',
            backgroundColor: 'blue',
            height: 100,
            elevation: 200,
          }}>
          <Text>error bos</Text>
        </View>
      ),
    });
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading && <ArticlePlaceholder />}
      {users.map(user => (
        <Text style={styles.text} key={user.id}>
          {user.name}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    color: 'blue',
  },
  text: {
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    flexGrow: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserListView;
