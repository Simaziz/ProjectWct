import mongoose from "mongoose";

// MongoDB Schema for Comments
const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
