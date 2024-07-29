const path = require('path');
const db = require('./../database/models');




const userController = {
    list: (req, res) => {
        db.User.findAll()
            .then(user=> {
                res.render('user.ejs', {user})
            })
    },
    detail: (req, res) =>{
        db.User.findByPk(req.params.user_id)
        .then(user=> {
            res.render ("userDetail.ejs", {user:user})
        })
    },

    create: (req ,res) =>{
        db.User.findAll()
            .then(user=> {
                res.render('userCreate.ejs', {user:user})
            })
    },
    save: (req ,res) =>{
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol
        }).then(() =>
            res.redirect('/user'));
    },
    edit: (req ,res) =>{
        db.User.findByPk(req.params.user_id)
            .then(user=> {
                res.render('userEdit.ejs', {user : user})
            })

    },
    update: (req, res) =>{
        db.User.update({
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol
        },{
            where:{
                user_id : req.params.user_id
            }
        })
        res.redirect ("/user")
    }
    }
module.exports = userController;