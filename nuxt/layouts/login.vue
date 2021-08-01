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

<style lang="sass" scoped>
div[data-app='true']
    background: linear-gradient(160deg, #888 0%, transparent 50%), linear-gradient(225deg, #888 15%, transparent 40%), linear-gradient(290deg, #888 0%, transparent 50%), linear-gradient(45deg, #888 15%, transparent 40%)
    background-color: rgba(0, 3, 194, 0.73)
</style>
