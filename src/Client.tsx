import {Database} from '@nozbe/watermelondb';
import {internalSync} from './Sync';
import retry from 'async-retry';

export class Client {
  constructor(
    readonly database: Database,
    readonly syncOnChange = true,
    readonly syncOnReconnect = true,
  ) {
    if (syncOnChange) {
      // Replace with a nicer implementation of your table names
      database.withChangesForTables(['project']).subscribe(r => {
        this.sync();
      });
    }
  }

  public async sync(deep = false) {
    // Start syncing procedure
    try {
      // Add some logic to clean data
      // Upload/download files
      // etc

      // retry is a small utility to retry the sync in case something goes wrong
      await retry(() => internalSync(this.database, deep));
    } catch (e) {
      // SYNC DID NOT GO THROUGH
      console.warn('sync did not go through!');
    }
  }
}
