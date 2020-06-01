/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { ALTER, PUSH, POP, LIKE_COMMENT, LIKE_REPLY } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [ALTER](state, args) {
    state[args.path] = args.data;
  },

  [PUSH](state, args) {
    state.commentTable[args.path].reply_id.push(args.data);
  },

  [POP](state, args) {
    const replyList = state.commentTable[args.path].reply_id;
    const idx = replyList.findIndex(item => Number(item) === args.data);
    replyList.splice(idx, 1);
  },

  [LIKE_COMMENT](state, args) {
    const id = Number(args.path);
    const status = args.data;
    const commentParent = state.commentTable[id];
    commentParent.like_status = status;
    if (status) {
      commentParent.like += 1;
    } else {
      commentParent.like -= 1;
    }
  },

  [LIKE_REPLY](state, args) {
    const id = Number(args.path);
    const rid = Number(args.rid);
    const status = args.data;
    const commentReply = state.childTable[id][rid];
    commentReply.like_status = status;
    if (status) {
      commentReply.like += 1;
    } else {
      commentReply.like -= 1;
    }
  },
};
