const database = require('../../authentication/database');

class LoginController {
    //Bei logout läuft die Session terminiert und wir leiten den User auf die Startseite
    logout(req, res){
        req.session.destroy();
        res.redirect('/');
    }

    login(req, res){
        database.getInstance().checkLogin(req.body.email, req.body.password).then(data => {
            //hier soll noch auf die Datenbank verwiesen werden
            if(data.length === 1){
                req.session.userid = data[0].userid;
                res.redirect('/');
            }else{
                res.send('Invalid username or password');
            }
        });
    }
    signUp(req, res){
        database.getInstance().signUp(req.body.email, req.body.password, req.body.userid).then(()=>{
            res.status(200).send();
        }).catch(err => {
            res.status(409).send(err.message);
        });
    }
}

module.exports = new LoginController();


