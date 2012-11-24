var config = {
    baseUrl: './Assets/Scripts/',
    pluginPath: 'plugins',
    paths: {
        'jquery': 'Libraries/jquery',
        'lodash': 'Libraries/lodash',
        'backbone': 'Libraries/backbone'
    },
    preloads: ['jquery', 'lodash']
};

/*
    The `exports` suffix ensures we receive a reference to the global Backbone object
    It also provides a way to check that the script loaded correctly.
    Without the `exports` suffix, there's no way to tell if IE or Opera 404'ed.
 */
curl(config, ['jquery', 'lodash', 'js!backbone!exports=Backbone'], init, error);

function init ($, _, Backbone) {
    curl('Views/Validation');
}

function error (err) {
    console.warn(err);
}