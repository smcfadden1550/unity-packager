'use strict';

// use babel generated code for testing
const { UnityPackager } = require('../lib/index.js');

const buildPath = 'C:/Users/Meme Machine/UnityPackagerTest/';
const buildOptions = {
    unityPath: 'C:/Program Files/Unity/Hub/Editor/2019.3.10f1/Editor/Unity.exe',
    apiUpdate: true, 
    buildClass : { 
        className: 'WebGLBuilder', 
        buildMethod: 'build'
    },
    timeout: 3000
};

// There will be some nice testing in here eventually (via mocha)

//UnityPackager.BuildProjectSync( buildPath, "./build" );

UnityPackager.BuildProjectSync( buildPath, "./build", buildOptions );