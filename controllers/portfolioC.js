const nodemialer = require("nodemailer");
module.exports = {

    //contact us
    HomePage:(req,res)=>{
      res.render("index");
    },
    contactus:(req,res)=>{
      const transporter = nodemialer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "hase271002@gmail.com",
          pass: "eshfzdgfepgrxaio",
        },
      });
    
        let name_ = req.body.name;
        let email_ = req.body.email;
        let subject_= req.body.subject;
        let message_ = req.body.message;
        var mailOption = {
          from: email_,
          to: "hase271002@gamil.com",
          subject: subject_,
          html:
            "<h1>AlamBinary01<br>"+
           " </h1><b>Name:</b><br>" +
            name_ +
            "<br><b>Email:</b><br>" +
            email_ +
            "<br><b>Message:</b><br> " +
            message_ +
            "<br><br><br>Thanks",
        };
        transporter.sendMail(mailOption,function(error,info){
          if(error) throw error;
          else console.log("GOOD");
        });
        res.render("index");
      
    }
};