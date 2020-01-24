import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { TabBarToolbarRegistry } from "@theia/core/lib/browser/shell/tab-bar-toolbar";
import { FileNavigatorContribution } from '@theia/navigator/lib/browser/navigator-contribution';
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';

// import { FileNavigatorCommands } from '@theia/navigator/lib/browser/navigator-contribution';

export const CalpvinTheiaCustomCommand = {
    id: 'CalpvinTheiaCustom.command',
    label: "Shows a message"
};

@injectable()
export class CalpvinTheiaCustomCommandContribution implements CommandContribution {

    @inject(FileSystem)
    protected readonly fileSystem: FileSystem;

    // @inject(SourceTreeWidget)
    // protected readonly sourceTreeWidget: SourceTreeWidget;

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(CalpvinTheiaCustomCommand, {
            execute: async () => {
                this.messageService.info('Hello, Andrey!');


            }
        });
    }
}

@injectable()
export class CalpvinTheiaCustomMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: CalpvinTheiaCustomCommand.id,
            label: 'Say Hello'
        });
    }
}

@injectable()
export class CalpvinTheiaCustomFileNavigatorContribution extends FileNavigatorContribution implements FileNavigatorContribution {
    async registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void> {
        // const result = super.registerToolbarItems(toolbarRegistry);

        // toolbarRegistry.registerItem({
        //     id: FileNavigatorCommands.COLLAPSE_ALL.id,
        //     command: FileNavigatorCommands.COLLAPSE_ALL.id,
        //     tooltip: 'Collapse OMG!!!!!',
        //     priority: 2,
        // });

        // return result;
    }
}
