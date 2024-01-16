// @ts-nocheck
/* eslint-disable */
import { createElement, useMemo, type ComponentType } from "react";
import { useTranslation, Trans, type TransProps } from "react-i18next";
type TypedTransProps<Value, Components> = Omit<TransProps<string>, "values" | "ns" | "i18nKey"> & ({} extends Value ? {} : {
    values: Value;
}) & {
    components: Components;
};
function createProxy(initValue: (key: string) => any) {
    function define(key: string) {
        const value = initValue(key);
        Object.defineProperty(container, key, { value, configurable: true });
        return value;
    }
    const container = {
        __proto__: new Proxy({ __proto__: null }, {
            get(_, key) {
                if (typeof key === "symbol")
                    return undefined;
                return define(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: () => null,
        setPrototypeOf: (_, v) => v === null,
        getOwnPropertyDescriptor: (_, key) => {
            if (typeof key === "symbol")
                return undefined;
            if (!(key in container))
                define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
export function useAFFiNEI18N(): {
    /**
      * `404 - Page Not Found`
      */
    ["404 - Page Not Found"](): string;
    /**
      * `Back to My Content`
      */
    ["404.back"](): string;
    /**
      * `Sorry, you do not have access or this content does not exist...`
      */
    ["404.hint"](): string;
    /**
      * `Sign in to another account`
      */
    ["404.signOut"](): string;
    /**
      * `AFFiNE Cloud`
      */
    ["AFFiNE Cloud"](): string;
    /**
      * `AFFiNE Community`
      */
    ["AFFiNE Community"](): string;
    /**
      * `About AFFiNE`
      */
    ["About AFFiNE"](): string;
    /**
      * `Access level`
      */
    ["Access level"](): string;
    /**
      * `Actions`
      */
    Actions(): string;
    /**
      * `Add Filter`
      */
    ["Add Filter"](): string;
    /**
      * `Add Workspace`
      */
    ["Add Workspace"](): string;
    /**
      * `Select the existed database file`
      */
    ["Add Workspace Hint"](): string;
    /**
      * `Add a subpage inside`
      */
    ["Add a subpage inside"](): string;
    /**
      * `Add to Favourites`
      */
    ["Add to Favorites"](): string;
    /**
      * `Add to favourites`
      */
    ["Add to favorites"](): string;
    /**
      * `Added Successfully`
      */
    ["Added Successfully"](): string;
    /**
      * `Added to Favourites`
      */
    ["Added to Favorites"](): string;
    /**
      * `All changes are saved locally`
      */
    ["All changes are saved locally"](): string;
    /**
      * `All data has been stored in the cloud. `
      */
    ["All data has been stored in the cloud"](): string;
    /**
      * `All pages`
      */
    ["All pages"](): string;
    /**
      * `App Version`
      */
    ["App Version"](): string;
    /**
      * `Appearance Settings`
      */
    ["Appearance Settings"](): string;
    /**
      * `Append to Daily Note`
      */
    ["Append to Daily Note"](): string;
    /**
      * `Available Offline`
      */
    ["Available Offline"](): string;
    /**
      * `Back Home`
      */
    ["Back Home"](): string;
    /**
      * `Back to Quick Search`
      */
    ["Back to Quick Search"](): string;
    /**
      * `Back to all`
      */
    ["Back to all"](): string;
    /**
      * `Body text`
      */
    ["Body text"](): string;
    /**
      * `Bold`
      */
    Bold(): string;
    /**
      * `Cancel`
      */
    Cancel(): string;
    /**
      * `New avatar will be shown for everyone.`
      */
    ["Change avatar hint"](): string;
    /**
      * `New name will be shown for everyone.`
      */
    ["Change workspace name hint"](): string;
    /**
      * `View the AFFiNE Changelog.`
      */
    ["Changelog description"](): string;
    /**
      * `Check Keyboard Shortcuts quickly`
      */
    ["Check Keyboard Shortcuts quickly"](): string;
    /**
      * `Check Our Docs`
      */
    ["Check Our Docs"](): string;
    /**
      * `Check for updates`
      */
    ["Check for updates"](): string;
    /**
      * `Check for updates automatically`
      */
    ["Check for updates automatically"](): string;
    /**
      * `Choose your font style`
      */
    ["Choose your font style"](): string;
    /**
      * `Click to replace photo`
      */
    ["Click to replace photo"](): string;
    /**
      * `Client Border Style`
      */
    ["Client Border Style"](): string;
    /**
      * `Cloud Workspace`
      */
    ["Cloud Workspace"](): string;
    /**
      * `Code block`
      */
    ["Code block"](): string;
    /**
      * `Collaboration`
      */
    Collaboration(): string;
    /**
      * `Collaborating with other members requires AFFiNE Cloud service.`
      */
    ["Collaboration Description"](): string;
    /**
      * `Collapse sidebar`
      */
    ["Collapse sidebar"](): string;
    /**
      * `Collections`
      */
    Collections(): string;
    /**
      * `Communities`
      */
    Communities(): string;
    /**
      * `Confirm`
      */
    Confirm(): string;
    /**
      * `Connector`
      */
    Connector(): string;
    /**
      * `Contact us`
      */
    ["Contact Us"](): string;
    /**
      * `Contact Us`
      */
    ["Contact with us"](): string;
    /**
      * `Continue`
      */
    Continue(): string;
    /**
      * `Continue with Google`
      */
    ["Continue with Google"](): string;
    /**
      * `Convert to `
      */
    ["Convert to "](): string;
    /**
      * `Copied link to clipboard`
      */
    ["Copied link to clipboard"](): string;
    /**
      * `Copy`
      */
    Copy(): string;
    /**
      * `Copy Link`
      */
    ["Copy Link"](): string;
    /**
      * `Create`
      */
    Create(): string;
    /**
      * `Create or Import`
      */
    ["Create Or Import"](): string;
    /**
      * `Create a link you can easily share with anyone.`
      */
    ["Create Shared Link Description"](): string;
    /**
      * `Create a collection`
      */
    ["Create a collection"](): string;
    /**
      * `Create your own workspace`
      */
    ["Create your own workspace"](): string;
    /**
      * `Created`
      */
    Created(): string;
    /**
      * `Created Successfully`
      */
    ["Created Successfully"](): string;
    /**
      * `Created with`
      */
    ["Created with"](): string;
    /**
      * `Curve Connector`
      */
    ["Curve Connector"](): string;
    /**
      * `Customise`
      */
    Customize(): string;
    /**
      * `Customise your  AFFiNE Appearance`
      */
    ["Customize your  AFFiNE Appearance"](): string;
    /**
      * `Database file already loaded`
      */
    DB_FILE_ALREADY_LOADED(): string;
    /**
      * `Invalid Database file`
      */
    DB_FILE_INVALID(): string;
    /**
      * `Database file migration failed`
      */
    DB_FILE_MIGRATION_FAILED(): string;
    /**
      * `Database file path invalid`
      */
    DB_FILE_PATH_INVALID(): string;
    /**
      * `Data sync mode`
      */
    ["Data sync mode"](): string;
    /**
      * `Date`
      */
    Date(): string;
    /**
      * `Date Format`
      */
    ["Date Format"](): string;
    /**
      * `Default Location`
      */
    ["Default Location"](): string;
    /**
      * `By default will be saved to {{location}}`
      */
    ["Default db location hint"](options: {
        readonly location: string;
    }): string;
    /**
      * `Delete`
      */
    Delete(): string;
    /**
      * `Delete Member?`
      */
    ["Delete Member?"](): string;
    /**
      * `Delete Workspace`
      */
    ["Delete Workspace"](): string;
    /**
      * `After deleting this Workspace, you will permanently delete all of its content for everyone. No one will be able to recover the content of this Workspace.`
      */
    ["Delete Workspace Label Hint"](): string;
    /**
      * `Please type “Delete” to confirm`
      */
    ["Delete Workspace placeholder"](): string;
    /**
      * `Delete page?`
      */
    ["Delete page?"](): string;
    /**
      * `Delete permanently`
      */
    ["Delete permanently"](): string;
    /**
      * `Disable`
      */
    Disable(): string;
    /**
      * `Disable Public Link`
      */
    ["Disable Public Link"](): string;
    /**
      * `Disable Public Link ?`
      */
    ["Disable Public Link ?"](): string;
    /**
      * `Disabling this public link will prevent anyone with the link from accessing this page.`
      */
    ["Disable Public Link Description"](): string;
    /**
      * `Disable Public Sharing`
      */
    ["Disable Public Sharing"](): string;
    /**
      * `Discover what's new`
      */
    ["Discover what's new"](): string;
    /**
      * `Discover what's new!`
      */
    ["Discover what's new!"](): string;
    /**
      * `Display Language`
      */
    ["Display Language"](): string;
    /**
      * `Divider`
      */
    Divider(): string;
    /**
      * `Download all data`
      */
    ["Download all data"](): string;
    /**
      * `Download core data`
      */
    ["Download core data"](): string;
    /**
      * `Download {{CoreOrAll}} data`
      */
    ["Download data"](options: {
        readonly CoreOrAll: string;
    }): string;
    /**
      * `It takes up more space on your device.`
      */
    ["Download data Description1"](): string;
    /**
      * `It takes up little space on your device.`
      */
    ["Download data Description2"](): string;
    /**
      * `Download updates automatically`
      */
    ["Download updates automatically"](): string;
    /**
      * `Early Access Stage`
      */
    ["Early Access Stage"](): string;
    /**
      * `Edgeless`
      */
    Edgeless(): string;
    /**
      * `Edit`
      */
    Edit(): string;
    /**
      * `Edit Filter`
      */
    ["Edit Filter"](): string;
    /**
      * `Editor Version`
      */
    ["Editor Version"](): string;
    /**
      * `Elbowed Connector`
      */
    ["Elbowed Connector"](): string;
    /**
      * `Enable`
      */
    Enable(): string;
    /**
      * `Enable AFFiNE Cloud`
      */
    ["Enable AFFiNE Cloud"](): string;
    /**
      * `If enabled, the data in this workspace will be backed up and synchronised via AFFiNE Cloud.`
      */
    ["Enable AFFiNE Cloud Description"](): string;
    /**
      * `The following functions rely on AFFiNE Cloud. All data is stored on the current device. You can enable AFFiNE Cloud for this workspace to keep data in sync with the cloud.`
      */
    ["Enable cloud hint"](): string;
    /**
      * `Enabled success`
      */
    ["Enabled success"](): string;
    /**
      * `Exclude from filter`
      */
    ["Exclude from filter"](): string;
    /**
      * `Expand sidebar`
      */
    ["Expand sidebar"](): string;
    /**
      * `Expand/Collapse Sidebar`
      */
    ["Expand/Collapse Sidebar"](): string;
    /**
      * `Export`
      */
    Export(): string;
    /**
      * `Export AFFiNE backup file`
      */
    ["Export AFFiNE backup file"](): string;
    /**
      * `You can export the entire Workspace data for backup, and the exported data can be re-imported.`
      */
    ["Export Description"](): string;
    /**
      * `Download a static copy of your page to share with others.`
      */
    ["Export Shared Pages Description"](): string;
    /**
      * `Export failed`
      */
    ["Export failed"](): string;
    /**
      * `Export success`
      */
    ["Export success"](): string;
    /**
      * `Export to HTML`
      */
    ["Export to HTML"](): string;
    /**
      * `Export to Markdown`
      */
    ["Export to Markdown"](): string;
    /**
      * `Export to PDF`
      */
    ["Export to PDF"](): string;
    /**
      * `Export to PNG`
      */
    ["Export to PNG"](): string;
    /**
      * `File already exists`
      */
    FILE_ALREADY_EXISTS(): string;
    /**
      * `Failed to publish workspace`
      */
    ["Failed to publish workspace"](): string;
    /**
      * `Favourite`
      */
    Favorite(): string;
    /**
      * `Favourite pages for easy access`
      */
    ["Favorite pages for easy access"](): string;
    /**
      * `Favourited`
      */
    Favorited(): string;
    /**
      * `Favourites`
      */
    Favorites(): string;
    /**
      * `Filters`
      */
    Filters(): string;
    /**
      * `Found 0 results`
      */
    ["Find 0 result"](): string;
    /**
      * `Found {{number}} result(s)`
      */
    ["Find results"](options: {
        readonly number: string;
    }): string;
    /**
      * `Font Style`
      */
    ["Font Style"](): string;
    /**
      * `Force Sign Out`
      */
    ["Force Sign Out"](): string;
    /**
      * `Full width Layout`
      */
    ["Full width Layout"](): string;
    /**
      * `General`
      */
    General(): string;
    /**
      * `Get in touch!`
      */
    ["Get in touch!"](): string;
    /**
      * `Get in touch! Join our communities.`
      */
    ["Get in touch! Join our communities"](): string;
    /**
      * `Get in touch! Join our communities.`
      */
    ["Get in touch! Join our communities."](): string;
    /**
      * `Go Back`
      */
    ["Go Back"](): string;
    /**
      * `Go Forward`
      */
    ["Go Forward"](): string;
    /**
      * `Got it`
      */
    ["Got it"](): string;
    /**
      * `Group`
      */
    Group(): string;
    /**
      * `Group as Database`
      */
    ["Group as Database"](): string;
    /**
      * `Hand`
      */
    Hand(): string;
    /**
      * `Heading {{number}}`
      */
    Heading(options: {
        readonly number: string;
    }): string;
    /**
      * `Help and Feedback`
      */
    ["Help and Feedback"](): string;
    /**
      * `How is AFFiNE Alpha different?`
      */
    ["How is AFFiNE Alpha different?"](): string;
    /**
      * `Image`
      */
    Image(): string;
    /**
      * `Import`
      */
    Import(): string;
    /**
      * `Increase indent`
      */
    ["Increase indent"](): string;
    /**
      * `Info`
      */
    Info(): string;
    /**
      * `Legal Info`
      */
    ["Info of legal"](): string;
    /**
      * `Inline code`
      */
    ["Inline code"](): string;
    /**
      * `Invitation sent`
      */
    ["Invitation sent"](): string;
    /**
      * `Invited members have been notified with email to join this Workspace.`
      */
    ["Invitation sent hint"](): string;
    /**
      * `Invite`
      */
    Invite(): string;
    /**
      * `Invite Members`
      */
    ["Invite Members"](): string;
    /**
      * `Invited members will collaborate with you in current Workspace`
      */
    ["Invite Members Message"](): string;
    /**
      * `Search mail (Gmail support only)`
      */
    ["Invite placeholder"](): string;
    /**
      * `It takes up little space on your device.`
      */
    ["It takes up little space on your device"](): string;
    /**
      * `It takes up little space on your device.`
      */
    ["It takes up little space on your device."](): string;
    /**
      * `It takes up more space on your device.`
      */
    ["It takes up more space on your device"](): string;
    /**
      * `It takes up more space on your device.`
      */
    ["It takes up more space on your device."](): string;
    /**
      * `Italic`
      */
    Italic(): string;
    /**
      * `Joined Workspace`
      */
    ["Joined Workspace"](): string;
    /**
      * `Jump to`
      */
    ["Jump to"](): string;
    /**
      * `Keyboard shortcuts`
      */
    ["Keyboard Shortcuts"](): string;
    /**
      * `Leave`
      */
    Leave(): string;
    /**
      * `Leave Workspace`
      */
    ["Leave Workspace"](): string;
    /**
      * `After you leave, you will no longer be able to access the contents of this workspace.`
      */
    ["Leave Workspace Description"](): string;
    /**
      * `After you leave, you will not be able to access content within this workspace.`
      */
    ["Leave Workspace hint"](): string;
    /**
      * `Hyperlink (with selected text)`
      */
    Link(): string;
    /**
      * `Loading...`
      */
    Loading(): string;
    /**
      * `Loading All Workspaces`
      */
    ["Loading All Workspaces"](): string;
    /**
      * `Local`
      */
    Local(): string;
    /**
      * `Local Workspace`
      */
    ["Local Workspace"](): string;
    /**
      * `All data is stored on the current device. You can enable AFFiNE Cloud for this workspace to keep data in sync with the cloud.`
      */
    ["Local Workspace Description"](): string;
    /**
      * `Markdown Syntax`
      */
    ["Markdown Syntax"](): string;
    /**
      * `Member`
      */
    Member(): string;
    /**
      * `{{name}} has been removed`
      */
    ["Member has been removed"](options: {
        readonly name: string;
    }): string;
    /**
      * `Members`
      */
    Members(): string;
    /**
      * `Manage members here, invite new member by email.`
      */
    ["Members hint"](): string;
    /**
      * `Move Down`
      */
    ["Move Down"](): string;
    /**
      * `Move Up`
      */
    ["Move Up"](): string;
    /**
      * `Move folder`
      */
    ["Move folder"](): string;
    /**
      * `Select a new storage location.`
      */
    ["Move folder hint"](): string;
    /**
      * `Move folder success`
      */
    ["Move folder success"](): string;
    /**
      * `Move page to...`
      */
    ["Move page to"](): string;
    /**
      * `Move page to...`
      */
    ["Move page to..."](): string;
    /**
      * `Move to`
      */
    ["Move to"](): string;
    /**
      * `Move to Trash`
      */
    ["Move to Trash"](): string;
    /**
      * `Moved to Trash`
      */
    ["Moved to Trash"](): string;
    /**
      * `My Workspaces`
      */
    ["My Workspaces"](): string;
    /**
      * `Name Your Workspace`
      */
    ["Name Your Workspace"](): string;
    /**
      * `Native Titlebar`
      */
    NativeTitleBar(): string;
    /**
      * `Navigation Path`
      */
    ["Navigation Path"](): string;
    /**
      * `New '{{query}}' page`
      */
    ["New Keyword Page"](options: {
        readonly query: string;
    }): string;
    /**
      * `New Page`
      */
    ["New Page"](): string;
    /**
      * `New Workspace`
      */
    ["New Workspace"](): string;
    /**
      * `New version is ready`
      */
    ["New version is ready"](): string;
    /**
      * `No item`
      */
    ["No item"](): string;
    /**
      * `Non-Gmail is not supported`
      */
    ["Non-Gmail"](): string;
    /**
      * `None yet`
      */
    ["None yet"](): string;
    /**
      * `Not now`
      */
    ["Not now"](): string;
    /**
      * `Note`
      */
    Note(): string;
    /**
      * `Official Website`
      */
    ["Official Website"](): string;
    /**
      * `Open Workspace Settings`
      */
    ["Open Workspace Settings"](): string;
    /**
      * `Open folder`
      */
    ["Open folder"](): string;
    /**
      * `Check the where the storage folder is located.`
      */
    ["Open folder hint"](): string;
    /**
      * `Open in new tab`
      */
    ["Open in new tab"](): string;
    /**
      * `Organise pages to build knowledge`
      */
    ["Organize pages to build knowledge"](): string;
    /**
      * `Owner`
      */
    Owner(): string;
    /**
      * `Page`
      */
    Page(): string;
    /**
      * `Paper`
      */
    Paper(): string;
    /**
      * `Pen`
      */
    Pen(): string;
    /**
      * `Pending`
      */
    Pending(): string;
    /**
      * `Permanently deleted`
      */
    ["Permanently deleted"](): string;
    /**
      * `Pivots`
      */
    Pivots(): string;
    /**
      * `Please type workspace name to confirm`
      */
    ["Placeholder of delete workspace"](): string;
    /**
      * `Please make sure you are online`
      */
    ["Please make sure you are online"](): string;
    /**
      * `Privacy`
      */
    Privacy(): string;
    /**
      * `Publish`
      */
    Publish(): string;
    /**
      * `Publish to web`
      */
    ["Publish to web"](): string;
    /**
      * ` The current workspace has been published to the web, everyone can view the contents of this workspace through the link.`
      */
    ["Published Description"](): string;
    /**
      * `Visitors can view the contents through the provided link.`
      */
    ["Published hint"](): string;
    /**
      * `Published to Web`
      */
    ["Published to Web"](): string;
    /**
      * `Publishing to web requires AFFiNE Cloud service.`
      */
    Publishing(): string;
    /**
      * `After publishing to the web, everyone can view the content of this workspace through the link.`
      */
    ["Publishing Description"](): string;
    /**
      * `Quick Search`
      */
    ["Quick Search"](): string;
    /**
      * `Quick search`
      */
    ["Quick search"](): string;
    /**
      * `Quick Search...`
      */
    ["Quick search placeholder"](): string;
    /**
      * `Search in {{workspace}}`
      */
    ["Quick search placeholder2"](options: {
        readonly workspace: string;
    }): string;
    /**
      * `Pages can be freely added/removed from pivots, remaining accessible from "All Pages".`
      */
    RFP(): string;
    /**
      * `Recent`
      */
    Recent(): string;
    /**
      * `Redo`
      */
    Redo(): string;
    /**
      * `Reduce indent`
      */
    ["Reduce indent"](): string;
    /**
      * `Remove from Pivots`
      */
    ["Remove from Pivots"](): string;
    /**
      * `Remove from favourites`
      */
    ["Remove from favorites"](): string;
    /**
      * `Remove from workspace`
      */
    ["Remove from workspace"](): string;
    /**
      * `Remove photo`
      */
    ["Remove photo"](): string;
    /**
      * `Remove special filter`
      */
    ["Remove special filter"](): string;
    /**
      * `Removed from Favourites`
      */
    ["Removed from Favorites"](): string;
    /**
      * `Removed successfully`
      */
    ["Removed successfully"](): string;
    /**
      * `Rename`
      */
    Rename(): string;
    /**
      * `Restart to install update`
      */
    ["Restart Install Client Update"](): string;
    /**
      * `Restore it`
      */
    ["Restore it"](): string;
    /**
      * `Retain cached cloud data`
      */
    ["Retain cached cloud data"](): string;
    /**
      * `Retain local cached data`
      */
    ["Retain local cached data"](): string;
    /**
      * `Save`
      */
    Save(): string;
    /**
      * `Save As New Collection`
      */
    ["Save As New Collection"](): string;
    /**
      * `Save as New Collection`
      */
    ["Save as New Collection"](): string;
    /**
      * `All changes are saved locally, click to enable AFFiNE Cloud.`
      */
    ["Saved then enable AFFiNE Cloud"](): string;
    /**
      * `Select`
      */
    Select(): string;
    /**
      * `Select All`
      */
    ["Select All"](): string;
    /**
      * `Set a Workspace name`
      */
    ["Set a Workspace name"](): string;
    /**
      * `Set database location`
      */
    ["Set database location"](): string;
    /**
      * `Set up an AFFiNE account to sync data`
      */
    ["Set up an AFFiNE account to sync data"](): string;
    /**
      * `Settings`
      */
    Settings(): string;
    /**
      * `Shape`
      */
    Shape(): string;
    /**
      * `Invite others to join the Workspace or publish it to web.`
      */
    ["Share Menu Public Workspace Description1"](): string;
    /**
      * `Current workspace has been published to the web as a public workspace.`
      */
    ["Share Menu Public Workspace Description2"](): string;
    /**
      * `Share with link`
      */
    ["Share with link"](): string;
    /**
      * `Shared Pages`
      */
    ["Shared Pages"](): string;
    /**
      * `Sharing page publicly requires AFFiNE Cloud service.`
      */
    ["Shared Pages Description"](): string;
    /**
      * `Shortcuts`
      */
    Shortcuts(): string;
    /**
      * `Sidebar`
      */
    Sidebar(): string;
    /**
      * `Sign in AFFiNE Cloud`
      */
    ["Sign in"](): string;
    /**
      * `Sign in and Enable`
      */
    ["Sign in and Enable"](): string;
    /**
      * `Sign out`
      */
    ["Sign out"](): string;
    /**
      * `Signing out will cause the unsynchronised content to be lost.`
      */
    ["Sign out description"](): string;
    /**
      * `Skip`
      */
    Skip(): string;
    /**
      * `Start Week On Monday`
      */
    ["Start Week On Monday"](): string;
    /**
      * `Stay logged out`
      */
    ["Stay logged out"](): string;
    /**
      * `Sticky`
      */
    Sticky(): string;
    /**
      * `Stop publishing`
      */
    ["Stop publishing"](): string;
    /**
      * `Storage`
      */
    Storage(): string;
    /**
      * `Storage Folder`
      */
    ["Storage Folder"](): string;
    /**
      * `Storage and Export`
      */
    ["Storage and Export"](): string;
    /**
      * `Straight Connector`
      */
    ["Straight Connector"](): string;
    /**
      * `Strikethrough`
      */
    Strikethrough(): string;
    /**
      * `Successfully deleted`
      */
    ["Successfully deleted"](): string;
    /**
      * `Successfully enabled AFFiNE Cloud`
      */
    ["Successfully enabled AFFiNE Cloud"](): string;
    /**
      * `Successfully joined!`
      */
    ["Successfully joined!"](): string;
    /**
      * `Switch`
      */
    Switch(): string;
    /**
      * `Sync`
      */
    Sync(): string;
    /**
      * `Sync across devices with AFFiNE Cloud`
      */
    ["Sync across devices with AFFiNE Cloud"](): string;
    /**
      * `Synced with AFFiNE Cloud`
      */
    ["Synced with AFFiNE Cloud"](): string;
    /**
      * `Tags`
      */
    Tags(): string;
    /**
      * `Terms of Use`
      */
    ["Terms of Use"](): string;
    /**
      * `Text`
      */
    Text(): string;
    /**
      * `Theme`
      */
    Theme(): string;
    /**
      * `Title`
      */
    Title(): string;
    /**
      * `Trash`
      */
    Trash(): string;
    /**
      * `Once deleted, you can't undo this action. Do you confirm?`
      */
    TrashButtonGroupDescription(): string;
    /**
      * `Permanently delete`
      */
    TrashButtonGroupTitle(): string;
    /**
      * `Unknown error`
      */
    UNKNOWN_ERROR(): string;
    /**
      * `Underline`
      */
    Underline(): string;
    /**
      * `Undo`
      */
    Undo(): string;
    /**
      * `Ungroup`
      */
    Ungroup(): string;
    /**
      * `Unpin`
      */
    Unpin(): string;
    /**
      * `Once published to the web, visitors can view the contents through the provided link.`
      */
    ["Unpublished hint"](): string;
    /**
      * `Untitled`
      */
    Untitled(): string;
    /**
      * `Untitled Collection`
      */
    ["Untitled Collection"](): string;
    /**
      * `Update available`
      */
    ["Update Available"](): string;
    /**
      * `Update Collection`
      */
    ["Update Collection"](): string;
    /**
      * `Update workspace name success`
      */
    ["Update workspace name success"](): string;
    /**
      * `Updated`
      */
    Updated(): string;
    /**
      * `Upload`
      */
    Upload(): string;
    /**
      * `Use on current device only`
      */
    ["Use on current device only"](): string;
    /**
      * `Users`
      */
    Users(): string;
    /**
      * `Version`
      */
    Version(): string;
    /**
      * `View Navigation Path`
      */
    ["View Navigation Path"](): string;
    /**
      * `Visit Workspace`
      */
    ["Visit Workspace"](): string;
    /**
      * `Wait for Sync`
      */
    ["Wait for Sync"](): string;
    /**
      * `Window frame style`
      */
    ["Window frame style"](): string;
    /**
      * `Workspace Avatar`
      */
    ["Workspace Avatar"](): string;
    /**
      * `Workspace Icon`
      */
    ["Workspace Icon"](): string;
    /**
      * `Workspace Name`
      */
    ["Workspace Name"](): string;
    /**
      * `Workspace Not Found`
      */
    ["Workspace Not Found"](): string;
    /**
      * `Workspace Owner`
      */
    ["Workspace Owner"](): string;
    /**
      * `Workspace Profile`
      */
    ["Workspace Profile"](): string;
    /**
      * `Workspace Settings`
      */
    ["Workspace Settings"](): string;
    /**
      * `{{name}}'s Settings`
      */
    ["Workspace Settings with name"](options: {
        readonly name: string;
    }): string;
    /**
      * `Workspace Type`
      */
    ["Workspace Type"](): string;
    /**
      * `Select where you want to create your workspace. The data of workspace is saved locally by default.`
      */
    ["Workspace database storage description"](): string;
    /**
      * `A workspace is your virtual space to capture, create and plan as just one person or together as a team.`
      */
    ["Workspace description"](): string;
    /**
      * `{{name}} is saved locally`
      */
    ["Workspace saved locally"](options: {
        readonly name: string;
    }): string;
    /**
      * `You cannot delete the last workspace`
      */
    ["You cannot delete the last workspace"](): string;
    /**
      * `Zoom in`
      */
    ["Zoom in"](): string;
    /**
      * `Zoom out`
      */
    ["Zoom out"](): string;
    /**
      * `Zoom to 100%`
      */
    ["Zoom to 100%"](): string;
    /**
      * `Zoom to fit`
      */
    ["Zoom to fit"](): string;
    /**
      * `all`
      */
    all(): string;
    /**
      * `Automatically check for new updates periodically.`
      */
    ["com.affine.aboutAFFiNE.autoCheckUpdate.description"](): string;
    /**
      * `Check for updates automatically`
      */
    ["com.affine.aboutAFFiNE.autoCheckUpdate.title"](): string;
    /**
      * `Automatically download updates (to this device).`
      */
    ["com.affine.aboutAFFiNE.autoDownloadUpdate.description"](): string;
    /**
      * `Download updates automatically`
      */
    ["com.affine.aboutAFFiNE.autoDownloadUpdate.title"](): string;
    /**
      * `View the AFFiNE Changelog.`
      */
    ["com.affine.aboutAFFiNE.changelog.description"](): string;
    /**
      * `Discover what's new`
      */
    ["com.affine.aboutAFFiNE.changelog.title"](): string;
    /**
      * `New version is ready`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.description"](): string;
    /**
      * `Check for updates`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.title"](): string;
    /**
      * `Check for Update`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.button.check"](): string;
    /**
      * `Download Update`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.button.download"](): string;
    /**
      * `Restart to Update`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.button.restart"](): string;
    /**
      * `Retry`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.button.retry"](): string;
    /**
      * `Manually check for updates.`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.check"](): string;
    /**
      * `Checking for updates...`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.checking"](): string;
    /**
      * `New update available ({{version}})`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.update-available"](options: {
        readonly version: string;
    }): string;
    /**
      * `Downloading the latest version...`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.downloading"](): string;
    /**
      * `Restart tot apply update.`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.restart"](): string;
    /**
      * `You’ve got the latest version of AFFiNE.`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.latest"](): string;
    /**
      * `Unable to connect to the update server.`
      */
    ["com.affine.aboutAFFiNE.checkUpdate.subtitle.error"](): string;
    /**
      * `Communities`
      */
    ["com.affine.aboutAFFiNE.community.title"](): string;
    /**
      * `AFFiNE Community`
      */
    ["com.affine.aboutAFFiNE.contact.community"](): string;
    /**
      * `Contact Us`
      */
    ["com.affine.aboutAFFiNE.contact.title"](): string;
    /**
      * `Official Website`
      */
    ["com.affine.aboutAFFiNE.contact.website"](): string;
    /**
      * `Privacy`
      */
    ["com.affine.aboutAFFiNE.legal.privacy"](): string;
    /**
      * `Legal Info`
      */
    ["com.affine.aboutAFFiNE.legal.title"](): string;
    /**
      * `Terms of Use`
      */
    ["com.affine.aboutAFFiNE.legal.tos"](): string;
    /**
      * `Information about AFFiNE`
      */
    ["com.affine.aboutAFFiNE.subtitle"](): string;
    /**
      * `About AFFiNE`
      */
    ["com.affine.aboutAFFiNE.title"](): string;
    /**
      * `App Version`
      */
    ["com.affine.aboutAFFiNE.version.app"](): string;
    /**
      * `Editor Version`
      */
    ["com.affine.aboutAFFiNE.version.editor.title"](): string;
    /**
      * `Version`
      */
    ["com.affine.aboutAFFiNE.version.title"](): string;
    /**
      * `All Pages`
      */
    ["com.affine.all-pages.header"](): string;
    /**
      * `Downloading`
      */
    ["com.affine.appUpdater.downloading"](): string;
    /**
      * `Restart to install update`
      */
    ["com.affine.appUpdater.installUpdate"](): string;
    /**
      * `Open download page`
      */
    ["com.affine.appUpdater.openDownloadPage"](): string;
    /**
      * `Download update`
      */
    ["com.affine.appUpdater.downloadUpdate"](): string;
    /**
      * `Update available`
      */
    ["com.affine.appUpdater.updateAvailable"](): string;
    /**
      * `Discover what's new!`
      */
    ["com.affine.appUpdater.whatsNew"](): string;
    /**
      * `Customise the appearance of the client.`
      */
    ["com.affine.appearanceSettings.clientBorder.description"](): string;
    /**
      * `Client Border Style`
      */
    ["com.affine.appearanceSettings.clientBorder.title"](): string;
    /**
      * `Choose your colour mode`
      */
    ["com.affine.appearanceSettings.color.description"](): string;
    /**
      * `Colour Mode`
      */
    ["com.affine.appearanceSettings.color.title"](): string;
    /**
      * `Date`
      */
    ["com.affine.appearanceSettings.date.title"](): string;
    /**
      * `Customise your date style.`
      */
    ["com.affine.appearanceSettings.dateFormat.description"](): string;
    /**
      * `Date Format`
      */
    ["com.affine.appearanceSettings.dateFormat.title"](): string;
    /**
      * `Choose your font style`
      */
    ["com.affine.appearanceSettings.font.description"](): string;
    /**
      * `Font Style`
      */
    ["com.affine.appearanceSettings.font.title"](): string;
    /**
      * `Mono`
      */
    ["com.affine.appearanceSettings.fontStyle.mono"](): string;
    /**
      * `Sans`
      */
    ["com.affine.appearanceSettings.fontStyle.sans"](): string;
    /**
      * `Serif`
      */
    ["com.affine.appearanceSettings.fontStyle.serif"](): string;
    /**
      * `Maximum display of content within a page.`
      */
    ["com.affine.appearanceSettings.fullWidth.description"](): string;
    /**
      * `Full width Layout`
      */
    ["com.affine.appearanceSettings.fullWidth.title"](): string;
    /**
      * `Select the language for the interface.`
      */
    ["com.affine.appearanceSettings.language.description"](): string;
    /**
      * `Display Language`
      */
    ["com.affine.appearanceSettings.language.title"](): string;
    /**
      * `Use background noise effect on the sidebar.`
      */
    ["com.affine.appearanceSettings.noisyBackground.description"](): string;
    /**
      * `Noise background on the sidebar`
      */
    ["com.affine.appearanceSettings.noisyBackground.title"](): string;
    /**
      * `Sidebar`
      */
    ["com.affine.appearanceSettings.sidebar.title"](): string;
    /**
      * `By default, the week starts on Sunday.`
      */
    ["com.affine.appearanceSettings.startWeek.description"](): string;
    /**
      * `Start Week On Monday`
      */
    ["com.affine.appearanceSettings.startWeek.title"](): string;
    /**
      * `Customise your  AFFiNE Appearance`
      */
    ["com.affine.appearanceSettings.subtitle"](): string;
    /**
      * `Theme`
      */
    ["com.affine.appearanceSettings.theme.title"](): string;
    /**
      * `Appearance Settings`
      */
    ["com.affine.appearanceSettings.title"](): string;
    /**
      * `Use transparency effect on the sidebar.`
      */
    ["com.affine.appearanceSettings.translucentUI.description"](): string;
    /**
      * `Translucent UI on the sidebar`
      */
    ["com.affine.appearanceSettings.translucentUI.title"](): string;
    /**
      * `Native Titlebar`
      */
    ["com.affine.appearanceSettings.windowFrame.NativeTitleBar"](): string;
    /**
      * `Customise appearance of Windows Client.`
      */
    ["com.affine.appearanceSettings.windowFrame.description"](): string;
    /**
      * `Frameless`
      */
    ["com.affine.appearanceSettings.windowFrame.frameless"](): string;
    /**
      * `Window frame style`
      */
    ["com.affine.appearanceSettings.windowFrame.title"](): string;
    /**
      * `Your current email is {{email}}. We’ll send a temporary verification link to this email.`
      */
    ["com.affine.auth.change.email.message"](options: {
        readonly email: string;
    }): string;
    /**
      * `Please enter your new email address below. We will send a verification link to this email address to complete the process.`
      */
    ["com.affine.auth.change.email.page.subtitle"](): string;
    /**
      * `Congratulations! You have successfully updated the email address associated with your AFFiNE Cloud account.`
      */
    ["com.affine.auth.change.email.page.success.subtitle"](): string;
    /**
      * `Email address updated!`
      */
    ["com.affine.auth.change.email.page.success.title"](): string;
    /**
      * `Change email address`
      */
    ["com.affine.auth.change.email.page.title"](): string;
    /**
      * `Create Account`
      */
    ["com.affine.auth.create.count"](): string;
    /**
      * `Signing in...`
      */
    ["com.affine.auth.desktop.signing.in"](): string;
    /**
      * `Forgot password`
      */
    ["com.affine.auth.forget"](): string;
    /**
      * `Signed in`
      */
    ["com.affine.auth.has.signed"](): string;
    /**
      * `You have been signed in, start to sync your data with AFFiNE Cloud!`
      */
    ["com.affine.auth.has.signed.message"](): string;
    /**
      * `Later`
      */
    ["com.affine.auth.later"](): string;
    /**
      * `Open AFFiNE`
      */
    ["com.affine.auth.open.affine"](): string;
    /**
      * `Download App`
      */
    ["com.affine.auth.open.affine.download-app"](): string;
    /**
      * `Try again`
      */
    ["com.affine.auth.open.affine.try-again"](): string;
    /**
      * `Please set a password of 8-20 characters with both letters and numbers to continue signing up with `
      */
    ["com.affine.auth.page.sent.email.subtitle"](): string;
    /**
      * `Welcome to AFFiNE Cloud, you are almost there!`
      */
    ["com.affine.auth.page.sent.email.title"](): string;
    /**
      * `Password`
      */
    ["com.affine.auth.password"](): string;
    /**
      * `Invalid password`
      */
    ["com.affine.auth.password.error"](): string;
    /**
      * `Set Password Failed`
      */
    ["com.affine.auth.password.set-failed"](): string;
    /**
      * `Reset Password`
      */
    ["com.affine.auth.reset.password"](): string;
    /**
      * `You will receive an email with a link to reset your password. Please check your inbox.`
      */
    ["com.affine.auth.reset.password.message"](): string;
    /**
      * `Password reset successful`
      */
    ["com.affine.auth.reset.password.page.success"](): string;
    /**
      * `Reset your AFFiNE Cloud password`
      */
    ["com.affine.auth.reset.password.page.title"](): string;
    /**
      * `Send verification link`
      */
    ["com.affine.auth.send.change.email.link"](): string;
    /**
      * `Send reset link`
      */
    ["com.affine.auth.send.reset.password.link"](): string;
    /**
      * `Send set link`
      */
    ["com.affine.auth.send.set.password.link"](): string;
    /**
      * `Sent`
      */
    ["com.affine.auth.sent"](): string;
    /**
      * `Verification link has been sent.`
      */
    ["com.affine.auth.sent.change.email.hint"](): string;
    /**
      * `Reset password link has been sent.`
      */
    ["com.affine.auth.sent.change.password.hint"](): string;
    /**
      * `Your password has upgraded! You can sign in AFFiNE Cloud with new password!`
      */
    ["com.affine.auth.sent.reset.password.success.message"](): string;
    /**
      * `Set password link has been sent.`
      */
    ["com.affine.auth.sent.set.password.hint"](): string;
    /**
      * `Your password has saved! You can sign in AFFiNE Cloud with email and password!`
      */
    ["com.affine.auth.sent.set.password.success.message"](): string;
    /**
      * `Save Email`
      */
    ["com.affine.auth.set.email.save"](): string;
    /**
      * `Set password`
      */
    ["com.affine.auth.set.password"](): string;
    /**
      * `Please set a password of 8-20 characters with both letters and numbers to continue signing up with `
      */
    ["com.affine.auth.set.password.message"](): string;
    /**
      * `Password set successful`
      */
    ["com.affine.auth.set.password.page.success"](): string;
    /**
      * `Set your AFFiNE Cloud password`
      */
    ["com.affine.auth.set.password.page.title"](): string;
    /**
      * `Set a password at least 8 letters long`
      */
    ["com.affine.auth.set.password.placeholder"](): string;
    /**
      * `Confirm password`
      */
    ["com.affine.auth.set.password.placeholder.confirm"](): string;
    /**
      * `Save Password`
      */
    ["com.affine.auth.set.password.save"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.auth.sign-out.confirm-modal.cancel"](): string;
    /**
      * `Sign Out`
      */
    ["com.affine.auth.sign-out.confirm-modal.confirm"](): string;
    /**
      * `After signing out, the Cloud Workspaces associated with this account will be removed from the current device, and signing in again will add them back.`
      */
    ["com.affine.auth.sign-out.confirm-modal.description"](): string;
    /**
      * `Sign out?`
      */
    ["com.affine.auth.sign-out.confirm-modal.title"](): string;
    /**
      * `Wrong code, please try again`
      */
    ["com.affine.auth.sign.auth.code.error.hint"](): string;
    /**
      * `If you haven't received the email, please check your spam folder.`
      */
    ["com.affine.auth.sign.auth.code.message"](): string;
    /**
      * `Send code again`
      */
    ["com.affine.auth.sign.auth.code.on.resend.hint"](): string;
    /**
      * `Resend code`
      */
    ["com.affine.auth.sign.auth.code.resend.hint"](): string;
    /**
      * `Terms of Conditions`
      */
    ["com.affine.auth.sign.condition"](): string;
    /**
      * `Continue with Email`
      */
    ["com.affine.auth.sign.email.continue"](): string;
    /**
      * `Invalid email`
      */
    ["com.affine.auth.sign.email.error"](): string;
    /**
      * `Enter your email address`
      */
    ["com.affine.auth.sign.email.placeholder"](): string;
    /**
      * `Sign in`
      */
    ["com.affine.auth.sign.in"](): string;
    /**
      * `Confirm your email`
      */
    ["com.affine.auth.sign.in.sent.email.subtitle"](): string;
    /**
      * `AFFiNE Cloud is in early access. Check out this link to learn more about the benefits of becoming an AFFiNE Cloud Early Supporter: `
      */
    ["com.affine.auth.sign.no.access.hint"](): string;
    /**
      * `AFFiNE Cloud Early Access`
      */
    ["com.affine.auth.sign.no.access.link"](): string;
    /**
      * `Wait for public release`
      */
    ["com.affine.auth.sign.no.access.wait"](): string;
    /**
      * `Privacy Policy`
      */
    ["com.affine.auth.sign.policy"](): string;
    /**
      * ` You can click the link to create an account automatically.`
      */
    ["com.affine.auth.sign.sent.email.message.end"](): string;
    /**
      * `An email with a magic link has been sent to `
      */
    ["com.affine.auth.sign.sent.email.message.start"](): string;
    /**
      * `Sign up`
      */
    ["com.affine.auth.sign.up"](): string;
    /**
      * `Create your account`
      */
    ["com.affine.auth.sign.up.sent.email.subtitle"](): string;
    /**
      * `The app will automatically open or redirect to the web version. If you encounter any issues, you can also click the button below to manually open the AFFiNE app.`
      */
    ["com.affine.auth.sign.up.success.subtitle"](): string;
    /**
      * `Your account has been created and you’re now signed in!`
      */
    ["com.affine.auth.sign.up.success.title"](): string;
    /**
      * `You have successfully signed in. The app will automatically open or redirect to the web version. if you encounter any issues, you can also click the button below to  manually open the AFFiNE app.`
      */
    ["com.affine.auth.signed.success.subtitle"](): string;
    /**
      * `You’re almost there!`
      */
    ["com.affine.auth.signed.success.title"](): string;
    /**
      * `Server error, please try again later.`
      */
    ["com.affine.auth.toast.message.failed"](): string;
    /**
      * `You have been signed in, start to sync your data with AFFiNE Cloud!`
      */
    ["com.affine.auth.toast.message.signed-in"](): string;
    /**
      * `Unable to sign in`
      */
    ["com.affine.auth.toast.title.failed"](): string;
    /**
      * `Signed in`
      */
    ["com.affine.auth.toast.title.signed-in"](): string;
    /**
      * `Back`
      */
    ["com.affine.backButton"](): string;
    /**
      * `Your local data is stored in the browser and may be lost. Don't risk it - enable cloud now!`
      */
    ["com.affine.banner.local-warning"](): string;
    /**
      * `AFFiNE Cloud`
      */
    ["com.affine.brand.affineCloud"](): string;
    /**
      * `AFFiNE Cloud is upgrading now.`
      */
    ["com.affine.cloudTempDisable.title"](): string;
    /**
      * `Collections`
      */
    ["com.affine.cmdk.affine.category.affine.collections"](): string;
    /**
      * `Create`
      */
    ["com.affine.cmdk.affine.category.affine.creation"](): string;
    /**
      * `Edgeless`
      */
    ["com.affine.cmdk.affine.category.affine.edgeless"](): string;
    /**
      * `General`
      */
    ["com.affine.cmdk.affine.category.affine.general"](): string;
    /**
      * `Help`
      */
    ["com.affine.cmdk.affine.category.affine.help"](): string;
    /**
      * `Layout Controls`
      */
    ["com.affine.cmdk.affine.category.affine.layout"](): string;
    /**
      * `Navigation`
      */
    ["com.affine.cmdk.affine.category.affine.navigation"](): string;
    /**
      * `Pages`
      */
    ["com.affine.cmdk.affine.category.affine.pages"](): string;
    /**
      * `Recent`
      */
    ["com.affine.cmdk.affine.category.affine.recent"](): string;
    /**
      * `Settings`
      */
    ["com.affine.cmdk.affine.category.affine.settings"](): string;
    /**
      * `Updates`
      */
    ["com.affine.cmdk.affine.category.affine.updates"](): string;
    /**
      * `Edgeless Commands`
      */
    ["com.affine.cmdk.affine.category.editor.edgeless"](): string;
    /**
      * `Insert Object`
      */
    ["com.affine.cmdk.affine.category.editor.insert-object"](): string;
    /**
      * `Page Commands`
      */
    ["com.affine.cmdk.affine.category.editor.page"](): string;
    /**
      * `Results`
      */
    ["com.affine.cmdk.affine.category.results"](): string;
    /**
      * `Change Client Border Style to`
      */
    ["com.affine.cmdk.affine.client-border-style.to"](): string;
    /**
      * `Change Colour Mode to`
      */
    ["com.affine.cmdk.affine.color-mode.to"](): string;
    /**
      * `Change Colour Scheme to`
      */
    ["com.affine.cmdk.affine.color-scheme.to"](): string;
    /**
      * `Contact Us`
      */
    ["com.affine.cmdk.affine.contact-us"](): string;
    /**
      * `New "{{keyWord}}" Edgeless`
      */
    ["com.affine.cmdk.affine.create-new-edgeless-as"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `New "{{keyWord}}" Page`
      */
    ["com.affine.cmdk.affine.create-new-page-as"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `Change Display Language to`
      */
    ["com.affine.cmdk.affine.display-language.to"](): string;
    /**
      * `Add to Favourites`
      */
    ["com.affine.cmdk.affine.editor.add-to-favourites"](): string;
    /**
      * `Start Presentation`
      */
    ["com.affine.cmdk.affine.editor.edgeless.presentation-start"](): string;
    /**
      * `Remove from Favourites`
      */
    ["com.affine.cmdk.affine.editor.remove-from-favourites"](): string;
    /**
      * `Restore from Trash`
      */
    ["com.affine.cmdk.affine.editor.restore-from-trash"](): string;
    /**
      * `This page has been moved to the trash, you can either restore or permanently delete it.`
      */
    ["com.affine.cmdk.affine.editor.trash-footer-hint"](): string;
    /**
      * `Change Font Style to`
      */
    ["com.affine.cmdk.affine.font-style.to"](): string;
    /**
      * `Change Full Width Layout to`
      */
    ["com.affine.cmdk.affine.full-width-layout.to"](): string;
    /**
      * `Getting Started`
      */
    ["com.affine.cmdk.affine.getting-started"](): string;
    /**
      * `Import Workspace`
      */
    ["com.affine.cmdk.affine.import-workspace"](): string;
    /**
      * `Collapse Left Sidebar`
      */
    ["com.affine.cmdk.affine.left-sidebar.collapse"](): string;
    /**
      * `Expand Left Sidebar`
      */
    ["com.affine.cmdk.affine.left-sidebar.expand"](): string;
    /**
      * `Go to All Pages`
      */
    ["com.affine.cmdk.affine.navigation.goto-all-pages"](): string;
    /**
      * `Go to Edgeless List`
      */
    ["com.affine.cmdk.affine.navigation.goto-edgeless-list"](): string;
    /**
      * `Go to Page List`
      */
    ["com.affine.cmdk.affine.navigation.goto-page-list"](): string;
    /**
      * `Go to Trash`
      */
    ["com.affine.cmdk.affine.navigation.goto-trash"](): string;
    /**
      * `Go to Workspace`
      */
    ["com.affine.cmdk.affine.navigation.goto-workspace"](): string;
    /**
      * `Go to Settings`
      */
    ["com.affine.cmdk.affine.navigation.open-settings"](): string;
    /**
      * `New Edgeless`
      */
    ["com.affine.cmdk.affine.new-edgeless-page"](): string;
    /**
      * `New Page`
      */
    ["com.affine.cmdk.affine.new-page"](): string;
    /**
      * `New Workspace`
      */
    ["com.affine.cmdk.affine.new-workspace"](): string;
    /**
      * `Change Noise Background On The Sidebar to`
      */
    ["com.affine.cmdk.affine.noise-background-on-the-sidebar.to"](): string;
    /**
      * `Restart to Upgrade`
      */
    ["com.affine.cmdk.affine.restart-to-upgrade"](): string;
    /**
      * `OFF`
      */
    ["com.affine.cmdk.affine.switch-state.off"](): string;
    /**
      * `ON`
      */
    ["com.affine.cmdk.affine.switch-state.on"](): string;
    /**
      * `Change Translucent UI On The Sidebar to`
      */
    ["com.affine.cmdk.affine.translucent-ui-on-the-sidebar.to"](): string;
    /**
      * `What's New`
      */
    ["com.affine.cmdk.affine.whats-new"](): string;
    /**
      * `Reveal Page History Modal`
      */
    ["com.affine.cmdk.affine.editor.reveal-page-history-modal"](): string;
    /**
      * `Type a command or search anything...`
      */
    ["com.affine.cmdk.placeholder"](): string;
    /**
      * `Delete`
      */
    ["com.affine.collection-bar.action.tooltip.delete"](): string;
    /**
      * `Edit`
      */
    ["com.affine.collection-bar.action.tooltip.edit"](): string;
    /**
      * `Pin to Sidebar`
      */
    ["com.affine.collection-bar.action.tooltip.pin"](): string;
    /**
      * `Unpin`
      */
    ["com.affine.collection-bar.action.tooltip.unpin"](): string;
    /**
      * `Page already exists`
      */
    ["com.affine.collection.addPage.alreadyExists"](): string;
    /**
      * `Added successfully`
      */
    ["com.affine.collection.addPage.success"](): string;
    /**
      * `Removed successfully`
      */
    ["com.affine.collection.removePage.success"](): string;
    /**
      * `Add Pages`
      */
    ["com.affine.collection.addPages"](): string;
    /**
      * `Add Rules`
      */
    ["com.affine.collection.addRules"](): string;
    /**
      * `All Collections`
      */
    ["com.affine.collection.allCollections"](): string;
    /**
      * `Empty Collection`
      */
    ["com.affine.collection.emptyCollection"](): string;
    /**
      * `Collection is a smart folder where you can manually add pages or automatically add pages through rules.`
      */
    ["com.affine.collection.emptyCollectionDescription"](): string;
    /**
      * `HELP INFO`
      */
    ["com.affine.collection.helpInfo"](): string;
    /**
      * `Edit Collection`
      */
    ["com.affine.collection.menu.edit"](): string;
    /**
      * `Rename`
      */
    ["com.affine.collection.menu.rename"](): string;
    /**
      * `Back to all`
      */
    ["com.affine.collectionBar.backToAll"](): string;
    /**
      * `Collections`
      */
    ["com.affine.collections.header"](): string;
    /**
      * `No collections`
      */
    ["com.affine.collections.empty.message"](): string;
    /**
      * `New collection`
      */
    ["com.affine.collections.empty.new-collection-button"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.confirmModal.button.cancel"](): string;
    /**
      * `Current Year`
      */
    ["com.affine.currentYear"](): string;
    /**
      * `Delete workspace from this device and optionally delete all data.`
      */
    ["com.affine.deleteLeaveWorkspace.description"](): string;
    /**
      * `Leave Workspace`
      */
    ["com.affine.deleteLeaveWorkspace.leave"](): string;
    /**
      * `After you leave, you will not be able to access content within this workspace.`
      */
    ["com.affine.deleteLeaveWorkspace.leaveDescription"](): string;
    /**
      * `Draw with a blank whiteboard`
      */
    ["com.affine.draw_with_a_blank_whiteboard"](): string;
    /**
      * `Earlier`
      */
    ["com.affine.earlier"](): string;
    /**
      * `Edgeless Mode`
      */
    ["com.affine.edgelessMode"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.editCollection.button.cancel"](): string;
    /**
      * `Create`
      */
    ["com.affine.editCollection.button.create"](): string;
    /**
      * `Create Collection`
      */
    ["com.affine.editCollection.createCollection"](): string;
    /**
      * `Filters`
      */
    ["com.affine.editCollection.filters"](): string;
    /**
      * `Pages`
      */
    ["com.affine.editCollection.pages"](): string;
    /**
      * `Clear selected`
      */
    ["com.affine.editCollection.pages.clear"](): string;
    /**
      * `Rename Collection`
      */
    ["com.affine.editCollection.renameCollection"](): string;
    /**
      * `Rules`
      */
    ["com.affine.editCollection.rules"](): string;
    /**
      * `No Results`
      */
    ["com.affine.editCollection.rules.empty.noResults"](): string;
    /**
      * `No pages meet the filtering rules`
      */
    ["com.affine.editCollection.rules.empty.noResults.tips"](): string;
    /**
      * `No Rules`
      */
    ["com.affine.editCollection.rules.empty.noRules"](): string;
    /**
      * `Add selected page`
      */
    ["com.affine.editCollection.rules.include.add"](): string;
    /**
      * `is`
      */
    ["com.affine.editCollection.rules.include.is"](): string;
    /**
      * `Page`
      */
    ["com.affine.editCollection.rules.include.page"](): string;
    /**
      * `“Selected pages” refers to manually adding pages rather than automatically adding them through rule matching. You can manually add pages through the “Add selected pages” option or by dragging and dropping.`
      */
    ["com.affine.editCollection.rules.include.tips"](): string;
    /**
      * `What is "Selected pages"？`
      */
    ["com.affine.editCollection.rules.include.tipsTitle"](): string;
    /**
      * `Selected pages`
      */
    ["com.affine.editCollection.rules.include.title"](): string;
    /**
      * `Preview`
      */
    ["com.affine.editCollection.rules.preview"](): string;
    /**
      * `Reset`
      */
    ["com.affine.editCollection.rules.reset"](): string;
    /**
      * `automatically`
      */
    ["com.affine.editCollection.rules.tips.highlight"](): string;
    /**
      * `Save`
      */
    ["com.affine.editCollection.save"](): string;
    /**
      * `Save as New Collection`
      */
    ["com.affine.editCollection.saveCollection"](): string;
    /**
      * `Search page...`
      */
    ["com.affine.editCollection.search.placeholder"](): string;
    /**
      * `Untitled Collection`
      */
    ["com.affine.editCollection.untitledCollection"](): string;
    /**
      * `Update Collection`
      */
    ["com.affine.editCollection.updateCollection"](): string;
    /**
      * `Collection is a smart folder where you can manually add pages or automatically add pages through rules.`
      */
    ["com.affine.editCollectionName.createTips"](): string;
    /**
      * `Name`
      */
    ["com.affine.editCollectionName.name"](): string;
    /**
      * `Collection Name`
      */
    ["com.affine.editCollectionName.name.placeholder"](): string;
    /**
      * `Switch`
      */
    ["com.affine.editorModeSwitch.tooltip"](): string;
    /**
      * `There's no page here yet`
      */
    ["com.affine.emptyDesc"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.enableAffineCloudModal.button.cancel"](): string;
    /**
      * `Please request a new reset password link.`
      */
    ["com.affine.expired.page.subtitle"](): string;
    /**
      * `This link has expired...`
      */
    ["com.affine.expired.page.title"](): string;
    /**
      * `Please try it again later.`
      */
    ["com.affine.export.error.message"](): string;
    /**
      * `Export failed due to an unexpected error`
      */
    ["com.affine.export.error.title"](): string;
    /**
      * `Please open the download folder to check.`
      */
    ["com.affine.export.success.message"](): string;
    /**
      * `Exported successfully`
      */
    ["com.affine.export.success.title"](): string;
    /**
      * `Add to favourites`
      */
    ["com.affine.favoritePageOperation.add"](): string;
    /**
      * `Remove from favourites`
      */
    ["com.affine.favoritePageOperation.remove"](): string;
    /**
      * `Filter`
      */
    ["com.affine.filter"](): string;
    /**
      * `after`
      */
    ["com.affine.filter.after"](): string;
    /**
      * `before`
      */
    ["com.affine.filter.before"](): string;
    /**
      * `last`
      */
    ["com.affine.filter.last"](): string;
    /**
      * `contains all`
      */
    ["com.affine.filter.contains all"](): string;
    /**
      * `contains one of`
      */
    ["com.affine.filter.contains one of"](): string;
    /**
      * `does not contains all`
      */
    ["com.affine.filter.does not contains all"](): string;
    /**
      * `does not contains one of`
      */
    ["com.affine.filter.does not contains one of"](): string;
    /**
      * `false`
      */
    ["com.affine.filter.false"](): string;
    /**
      * `is`
      */
    ["com.affine.filter.is"](): string;
    /**
      * `is empty`
      */
    ["com.affine.filter.is empty"](): string;
    /**
      * `is not empty`
      */
    ["com.affine.filter.is not empty"](): string;
    /**
      * `Favourited`
      */
    ["com.affine.filter.is-favourited"](): string;
    /**
      * `Save View`
      */
    ["com.affine.filter.save-view"](): string;
    /**
      * `true`
      */
    ["com.affine.filter.true"](): string;
    /**
      * `Add Filter`
      */
    ["com.affine.filterList.button.add"](): string;
    /**
      * `Add Tag`
      */
    ["com.affine.header.option.add-tag"](): string;
    /**
      * `Duplicate`
      */
    ["com.affine.header.option.duplicate"](): string;
    /**
      * `Contact us`
      */
    ["com.affine.helpIsland.contactUs"](): string;
    /**
      * `Getting started`
      */
    ["com.affine.helpIsland.gettingStarted"](): string;
    /**
      * `Help and Feedback`
      */
    ["com.affine.helpIsland.helpAndFeedback"](): string;
    /**
      * `Support Markdown/Notion`
      */
    ["com.affine.import_file"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.inviteModal.button.cancel"](): string;
    /**
      * `Append to Daily Note`
      */
    ["com.affine.keyboardShortcuts.appendDailyNote"](): string;
    /**
      * `Body text`
      */
    ["com.affine.keyboardShortcuts.bodyText"](): string;
    /**
      * `Bold`
      */
    ["com.affine.keyboardShortcuts.bold"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.keyboardShortcuts.cancel"](): string;
    /**
      * `Code block`
      */
    ["com.affine.keyboardShortcuts.codeBlock"](): string;
    /**
      * `Curve Connector`
      */
    ["com.affine.keyboardShortcuts.curveConnector"](): string;
    /**
      * `Divider`
      */
    ["com.affine.keyboardShortcuts.divider"](): string;
    /**
      * `Elbowed Connector`
      */
    ["com.affine.keyboardShortcuts.elbowedConnector"](): string;
    /**
      * `Expand/Collapse Sidebar`
      */
    ["com.affine.keyboardShortcuts.expandOrCollapseSidebar"](): string;
    /**
      * `Go Back`
      */
    ["com.affine.keyboardShortcuts.goBack"](): string;
    /**
      * `Go Forward`
      */
    ["com.affine.keyboardShortcuts.goForward"](): string;
    /**
      * `Group`
      */
    ["com.affine.keyboardShortcuts.group"](): string;
    /**
      * `Group as Database`
      */
    ["com.affine.keyboardShortcuts.groupDatabase"](): string;
    /**
      * `Hand`
      */
    ["com.affine.keyboardShortcuts.hand"](): string;
    /**
      * `Heading {{number}}`
      */
    ["com.affine.keyboardShortcuts.heading"](options: {
        readonly number: string;
    }): string;
    /**
      * `Image`
      */
    ["com.affine.keyboardShortcuts.image"](): string;
    /**
      * `Increase indent`
      */
    ["com.affine.keyboardShortcuts.increaseIndent"](): string;
    /**
      * `Inline code`
      */
    ["com.affine.keyboardShortcuts.inlineCode"](): string;
    /**
      * `Italic`
      */
    ["com.affine.keyboardShortcuts.italic"](): string;
    /**
      * `Hyperlink (with selected text)`
      */
    ["com.affine.keyboardShortcuts.link"](): string;
    /**
      * `Move Down`
      */
    ["com.affine.keyboardShortcuts.moveDown"](): string;
    /**
      * `Move Up`
      */
    ["com.affine.keyboardShortcuts.moveUp"](): string;
    /**
      * `New Page`
      */
    ["com.affine.keyboardShortcuts.newPage"](): string;
    /**
      * `Note`
      */
    ["com.affine.keyboardShortcuts.note"](): string;
    /**
      * `Pen`
      */
    ["com.affine.keyboardShortcuts.pen"](): string;
    /**
      * `Quick Search`
      */
    ["com.affine.keyboardShortcuts.quickSearch"](): string;
    /**
      * `Redo`
      */
    ["com.affine.keyboardShortcuts.redo"](): string;
    /**
      * `Reduce indent`
      */
    ["com.affine.keyboardShortcuts.reduceIndent"](): string;
    /**
      * `Select`
      */
    ["com.affine.keyboardShortcuts.select"](): string;
    /**
      * `Select All`
      */
    ["com.affine.keyboardShortcuts.selectAll"](): string;
    /**
      * `Shape`
      */
    ["com.affine.keyboardShortcuts.shape"](): string;
    /**
      * `Straight Connector`
      */
    ["com.affine.keyboardShortcuts.straightConnector"](): string;
    /**
      * `Strikethrough`
      */
    ["com.affine.keyboardShortcuts.strikethrough"](): string;
    /**
      * `Check Keyboard Shortcuts quickly`
      */
    ["com.affine.keyboardShortcuts.subtitle"](): string;
    /**
      * `Switch`
      */
    ["com.affine.keyboardShortcuts.switch"](): string;
    /**
      * `Text`
      */
    ["com.affine.keyboardShortcuts.text"](): string;
    /**
      * `Keyboard shortcuts`
      */
    ["com.affine.keyboardShortcuts.title"](): string;
    /**
      * `Ungroup`
      */
    ["com.affine.keyboardShortcuts.unGroup"](): string;
    /**
      * `Underline`
      */
    ["com.affine.keyboardShortcuts.underline"](): string;
    /**
      * `Undo`
      */
    ["com.affine.keyboardShortcuts.undo"](): string;
    /**
      * `Zoom in`
      */
    ["com.affine.keyboardShortcuts.zoomIn"](): string;
    /**
      * `Zoom out`
      */
    ["com.affine.keyboardShortcuts.zoomOut"](): string;
    /**
      * `Zoom to 100%`
      */
    ["com.affine.keyboardShortcuts.zoomTo100"](): string;
    /**
      * `Zoom to fit`
      */
    ["com.affine.keyboardShortcuts.zoomToFit"](): string;
    /**
      * `Last 30 Days`
      */
    ["com.affine.last30Days"](): string;
    /**
      * `Last 7 Days`
      */
    ["com.affine.last7Days"](): string;
    /**
      * `Last month`
      */
    ["com.affine.lastMonth"](): string;
    /**
      * `Last week`
      */
    ["com.affine.lastWeek"](): string;
    /**
      * `Last year`
      */
    ["com.affine.lastYear"](): string;
    /**
      * `Loading...`
      */
    ["com.affine.loading"](): string;
    /**
      * `Older than a month`
      */
    ["com.affine.moreThan30Days"](): string;
    /**
      * `{{title}} will be moved to Trash`
      */
    ["com.affine.moveToTrash.confirmModal.description"](options: {
        readonly title: string;
    }): string;
    /**
      * `{{ number }} pages will be moved to Trash`
      */
    ["com.affine.moveToTrash.confirmModal.description.multiple"](options: {
        readonly number: string;
    }): string;
    /**
      * `Delete page?`
      */
    ["com.affine.moveToTrash.confirmModal.title"](): string;
    /**
      * `Delete {{ number }} pages?`
      */
    ["com.affine.moveToTrash.confirmModal.title.multiple"](options: {
        readonly number: string;
    }): string;
    /**
      * `Move to Trash`
      */
    ["com.affine.moveToTrash.title"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.nameWorkspace.button.cancel"](): string;
    /**
      * `Create`
      */
    ["com.affine.nameWorkspace.button.create"](): string;
    /**
      * `A workspace is your virtual space to capture, create and plan as just one person or together as a team.`
      */
    ["com.affine.nameWorkspace.description"](): string;
    /**
      * `Set a Workspace name`
      */
    ["com.affine.nameWorkspace.placeholder"](): string;
    /**
      * `Name Your Workspace`
      */
    ["com.affine.nameWorkspace.title"](): string;
    /**
      * `New Edgeless`
      */
    ["com.affine.new_edgeless"](): string;
    /**
      * `Import`
      */
    ["com.affine.new_import"](): string;
    /**
      * `Back Home`
      */
    ["com.affine.notFoundPage.backButton"](): string;
    /**
      * `Page Not Found`
      */
    ["com.affine.notFoundPage.title"](): string;
    /**
      * `Hyper merged whiteboard and docs`
      */
    ["com.affine.onboarding.title1"](): string;
    /**
      * `Intuitive & robust block-based editing`
      */
    ["com.affine.onboarding.title2"](): string;
    /**
      * `Easily switch between Page mode for structured document creation and Whiteboard mode for the freeform visual expression of creative ideas.`
      */
    ["com.affine.onboarding.videoDescription1"](): string;
    /**
      * `Create structured documents with ease, using a modular interface to drag and drop blocks of text, images, and other content.`
      */
    ["com.affine.onboarding.videoDescription2"](): string;
    /**
      * `Open in new tab`
      */
    ["com.affine.openPageOperation.newTab"](): string;
    /**
      * `AFFiNE Community`
      */
    ["com.affine.other-page.nav.affine-community"](): string;
    /**
      * `Blog`
      */
    ["com.affine.other-page.nav.blog"](): string;
    /**
      * `Contact Us`
      */
    ["com.affine.other-page.nav.contact-us"](): string;
    /**
      * `Download App`
      */
    ["com.affine.other-page.nav.download-app"](): string;
    /**
      * `Official Website`
      */
    ["com.affine.other-page.nav.official-website"](): string;
    /**
      * `Open AFFiNE`
      */
    ["com.affine.other-page.nav.open-affine"](): string;
    /**
      * `Clear Selection`
      */
    ["com.affine.page.group-header.clear"](): string;
    /**
      * `Select All`
      */
    ["com.affine.page.group-header.select-all"](): string;
    /**
      * `Page Mode`
      */
    ["com.affine.pageMode"](): string;
    /**
      * `all`
      */
    ["com.affine.pageMode.all"](): string;
    /**
      * `Edgeless`
      */
    ["com.affine.pageMode.edgeless"](): string;
    /**
      * `Page`
      */
    ["com.affine.pageMode.page"](): string;
    /**
      * `Unlimited local workspaces`
      */
    ["com.affine.payment.benefit-1"](): string;
    /**
      * `Unlimited login devices`
      */
    ["com.affine.payment.benefit-2"](): string;
    /**
      * `Unlimited blocks`
      */
    ["com.affine.payment.benefit-3"](): string;
    /**
      * `{{capacity}} of Cloud Storage`
      */
    ["com.affine.payment.benefit-4"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `{{capacity}} of maximum file size`
      */
    ["com.affine.payment.benefit-5"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `Number of members per Workspace ≤ {{capacity}}`
      */
    ["com.affine.payment.benefit-6"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `Cancel Subscription`
      */
    ["com.affine.payment.billing-setting.cancel-subscription"](): string;
    /**
      * `Subscription cancelled, your pro account will expire on {{cancelDate}}`
      */
    ["com.affine.payment.billing-setting.cancel-subscription.description"](options: {
        readonly cancelDate: string;
    }): string;
    /**
      * `Change Plan`
      */
    ["com.affine.payment.billing-setting.change-plan"](): string;
    /**
      * `Current Plan`
      */
    ["com.affine.payment.billing-setting.current-plan"](): string;
    /**
      * `Expiration Date`
      */
    ["com.affine.payment.billing-setting.expiration-date"](): string;
    /**
      * `Your subscription is valid until {{expirationDate}}`
      */
    ["com.affine.payment.billing-setting.expiration-date.description"](options: {
        readonly expirationDate: string;
    }): string;
    /**
      * `Billing history`
      */
    ["com.affine.payment.billing-setting.history"](): string;
    /**
      * `Information`
      */
    ["com.affine.payment.billing-setting.information"](): string;
    /**
      * `month`
      */
    ["com.affine.payment.billing-setting.month"](): string;
    /**
      * `There are no invoices to display.`
      */
    ["com.affine.payment.billing-setting.no-invoice"](): string;
    /**
      * `Paid`
      */
    ["com.affine.payment.billing-setting.paid"](): string;
    /**
      * `Payment Method`
      */
    ["com.affine.payment.billing-setting.payment-method"](): string;
    /**
      * `Provided by Stripe.`
      */
    ["com.affine.payment.billing-setting.payment-method.description"](): string;
    /**
      * `Renew Date`
      */
    ["com.affine.payment.billing-setting.renew-date"](): string;
    /**
      * `Next billing date: {{renewDate}}`
      */
    ["com.affine.payment.billing-setting.renew-date.description"](options: {
        readonly renewDate: string;
    }): string;
    /**
      * `Resume`
      */
    ["com.affine.payment.billing-setting.resume-subscription"](): string;
    /**
      * `Manage your billing information and invoices.`
      */
    ["com.affine.payment.billing-setting.subtitle"](): string;
    /**
      * `Billing`
      */
    ["com.affine.payment.billing-setting.title"](): string;
    /**
      * `Update`
      */
    ["com.affine.payment.billing-setting.update"](): string;
    /**
      * `Upgrade`
      */
    ["com.affine.payment.billing-setting.upgrade"](): string;
    /**
      * `View Invoice`
      */
    ["com.affine.payment.billing-setting.view-invoice"](): string;
    /**
      * `year`
      */
    ["com.affine.payment.billing-setting.year"](): string;
    /**
      * `Buy Pro`
      */
    ["com.affine.payment.buy-pro"](): string;
    /**
      * `Change to {{to}} Billing`
      */
    ["com.affine.payment.change-to"](options: {
        readonly to: string;
    }): string;
    /**
      * `Contact Sales`
      */
    ["com.affine.payment.contact-sales"](): string;
    /**
      * `Current Plan`
      */
    ["com.affine.payment.current-plan"](): string;
    /**
      * `This is a special testing(Canary) version of AFFiNE. Account upgrades are not supported in this version. If you want to experience the full service, please download the stable version from our website.`
      */
    ["com.affine.payment.disable-payment.description"](): string;
    /**
      * `Account Upgrade Unavailable`
      */
    ["com.affine.payment.disable-payment.title"](): string;
    /**
      * `{{amount}}% off`
      */
    ["com.affine.payment.discount-amount"](options: {
        readonly amount: string;
    }): string;
    /**
      * `Downgrade`
      */
    ["com.affine.payment.downgrade"](): string;
    /**
      * `You have successfully downgraded. After the current billing period ends, your account will automatically switch to the Free plan.`
      */
    ["com.affine.payment.downgraded-tooltip"](): string;
    /**
      * `Best team workspace for collaboration and knowledge distilling.`
      */
    ["com.affine.payment.dynamic-benefit-1"](): string;
    /**
      * `Focusing on what really matters with team project management and automation.`
      */
    ["com.affine.payment.dynamic-benefit-2"](): string;
    /**
      * `Pay for seats, fits all team size.`
      */
    ["com.affine.payment.dynamic-benefit-3"](): string;
    /**
      * `Solutions & best practices for dedicated needs.`
      */
    ["com.affine.payment.dynamic-benefit-4"](): string;
    /**
      * `Embedable & interrogations with IT support.`
      */
    ["com.affine.payment.dynamic-benefit-5"](): string;
    /**
      * `Manage members here. {{planName}} Users can invite up to {{memberLimit}}`
      */
    ["com.affine.payment.member.description"](options: Readonly<{
        planName: string;
        memberLimit: string;
    }>): string;
    /**
      * `go upgrade`
      */
    ["com.affine.payment.member.description.go-upgrade"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.payment.modal.change.cancel"](): string;
    /**
      * `Change`
      */
    ["com.affine.payment.modal.change.confirm"](): string;
    /**
      * `Change your subscription`
      */
    ["com.affine.payment.modal.change.title"](): string;
    /**
      * `Cancel Subscription`
      */
    ["com.affine.payment.modal.downgrade.cancel"](): string;
    /**
      * `You can still use AFFiNE Cloud Pro until the end of this billing period :)`
      */
    ["com.affine.payment.modal.downgrade.caption"](): string;
    /**
      * `Keep AFFiNE Cloud Pro`
      */
    ["com.affine.payment.modal.downgrade.confirm"](): string;
    /**
      * `We're sorry to see you go, but we're always working to improve, and your feedback is welcome. We hope to see you return in the future.`
      */
    ["com.affine.payment.modal.downgrade.content"](): string;
    /**
      * `Are you sure?`
      */
    ["com.affine.payment.modal.downgrade.title"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.payment.modal.resume.cancel"](): string;
    /**
      * `Confirm`
      */
    ["com.affine.payment.modal.resume.confirm"](): string;
    /**
      * `Are you sure you want to resume the subscription for your pro account? This means your payment method will be charged automatically at the end of each billing cycle, starting from the next billing cycle.`
      */
    ["com.affine.payment.modal.resume.content"](): string;
    /**
      * `Resume Auto-Renewal?`
      */
    ["com.affine.payment.modal.resume.title"](): string;
    /**
      * `Refresh`
      */
    ["com.affine.payment.plans-error-retry"](): string;
    /**
      * `Unable to load Pricing plans, please check your network. `
      */
    ["com.affine.payment.plans-error-tip"](): string;
    /**
      * `per month`
      */
    ["com.affine.payment.price-description.per-month"](): string;
    /**
      * `monthly`
      */
    ["com.affine.payment.recurring-monthly"](): string;
    /**
      * `yearly`
      */
    ["com.affine.payment.recurring-yearly"](): string;
    /**
      * `Resume`
      */
    ["com.affine.payment.resume"](): string;
    /**
      * `Resume Auto-renewal`
      */
    ["com.affine.payment.resume-renewal"](): string;
    /**
      * `See all plans`
      */
    ["com.affine.payment.see-all-plans"](): string;
    /**
      * `Sign up free`
      */
    ["com.affine.payment.sign-up-free"](): string;
    /**
      * `You already have a subscription.`
      */
    ["com.affine.payment.subscription.exist"](): string;
    /**
      * `Subscribe AFFiNE`
      */
    ["com.affine.payment.subscription.go-to-subscribe"](): string;
    /**
      * `You are currently on the {{plan}} plan. After the current billing period ends, your account will automatically switch to the Free plan.`
      */
    ["com.affine.payment.subtitle-canceled"](options: {
        readonly plan: string;
    }): string;
    /**
      * `This is the Pricing plans of AFFiNE Cloud. You can sign up or sign in to your account first.`
      */
    ["com.affine.payment.subtitle-not-signed-in"](): string;
    /**
      * `See all plans`
      */
    ["com.affine.payment.tag-tooltips"](): string;
    /**
      * `Pricing Plans`
      */
    ["com.affine.payment.title"](): string;
    /**
      * `You have changed your plan to {{plan}} billing.`
      */
    ["com.affine.payment.updated-notify-msg"](options: {
        readonly plan: string;
    }): string;
    /**
      * `No further charges will be made starting from the next billing cycle.`
      */
    ["com.affine.payment.updated-notify-msg.cancel-subscription"](): string;
    /**
      * `Subscription updated`
      */
    ["com.affine.payment.updated-notify-title"](): string;
    /**
      * `Upgrade`
      */
    ["com.affine.payment.upgrade"](): string;
    /**
      * `Congratulations! Your AFFiNE account has been successfully upgraded to a Pro account.`
      */
    ["com.affine.payment.upgrade-success-page.text"](): string;
    /**
      * `Upgrade Successful!`
      */
    ["com.affine.payment.upgrade-success-page.title"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.publicLinkDisableModal.button.cancel"](): string;
    /**
      * `Disable`
      */
    ["com.affine.publicLinkDisableModal.button.disable"](): string;
    /**
      * `Disabling this public link will prevent anyone with the link from accessing this page.`
      */
    ["com.affine.publicLinkDisableModal.description"](): string;
    /**
      * `Disable Public Link`
      */
    ["com.affine.publicLinkDisableModal.title"](): string;
    /**
      * `Collections`
      */
    ["com.affine.rootAppSidebar.collections"](): string;
    /**
      * `Favourites`
      */
    ["com.affine.rootAppSidebar.favorites"](): string;
    /**
      * `You can add documents to your favourites`
      */
    ["com.affine.rootAppSidebar.favorites.empty"](): string;
    /**
      * `Others`
      */
    ["com.affine.rootAppSidebar.others"](): string;
    /**
      * `Empty`
      */
    ["com.affine.selectPage.empty"](): string;
    /**
      * `Selected`
      */
    ["com.affine.selectPage.selected"](): string;
    /**
      * `Add include page`
      */
    ["com.affine.selectPage.title"](): string;
    /**
      * `Customise`
      */
    ["com.affine.setDBLocation.button.customize"](): string;
    /**
      * `Default Location`
      */
    ["com.affine.setDBLocation.button.defaultLocation"](): string;
    /**
      * `Select where you want to create your workspace. The data of workspace is saved locally by default.`
      */
    ["com.affine.setDBLocation.description"](): string;
    /**
      * `Set database location`
      */
    ["com.affine.setDBLocation.title"](): string;
    /**
      * `By default will be saved to {{location}}`
      */
    ["com.affine.setDBLocation.tooltip.defaultLocation"](options: {
        readonly location: string;
    }): string;
    /**
      * `Continue`
      */
    ["com.affine.setSyncingMode.button.continue"](): string;
    /**
      * `Sync across devices with AFFiNE Cloud`
      */
    ["com.affine.setSyncingMode.cloud"](): string;
    /**
      * `Use on current device only`
      */
    ["com.affine.setSyncingMode.deviceOnly"](): string;
    /**
      * `Added Successfully`
      */
    ["com.affine.setSyncingMode.title.added"](): string;
    /**
      * `Created Successfully`
      */
    ["com.affine.setSyncingMode.title.created"](): string;
    /**
      * `Account Settings`
      */
    ["com.affine.setting.account"](): string;
    /**
      * `Delete Account`
      */
    ["com.affine.setting.account.delete"](): string;
    /**
      * `Permanently delete this account and the Workspace data backup in AFFiNE Cloud. This action can not be undone.`
      */
    ["com.affine.setting.account.delete.message"](): string;
    /**
      * `Your personal information`
      */
    ["com.affine.setting.account.message"](): string;
    /**
      * `Sync with AFFiNE Cloud`
      */
    ["com.affine.setting.sign.message"](): string;
    /**
      * `Securely sign out of your account.`
      */
    ["com.affine.setting.sign.out.message"](): string;
    /**
      * `General`
      */
    ["com.affine.settingSidebar.settings.general"](): string;
    /**
      * `Workspace`
      */
    ["com.affine.settingSidebar.settings.workspace"](): string;
    /**
      * `Settings`
      */
    ["com.affine.settingSidebar.title"](): string;
    /**
      * `Information about AFFiNE`
      */
    ["com.affine.settings.about.message"](): string;
    /**
      * `Automatically check for new updates periodically.`
      */
    ["com.affine.settings.about.update.check.message"](): string;
    /**
      * `Automatically download updates (to this device).`
      */
    ["com.affine.settings.about.update.download.message"](): string;
    /**
      * `Appearance`
      */
    ["com.affine.settings.appearance"](): string;
    /**
      * `Customise the appearance of the client.`
      */
    ["com.affine.settings.appearance.border-style-description"](): string;
    /**
      * `Customise your date style.`
      */
    ["com.affine.settings.appearance.date-format-description"](): string;
    /**
      * `Maximum display of content within a page.`
      */
    ["com.affine.settings.appearance.full-width-description"](): string;
    /**
      * `Select the language for the interface.`
      */
    ["com.affine.settings.appearance.language-description"](): string;
    /**
      * `By default, the week starts on Sunday.`
      */
    ["com.affine.settings.appearance.start-week-description"](): string;
    /**
      * `Customise appearance of Windows Client.`
      */
    ["com.affine.settings.appearance.window-frame-description"](): string;
    /**
      * `If enabled, it will automatically check for new versions at regular intervals.`
      */
    ["com.affine.settings.auto-check-description"](): string;
    /**
      * ` If enabled, new versions will be automatically downloaded to the current device.`
      */
    ["com.affine.settings.auto-download-description"](): string;
    /**
      * `Email`
      */
    ["com.affine.settings.email"](): string;
    /**
      * `Change Email`
      */
    ["com.affine.settings.email.action"](): string;
    /**
      * `Enable AFFiNE Cloud to collaborate with others`
      */
    ["com.affine.settings.member-tooltip"](): string;
    /**
      * `Noise background on the sidebar`
      */
    ["com.affine.settings.noise-style"](): string;
    /**
      * `Use background noise effect on the sidebar.`
      */
    ["com.affine.settings.noise-style-description"](): string;
    /**
      * `Password`
      */
    ["com.affine.settings.password"](): string;
    /**
      * `Change password`
      */
    ["com.affine.settings.password.action.change"](): string;
    /**
      * `Set password`
      */
    ["com.affine.settings.password.action.set"](): string;
    /**
      * `Set a password to sign in to your account`
      */
    ["com.affine.settings.password.message"](): string;
    /**
      * `My Profile`
      */
    ["com.affine.settings.profile"](): string;
    /**
      * `Your account profile will be displayed to everyone.`
      */
    ["com.affine.settings.profile.message"](): string;
    /**
      * `Display Name`
      */
    ["com.affine.settings.profile.name"](): string;
    /**
      * `Input account name`
      */
    ["com.affine.settings.profile.placeholder"](): string;
    /**
      * `Remove Workspace`
      */
    ["com.affine.settings.remove-workspace"](): string;
    /**
      * `Remove Workspace from this device and optionally delete all data.`
      */
    ["com.affine.settings.remove-workspace-description"](): string;
    /**
      * `Sign in / Sign up`
      */
    ["com.affine.settings.sign"](): string;
    /**
      * `Click to move storage location.`
      */
    ["com.affine.settings.storage.db-location.change-hint"](): string;
    /**
      * `Check or change storage location`
      */
    ["com.affine.settings.storage.description"](): string;
    /**
      * `Check or change storage location. Click path to edit location.`
      */
    ["com.affine.settings.storage.description-alt"](): string;
    /**
      * `Need more customization options? Tell us in the community.`
      */
    ["com.affine.settings.suggestion"](): string;
    /**
      * `Translucent UI on the sidebar`
      */
    ["com.affine.settings.translucent-style"](): string;
    /**
      * `Use transparency effect on the sidebar.`
      */
    ["com.affine.settings.translucent-style-description"](): string;
    /**
      * `Workspace`
      */
    ["com.affine.settings.workspace"](): string;
    /**
      * `You can view current workspace's information here.`
      */
    ["com.affine.settings.workspace.description"](): string;
    /**
      * `Only an owner can edit the the Workspace avatar and name.Changes will be shown for everyone.`
      */
    ["com.affine.settings.workspace.not-owner"](): string;
    /**
      * `Enable AFFiNE Cloud to publish this Workspace`
      */
    ["com.affine.settings.workspace.publish-tooltip"](): string;
    /**
      * `Click to move storage location.`
      */
    ["com.affine.settings.workspace.storage.tip"](): string;
    /**
      * `Sharing page requires AFFiNE Cloud.`
      */
    ["com.affine.share-menu.EnableCloudDescription"](): string;
    /**
      * `Share mode`
      */
    ["com.affine.share-menu.ShareMode"](): string;
    /**
      * `Share Page`
      */
    ["com.affine.share-menu.SharePage"](): string;
    /**
      * `Share via Export`
      */
    ["com.affine.share-menu.ShareViaExport"](): string;
    /**
      * `Download a static copy of your page to share with others.`
      */
    ["com.affine.share-menu.ShareViaExportDescription"](): string;
    /**
      * `Share with link`
      */
    ["com.affine.share-menu.ShareWithLink"](): string;
    /**
      * `Create a link you can easily share with anyone. The visitors will open your page in the form od a document`
      */
    ["com.affine.share-menu.ShareWithLinkDescription"](): string;
    /**
      * `Shared Page`
      */
    ["com.affine.share-menu.SharedPage"](): string;
    /**
      * `Please try again later.`
      */
    ["com.affine.share-menu.confirm-modify-mode.notification.fail.message"](): string;
    /**
      * `Failed to modify`
      */
    ["com.affine.share-menu.confirm-modify-mode.notification.fail.title"](): string;
    /**
      * `You have changed the public link from {{preMode}} Mode to {{currentMode}} Mode.`
      */
    ["com.affine.share-menu.confirm-modify-mode.notification.success.message"](options: Readonly<{
        preMode: string;
        currentMode: string;
    }>): string;
    /**
      * `Modified successfully`
      */
    ["com.affine.share-menu.confirm-modify-mode.notification.success.title"](): string;
    /**
      * `Copy Private Link`
      */
    ["com.affine.share-menu.copy-private-link"](): string;
    /**
      * `Please try again later.`
      */
    ["com.affine.share-menu.create-public-link.notification.fail.message"](): string;
    /**
      * `Failed to create public link`
      */
    ["com.affine.share-menu.create-public-link.notification.fail.title"](): string;
    /**
      * `You can share this document with link.`
      */
    ["com.affine.share-menu.create-public-link.notification.success.message"](): string;
    /**
      * `Public link created`
      */
    ["com.affine.share-menu.create-public-link.notification.success.title"](): string;
    /**
      * `Please try again later.`
      */
    ["com.affine.share-menu.disable-publish-link.notification.fail.message"](): string;
    /**
      * `Failed to disable public link`
      */
    ["com.affine.share-menu.disable-publish-link.notification.fail.title"](): string;
    /**
      * `This page is no longer shared publicly.`
      */
    ["com.affine.share-menu.disable-publish-link.notification.success.message"](): string;
    /**
      * `Public link disabled`
      */
    ["com.affine.share-menu.disable-publish-link.notification.success.title"](): string;
    /**
      * `Publish to Web`
      */
    ["com.affine.share-menu.publish-to-web"](): string;
    /**
      * `Let anyone with a link view a read-only version of this page.`
      */
    ["com.affine.share-menu.publish-to-web.description"](): string;
    /**
      * `Share Privately`
      */
    ["com.affine.share-menu.share-privately"](): string;
    /**
      * `Only members of this Workspace can open this link.`
      */
    ["com.affine.share-menu.share-privately.description"](): string;
    /**
      * `Share`
      */
    ["com.affine.share-menu.shareButton"](): string;
    /**
      * `Shared`
      */
    ["com.affine.share-menu.sharedButton"](): string;
    /**
      * `Edgeless`
      */
    ["com.affine.shortcutsTitle.edgeless"](): string;
    /**
      * `General`
      */
    ["com.affine.shortcutsTitle.general"](): string;
    /**
      * `Markdown Syntax`
      */
    ["com.affine.shortcutsTitle.markdownSyntax"](): string;
    /**
      * `Page`
      */
    ["com.affine.shortcutsTitle.page"](): string;
    /**
      * `Collapse sidebar`
      */
    ["com.affine.sidebarSwitch.collapse"](): string;
    /**
      * `Expand sidebar`
      */
    ["com.affine.sidebarSwitch.expand"](): string;
    /**
      * `Change`
      */
    ["com.affine.storage.change-plan"](): string;
    /**
      * `AFFiNE Cloud is currently in early access phase and is not supported for upgrading, please be patient and wait for our pricing plan.`
      */
    ["com.affine.storage.disabled.hint"](): string;
    /**
      * `The usage has reached its maximum capacity, AFFiNE Cloud is currently in early access phase and is not supported for upgrading, please be patient and wait for our pricing plan. `
      */
    ["com.affine.storage.extend.hint"](): string;
    /**
      * `To get more information click here.`
      */
    ["com.affine.storage.extend.link"](): string;
    /**
      * `You have reached the maximum capacity limit for your current account`
      */
    ["com.affine.storage.maximum-tips"](): string;
    /**
      * `Plan`
      */
    ["com.affine.storage.plan"](): string;
    /**
      * `AFFiNE Cloud Storage`
      */
    ["com.affine.storage.title"](): string;
    /**
      * `Upgrade`
      */
    ["com.affine.storage.upgrade"](): string;
    /**
      * `Space used`
      */
    ["com.affine.storage.used.hint"](): string;
    /**
      * `Dark`
      */
    ["com.affine.themeSettings.dark"](): string;
    /**
      * `Light`
      */
    ["com.affine.themeSettings.light"](): string;
    /**
      * `System`
      */
    ["com.affine.themeSettings.system"](): string;
    /**
      * `Added to Favourites`
      */
    ["com.affine.toastMessage.addedFavorites"](): string;
    /**
      * `Edgeless Mode`
      */
    ["com.affine.toastMessage.edgelessMode"](): string;
    /**
      * `Moved to Trash`
      */
    ["com.affine.toastMessage.movedTrash"](): string;
    /**
      * `Page Mode`
      */
    ["com.affine.toastMessage.pageMode"](): string;
    /**
      * `Permanently deleted`
      */
    ["com.affine.toastMessage.permanentlyDeleted"](): string;
    /**
      * `Removed from Favourites`
      */
    ["com.affine.toastMessage.removedFavorites"](): string;
    /**
      * `{{title}} restored`
      */
    ["com.affine.toastMessage.restored"](options: {
        readonly title: string;
    }): string;
    /**
      * `Successfully deleted`
      */
    ["com.affine.toastMessage.successfullyDeleted"](): string;
    /**
      * `Successfully renamed`
      */
    ["com.affine.toastMessage.rename"](): string;
    /**
      * `Successfully added linked page`
      */
    ["com.affine.toastMessage.addLinkedPage"](): string;
    /**
      * `Today`
      */
    ["com.affine.today"](): string;
    /**
      * `Delete`
      */
    ["com.affine.trashOperation.delete"](): string;
    /**
      * `Once deleted, you can't undo this action. Do you confirm?`
      */
    ["com.affine.trashOperation.delete.description"](): string;
    /**
      * `Permanently delete`
      */
    ["com.affine.trashOperation.delete.title"](): string;
    /**
      * `Once deleted, you can't undo this action. Do you confirm?`
      */
    ["com.affine.trashOperation.deleteDescription"](): string;
    /**
      * `Delete permanently`
      */
    ["com.affine.trashOperation.deletePermanently"](): string;
    /**
      * `Restore it`
      */
    ["com.affine.trashOperation.restoreIt"](): string;
    /**
      * `Downloading`
      */
    ["com.affine.updater.downloading"](): string;
    /**
      * `Open download page`
      */
    ["com.affine.updater.open-download-page"](): string;
    /**
      * `Restart to install update`
      */
    ["com.affine.updater.restart-to-update"](): string;
    /**
      * `Update available`
      */
    ["com.affine.updater.update-available"](): string;
    /**
      * `Refresh Current Page`
      */
    ["com.affine.upgrade.button-text.done"](): string;
    /**
      * `Data Upgrade Error`
      */
    ["com.affine.upgrade.button-text.error"](): string;
    /**
      * `Upgrade Workspace Data`
      */
    ["com.affine.upgrade.button-text.pending"](): string;
    /**
      * `Upgrading`
      */
    ["com.affine.upgrade.button-text.upgrading"](): string;
    /**
      * `After upgrading the workspace data, please refresh the page to see the changes.`
      */
    ["com.affine.upgrade.tips.done"](): string;
    /**
      * `We encountered some errors while upgrading the workspace data.`
      */
    ["com.affine.upgrade.tips.error"](): string;
    /**
      * `To ensure compatibility with the updated AFFiNE client, please upgrade your data by clicking the "Upgrade Workspace Data" button below.`
      */
    ["com.affine.upgrade.tips.normal"](): string;
    /**
      * `You cannot delete the last workspace`
      */
    ["com.affine.workspace.cannot-delete"](): string;
    /**
      * `Cloud Workspaces`
      */
    ["com.affine.workspace.cloud"](): string;
    /**
      * `Sign Out`
      */
    ["com.affine.workspace.cloud.account.logout"](): string;
    /**
      * `Account Settings`
      */
    ["com.affine.workspace.cloud.account.settings"](): string;
    /**
      * `Sign up/ Sign in`
      */
    ["com.affine.workspace.cloud.auth"](): string;
    /**
      * `Sync with AFFiNE Cloud`
      */
    ["com.affine.workspace.cloud.description"](): string;
    /**
      * `Join Workspace`
      */
    ["com.affine.workspace.cloud.join"](): string;
    /**
      * `Cloud sync`
      */
    ["com.affine.workspace.cloud.sync"](): string;
    /**
      * `Local Workspaces`
      */
    ["com.affine.workspace.local"](): string;
    /**
      * `Import Workspace`
      */
    ["com.affine.workspace.local.import"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.workspaceDelete.button.cancel"](): string;
    /**
      * `Delete`
      */
    ["com.affine.workspaceDelete.button.delete"](): string;
    /**
      * `Please type workspace name to confirm`
      */
    ["com.affine.workspaceDelete.placeholder"](): string;
    /**
      * `Delete Workspace`
      */
    ["com.affine.workspaceDelete.title"](): string;
    /**
      * `Cancel`
      */
    ["com.affine.workspaceLeave.button.cancel"](): string;
    /**
      * `Leave`
      */
    ["com.affine.workspaceLeave.button.leave"](): string;
    /**
      * `After you leave, you will no longer be able to access the contents of this workspace.`
      */
    ["com.affine.workspaceLeave.description"](): string;
    /**
      * `Create Workspace`
      */
    ["com.affine.workspaceList.addWorkspace.create"](): string;
    /**
      * `Cloud Sync`
      */
    ["com.affine.workspaceList.workspaceListType.cloud"](): string;
    /**
      * `Local Storage`
      */
    ["com.affine.workspaceList.workspaceListType.local"](): string;
    /**
      * `All pages`
      */
    ["com.affine.workspaceSubPath.all"](): string;
    /**
      * `Trash`
      */
    ["com.affine.workspaceSubPath.trash"](): string;
    /**
      * `Deleted pages will appear here.`
      */
    ["com.affine.workspaceSubPath.trash.empty-description"](): string;
    /**
      * `Cloud Workspace`
      */
    ["com.affine.workspaceType.cloud"](): string;
    /**
      * `Joined Workspace`
      */
    ["com.affine.workspaceType.joined"](): string;
    /**
      * `Local Workspace`
      */
    ["com.affine.workspaceType.local"](): string;
    /**
      * `Available Offline`
      */
    ["com.affine.workspaceType.offline"](): string;
    /**
      * `Write with a blank page`
      */
    ["com.affine.write_with_a_blank_page"](): string;
    /**
      * `Yesterday`
      */
    ["com.affine.yesterday"](): string;
    /**
      * `Refresh`
      */
    ["com.affine.error.retry"](): string;
    /**
      * `Refetch`
      */
    ["com.affine.error.refetch"](): string;
    /**
      * `Reload`
      */
    ["com.affine.error.reload"](): string;
    /**
      * `Refresh`
      */
    ["com.affine.error.page-not-found.title"](): string;
    /**
      * `Something is wrong...`
      */
    ["com.affine.error.unexpected-error.title"](): string;
    /**
      * `Page content is missing`
      */
    ["com.affine.error.no-page-root.title"](): string;
    /**
      * `core`
      */
    core(): string;
    /**
      * `Dark`
      */
    dark(): string;
    /**
      * `Click Add to Favourites and the page will appear here.`
      */
    emptyFavorite(): string;
    /**
      * `Shared pages will appear here.`
      */
    emptySharedPages(): string;
    /**
      * `Click Add to Trash and the page will appear here.`
      */
    emptyTrash(): string;
    /**
      * `Frameless`
      */
    frameless(): string;
    /**
      * `invited you to join`
      */
    ["invited you to join"](): string;
    /**
      * `is a Cloud Workspace.`
      */
    ["is a Cloud Workspace"](): string;
    /**
      * `is a Local Workspace.`
      */
    ["is a Local Workspace"](): string;
    /**
      * `Light`
      */
    light(): string;
    /**
      * `Login success`
      */
    ["login success"](): string;
    /**
      * `Looks like you are browsing on a mobile device.`
      */
    ["mobile device"](): string;
    /**
      * `We are still working on mobile support and recommend you use a desktop device.`
      */
    ["mobile device description"](): string;
    /**
      * `Others`
      */
    others(): string;
    /**
      * `{{title}} restored`
      */
    restored(options: {
        readonly title: string;
    }): string;
    /**
      * `(This page is still being designed.)`
      */
    ["still designed"](): string;
    /**
      * `System`
      */
    system(): string;
    /**
      * `Please upgrade to the latest version of Chrome for the best experience.`
      */
    upgradeBrowser(): string;
    /**
      * `{{title}} will be moved to Trash`
      */
    ["will be moved to Trash"](options: {
        readonly title: string;
    }): string;
    /**
      * `will delete member`
      */
    ["will delete member"](): string;
    /**
      * `Version History`
      */
    ["com.affine.history.version-history"](): string;
    /**
      * `View History Version`
      */
    ["com.affine.history.view-history-version"](): string;
    /**
      * `Restore current version`
      */
    ["com.affine.history.restore-current-version"](): string;
    /**
      * `Back to page`
      */
    ["com.affine.history.back-to-page"](): string;
    /**
      * `Empty`
      */
    ["com.affine.history.empty-prompt.title"](): string;
    /**
      * `This document is such a spring chicken, it hasn't sprouted a single historical sprig yet!`
      */
    ["com.affine.history.empty-prompt.description"](): string;
    /**
      * `Restore`
      */
    ["com.affine.history.confirm-restore-modal.restore"](): string;
    /**
      * `You are about to restore the current version of the page to the latest version available. This action will overwrite any changes made prior to the latest version.`
      */
    ["com.affine.history.confirm-restore-modal.hint"](): string;
    /**
      * `Present`
      */
    ["com.affine.share-page.header.present"](): string;
    /**
      * `Add linked page`
      */
    ["com.affine.page-operation.add-linked-page"](): string;
    /**
      * `Start AFFiNE by creating your own Workspace here!`
      */
    ["com.affine.onboarding.workspace-guide.title"](): string;
    /**
      * `A Workspace is your virtual space to capture, create and plan as just one person or together as a team.`
      */
    ["com.affine.onboarding.workspace-guide.content"](): string;
    /**
      * `Got it!`
      */
    ["com.affine.onboarding.workspace-guide.got-it"](): string;
} { const { t } = useTranslation(); return useMemo(() => createProxy((key) => t.bind(null, key)), [t]); }
function createComponent(i18nKey: string) {
    return (props) => createElement(Trans, { i18nKey, shouldUnescape: true, ...props });
}
export const TypedTrans: {
    /**
      * `All data will be synchronised and saved to the AFFiNE account <1>{{email}}</1>`
      */
    ["Cloud Workspace Description"]: ComponentType<TypedTransProps<{
        readonly email: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{workspace}}</1> cannot be undone, please proceed with caution. All contents will be lost.`
      */
    ["Delete Workspace Description"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{workspace}}</1> will delete both local and cloud data, this operation cannot be undone, please proceed with caution.`
      */
    ["Delete Workspace Description2"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Export Workspace <1>{{workspace}}</1> is coming soon`
      */
    ["Export Workspace"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `The entire Workspace is published on the web and can be edited via <1>Workspace Settings</1>.`
      */
    ["Shared Pages In Public Workspace Description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Opening <1>AFFiNE</1> app now`
      */
    ["com.affine.auth.open.affine.prompt"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Or <1>sign in with password</1> instead.`
      */
    ["com.affine.auth.sign.auth.code.message.password"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `By clicking “Continue with Google/Email” above, you acknowledge that you agree to AFFiNE's <1>Terms of Conditions</1> and <3>Privacy Policy</3>.`
      */
    ["com.affine.auth.sign.message"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `This demo is limited. <1>Download the AFFiNE Client</1> for the latest features and Performance.`
      */
    ["com.affine.banner.content"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `We are upgrading the AFFiNE Cloud service and it is temporarily unavailable on the client side. If you wish to stay updated on the progress and be notified on availability, you can fill out the <1>AFFiNE Cloud Signup</1>.`
      */
    ["com.affine.cloudTempDisable.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<0>Add pages:</0> You can freely select pages and add them to the collection.`
      */
    ["com.affine.collection.addPages.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>Add rules:</0> Rules are based on filtering. After adding rules, pages that meet the requirements will be automatically added to the current collection.`
      */
    ["com.affine.collection.addRules.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `Selected <1>{{selectedCount}}</1>, filtered <3>{{filteredCount}}</3>`
      */
    ["com.affine.editCollection.rules.countTips"]: ComponentType<TypedTransProps<Readonly<{
        selectedCount: string;
        filteredCount: string;
    }>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `Showing <1>{{count}}</1> pages.`
      */
    ["com.affine.editCollection.rules.countTips.more"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Showing <1>{{count}}</1> page.`
      */
    ["com.affine.editCollection.rules.countTips.one"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Showing <1>{{count}}</1> pages.`
      */
    ["com.affine.editCollection.rules.countTips.zero"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Please <1>add rules</1> to save this collection or switch to <3>Pages</3>, use manual selection mode`
      */
    ["com.affine.editCollection.rules.empty.noRules.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `Pages that meet the rules will be added to the current collection <2>{{highlight}}</2>`
      */
    ["com.affine.editCollection.rules.tips"]: ComponentType<TypedTransProps<{
        readonly highlight: string;
    }, {
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> selected`
    
      * - com.affine.page.toolbar.selected_one: `<0>{{count}}</0> page selected`
      */
    ["com.affine.page.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> page selected`
      */
    ["com.affine.page.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> page(s) selected`
      */
    ["com.affine.page.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the <1>{{planName}} plan</1>.`
      */
    ["com.affine.payment.billing-setting.current-plan.description"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the monthly <1>{{planName}} plan</1>.`
      */
    ["com.affine.payment.billing-setting.current-plan.description.monthly"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the yearly <1>{{planName}} plan</1>.`
      */
    ["com.affine.payment.billing-setting.current-plan.description.yearly"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the {{currentPlan}} plan. If you have any questions, please contact our <3>customer support</3>.`
      */
    ["com.affine.payment.subtitle-active"]: ComponentType<TypedTransProps<{
        readonly currentPlan: string;
    }, {
        ["3"]: JSX.Element;
    }>>;
    /**
      * `If you have any questions, please contact our <1> customer support</1>.`
      */
    ["com.affine.payment.upgrade-success-page.support"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `No page titles contain <1>{{search}}</1>`
      */
    ["com.affine.selectPage.empty.tips"]: ComponentType<TypedTransProps<{
        readonly search: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{workspace}}</1> cannot be undone, please proceed with caution. All contents will be lost.`
      */
    ["com.affine.workspaceDelete.description"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{workspace}}</1> will delete both local and cloud data, this operation cannot be undone, please proceed with caution.`
      */
    ["com.affine.workspaceDelete.description2"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `If you are still experiencing this issue, please <1>contact us through the community.</1>`
      */
    ["com.affine.error.contact.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Click on the <1>$t(New Page)</1> button to create your first page.`
      */
    emptyAllPages: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Click on the <1>$t(New Page)</1> button Or press <3>{{shortcut}}</3> to create your first page.`
      */
    emptyAllPagesClient: ComponentType<TypedTransProps<{
        readonly shortcut: string;
    }, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * ` We recommend the <1>Chrome</1> browser for optimal experience.`
      */
    recommendBrowser: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
} = /*#__PURE__*/ createProxy(createComponent);
