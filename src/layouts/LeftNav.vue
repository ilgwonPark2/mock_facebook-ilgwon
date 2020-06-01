<template>
  <div class="container-fluid leftNav">
    <div class="container-leftNav mt-1">
      <img
        id="leftNavImg"
        class="ml-2 mt-2"
        src="../assets/img/davichi_banner.jpg"
        alt="davichi">
    </div>
    <div class="ml-2 mt-3 lefNav2nd">
      <h1 class="leftNavh1">
        <a href="https://www.facebook.com/officialdavichi/">
          <span>Davichi 다비치</span>
        </a>
        <a
          href="https://www.facebook.com/officialdavichi/"
          class="ml-1">
          <span><i
            class="fa fa-check-circle check-circle"
            aria-hidden="true"/></span>
        </a>
      </h1>
      <div>
        <a
          href="https://www.facebook.com/officialdavichi/"
          class="leftNavLink">@officialdavichi</a>
      </div>
    </div>
    <div class="ml-2 mt-3">
      <div
        v-for="item in leftNavItem"
        :key="item.tab"
        :class="[item.active ? 'leftItem-active' : '', 'p-1', 'mt-1', 'w-100', 'leftNavMenu']">
        <a
          :href="item.tabLink"
          class="pl-1"> {{ item.tab }} </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  /**
   * The name of the layout.
   */
  name: 'LeftNav',

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      leftNavItem: [
        { tab: '홈', active: true, tabLink: 'https://www.facebook.com/officialdavichi/?ref=page_internal' },
        { tab: '정보', active: false, tabLink: 'https://www.facebook.com/officialdavichi/about/?ref=page_internal' },
        { tab: '사진', active: false, tabLink: 'https://www.facebook.com/officialdavichi/photos/?ref=page_internal' },
        { tab: '동영상', active: false, tabLink: 'https://www.facebook.com/officialdavichi/videos/?ref=page_internal' },
        { tab: '이벤트', active: false, tabLink: 'https://www.facebook.com/officialdavichi/events/?ref=page_internal' },
        { tab: '게시물', active: false, tabLink: 'https://www.facebook.com/officialdavichi/posts/?ref=page_internal' },
        { tab: '커뮤니티', active: false, tabLink: 'https://www.facebook.com/officialdavichi/community/?ref=page_internal' },
        { tab: 'Twitter', active: false, tabLink: 'https://www.facebook.com/officialdavichi/app/294627540601598/?ref=page_internal' },
      ],
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
  },
};
</script>

<style scoped>
 .leftNav {
   top: 43px;
   width: 15%;
   height: 100%;
   position: fixed;
 }

 .leftNav2nd {
   margin-bottom: 16px;
   padding-top: 12px;
 }

 .leftNavh1 {
   display: inherit;
   font-size: 20px;
   font-weight: normal;
   vertical-align: middle;
 }

 .conatiner-leftNav {
   padding: 12px 0;
 }

 .check-circle {
   color: rgb(91, 147, 252);
 }

 .leftNavLink {
   color: #90949c;
   font-size: 13px;
   font-weight: 600;
   line-height: 18px;
   margin-top: 4px;
   word-wrap: break-word;
 }
 .leftItem-active {
   background-color: rgb(245, 246, 247);
 }

 .leftNavMenu {
   height: 30px;
   align-items: center;
   color: inherit;
   display: flex;
   flex: 1 1 0px;
   overflow: hidden;
   padding: 5px 4px 5px 0;
 }
 #leftNavImg {
   width: 172px;
   height: 172px;
   border-radius: 50%;
 }
</style>
