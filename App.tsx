import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ProjectList} from './src/projectList';
import {Client} from './src/Client';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {Database} from '@nozbe/watermelondb';
import {schema} from './src/schema';
import {migrations} from './src/migrations';
import {models} from './src/Model';

const App = () => {
  const adapter = new SQLiteAdapter({
    dbName: 'awesomeOffline',
    schema,
    migrations,
  });

  const database = new Database({
    adapter,
    modelClasses: models,
    actionsEnabled: true,
  });

  const client = new Client(database);

  return (
    <>
      {/* When you do it for real do it with context provider or so */}
      <ProjectList client={client} />
    </>
  );
};

export default App;
