const express = require('express');
const app = express();

const Blog = require('../models/blog');
const Cat = require('../models/categoria');

app.get('/blog', (req, res) => {

    Blog.find()
        .populate('categoria', 'descripcion')
        .exec((err, blogDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            } else {
                res.render('blog', { blogDB });

            }


        })




});

module.exports = app;