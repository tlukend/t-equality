const database = require('../../authentication/database');
const{ collection, getDocs, query, orderBy, doc, setDoc, getDoc, deleteDoc, updateDoc } = require('firebase/firestore');

class Question {
    constructor(question, userid, id) {
       this.question = question;
       this.id = id;
       this.userid = userid;
    }
}

class QuestionModel{
    constructor() {
    }

    async getQuestions() {
        const q = query(database.getInstance().getQuestions(), orderBy('question'));
        let result = await getDocs(q);
        return result.docs.map(doc => {
            let data = doc.data();
            return new Question(data.question, data.userid, doc.id);
        });
    }

    async getQuestion(id) {
        let result = await getDoc(doc(database.getInstance().getQuestions(), id));
        return result.exists() ? result.data() : null;
    }

    async deleteQuestion(id) {
        let db = database.getInstance().getDatabase();
        let questions = database.getInstance().getQuestions();

        try {
            await deleteDoc(doc(db, questions.id, id));
            return true;
        } catch {
            return false;
        }
    }

    async addQuestion(question) {
        let docRef = doc(database.getInstance().getQuestions());
        await setDoc(docRef, {
            question: question.question,
            userid: question.userid
        });
        return new Question(question.question, question.userid, docRef.id);
    }

    async editQuestion(id,question) {
        let db = database.getInstance().getDatabase();
        let questions = database.getInstance().getQuestions();
        let docRef = doc(db, questions.id, id);

        try {
            await updateDoc(docRef,{
                question: question.question
            });
            return new Question(question.question, question.userid, id);
        } catch {
            return null;
        }
    }
}

const model = new QuestionModel();
module.exports = model;