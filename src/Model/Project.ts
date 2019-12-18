import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import {columns, tables} from '../schema';

const column = columns.project;
export class Project extends Model {
  static table = tables.project;

  static associations = {
    // [Tables.tickets]: {
    //   type: 'has_many',
    //   foreignKey: Columns.tickets.projectId,
    // },
  };

  // @ts-ignore
  @field(column.name)
  public name!: string;

  // @ts-ignore
  @field(column.userCount)
  public userCount!: number;

  // @ts-ignore
  @field(column.taskCount)
  public taskCount!: number;

  // Example of lazy fields
  // @lazy
  // public lastTicket = this.tickets.observe().pipe(
  //   map((x: Ticket[]) => {
  //     const lastTicket = _.reduce(
  //       x,
  //       (prev, ticket) => {
  //         // This logic is wrong, comparing numbers is not the best idea, but the back-end is eating the dates, so I have no way to detect which one is the most recent ticket
  //         if (
  //           !ticket.ticketNumber ||
  //           (prev.ticketNumber && ticket.ticketNumber < prev.ticketNumber)
  //         ) {
  //           return prev;
  //         }

  //         return ticket;
  //       },
  //       x[0],
  //     );
  //     return lastTicket;
  //   }),
  //   distinctUntilChanged(),
  // );
}
