/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SenchaServer.Application',

    name: 'SenchaServer',

    requires: [
        // This will automatically load all classes in the SenchaServer namespace
        // so that application classes do not need to require each other.
        'SenchaServer.*'
    ],

    // The name of the initial view to create.
    mainView: 'SenchaServer.view.main.Main'
});
