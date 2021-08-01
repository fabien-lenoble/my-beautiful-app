import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { Route } from 'vue-router';

@Module({
    name: 'AuthModule',
    stateFactory: true,
    namespaced: true
})
export default class AuthModule extends VuexModule {
    nextUrl: Route | null = null;

    @Mutation
    setNextUrl (nextUrl: Route) {
        this.nextUrl = nextUrl;
    }
}
