export const api = {
  pullDbChanges: () => {
    return new Promise(resolve => {
      resolve({
        changes: {
          project: {
            created: [
              // { id: 'aaaa', name: 'Foo', is_favorite: true },
              // { id: 'bbbb', name: 'Bar', is_favorite: false },
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
