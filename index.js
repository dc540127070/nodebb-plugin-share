'use strict';
/* globals module, require */
var Share = module.exports;

Share.addNetwork = function (networks, callback) {
    networks.push({
        id: "qq",
        name: "QQ",
        class: "fa-qq"
    },{
        id: "weibo",
        name: "Weibo",
        class: "fa-weibo"
    });

    if (callback && typeof callback === 'function'){
        callback(null, networks);
    }
}

