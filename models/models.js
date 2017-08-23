/**
 * Created by Eric on 2017/7/24.
 */

var mongoose = require('mongoose');
var setting  = require('../common/config');

mongoose.connect('mongodb://'+setting.DBHost+':'+setting.DBPort+'/'+setting.DBName,(err)=>{if(err) throw err;console.log('connect success')});

module.exports=mongoose;