'use strict';

var fs = require('fs');
var path = require('path');
var old_content_src_value;

// The code has been copied from here https://github.com/apache/cordova-plugins/blob/master/local-webserver/scripts/after_install.js
// And is adopted to this project, since the original script does not work as expected

module.exports = function (context) {
    console.log('Change Source: Trying to change content src for iOS, Android and Windows platforms');
    var projectName = getProjectName(context);

    changeSourceIOS(context, projectName);
    changeSourceAndroid(context);
    changeSourceWindows(context);
};

function changeSourceIOS(context, projectName) {
    changeSource(context, path.join('ios', projectName), 'http://localhost:1337');
}

function changeSourceAndroid(context) {
    changeSource(context, path.join('android', 'res', 'xml'), 'index.html');
}

function changeSourceWindows(context) {
    changeSource(context, path.join('windows'), 'index.html');
}

function changeSource(context, platformConfigFolder, contentSrcValue) {
    var config_xml = path.join(context.opts.projectRoot, 'platforms', platformConfigFolder, 'config.xml');

    if (!fs.existsSync(config_xml)) {
        console.log('Change Source: Did not find', config_xml, 'to set content src');
        return;
    }

    var et = context.requireCordovaModule('elementtree');

    var data = fs.readFileSync(config_xml).toString();
    var etree = et.parse(data);

    var content_tags = etree.findall('./content[@src]');
    if (content_tags.length > 0) {
        old_content_src_value = content_tags[0].get('src');
        content_tags[0].set('src', contentSrcValue);
    }

    var altcontentsrcTag = etree.findall("./preference[@name='AlternateContentSrc']");
    if (altcontentsrcTag.length > 0) {
        altcontentsrcTag[0].set('value', old_content_src_value);
    } else {
        var pref = et.Element('preference', { name: 'AlternateContentSrc', value: old_content_src_value });
        etree.getroot().append(pref);
    }

    data = etree.write({ 'indent': 4 });
    fs.writeFileSync(config_xml, data);

    console.log('Change Source: content src value set to', contentSrcValue, 'for', platformConfigFolder);
}

function getProjectName(context) {
    var config_xml = path.join(context.opts.projectRoot, 'config.xml');
    var et = context.requireCordovaModule('elementtree');

    var data = fs.readFileSync(config_xml).toString();
    var etree = et.parse(data);

    var projectName = etree.findtext('./name');

    if (!projectName) {
        throw new Error('Change Source: Could not resolve project name.');
    }

    return projectName;
}
