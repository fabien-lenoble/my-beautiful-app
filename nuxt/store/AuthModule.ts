import { Module, VuexModule } from 'vuex-module-decorators';

@Module({
    name: 'AuthModule',
    stateFactory: true,
    namespaced: true
})
export default class AuthModule extends VuexModule {
}
