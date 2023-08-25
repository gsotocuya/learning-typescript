import express from 'express';
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(201).json({
        ok:true,
        msg:'nuevo id:1313131212'
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
