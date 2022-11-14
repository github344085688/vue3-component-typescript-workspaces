<template>
    <div class=" transition-5  login-moudle  " >
        <div class="login-moudle-shadows br-ra4 " :class="[isShowShadows?'shadows ':'shadows-no']"
        :style="{'height':routerViewHeight + 60 + 'px'}">
            <div class="d-flex media-t-4 mediaju-center-to-left">
                <img src="@/assets/img/portal/logon.svg" alt="">
            </div>
            <router-view v-slot="{ Component, route }" v-model="routerViewHeight">
                <transition name="fade" :init="routeChange(route.name)">
                    <keep-alive>
                        <component :is="Component" :key="route.path"/>
                    </keep-alive>
                </transition>
            </router-view>
        </div>
    </div>
</template>
