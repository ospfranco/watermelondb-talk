export const api = {
  pullDbChanges: () => {
    return new Promise(resolve => {
      resolve({
        changes: {
          project: {
            created: [
              {id: 1, name: 'China', userCount: 20, taskCount: 30},
              {id: 2, name: 'Germany', userCount: 100, taskCount: 90},
              {id: 3, name: 'U.S.', userCount: 200, taskCount: 110},
              {id: 4, name: 'France', userCount: 300, taskCount: 3000},
              {id: 5, name: 'UK', userCount: 400, taskCount: 10},
            ],
            updated: [
              // { id: 'ccc', name: 'Baz', is_favorite: true },
            ],
            deleted: [
              // 'ddd'
            ],
          },
        },
        timestamp: new Date().getTime(),
      });
    });
  },
  pushDbChanges: (changes: any, timestamp: number) => {
    return Promise.resolve();
  },
};
