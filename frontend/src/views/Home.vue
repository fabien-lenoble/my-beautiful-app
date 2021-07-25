<template>
    <h1>Hello, Vue 3!</h1>
    <h2>Name: {{ name }}</h2>
    <p>{{ now }}</p>
    <button @click="inc()">
        Clicked {{ countState.count }} times.
    </button>
</template>

<script lang="ts">
import { Ref, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { clickStore } from "@/store/click-store";

export default {
    setup() {
        onMounted(() => {
            setInterval(() => {
                updateDateTime();
            }, 1000);
        });

        const name = ref('Fab');
        const now: Ref<string> = ref(new Date().toString());
        function updateDateTime() {
            now.value = new Date().toString();
        }
        const inc = () => {
            clickStore.incrementCount();
        };
        return {
            name,
            now,
            updateDateTime,
            countState: clickStore.getState(),
            inc,
        };
    },
};
</script>
