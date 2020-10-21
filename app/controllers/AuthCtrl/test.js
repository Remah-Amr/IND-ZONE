const jwt = require("jsonwebtoken");
const { isUndefined } = require("util");
const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const { APIResponse } = require("../../utils");
const CodeGenerator = require("node-code-generator");
const generator = new CodeGenerator();
const _ = require("lodash");
const moment = require("moment");
const tz = require("moment-timezone");

module.exports = $baseCtrl(async (req, res) => {
 // get project orders , add nameOfProject
 let projects = await models.project.find()
 for(let i = 0; i < projects.length;i++){
    await projects[i].set({activity:"Build Factory"}).save()
 }
 return APIResponse.Ok(res,'Ok')
});

// console.log(req.me.id)
// console.log(req.params.id)
// console.log(req.query.name)
// console.log(req.body)
// return APIResponse.Ok(res, { msg: "remah" })

// const user = req.authenticatedUser
// const initiator = user;
// const receiver = user
// const notification = await models
//     .notification({
//         title: 'test',
//         body: 'Im remah',
//         initiator: initiator.id,
//         receiver: receiver.id,
//         subjectType: 'solution',
//         subject: 128
//     })
//     .save();
// await receiver.sendNotification(notification.toFirebaseNotification());
// return APIResponse.Ok(res, 'receivers')

// const user = req.authenticatedUser
// const initiator = user;
// const receiver = user
// const notification = await models
//     .notification({
//         title: 'test',
//         body: 'Im remah',
//         initiator: initiator.id,
//         receiver: receiver.id,
//         subjectType: 'solution',
//         subject: 128
//     })
//     .save();
// await receiver.sendNotification(notification.toFirebaseNotification());
// // let notification = await models.notification.findById(24).populate('subject')
// return APIResponse.Ok(res, notification)
// let subject = await models.subject.findById(3)
// subject = subject.toJSON()
// let lectures = await models.lecture.find()
// lectures = res.toJSON(lectures, {
//     hide: ['createdAt', 'updatedAt'],
//     append: { keyYouWant: 'ValueYouWant', keyFromMyDoc: { ref: 'title' } }
// })
// for (let i = 0; i < lectures.length; i++) {
//     let sessions = await models.session.find({ lecture: lectures[i].id }).populate('users')
//     sessions = res.toJSON(sessions)
//     for (let j = 0; j < sessions.length; j++) {
//         let key = _.findKey(sessions[j].users, { id: req.authenticatedUser.id })
//         sessions[j].isIn = key === undefined ? false : true
//     }
//     lectures[i] = { ...lectures[i], sessions }
// }
// subject.lectures = lectures
// return APIResponse.Ok(res, subject)

/**
 * how to use options in model :
 let section = await models._user.findOne()
section = section.toJSON({ password: 'password' })
return APIResponse.Ok(res, section)

=> in responce function in user model:
password: options.password ? 'yes' : 'no',
 */

// let durationInMinutes = 60
//     let now = new Date();
//     let max = new Date();
//     let min = new Date();
//     max.setTime(now.getTime() + durationInMinutes * 60000);
//     min.setTime(now.getTime() - durationInMinutes * 60000);
//     const comments = await comment.find({ createdAt: { $lt: max, $gte: min } });

/********************************************************* */
/*
 const exam = {
        "id": 9,
        "points": 24,
        "questions":
            [
                {
                    "id": 29,
                    "question": {
                        "id": 20,
                        "type": "truefalse",
                        "head": "Bakrey is older than remah ?",
                        "modelAnswer": true,
                        "parentQuestion": {}
                    },
                    "point": 5
                },
                {
                    "id": 30,
                    "question": {
                        "id": 21,
                        "type": "choose",
                        "head": "Hamza is ....",
                        "choices": [
                            "company",
                            "college",
                            "school",
                            "university"
                        ],
                        "modelAnswer": 0,
                        "parentQuestion": {}
                    },
                    "point": 4
                },
                {
                    "id": 28,
                    "question": {
                        "id": 59,
                        "type": "group",
                        "head": "see this paragraph and answer following questions",
                        "image": "https://res.cloudinary.com/bastahlk/image/upload/v1592602229/lehk11lirj6bzi8usqvp.png",
                    },
                    "point": 20,
                    "childrenQuestions": [
                        {
                            "id": 1,
                            "child": {
                                "id": 60,
                                "type": "truefalse",
                                "head": "Bakrey is older than remah ?",
                                "modelAnswer": true,
                                "parentQuestion": {
                                    "question": 59,
                                    "weight": 4
                                }
                            },
                            "point": 8
                        },
                        {
                            "id": 2,
                            "child": {
                                "id": 61,
                                "type": "truefalse",
                                "head": "Bakrey is older than remah ?",
                                "modelAnswer": true,
                                "parentQuestion": {
                                    "question": 59,
                                    "weight": 4
                                }
                            },
                            "point": 6
                        },
                    ]
                },
                {
                    "id": 55,
                    "question": {
                        "id": 55,
                        "type": "complete",
                        "head": "Hamza is ....",
                        "choices": [
                            "company",
                            "college",
                            "school",
                            "university"
                        ],
                        "modelAnswer": 0,
                        "parentQuestion": {}
                    },
                    "point": 4
                }
            ]
    }



    var solution = {
        questions:
            [
                {
                    "question": {
                        "id": 11,
                        "type": "truefalse",
                        "head": "Bakrey is older than remah ?",
                        "modelAnswer": true,
                        "parentQuestion": {}
                    },
                    "correct": false,
                    "mark": 0,
                    "answer": true

                },
                {
                    "question": {
                        "id": 11,
                        "type": "choose",
                        "head": "Hamza is ....",
                        "choices": [
                            "company",
                            "college",
                            "school",
                            "university"
                        ],
                        "modelAnswer": 0,
                        "parentQuestion": {}
                    },
                    "correct": false,
                    "mark": 0,
                    "answer": 0
                },
                {
                    "question": {
                        "id": 11,
                        "type": "truefalse",
                        "head": "Bakrey is older than remah ?",
                        "modelAnswer": true,
                        "parentQuestion": {
                            "question": 59,
                            "weight": 4
                        }
                    },
                    "correct": false,
                    "mark": 0,
                    "answer": true
                },
                {
                    "question": {
                        "id": 11,
                        "type": "truefalse",
                        "head": "Bakrey is older than remah ?",
                        "modelAnswer": true,
                        "parentQuestion": {
                            "question": 59,
                            "weight": 4
                        }
                    },
                    "correct": false,
                    "mark": 0,
                    "answer": false
                },
                {
                    "question": {
                        "id": 11,
                        "type": "complete",
                        "head": "Hamza is ....",
                        "choices": [
                            "company",
                            "college",
                            "school",
                            "university"
                        ],
                        "modelAnswer": 0,
                        "parentQuestion": {}
                    },
                    "correct": false,
                    "mark": 0,
                    "answer": 0
                }
            ]
    }


    let requireChecking = false;
    solution.questions.forEach(obj => {
        if (obj.question.type === 'truefalse' || obj.question.type === 'choose') {
            if (obj.question.parentQuestion.question !== undefined) { // check if children from group , instead check if undefined
                // find group question in exam => exam.questions[key]
                let key = _.findKey(exam.questions, _.matchesProperty('question.id', obj.question.parentQuestion.question))
                if (key === undefined) {
                    console.log("NO")
                    return
                }
                // find modelAnswer of child in exam and compare with obj solution
                let keyChild = _.findKey(exam.questions[key].childrenQuestions, _.matchesProperty('child.id', obj.question.id))
                if (keyChild === undefined) {
                    console.log("NO")
                    return
                }
                // exam.questions[key].childrenQuestions[keyChild].child.modelAnswer
                if (exam.questions[key].childrenQuestions[keyChild].child.modelAnswer === obj.answer) {
                    obj.correct = true
                    obj.mark = exam.questions[key].childrenQuestions[keyChild].point
                }
            } else {
                let key = _.findKey(exam.questions, _.matchesProperty('question.id', obj.question.id))
                if (key === undefined) {
                    console.log("NO")
                    return
                }
                if (exam.questions[key].question.modelAnswer === obj.answer) {
                    obj.correct = true
                    obj.mark = exam.questions[key].point
                }
            }
        } else requireChecking = true
    })
    if (requireChecking) solution.status = 'checking'
    else solution.status = 'done'
    solution.submittedAt = new Date()
    return APIResponse.Ok(res, solution)
*/

/*
 let exam = await models.exam
        .findById(14)
        .populate(['questions.question', 'questions.childrenQuestions.child'])
    if (!exam) return APIResponse.NotFound(res, 'No exam with that id')

    let solution = await models.solution
        .findOne()
        .populate('questions.question')
    let responce = []
    solution.questions.forEach(obj => {
        if (obj.question.parentQuestion.question !== undefined) {

            let key = _.findKey(exam.questions, _.matchesProperty('question.id', obj.question.parentQuestion.question))
            if (key === undefined) return

            let keyChild = _.findKey(exam.questions[key].childrenQuestions, _.matchesProperty('child.id', obj.question.id))
            if (keyChild === undefined) return

            // exam.questions[key].childrenQuestions[keyChild].answer = obj.answer
            // console.log(exam.questions[key].childrenQuestions[keyChild])
            responce.push({ question: exam.questions[key].childrenQuestions[keyChild], answer: obj.answer })

        } else {

            let key = _.findKey(exam.questions, _.matchesProperty('question.id', obj.question.id))
            if (key === undefined) return
            // exam.questions[key].answer = obj.answer
            // console.log(exam.questions[key])
            responce.push({ question: exam.questions[key], answer: obj.answer })
        }
    })

    return APIResponse.Ok(res, responce)
*/

/*
 let exam = await models.exam
        .findById(14)
        .populate(['questions.question', 'questions.childrenQuestions.child'])
    if (!exam) return APIResponse.NotFound(res, 'No exam with that id')

    let solution = await models.solution
        .findOne()
        .populate('questions.question')
    let responce = []
    exam.questions.forEach(obj => {
        if (obj.childrenQuestions.length > 0) {
            let cqr = []
            obj.childrenQuestions.forEach(obj2 => {
                let key = _.findKey(solution.questions, _.matchesProperty('question.id', obj2.child.id))
                if (key === undefined) return
                cqr.push({ question: obj2, answer: solution.questions[key].answer })
            })
            responce.push({ question: { group: obj, childrenQuestions: cqr } })
        } else {
            let key = _.findKey(solution.questions, _.matchesProperty('question.id', obj.question.id))
            if (key === undefined) return
            responce.push({ question: obj, answer: solution.questions[key].answer })
        }
    })
    return APIResponse.Ok(res, responce)
*/

/*
 var users = [
        { 'user': 'fred', 'points': 48 },
        { 'user': 'barney', 'points': 36 },
        { 'user': 'fred', 'points': 40 },
        { 'user': 'barney', 'points': 34 }
    ];



    ranked = _.orderBy(users, ['points'], ['desc']);

    return APIResponse.Ok(res, ranked)
*/

/*
 dateBefore10 = moment().subtract(10, 'days').toDate()
    const users = await models._user.find({ createdAt: { $gte: dateBefore10 } })
    return APIResponse.Ok(res, users)
*/

/*
let question = await models.bank.findById(21)
    let Time = moment(question.updatedAt)
        .diff(question.createdAt, 'seconds')
    return APIResponse.Ok(res, Time)
*/
