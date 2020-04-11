const Contact = require('./Contact')

exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            //res.json(contacts)
            res.render('index', { contacts, error: {} })

        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "Error Occurred"
            })
        })


}
exports.getSinglaContact = (req, res) => {
    let { id } = req.params
    Contact.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "Error Occurred"
            })
        })

}
exports.createContact = (req, res) => {
    let { name, email, phone, id } = req.body

    // console.log(req.body)
    // return;
    let error = {}

    if (!name) {

        error.name = 'Please Proviede  a Name'
    }
    if (!email) {

        error.email = 'Please Proviede an email'
    }
    if (!phone) {

        error.phone = 'Please Proviede a phone'
    }


    let isError = Object.keys(error).length > 0;

    if (isError) {
        Contact.find()
            .then(contacts => {
                return res.render('index', { contacts, error })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    message: "Erro Occard"
                })

            })

    }
    // console.log(error, isError)
    // return

    if (id) {
        Contact.findOneAndUpdate({ _id: id }, {
            $set: {

                name,
                email,
                phone
            }
        }).then(() => {
            Contact.find()
                .then(contacts => {
                    res.render('index', { contacts, error: {} })
                })

        }).catch(e => {
            console.log(e)
            return res.json({
                message: "Erro habib"
            })
        })
    } else {

        let contact = new Contact({
            name,
            email,
            phone

        })
        contact.save()
            .then(e => {
                //res.json(e)
                Contact.find()
                    .then(contacts => {
                        return res.render('index', { contacts, error: {} })
                    })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    message: "Erro Occared"
                })
            })
    }
}
exports.updateContact = (req, res) => {
    let { name, email, phone } = req.body
    let { id } = req.params
    Contact.findOneAndUpdate({ _id: id }, {
            $set: {

                name,
                email,
                phone
            }
        }, { new: true })
        .then(Contact => {
            res.json(Contact)
        })
        .catch(e => {
            console.log(Contact)
            res.json({
                message: "Error Occurred"
            })
        })


}
exports.deleteContact = (req, res) => {

    let { id } = req.params
    Contact.findOneAndDelete({ _id: id })
        .then(() => {
            Contact.find()
                .then(contacts => {
                    res.render('index', { contacts, error: {} })
                })

        })
        .catch(e => {
            console.log(Contact)
            res.json({
                message: "Error Occurred"
            })
        })


}