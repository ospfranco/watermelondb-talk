import {Database} from '@nozbe/watermelondb';
import {synchronize} from '@nozbe/watermelondb/sync';
import {api} from './api';

export function internalSync(database: Database, deep: boolean) {
  // Comes from watermelonDB
  return synchronize({
    database,
    pullChanges: async ({lastPulledAt}) => {
      //@ts-ignore
      const {changes, timestamp} = await api.pullDbChanges();
      return {
        changes,
        timestamp,
      };
    },

    pushChanges: async ({changes, lastPulledAt}) => {
      await api.pushDbChanges(changes, lastPulledAt);
    },
  });
}
