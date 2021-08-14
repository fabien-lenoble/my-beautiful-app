<template>
    <v-app-bar
        fixed
        app
    >
        <v-toolbar-title>
            <v-card
                :to="{ name: 'index' }"
                exact
            >
                <v-card-text>
                    {{ title }}
                </v-card-text>
            </v-card>
        </v-toolbar-title>
        <v-spacer />
        <user-menu />
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import UserMenu from './userMenu.vue';

@Component({
    components: {
        UserMenu
    }
})
export default class extends Vue {
    title = 'Family Recipes';
}
</script>
