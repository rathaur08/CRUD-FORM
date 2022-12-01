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

    static editDoc = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await StudentModle.findById(req.params.id)
            // console.log(result)
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error)
        }
        
    }

    static updateDocById = async (req, res) => {
        // console.log(req.params.id);
        // console.log(req.body);
        try {
            const result = await StudentModle.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result)
        } catch (error) {
            console.log(error)
            
        }
        res.redirect("/student")
    }

    static deleteDocById = async (req, res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModle.findByIdAndDelete(req.params.id)
            // console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
            
        }
    }
}

export default StudentController;