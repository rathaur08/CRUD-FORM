import StudentModle from "../models/Student.js";

class StudentController {

    static createDoc = async (req, res) => {
        // console.log(req.body)
        try {
            const {name, age, fees} = req.body
            const doc = new StudentModle({
                name:name,
                age:age,
                fees:fees
            })
            // Saving Document
            const result = await doc.save()
            // console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModle.find()
            // console.log(result)
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