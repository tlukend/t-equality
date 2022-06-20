const database = require('../../authentication/database');

class LoginController {
    //Bei logout läuft die Session terminiert und wir leiten den User auf die Startseite
    logout(req, res){
        req.session.destroy();
        res.redirect('/');
    }

    login(req, res){
        console.log(req.body);
        database.getInstance().checkLogin(req.body.email, req.body.password);
        //hier soll noch auf die Datenbank verwiesen werden
        if(req.body.email === 'slavica-alvir@hotmail.com' && req.body.password === 'cisco'){
            req.session.userid = 'slavi';
            res.redirect('/');
        }else{
            res.send('Invalid username or password');
        }
    }
}

module.exports = new LoginController();


