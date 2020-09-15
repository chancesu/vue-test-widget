<template>
  <div class="dashboard-wrap dashboard-team">

    <div class="dashboard-title">팀 사용량 업데이트 시각 <strong class="time-label">2020-01-30 08:20 AM</strong></div>

    <div class="jnd-admin-contents-item">
      <h3 class="item-title">
        멤버 활동 정보
        <!-- 대시보드 타이틀 툴팁 -->
        <div class="item-info jnd-tooltip-toggle">
          <i class="prefix icon-info-fill"></i>
          <span class="jnd-tooltip tooltip-black b-l">
            <span class="tooltip-desc">일별(DAU) 또는 월간(MAU)팀 멤버들의 활동 정보</span>
          </span>
        </div>
        <!-- 대시보드 타이틀 툴팁 --> 
        <a href="#none">세부정보</a>
      </h3>

      <div class="item-divider"></div>
      <ul class="mini-tab">
        <li class="active">
          <button type="button" class="tab-title">DAU</button>
        </li>
        <li>
          <button type="button" class="tab-title">MAU</button>
        </li>
      </ul>
      <!-- N: 무료 팀일 경우 'free-team' 클래스 추가 : line 차트 옵션 변경 -->
      <div class="chart-wrap" id="chart-area">
        <!-- jnd-connect-loading 위치 임시 -->
        <div class="big jnd-connect-loading-container">
          <div class="loading_bar"><span class="three-quarters-loader jnd-three-quarters-loader"></span></div>
        </div>
        <!-- // jnd-connect-loading 위치 임시 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  props: {
  }
}
</script>

<style lang="scss">

</style>