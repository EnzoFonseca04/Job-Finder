const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

//rota de teste
router.get('/test', (req, res) => {
    res.send('Teste de rota');
});

router.get('/add', (req, res) => {
    res.render('add');
});

// add job via post
router.post('/add', (req, res) => {

    let { title, descripition, salary, company, email, new_job } = req.body;


    //insert
    Job.create({
        title,
        descripition,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;