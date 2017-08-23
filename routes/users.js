var express = require('express');
var answersModel=require('../models/tongji');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();
app.use(bodyParser.json());

//后台数据展示
router.get('/toupiao',function (req,res) {
    answersModel.findAll(function (data) {
        res.send(200,{data});
    });
});
router.get('/admin',function (req,res) {
    answersModel.setStatus(req.query.no,function (data) {
    })
});
router.get('/admin_onAll',function (req,res) {
    if(req.query.on_off==1)
        res.send(200,{disabledStatus:true});
    else
        res.send(200,{disabledStatus:false});
    answersModel.updateAll(req.query.on_off,function (data) {
    })
});
router.get('/next', function(req, res) {
    answersModel.findByNo(req.query.selectedNo,function (data) {
        //1 禁用 0 启用
        console.log(`${data}`)
        if(data[0].status){
            res.send(200,{disabledStatus:true});
        }else{
            res.send(200,{disabledStatus:false});
            // answersModel.insertAnswer(req.query.selectedNo,req.query.selectedAnswer,function (data) {
                // console.log(`data:${data}`);
            // })
        }
    });
});
router.get('/', function(req, res) {
    answersModel.findByNo(req.query.selectedNo,function (data) {
        //1 禁用 0 启用
        if(data[0].status){
            res.send(200,{disabledStatus:true});
        }else{
            res.send(200,{disabledStatus:false});
            answersModel.insertAnswer(req.query.selectedNo,req.query.selectedAnswer,function (data) {
                // console.log(`data:${data}`);
            })
        }
    });
});


module.exports = router;
