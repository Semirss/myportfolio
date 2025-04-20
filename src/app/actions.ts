'use server'

import clientPromise from './components/lib/mongodb'
import { ObjectId } from 'mongodb'

// Skills
export async function getSkills() {
  const client = await clientPromise
  const db = client.db()
  return db.collection('skills').find({}).toArray()
}

export async function addSkill(skill: { name: string; level: string }) {
  const client = await clientPromise
  const db = client.db()
  await db.collection('skills').insertOne(skill)
}

export async function deleteSkill(id: string) {
  const client = await clientPromise
  const db = client.db()
  await db.collection('skills').deleteOne({ _id: new ObjectId(id) })
}

// Projects
export async function getProjects() {
  const client = await clientPromise
  const db = client.db()
  return db.collection('projects').find({}).toArray()
}

export async function addProject(project: {
  title: string
  description: string
  link: string
}) {
  const client = await clientPromise
  const db = client.db()
  await db.collection('projects').insertOne(project)
}

export async function deleteProject(id: string) {
  const client = await clientPromise
  const db = client.db()
  await db.collection('projects').deleteOne({ _id: new ObjectId(id) })
}
