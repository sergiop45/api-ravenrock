const postModel = require("../models/post.model");

const create = async (req, res) => {

    try {

        const { title, content, createdBy, createdAt, userId } = req.body;
        const createdPost = new postModel({ title, content, createdBy, createdAt, userId });
        await createdPost.save();

        res.status(201).json({ message: "Post created!", createdPost });

    } catch ( err ) {

        res.status(500).json({ message: err.message });

    }

}

const findAll = async (req, res) => {

    try {

        const posts = await postModel.find()
        res.status(200).json(posts);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

}

const findOne = async (req, res) => {

    try {

        const { id } = req.params;
        const post = await postModel.findById(id);

        if(!post) {

            return res.status(404).json({ message: "Post not found"});

        }

        res.status(200).json({post});

    } catch ( err ) {

        res.status(500).json({message: err.message});

    }

}

const remove = async (req, res) => {

    try {

        const { id } = req.params;
        const postDeleted = await postModel.findByIdAndDelete(id);

        if(!postDeleted) {

            return res.status(404).json({message: "Post not found"});

        }

        res.status(200).json({ message: "Post deleted sucessfully", postDeleted});

    } catch ( err ) {

        res.status(500).json({error: err.message});

    }

}

const update = async (req, res) => {

    try {

        const { id } = req.params;
        const { title, content } = req.body;

        const postUpdated = await postModel.findByIdAndUpdate(
            id, 
            {title, content}, 
            {new: true}
        );

        if(!postUpdated) {

            return res.status(404).json({message: "Post not found"});

        }

        res.status(200).json({message: "Post updated sucessfully", post: postUpdated});

    } catch (err) {

        res.status(500).json({error: err.message});

    }

}

module.exports = 
{
    create,
    findAll,
    findOne,
    remove,
    update
}