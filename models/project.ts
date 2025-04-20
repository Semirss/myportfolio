import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  githubUrl: String,
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
