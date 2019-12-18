import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {Client} from 'Client';

interface IProps {
  client: Client;
}

export function ProjectList(props: IProps) {
  const projects = [
    {id: 1, name: 'project1', userCount: 20, taskCount: 30},
    {id: 2, name: 'project2', userCount: 100, taskCount: 90},
    {id: 3, name: 'project3', userCount: 200, taskCount: 110},
    {id: 4, name: 'project4', userCount: 300, taskCount: 3000},
    {id: 5, name: 'project5', userCount: 400, taskCount: 10},
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
}
