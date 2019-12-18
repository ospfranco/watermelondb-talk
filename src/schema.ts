import {
  columnName,
  tableName,
  appSchema,
  tableSchema,
} from '@nozbe/watermelondb';
import {Project} from './Model/Project';

export const tables = {
  project: tableName<Project>('project'),
};

export const columns = {
  project: {
    name: columnName('name'),
    userCount: columnName('userCount'),
    taskCount: columnName('taskCount'),
  },
};

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: tables.project,
      columns: [
        {name: columns.project.name, type: 'string', isIndexed: true},
        {name: columns.project.userCount, type: 'number'},
        {name: columns.project.taskCount, type: 'number'},
      ],
    }),
  ],
});
