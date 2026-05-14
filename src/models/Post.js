import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        img: {
            type: String,
            required: true,
        },

        img2: {
            type: String,
            required: true,
        },

        url: {
            type: String,
            required: true,
            unique: true,
        },

        trend: {
            type: Boolean,
            default: false,
        },

        shortDesc: {
            type: String,
            required: true,
        },

        desc: [
            {
                type: String,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

// Fixed export — prevents overwrite errors in dev with Next.js hot reload
const Post = models.Post || model("Post", BlogSchema);
export default Post;