<template>
  <!-- 热点直播 -->
  <div class="headHotspot">
    <div class="hotspot_box">
      <div
        v-for="(item, index) in hotspotData"
        :key="index"
        class="hotspot_box_bigImg"
      >
        <img
          v-if="item.roomCoverUrl == ''"
          class="bigimg"
          src="@/assets/images/af2549af416b99208b9d2c32233f111.png"
          alt=""
        >
        <img v-else class="bigimg" :src="item.roomCoverUrl" alt="">
        <!-- 主播名字 及 人气 -->
        <div class="hotspot_box_bigImg_title">
          <img src="@/assets/images/me.png" alt="">
          <span>{{ item.anchorName }}</span>
          <img src="@/assets/images/popularity.png" alt="">
          <span>{{ item.numberOfPeople }}</span>
        </div>
        <!-- 内容 -->
        <div class="hotspot_box_bigImg_content">
          <p>{{ item.liveRomeName }}</p>
        </div>
      </div>
      <div class="hotspot_box_littleImg">
        <div
          v-for="(item, index) in hotspotDatas"
          :key="index"
          class="hotspot_box_littleImg_item"
        >
          <img
            v-if="item.roomCoverUrl == ''"
            class="bigimg"
            src="@/assets/images/af2549af416b99208b9d2c32233f111.png"
            alt=""
          >
          <img
            v-else
            class="bigimg"
            :src="item.roomCoverUrl"
            alt=""
          >
          <div class="little_title">
            <img src="@/assets/images/me.png" alt="">
            <span>{{ item.anchorName }}</span>
            <img src="@/assets/images/popularity.png" alt="">
            <span>{{ item.numberOfPeople }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chartQqueryHotLive } from '@/api/monitoringReally'
export default {
  name: 'HeadHotspot',
  components: {},
  props: {},
  data() {
    return {
      hotspotData: [],
      hotspotDatas: []
    }
  },
  created() {
    this.createdData()
  },
  mounted() {
    // setInterval(this.createdData, 1000);
  },
  methods: {
    createdData() {
      (this.hotspotData = []), (this.hotspotData = [])
      chartQqueryHotLive(this.baseUrl).then((res) => {
        res.data.forEach((item, index) => {
          if (index == 0) {
            this.hotspotData.push(item)
          } else {
            this.hotspotDatas.push(item)
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
// n内容
.hotspot_box {
  display: flex;
  justify-content: space-around;
  .hotspot_box_bigImg {
    width: 59%;
    height: 20.5rem;
    background-color: rgba(255, 255, 255, 100);
    border: 1px solid rgba(117, 101, 255, 100);
    overflow: hidden;
    position: relative;
    // 主播名字  人气
    .hotspot_box_bigImg_title {
      position: absolute;
      left: 0.5rem;
      bottom: 3rem;
      span {
        vertical-align: middle;
        margin-right: 1rem;
        font-size: 0.8rem;
      }
      img {
        vertical-align: middle;
      }
    }
    // 内容
    .hotspot_box_bigImg_content {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 3rem;
      line-height: 1rem;
      background-color: rgba(33, 33, 33, 16);
      opacity: 0.5;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 100);
      p {
        width: 100%;
        overflow: hidden;
        color: #fff;
        opacity: 1;
      }
    }
  }
  // 小图
  .hotspot_box_littleImg {
    width: 40%;
    height: 20.5rem;
    background-color: rgba(255, 255, 255, 100);
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
    .hotspot_box_littleImg_item {
      width: 49%;
      height: 6.5rem;
      border: 1px solid rgba(117, 101, 255, 100);
      margin: 0 0 0 0;
      position: relative;
      .little_title {
        width: 100%;
        position: absolute;
        bottom: 0rem;
        span {
          vertical-align: middle;
          font-size: 0.6rem;
          color: rgba(110, 110, 110, 100);
        }
        img {
          vertical-align: middle;
        }
      }
    }
  }
}
.headbar_bottom {
  width: 100%;
  height: 45%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
  margin-top: 1.3rem;
  // 有害比例
  .ratio {
    flex: 3;
  }
  // 有害总量
  .gross {
    flex: 3;
    margin: 0rem 0.3rem 0rem 0rem;
  }
  // 弹幕
  .barrage {
    flex: 4;
    margin: 0rem 0rem 0 0.7rem;
  }
  // 评论
  .comment {
    flex: 4;
  }
}

.item {
  height: 25rem;
  line-height: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(156, 140, 255, 40);
  border: 1px solid rgba(243, 243, 243, 100);
  margin: 0.7rem 1rem 0 1rem;
}
.items {
  height: 25rem;
  line-height: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(156, 140, 255, 40);
  border: 1px solid rgba(243, 243, 243, 100);
  margin: 0rem 1rem 1rem 1rem;
}
.item_title {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  color: rgba(16, 16, 16, 100);
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
}
.bigimg {
  width: 100%;
  height: 100%;
}
</style>
