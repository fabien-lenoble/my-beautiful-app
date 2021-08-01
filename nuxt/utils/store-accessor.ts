import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import AuthModule from '~/store/AuthModule';

// eslint-disable-next-line import/no-mutable-exports
let AuthModuleStore: AuthModule;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initialiseStores (store: Store<any>): void {
    AuthModuleStore = getModule(AuthModule, store);
}

export { initialiseStores, AuthModuleStore };
