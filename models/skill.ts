import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: String,
  icon: String,
  level: Number,
});


const SkillModel =mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
export default SkillModel;