// Nodemailer & Gmail API

var nodemailer = require('nodemailer')
var xoauth2 = require('xoauth2')

// call html page as email template
var fs = require('fs')
var halamanEmail = fs.readFileSync('./tes_email_template.html')

// deklarasi email transporter
var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aduhcapekkali@gmail.com',
        type: 'OAuth2',
        clientId: 'mysecretclientid',
        clientSecret: 'mysecretclientsecret',
        refreshToken: 'mysecretrefreshtoken'
    }  
})

// deklarasi email yang akan dikirim
var emailku = {
    from: 'superman <superman@dc.com>',
    to: 'lintangwisesa@ymail.com, lintangbagus@mail.ugm.ac.id',
    subject: 'URGENT! 🤖',
    // text: 'Halo dunia!'
    html: halamanEmail,
    attachments:[{
            filename: 'barca.png', 
            path:'https://vignette.wikia.nocookie.net/logopedia/images/0/0e/Barcelona.png'
        },
        {
            filename: 'pesan.txt',
            content: 'Halo, apa kabar? Maaf nyepam!'
        }
    ]
}

sender.sendMail(emailku, (error)=>{
    if(error){console.log(error)}
    else{console.log('Email sukses terkirim!')}
})