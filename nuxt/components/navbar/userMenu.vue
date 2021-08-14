<template>
    <div>
        <v-skeleton-loader
            v-if="isLoadingUser"
            id="username-loader"
            type="list-item"
            min-width="200"
        />
        <span v-else>{{ userName }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { NuxtStrapiUser } from '~/types/strapi';

@Component
export default class extends Vue {
    isLoadingUser = true;

    async mounted (): Promise<void> {
        this.isLoadingUser = true;
        await this.$strapi.fetchUser();
        this.isLoadingUser = false;
    }

    get user (): NuxtStrapiUser | null {
        return this.$strapi.user;
    }

    get userName (): string | null {
        return this.user?.username;
    }
}
</script>

<style>
#username-loader .v-skeleton-loader__list-item {
    background: none
}
</style>
