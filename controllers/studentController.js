import StudentModle from "../models/Student.js";

class StudentController {

    static createDoc = (req, res) => {
        res.redirect("/student")
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModle.find()
            console.log(result)
            res.render("index", {data: result}) 
        } catch (error) {
            console.log(error)
        }

    }

    static editDoc = (req, res) => {
        res.render("edit")
    }

    static updateDocById = (req, res) => {
        res.redirect("/student")
    }

    static deleteDocById = (req, res) => {
        res.redirect("/student")
    }
}

export default StudentController;