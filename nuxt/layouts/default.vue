<template>
    <v-app dark>
        <v-app-bar
            fixed
            app
        >
            <v-toolbar-title v-text="title" />
        </v-app-bar>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

class VueWithStrapi extends Vue {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $strapi: any;
}

@Component({
    middleware: 'auth'
})
export default class extends VueWithStrapi {
    title = 'Neat';

    get user () {
        return this.$strapi.user;
    }
}
</script>
