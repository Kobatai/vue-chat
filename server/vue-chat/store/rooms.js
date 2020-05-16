export const state = () => ({
  rooms: []
});

export const getters = {
  rooms: state => state.rooms
};

export const mutations = {
  add(state, { room }) {
    const isNotAdded = !state.rooms.find(r => r.id === room.id);

    if (isNotAdded) {
      state.rooms.push(room);
    }
  },
  update(state, { room }) {
    // 受け取ったroomでidが合致するstateのroomをmapする
    state.rooms = state.rooms.map(r => {
      if (r.id === room.id) {
        r = room;
      }
      return r;
    });
  },
  remove(state, { room }) {
    // stateにあるroom.idと受け取ったroom.idと一致しないものだけで、新しい配列を作成
    state.rooms = state.rooms.filter(r => r.id !== room.id);
  },
  clear(state) {
    state.rooms = [];
  }
};

// 非同期な外部のAPI呼び出しを伴うもの
// 外部から受け取ったデータをMutationにCommitしてStateに反映
export const actions = {
  subscribe({ commit }) {
    return (
      this.$firestore
        // 作成時間のascでroomsコレクションを取得
        .collection("rooms")
        .orderBy("createdAt", "asc")
        // onSnapShotでFirestoreのリアルタイムアップデートを取得
        .onSnapshot(roomsSnapShot => {
          // 単純にクエリ スナップショット全体を使用するのではなく、
          // クエリ スナップショット間でクエリ結果の実際の変更を確認すると便利な場合があります。たとえば、個々のドキュメントが追加、削除、変更されたときに、キャッシュを維持できます。by Firebase document
          // forEachで回しながらリアルタイムでパターンごとにスナップショットのクエリ結果を切り替える
          roomsSnapShot.docChanges().forEach(snapshot => {
            const room = {
              id: snapshot.doc.id,
              ...snapshot.doc.data()
            };
            // {
            //   id: 'qHpkg9Fvd6TC2QAOI',
            //   name: '今日の晩御飯について話す部屋',
            //   topImageUrl: 'https://firebasestorage....',
            //   createdAt: '2020/5/7 7:43:40'
            // }

            // snapshot.typeはドキュメントに発生したイベントの種類が含まれており、それぞれ、3種類
            // 追加added => commitで配列にデータをpush
            // 変更modified => commitで配列のデータをupdate
            // 削除delete => commitで配列からデータをdelete
            switch (snapshot.type) {
              case "added":
                commit("add", { room });
                break;

              case "modified":
                commit("update", { room });
                break;

              case "removed":
                commit("remove", { room });
                break;
            }
          });
        })
    );
  },

  clear({ commit }) {
    commit("clear");
  }
};
