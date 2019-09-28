<template>
  <div class="zoom">
    <!-- 小图 -->
    <div class="smallbox" @mouseover="mouseOver" @mousemove="mouseMove" @mouseout="mouseOut">
      <img :src="smallSrc" alt />
      <div
        class="mask"
        :style="{
        width: '210px',
        height: '210px',
        opacity: .6,
        backgroundColor:
        'rgba(25, 122, 255, 0.5)'
        }"
      ></div>
    </div>
    <!-- 大图 -->
    <div class="bigbox">
      <div :style="{
        width: '430px',
        height: '430px'
      }">
        <img
          :src="bigSrc"
          :style="{
          width: '800px',
          height: '800px'
        }"
          alt
        />
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallSrc: String,
    bigSrc: String
  },
  methods: {
    mouseOver(e) {
      // const maskNode = document.getElementsByClassName('.mask')
      // this.maskNodeRect = maskNode.getBoundingClientRect()
      // console.log(this.maskNodeRect)
    },
    mouseMove(e) {
      const x = e.clientX,
        y = e.clientY;
      let maskX = x - 210 / 2,
        maskY = y - 210 / 2;
      maskX = maskX < 0 ? 0 : maskX;
      maskY = maskY < 0 ? 0 : maskY;
      const smallboxRect = document
        .querySelector(".smallbox img")
        .getBoundingClientRect();
      if (maskX + 210 >= smallboxRect.width) {
        maskX = smallboxRect.width - 210;
      }
      if (maskY + 210 >= smallboxRect.height) {
        maskY = smallboxRect.height - 210;
      }
      const mask = document.querySelector(".mask");
      mask.style.transform = `translate(${maskX}px, ${maskY}px)`;
      // (800 - 430)  / (430 - 210)
      const bigboxMove = document.querySelector(".bigbox div img");
      // debugger;
      bigboxMove.style.left = -maskX * ((800 - 430) / (430 - 210)) + "px";
      bigboxMove.style.top = -maskY * ((800 - 430) / (430 - 210)) + "px";
    },
    mouseOut(e) {}
  }
};
</script>

<style scoped>
.zoom {
  display: flex;
}
.smallbox {
  position: relative;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  cursor: move;
}
.bigbox {
  position: absolute;
}
.bigbox {
  position: relative;
  border: 1px solid #000;
  overflow: hidden;
}
.bigbox div img {
  position: absolute;
}
</style>