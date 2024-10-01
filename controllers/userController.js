const UserSchema = require("../schema/UserShcema");


const UserController =  {
    getAllUsers: async (req, res)=>{
        try {
            const users = await UserSchema.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getUserById: async (req, res)=> {
        const {id} = req.params
        try{
            let user = await UserSchema.findByPk(id)
            if (!user) return res.status(404).json({ message: 'user cannot find' });
            res.status(200).json(user)
        }
        catch (e){
            res.status(500).json({ error: error.message });
        }

    },

    createUser: async (req, res)=> {
        const { firstName, age } = req.body;
        console.log(req.body.name)
        try {
            const user = await UserSchema.create({ firstName, age });
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;