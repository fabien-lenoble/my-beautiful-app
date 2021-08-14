<template>
    <v-app dark>
        <navbar />
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Navbar from '~/components/navbar/index.vue';

@Component({
    components: {
        Navbar
    }
})
export default class extends Vue {
}
</script>
