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
                color="rgb(42, 42, 62, 0.8)"
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
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="username"
                                    label="Username"
                                    required
                                    outlined
                                    :rules="[v => !!v || 'Username is missing']"
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
    layout: 'login'
})
export default class extends Vue {
    @Ref('form') readonly form!: VForm;
    valid = false;
    username = '';
    password = '';
    showPassword = false;

    validateForm () {
        this.form.validate();
    }
}
</script>
