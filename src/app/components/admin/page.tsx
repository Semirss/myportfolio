import { getSkills, addSkill, deleteSkill, getProjects, addProject, deleteProject } from '@/app/actions'
import { revalidatePath } from 'next/cache'

export default async function AdminPage() {
  const skills = await getSkills()
  const projects = await getProjects()

  async function handleAddSkill(formData: FormData) {
    'use server'
    await addSkill({
      name: formData.get('name') as string,
      level: formData.get('level') as string,
    })
    revalidatePath('/admin')
  }

  async function handleDeleteSkill(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await deleteSkill(id)
    revalidatePath('/admin')
  }

  async function handleAddProject(formData: FormData) {
    'use server'
    await addProject({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      link: formData.get('link') as string,
    })
    revalidatePath('/admin')
  }

  async function handleDeleteProject(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await deleteProject(id)
    revalidatePath('/admin')
  }

  return (
    <div className="p-8 space-y-10 text-white">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Add Skill */}
      <form action={handleAddSkill} className="space-y-2">
        <h2 className="text-xl">Add Skill</h2>
        <input name="name" placeholder="Skill name" className="text-black p-2" />
        <input name="level" placeholder="Skill level" className="text-black p-2" />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded">Add</button>
      </form>

      {/* Skill List */}
      <div>
        <h2 className="text-xl">Skills</h2>
        {skills.map((skill: any) => (
          <form key={skill._id} action={handleDeleteSkill} className="flex gap-4 items-center my-2">
            <p>{skill.name} ({skill.level})</p>
            <input type="hidden" name="id" value={skill._id.toString()} />
            <button type="submit" className="bg-red-600 px-2 py-1 rounded">Delete</button>
          </form>
        ))}
      </div>

      {/* Add Project */}
      <form action={handleAddProject} className="space-y-2">
        <h2 className="text-xl">Add Project</h2>
        <input name="title" placeholder="Title" className="text-black p-2" />
        <input name="description" placeholder="Description" className="text-black p-2" />
        <input name="link" placeholder="Link" className="text-black p-2" />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded">Add</button>
      </form>

      {/* Project List */}
      <div>
        <h2 className="text-xl">Projects</h2>
        {projects.map((project: any) => (
          <form key={project._id} action={handleDeleteProject} className="flex gap-4 items-center my-2">
            <p>{project.title}</p>
            <input type="hidden" name="id" value={project._id.toString()} />
            <button type="submit" className="bg-red-600 px-2 py-1 rounded">Delete</button>
          </form>
        ))}
      </div>
    </div>
  )
}
