<template>
  <div class="navbar_fb">
    <nav class="container-fluid ml-0 h-100 mt-2">
      <div class="row ml-0">
        <div class="col-sm-1 mr-0 pr-0">
          <a class="pull-right">
            <img
              src="../assets/img/header_ico.png"
              class="navbar_ico"
              alt="">
          </a>
        </div>
        <div class="col-sm-5 ml-0">
          <div
            class="row pl-1"
            aria-label="Facebook"
            role="search">
            <form class="col-sm-10 pl-0 pr-0">
              <div>
                <input
                  type="text"
                  class="navbar_input"
                  name="q"
                  value=""
                  placeholder="검색">
              </div>
            </form>
            <form class="col-sm-2 pl-0" >
              <div class="">
                <button
                  class="navbar_serach_button">
                  <i class="fa fa-search"/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  /**
   * The name of the layout.
   */
  name: 'Header',

};
</script>

<style scoped>
 .navbar_fb {
   background-color: #4267b2;
   border-bottom: 1px solid #29487d;
   color: #fff;
   box-sizing: border-box;
   height: 43px;
   position: fixed;
   font-family: inherit;
   width: 100%;
   z-index: 100;
 }

 .navbar_ico {
   width: 25px;
 }

 .navbar_input {
   height: 25px;
   vertical-align:middle;
   line-height: 22px;
   padding: 2px 5px 2px 5px;
   text-shadow: none;
   color: #1d2129;
   font-family: inherit;
   box-sizing: border-box;
   width: 100%;
   outline: 1px solid rgba(0, 0, 0, 0);
   font-size: 11px;
   top: 0;
   border-radius: 3px 0px 0px 3px;
   border: none;
 }

 .navbar_serach_button {
   background: #f5f6f7;
   height: 25px;
   vertical-align: middle;
   line-height: 13px;
   padding: 2px 5px 2px 5px;
   color:  #4b4f56;
   font-family: inherit;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   width: 100%;
   outline: 1px solid rgba(0, 0, 0, 0);
   font-size: 13px;
   top: 0;
   border-radius: 0px 1px 1px 0px;
   border: none;
 }
</style>
