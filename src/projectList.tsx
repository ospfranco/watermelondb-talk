import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';
import {Client} from 'Client';
import {Project} from 'Model/Project';
import withObservables from '@nozbe/with-observables';
import {tables} from './schema';

interface IProps {
  client: Client;
  projects?: Project[];
}

function _ProjectList(props: IProps) {
  const projects = [
    {id: 1, name: 'China', userCount: 20, taskCount: 30},
    {id: 2, name: 'Germany', userCount: 100, taskCount: 90},
    {id: 3, name: 'U.S.', userCount: 200, taskCount: 110},
    {id: 4, name: 'France', userCount: 300, taskCount: 3000},
    {id: 5, name: 'UK', userCount: 400, taskCount: 10},
  ];

  function renderItem(info: ListRenderItemInfo<any>) {
    const project = info.item;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <Text style={{fontWeight: '500'}}>{project.name}</Text>
        <Text>{project.userCount}</Text>
        <Text>{project.taskCount}</Text>
      </View>
    );
  }

  function keyExtractor(item: any) {
    return item.id;
  }

  function sync() {
    props.client.sync(true);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Sync" onPress={sync} />
      <FlatList
        data={props.projects || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
}

export const ProjectList = withObservables(
  [],
  ({client}: {client: Client}) => ({
    projects: client.database.collections.get(tables.project).query(),
  }),
)(_ProjectList);
