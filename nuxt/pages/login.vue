<template>
    <v-row justify="center">
        <v-col
            justify="center"
            class="d-flex"
            cols="6"
        >
            <v-card
                height="450"
                width="100%"
            >
                <v-card-text
                    class="justify-center"
                    style="height: 100%"
                >
                    <v-row
                        justify="center"
                        style="height: 100%"
                    >
                        <v-col
                            cols="12"
                            class="text-h4 align-self-center"
                            align="center"
                        >
                            log in
                        </v-col>
                        <v-col
                            class="align-self-end"
                        >
                            <div
                                v-show="showLoginError"
                                class="pa-2 error--text"
                            >
                                login error
                            </div>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="identifier"
                                    label="Identifier"
                                    required
                                    outlined
                                    :rules="[v => !!v || 'Identifier is missing']"
                                    @keydown.enter="validateForm"
                                />
                                <v-text-field
                                    v-model="password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'"
                                    label="Password"
                                    class="input-group--focused"
                                    required
                                    outlined
                                    :rules="[v => !!v || 'Password is missing']"
                                    @click:append="showPassword = !showPassword"
                                    @keydown.enter="validateForm"
                                />
                                <v-btn
                                    :disabled="!valid"
                                    color="primary"
                                    block
                                    class="mr-4"
                                    @click="validateForm"
                                >
                                    Log in
                                </v-btn>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import { VForm } from 'types';

@Component({
    // layout: 'login'
})
export default class extends Vue {
    @Ref('form') readonly form!: VForm;
    valid = false;
    identifier = '';
    password = '';
    showPassword = false;
    showLoginError = false;

    async validateForm (): Promise<void> {
        this.form.validate();
        if (this.valid) {
            await this.login(this.identifier, this.password);
            if (this.$strapi.user) {
                const nextUrl = this.$route.query.nextUrl as string | null;
                this.$router.push(nextUrl ? decodeURIComponent(nextUrl) : { name: 'index' });
            } else {
                this.form.resetValidation();
                this.password = '';
            }
        }
    }

    async login (identifier: string, password: string): Promise<void> {
        try {
            const token = (await this.$strapi.login({ identifier, password })).jwt;
            this.$strapi.setToken(token);
        } catch (error) {
            this.showLoginError = true;
        }
    }
}
</script>
