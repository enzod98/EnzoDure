const express = require('express');
const app = express();

const path = require('path');

const Blog = require('../models/blog');
const Cat = require('../models/categoria');

app.get('/blog', (req, res) => {

    Blog.find()
        .populate('categoria', 'descripcion')
        .sort('-fechaCreacion')
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

app.get('/blog/:id', (req, res) => {

    let id = req.params.id;
    Blog.find({ _id: id })
        .populate('categoria', 'descripcion')
        .sort('-fechaCreacion')
        .exec((err, articuloDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            } else {
                res.render('blogId', { articuloDB: articuloDB[0] });

            }
        })

})

module.exports = app;