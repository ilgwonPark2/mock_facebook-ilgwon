<template>
  <div class="ml-5">
    <div class="row">
      <div class="col-12 mb-4">
        <img
          class="commentSumbnailSmall"
          src="../assets/img/hucci.jpg"
          alt="user Photo">
        <input
          v-model="message"
          :ref="getRef"
          class="ml-2 pl-2 small commentChildInput"
          placeholder="댓글을 입력하세요."
          type="text"
          @keyup.enter.stop.self="addChildComment()">
      </div>
    </div>
    <div
      v-for="(child, idx) in commentChildList"
      :key="'childComment'+cid+idx">
      <div class="row pl-3">
        <div>
          <img
            class="commentSumbnailSmall"
            src="../assets/img/hucci.jpg"
            alt="user Photo">
        </div>
        <div class="ml-2 p-1 pl-2 commentSentence">
          <span class="small color-fb font-weight-bold">ilgwon Park</span>
          <a class="ml-1 small text-break">{{ child.sentence }}</a>
          <div class="pull-right">
            <button
              class="btn btn-sm btn-link mr-1"
              @click="show(idx)">
              <span><i class="far fa-trash-alt xsmall ml-3"/></span>
            </button>
            <a
              v-if="child.like > 0"
              class="small pr-2">
              <i class="far fa-thumbs-up color-fb"/>
              {{ child.like }}</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2 ml-4 pr-0">
          <button
            class="btn btn-sm btn-link pr-0"
            @click="like(idx)">
            <a class="small">좋아요</a>
          </button>
        </div>
        <div class="col-2 pl-0">
          <button
            class="btn btn-sm btn-link pl-0"
            @click="focus()"
          ><a class="small">답글달기</a></button>
        </div>
      </div>
    </div>
    <b-modal
      :id="modalID"
      class="modal fade"
      centered
      title="삭제"
      size="sm">
      <p class="my-4">이 댓글을 삭제하시겠어요?</p>
      <template v-slot:modal-footer>
        <div class="row w-100 justify-content-end">
          <b-button
            size="sm"
            class="mr-3 bg-light text-dark"
            @click="hide()"
          >
            취소
          </b-button>
          <b-button
            variant="primary"
            size="sm"
            class="mr-2"
            @click="deleteChildComment()"
          >
            삭제
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
/* ============
 * CommentChild Component
 * ============
 *
 * A Child Comment component to be iterated
 */


export default {
  /**
   * The name of the component.
   */
  name: 'CommentChild',
  /**
   * The properties that the component accepts.
   */
  props: {
    cid: { type: Number, default: 0 },
  },
  data() {
    return {
      commentChildList: [],
      message: '',
      target: 0,
    };
  },
  computed: {
    commentChilds() {
      return this.$store.state.comment.childTable[this.cid] || {};
    },
    getIds() {
      return Object.keys(this.commentChilds) || [];
    },
    getLastID() {
      const len = this.getIds.length;
      return len !== 0 ? this.getIds[len - 1] : 0;
    },
    getRef() {
      return `childInput${this.cid}`;
    },
    modalID() {
      return `modalRemoveReply${this.cid}${this.getLastID}`;
    },
  },
  watch: {
    commentChilds(newVal) {
      this.commentChildList = newVal;
    },
  },
  mounted() {
    this.getComments();
  },
  methods: {
    addChildComment() {
      const cidChild = Number(this.getLastID) + 1;
      const tmpObject = {
        like: 0,
        like_status: false,
        sentence: this.message,
      };
      this.$store.dispatch('comment/replyComment', { pid: this.cid, id: cidChild, content: tmpObject })
        .then((response) => {
          console.log(response);
          this.getComments();
          this.message = '';
        });
    },
    deleteChildComment() {
      this.$store.dispatch('comment/deleteReply', { pid: this.cid, id: this.target })
        .then((response) => {
          console.log(response);
          this.hide();
          this.getComments();
        });
    },
    focus() {
      this.$nextTick(() => this.$refs[this.getRef].focus());
    },
    getComments() {
      this.$store.dispatch('comment/getCommentChild')
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    show(idx) {
      this.target = idx;
      this.$bvModal.show(this.modalID);
    },
    hide() {
      this.$bvModal.hide(this.modalID);
    },
    like(idx) {
      const status = !this.commentChildList[idx].like_status;
      this.$store.dispatch('comment/likeReply', [this.cid, idx, status])
        .then((response) => {
          if (response.status === 'success') {
            this.getComments();
          }
        });
    },
  },
};
</script>

<style scoped>
 .commentSentence {
   background-color: rgb(233, 235, 238);
   width: max-childs;
   max-width: 370px;
   text-overflow: hidden;
   border-radius: 10px;
 }
 .commentSumbnailSmall {
   border-radius: 50%;
   width: 20px;
 }
 .commentChildInput {
   background-color: rgb(233, 235, 238);
   border-radius: 10px;
   border: 0.5px solid lightgrey;
   width: 80%;
 }
</style>
