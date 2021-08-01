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

@Component({
    // middleware: 'auth'
})
export default class extends Vue {
    get user () {
        return this.$strapi.user;
    }

    get title () {
        const title = 'Neat';
        return `${title}${this.user ? ' - ' + this.user.username : ''}`;
    }
}
</script>
