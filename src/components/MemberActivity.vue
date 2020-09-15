<template>
    <div class="jnd-admin-contents-item">
    <h3 class="item-title">{{dashboardMemberUsag}}
    <div class="item-info jnd-tooltip-toggle">
        <i class="prefix icon-info-fill"></i>
        <span class="jnd-tooltip tooltip-black b-l">
        <!-- <span class="tooltip-desc" ng-bind-html="activeTooltip"></span> -->
        </span>
    </div>
    <!-- <a href="" ng-show="!chart.isFree">{{::'@dashboard-data-detail' | translate}}</a> -->
    </h3>
    <div class="item-divider"></div>
    <ul class="mini-tab">
    <li ng-class="{'active': currentActUsage === 'day'}">
        <!-- <button type="button" class="tab-title" ng-click="onClickUserActivity('day')">{{::'@dashboard-dau' | translate}}</button> -->
    </li>
    <li ng-class="{'active': currentActUsage === 'month'}">
        <!-- <button type="button" class="tab-title" ng-click="onClickUserActivity('month')">{{::'@dashboard-mau' | translate}}</button> -->
    </li>
    </ul>
    <div class="chart-wrap" 
        ng-class="{'free-team': chart.isFree === true}"
        id="chart-area">
    </div>
    </div>
</template>

<script>
export default {
  name: 'MemberActivity',
  props: {
    dashboardMemberUsag: { type: String } 
  },
  watch: {
      dashboardMemberUsag: {
          immediate: true,
          handler(value, old) {
              debugger
              console.log('ccc ', value, old)
          }
      }
  }
}
</script>