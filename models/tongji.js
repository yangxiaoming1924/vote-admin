/**
 * Created by Eric on 2017/7/24.
 */
var mongoose = require('./models');
var answersSchema  =  new mongoose.Schema({
    no:Number,
   answera:Number,
   answerb:Number,
   answerc:Number,
   answerd:Number,
    status:Number
});
var answersModel   = mongoose.model('answers',answersSchema);
exports.findAll=function (callback) {
    answersModel.find({},function (err,data) {
        if(err)
            throw err;
        else
           callback(data)
    });
};
exports.findStatus=function (no,callback) {
    answersModel.find({'no':no},function (err,data) {
        if(err)
            throw err;
        else
            callback(data);
    });
}
exports.setStatus=function (no,callback) {
    answersModel.update({'no':no},{$set:{'status':0}},function (err) {
        if(err)
           callback(false);
        else
            callback(true);
    });
}
exports.insertAnswer=function (selectedNo,selectedAnswer,callback) {

    answersModel.find({'no':selectedNo},function (err,data) {
        console.log(`find:${data[0][selectedAnswer]}`)
        if(err)
            throw err;
        else{
            var sb=data[0][selectedAnswer];
            sb++;
            var $set={};
                $set[selectedAnswer]=sb;
            var set ={$set:$set}
            answersModel.update({'no':selectedNo},set,function (err) {
                if(err)
                    callback(false);
                else{
                   callback(true);
                }
            });
        }

    })

};
exports.findByNo=function (no,callback) {
    answersModel.find({'no':no},function (err,data) {
        if(err)
            throw err;
        else
            callback(data);
    })
};

exports.updateAll=function (on_off,callback) {
    answersModel.update({}, {$set: {status: on_off}}, {multi: true}, function (err) {
        if (err)
            throw err;
        else
            callback(true);
    });
}
