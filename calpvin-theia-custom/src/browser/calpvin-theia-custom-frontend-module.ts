/**
 * Generated using theia-extension-generator
 */

import { CalpvinTheiaCustomCommandContribution, CalpvinTheiaCustomMenuContribution, CalpvinTheiaCustomFileNavigatorContribution} from './calpvin-theia-custom-contribution';
import {
    CommandContribution,
    MenuContribution    
} from "@theia/core/lib/common";

import {bindViewContribution} from '@theia/core/lib/browser';

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(CalpvinTheiaCustomCommandContribution);
    bind(MenuContribution).to(CalpvinTheiaCustomMenuContribution);
    bindViewContribution(bind, CalpvinTheiaCustomFileNavigatorContribution);
});
