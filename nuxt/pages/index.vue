<template>
    <v-row
        justify="center"
        align="center"
    >
        <v-col
            cols="12"
            sm="8"
            md="6"
        >
            <v-card class="logo py-4 d-flex justify-center">
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-btn
                                color="secondary"
                                @click="click"
                            >
                                click me
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
    async click (): Promise<void> {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const users = await (this as any).$strapi.$songs.find();
            console.log(users);
        } catch (error) {
            console.error(error);
        }
    }
}
</script>
