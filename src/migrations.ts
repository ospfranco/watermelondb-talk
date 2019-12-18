import {
  schemaMigrations,
  createTable,
  addColumns,
} from '@nozbe/watermelondb/Schema/migrations';

import {columns, tables} from './schema';

export const migrations = schemaMigrations({
  migrations: [
    // {
    //   toVersion: 2,
    //   steps: [
    //     createTable({
    //       name: Tables.dailyReports,
    //       columns: [
    //         {
    //           name: columns.dailyReports.projectId,
    //           type: 'string',
    //           isIndexed: true,
    //         },
    //         {
    //           name: columns.dailyReports.dailyReportNumber,
    //           type: 'number',
    //         },
    //         {
    //           name: columns.dailyReports.dailyReportDate,
    //           type: 'string',
    //         },
    //         {
    //           name: columns.dailyReports.startedAt,
    //           type: 'string',
    //         },
    //         {
    //           name: columns.dailyReports.endedAt,
    //           type: 'string',
    //         },
    //         {
    //           name: columns.dailyReports.weather,
    //           type: 'string',
    //         },
    //         {
    //           name: columns.dailyReports.extraInfo,
    //           type: 'string',
    //         },
    //       ],
    //     }),
    //     addColumns({
    //       table: Tables.attachments,
    //       columns: [
    //         {
    //           name: Columns.attachments.path,
    //           type: 'string',
    //         },
    //       ],
    //     }),
    //   ],
    // },
  ],
});
