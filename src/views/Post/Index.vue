<template>
  <div class="globalContainer ml-5">
    <v-leftnav/>
    <div id="contents">
      <section>
        <img
          class="contents-banner"
          src="../../assets/img/davichi_banner_wide.jpg"
          alt="davichi-banner">
      </section>
      <fixed-header :threshold="340">
        <section id="section-float">
          <div id="contents-float">
            <div class="row h-100 ml-3 p-2">
              <div
                class="btn-group btn-group-toggle p-1 col-sm-5"
                data-toggle="buttons">
                <button
                  type="button"
                  class="btn btn-sm btn-fb">
                <i class="far fa-thumbs-up mr-1 color-fb"/><span>좋아요</span></button>
                <button
                  type="button"
                  class="btn btn-sm btn-fb">
                <i class="fa fa-rss mr-1 color-fb"/><span>팔로잉</span></button>
                <button
                  type="button"
                  class="btn btn-sm btn-fb">
                <i class="fa fa-share mr-1"/><span>공유하기</span></button>
                <button
                  type="button"
                  class="btn btn-sm btn-fb">
                <i class="fa fa-ellipsis-h mr-1"/></button>
              </div>
              <div class="col d-flex p-1 mr-2 flex-row-reverse">
                <button
                  id="btn-fb-msg"
                  class="btn btn-sm">
                <i class="fab fa-facebook-messenger mr-2"/><span>메세지 보내기</span></button>
              </div>
            </div>
          </div>
        </section>
      </fixed-header>
      <section class="container pl-0 pr-0 mt-3">
        <div class="row pr-0 mr-0">
          <div
            id="contents-post"
            class="col-sm-7 ml-3 mr-0">
            <section>
              <div
                id="contents-post-header"
                class="row pl-3">
                <i class="fas fa-pencil-alt fa-1x pr-2"/><a class="small">게시물 만들기</a>
              </div>
              <div class="row pl-3 background-white">
                <div
                  id="post-content"
                  class="pt-3">
                  <a class="small">게시물을 작성하세요...</a>
                </div>
              </div>
              <div class="row pl-3 pr-3 background-white">
                <div
                  id="post-foo"
                  class="w-100">
                  <button class="btn mt-2 pt-0 h-50 mr-2">
                    <i class="fa fa-camera-retro mr-1"/><a class="small">사진/동영상</a>
                  </button>
                  <button class="btn mt-2 pt-0 h-50 mr-2">
                    <i class="fa fa-tags mr-1"/><a class="small">친구 태그하기</a>
                  </button>
                  <button class="btn mt-2 pt-0 h-50 mr-2">
                    <i class="fa fa-comments mr-1"/><a class="small">메세지 유도</a>
                  </button>
                  <button class="btn btn-sm mt-2 pt-0 h-50 mr-2">
                    <i class="fa fa-ellipsis-h mr-1"/>
                  </button>
                </div>
              </div>
            </section>
            <section class="mt-5">
              <div
                id="post"
                class="row background-white">
                <div
                  class="mt-3 col-2 post-header">
                  <img
                    src="../../assets/img/davichi_post_logo.jpg"
                    alt="davichi-logo">
                </div>
                <div
                  class="mt-3 pl-0 col-10 post-header">
                  <div class="">
                    <a
                      href="https://www.facebook.com/officialdavichi/"
                      class="color-fb small">Davichi 다비치</a>
                    <a class="small text-muted">님이 커버 사진을 업데이트했습니다.</a>
                  </div>
                  <div><a class="small text-muted">2월 21일</a></div>
                </div>
                <div class="col-12 pl-0 pr-0">
                  <article class="">
                    <img
                      src="../../assets/img/davichi_banner_wide.jpg"
                      class="w-100"
                      alt="post-img">
                  </article>
                </div>
                <div
                  id="post-line"
                  class="col-12 pl-0 pr-0">
                  <div class="row mt-2">
                    <div class="col-7 ml-3">
                      <i class="far fa-thumbs-up mr-1"/>
                      <a class="small text-muted">회원님, 외 3500명</a>
                    </div>
                    <div class="col-4 text-right">
                      <a class="small text-muted mr-1">댓글 3개</a>
                      <a class="small text-muted">공유 7회</a>
                    </div>
                  </div>
                  <div
                    class="row mb-2 mt-2">
                    <div class="col-3 ml-5">
                      <button
                        type="button"
                        class="btn btn-sm btn-link">
                        <i class="far fa-thumbs-up mr-1"/>
                        <a class="text-dark">좋아요</a>
                      </button>
                    </div>
                    <div class="col-3">
                      <button
                        type="button"
                        class="btn btn-sm btn-link">
                        <i class="fa fa-comment mr-1"/>
                        <a class="text-dark">댓글달기</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-12 pl-0 pr-0">
                  <div class="col-12 m-2 mb-4">
                    <input
                      v-model="message"
                      class="pl-2 small commentParentInput"
                      placeholder="댓글을 입력하세요."
                      type="text"
                      @keyup.enter.self.stop="addComment()">
                  </div>
                  <comment-parent
                    v-for="(value, idx) in commentList"
                    :key="idx + 'commentParent'"
                    :content="value"
                    :cid="Number(idx)"
                    class="col-12 mb-2"
                    type="parent"/>
                </div>
              </div>
            </section>
          </div>
          <div class="col-sm-4 ml-5 pr-0">
            <fixed-header :threshold="350">
              <div id="contents-right-float">
                <div class="contents-right-info w-100 mb-3 pb-3">
                  <div class="mb-3 p-2">
                    <a class="ml-2 font-weight-bold"> 커뮤니티</a>
                    <a class="pull-right small pr-3"> 모두 보기</a>
                  </div>
                  <div
                    v-for="(item, idx) in comuunityList"
                    :key="idx+'community'"
                    class="">
                    <div class="mt-1">
                      <i :class="[item.icon, 'ml-2', 'mr-2']"/>
                      <a class="small">{{ item.sentence }}</a>
                    </div>
                  </div>
                </div>
                <div class="contents-right-info w-100 mb-3 pb-3">
                  <div class="mb-3 p-2">
                    <a class="ml-2 font-weight-bold"> 정보</a>
                    <a class="pull-right small pr-3"> 모두 보기</a>
                  </div>
                  <div
                    v-for="(item, idx) in infoList"
                    :key="idx+'info'"
                    class="">
                    <div class="mt-1">
                      <i
                        :class="[item.icon, 'ml-3', 'mr-3']"
                        aria-hidden="true"/><a class="small">{{ item.sentence }}</a>
                    </div>
                  </div>
                </div>
                <div class="contents-right-info w-100 mb-3 pb-3">
                  <div class="mb-1 p-2">
                    <i
                      class="fab fa-facebook ml-2 color-fb mr-3 large"/>
                    <a class="ml-2 font-weight-bold"> 페이지 투명성</a>
                    <a class="pull-right small pr-3"> 더 보기</a>
                  </div>
                  <div class="row ml-2 mr-2">
                    <div class="xsmall text-muted">
                      Facebook은 회원님이 페이지의 목적을
                      더욱 분명하게 이해하실 수 있도록 관련 정보를 표시하고 있습니다. 콘텐츠를 관리하고 게시하는 사람들의 활동 정보를 확인해보세요.
                    </div>
                  </div>
                </div>
                <div class="contents-right-info w-100">
                  <div class="row mb-3 p-2">
                    <a class="col-sm ml-2 pl-3 small">
                      한국어 · English (US) · Tiếng Việt · Bahasa Indonesia · Español
                    </a>
                    <button class="col-sm-2 btn btn-sm pull-right small mr-3">+</button>
                  </div>
                </div>
              </div>
            </fixed-header>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import VLeftnav from '@/layouts/LeftNav.vue';
import CommentParent from '@/components/CommentParent.vue';
import FixedHeader from 'vue-fixed-header';

export default {
  /**
   * The name of the page.
   */
  name: 'PostIndex',
  components: {
    VLeftnav,
    CommentParent,
    FixedHeader,
  },
  data() {
    return {
      comuunityList: [
        { icon: 'fa fa-users', sentence: '친구들에게 페이지 좋아요를 요청해보세요' },
        { icon: 'far fa-thumbs-up', sentence: '160,918명이 좋아합니다' },
        { icon: 'fa fa-rss', sentence: '161,573명이 팔로우합니다' },
        { icon: 'fa fa-users', sentence: '박일권님이 좋아합니다' },
      ],
      infoList: [
        { icon: 'fab fa-facebook-messenger', sentence: '메세지 보내기' },
        { icon: 'fa fa-music', sentence: '음악가/밴드' },
        { icon: 'fas fa-pencil-alt', sentence: '정보 수정 제안' },
      ],
      commentList: [],
      message: '',
    };
  },
  computed: {
    comments() {
      return this.$store.state.comment.commentTable || {};
    },
    getIds() {
      return Object.keys(this.comments) || [];
    },
    getLastID() {
      const len = this.getIds.length;
      return len !== 0 ? this.getIds[len - 1] : 0;
    },
  },
  watch: {
    comments(newVal) {
      this.commentList = newVal;
    },
  },
  mounted() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$store.dispatch('comment/getCommentParent');
    },
    addComment() {
      const cid = Number(this.getLastID) + 1;
      console.log(cid);
      const tmpObject = {
        like: 0,
        like_status: false,
        sentence: this.message,
        reply_id: [],
      };
      this.$store.dispatch('comment/postComment', [cid, tmpObject])
        .then((response) => {
          console.log(response);
          this.getComments();
          this.message = '';
        });
    },
  },
};
</script>

<style scoped>

  .background-white {
    background-color:white;
  }
  .container {
    width: 780px;
  }
  #contents {
    padding-top: 43px;
    width: 100%;
    padding-left: 25%;
  }
  #contents-post {
    height: 155px;
    /* z-index: -1; */
  }
  #contents-post-header {
    background-color:rgb(245,246,247);
    height: 30px;
    align-content: center;
  }
  .contents-banner {
    width: 780px;
  }
  #contents-float {
    background-color: white;
    width: 780px;
    height: 56px;
    z-index: 200;
    border: 1px solid lightgrey;
  }
  #section-float.vue-fixed-header--isFixed {
    position: fixed;
    top: 46px;
    width: 100%;
    z-index: 500;
  }
  #contents-right-float.vue-fixed-header--isFixed {
    position: fixed;
    top: 108px;
    width: 252px;
  }
  .commentParentInput {
    background-color: rgb(233, 235, 238);
    border-radius: 10px;
    border: 0.5px solid lightgrey;
    width: 100%;
  }
  .contents-right-info {
    background-color: white;
  }
  #btn-fb-msg {
    background-color: #4267b2;
    font-size: 14px;
    height: 28px;
    padding: 0;
    visibility: visible;
    width: 288px;
    color: #fff;
    border: 0;
    border-radius: 2px;
  }
  .btn-fb {
    background-color: #f5f6f7;
    border-color: #ccd0d5;
    color: #4b4f56;
    border-radius: 2px;
    box-sizing: content-box;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    justify-content: center;
    padding: 0 8px;
    position: relative;
    text-align: center;
    text-shadow: none;
    vertical-align: middle;
  }
  .globalContainer {
    zoom: 1;
    width: 1012px !important;
    height: 100%;
    min-height: 150vh;
  }
  #post {
    border-radius: 5px;
  }
  #post > div.post-header {
    height: 60px;
  }
  #post > div.post-header > img {
    width:40px;
    border-radius:50%;
  }
  #post-content {
    height:70px;
  }
  #post-foo {
    height:53px; border-top:0.5px solid lightgrey;
  }

</style>
