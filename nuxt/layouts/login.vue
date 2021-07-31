<template>
    <v-app
        ref="test"
        dark
    >
        <v-main>
            <v-container fill-height>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
    // mounted () {
    //     const src = (this as any).$refs.test.$el.style.backgroundImage;
    //     const url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
    //     const img = new Image();
    //     img.onload = function () {
    //         console.log('image loaded');
    //     };
    //     img.src = url;
    //     if (img.complete) {
    //         img.onload();
    //     }
    // }
}
</script>
<style lang="sass" scoped>
div[data-app='true']
    background: linear-gradient(135deg, #424242 0%, transparent 50%), linear-gradient(225deg, #424242 15%, transparent 40%), linear-gradient(315deg, #424242 0%, transparent 50%), linear-gradient(45deg, #424242 15%, transparent 40%)
    background-color: #1976D2
html
    overflow-y: hidden!important
body
    overflow-y: hidden!important
</style>
