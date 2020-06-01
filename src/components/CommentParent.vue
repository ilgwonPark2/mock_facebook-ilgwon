<template>
  <div class="mb-3 pb-3">
    <div class="row pl-2">
      <div>
        <img
          class="commentSumbnail"
          src="../assets/img/hucci.jpg"
          alt="user Photo">
      </div>
      <div class="ml-2 p-1 pl-2 commentSentence">
        <i class="far fa-gem mr-2 small"/>
        <small class="xsmall text-muted">우수 팬</small>
        <br>
        <span class="small color-fb font-weight-bold">ilgwon Park</span>
        <a class="ml-1 small text-break">{{ content.sentence }}</a>
        <div class="pull-right">
          <button
            class="btn btn-sm btn-link mr-1"
            @click="show()">
            <span><i class="far fa-trash-alt xsmall ml-3"/></span>
          </button>
          <a
            v-if="content.like > 0"
            class="small pr-2">
            <i class="far fa-thumbs-up color-fb"/>
            {{ content.like }}</a>
        </div>
      </div>
    </div>
    <div class="row ml-3">
      <div class="col-1 m1-2">
        <button
          class="btn btn-sm btn-link"
          @click="like()">
          <a class="small">좋아요</a>
        </button>
      </div>
      <div class="col-1">
        <button
          class="btn btn-sm btn-link"
          @click="showChild()">
        <a class="small">답글달기</a></button>
      </div>
    </div>
    <div
      v-if="showChildStatus === false && replyCount > 0"
      class="row ml-5">
      <button
        class="btn btn-sm btn-link"
        @click="showChild()">
      <a class="small">댓글 {{ replyCount }}개</a></button>
    </div>
    <comment-child
      v-if="showChildStatus"
      :cid="cid"/>
    <b-modal
      :id="'modalRemove' + cid"
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
            @click="deleteComment()"
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
 * CommentParent Component
 * ============
 *
 * A Parent Comment component to be iterated
 */

import CommentChild from '@/components/CommentChild.vue';


export default {
  /**
   * The name of the component.
   */
  name: 'CommentParent',
  components: {
    CommentChild,
  },
  /**
   * The properties that the component accepts.
   */
  props: {
    cid: { type: Number, default: 0 },
    content: { type: Object, default: () => [] },
  },
  data() {
    return {
      showChildStatus: false,
    };
  },
  computed: {
    modalID() {
      return `modalRemove${this.cid}`;
    },
    replyCount() {
      return this.content.reply_id.length;
    },
  },
  methods: {
    deleteComment() {
      this.$store.dispatch('comment/deleteComment', { id: this.cid })
        .then((response) => {
          console.log(response);
          this.getComments();
        });
    },
    getComments() {
      this.$store.dispatch('comment/getCommentParent')
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showChild() {
      this.showChildStatus = !this.showChildStatus;
    },
    show() {
      this.$bvModal.show(this.modalID);
    },
    hide() {
      this.$bvModal.hide(this.modalID);
    },
    like() {
      const status = !this.content.like_status;
      this.$store.dispatch('comment/likeComment', [this.cid, status])
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
   width: max-content;
   max-width: 370px;
   text-overflow: hidden;
   border-radius: 10px;
 }
 .commentSumbnail {
   border-radius: 50%;
 }
</style>
