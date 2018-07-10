<template>
    <div class="listWrap">
        <ul>
            <router-link to="/list/dell" tag="li">戴尔</router-link>
            <router-link to="/list/huawei" tag="li">华为</router-link>
        </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>

</style>
