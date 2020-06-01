/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */
import * as types from './mutation-types';

function getCommentTable(state) {
  return JSON.parse(JSON.stringify(state.commentTable));
}

function getChildTable(state) {
  return JSON.parse(JSON.stringify(state.childTable));
}

export const likeComment = ({ commit, state }, args) => {
  try {
    commit(types.LIKE_COMMENT, { path: args[0], data: args[1] });
    const commentParent = getCommentTable(state);
    localStorage.CommentTable = JSON.stringify(commentParent);
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const likeReply = ({ commit, state }, args) => {
  try {
    commit(types.LIKE_REPLY, { path: args[0], rid: args[1], data: args[2] });
    const commentReply = getChildTable(state);
    localStorage.ReplyTable = JSON.stringify(commentReply);
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const getCommentParent = ({ commit }) => {
  try {
    const commentParent = JSON.parse(localStorage.CommentTable) || [];
    commit(types.ALTER, { path: 'commentTable', data: commentParent });
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const getCommentChild = ({ commit }) => {
  try {
    const commentReply = JSON.parse(localStorage.ReplyTable) || [];
    commit(types.ALTER, { path: 'childTable', data: commentReply });
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const postComment = ({ state }, args) => {
  try {
    const commentParent = getCommentTable(state);
    const id = args[0];
    commentParent[id] = args[1];
    localStorage.CommentTable = JSON.stringify(commentParent);
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const replyComment = ({ commit, state }, args) => {
  try {
    const parentID = args.pid;
    const childID = args.id;
    const content = args.content;

    const commentReply = getChildTable(state);
    if (commentReply[parentID] === undefined) {
      commentReply[parentID] = {};
    }
    commentReply[parentID][childID] = content;
    localStorage.ReplyTable = JSON.stringify(commentReply);

    commit(types.PUSH, { path: parentID, data: childID });
    localStorage.CommentTable = JSON.stringify(state.commentTable);
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const deleteReply = ({ commit, state }, args) => {
  try {
    const parentID = args.pid;
    const childID = args.id;

    const commentReply = JSON.parse(JSON.stringify(state.childTable));
    if (commentReply[parentID] === undefined) {
      commentReply[parentID] = {};
    }
    delete commentReply[parentID][childID];
    localStorage.ReplyTable = JSON.stringify(commentReply);

    commit(types.POP, { path: parentID, data: childID });
    localStorage.CommentTable = JSON.stringify(state.commentTable);
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export const deleteComment = ({ state }, args) => {
  try {
    const commentParent = state.commentTable;
    delete commentParent[args.id];
    localStorage.CommentTable = JSON.stringify(commentParent);

    const commentChild = state.childTable;
    delete commentChild[args.id];
    localStorage.ReplyTable = JSON.stringify(commentChild);
    return { status: 'success' };
  } catch (e) {
    return { status: 'error' };
  }
};

export default {
  likeComment,
  likeReply,
  deleteComment,
  deleteReply,
  getCommentParent,
  getCommentChild,
  postComment,
  replyComment,
};
