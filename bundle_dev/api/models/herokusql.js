import db from '../connections/mysql-con.js';

// feito na velocidade
// retorna conexoes com o banco
export default class Sistema {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    salvar() {
        // return db.execute(
        //     'INSERT INTO tester (title, content) VALUES (?, ?)', [this.title, this.content]
        // );
    }

    static pegarTodos() {
        return db.execute('SELECT title, content FROM `heroku_3f91cda5aaca95a`.`tester`');
    };
}