<template>
    <div class="cn-margin_80 content_box">
        <div class="pb40 pt40 feature-collection-box">
            <h3 class="feature-collection-title ">分组3.0</h3>
            <div class="feature-collection-grid W100">
                <div v-for="(item,index) in 10"
                     :key="index"
                     class="goods-prev-container " :class="{'goods-prev-container--strong':(index==1)}">
                    <div class="cCzjsz">
                        <div class="feature-collection-grid-item">
                            <a>
                                <div class="grid-info-wrap">
                                    <div class="grid-info-image ">
                                        <div class="default-square-img">
                                            <div class="default-img-box"
                                                 style="position: absolute;top: 0px;">
                                                <i class="iconfont default-img">&#xe8ba;</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.content_box {
  background: #fff;
  .feature-collection-box {
    .feature-collection-title {
      font-family: Helvetica;
      font-style: normal;
      font-weight: 700;
      color: #323233;
      margin-bottom: 40px;
      word-break: break-word;
      font-size: 24px;
      line-height: 32px;
    }
    .feature-collection-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(auto, 1fr));
      gap: 24px;
      .goods-prev-container {
        .cCzjsz {
          height: 100%;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          position: relative;
          .feature-collection-grid-item {
            --text_line_limit: auto;
            position: relative;
            a {
              pointer-events: auto !important;
              .grid-info-wrap {
                width: 100%;
                position: relative;
                .grid-info-image {
                  background-color: transparent;
                  width: 100%;
                  position: relative;
                  display: flex;
                  -webkit-box-align: center;
                  align-items: center;
                  -webkit-box-pack: center;
                  justify-content: center;
                  border-radius: var(--border_radius_pd_card);
                  overflow: hidden;
                  .default-square-img {
                    background-color: rgb(255, 255, 255);
                    width: 100%;
                    height: 0px;
                    padding-top: 100%;
                    position: relative;
                    .default-img-box {
                      width: 100%;
                      height: 100%;
                      -webkit-box-pack: center;
                      justify-content: center;
                      -webkit-box-align: center;
                      align-items: center;
                      display: flex;
                      border: rgba(26, 26, 27, 0.08);
                      background: rgba(26, 26, 27, 0.06);
                      box-sizing: border-box;
                      flex-direction: column;
                      .default-img {
                        font-size: 80px;
                        color: #e0e0e0;
                        font-weight: 100;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .goods-prev-container--strong {
        grid-area: span 2 / span 2 / auto / auto;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .cn-margin_80 {
    width: 100%;
    padding: 0px 80px;
    box-sizing: border-box;
  }
}
</style>