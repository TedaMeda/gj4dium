import { Hono } from "hono";
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const blogRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>()


blogRoute.use('/*', async (c, next) => {
    const header = await c.req.header("Authorization") || "";
    const token = header.split(" ")[1];
    try {
        const user: any = await verify(token, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id)
            await next()
        }
        else {
            c.status(403)
            return c.json({ error: "unauthorized" })
        }
    }
    catch (e) {
        c.status(403)
        return c.json({ error: "unauthorized" })
    }
})

blogRoute.post('/', async (c) => {
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate())
    const body = await c.req.json();
    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get("userId"),
                publishedDate: new Date()
            }
        })
        return c.json({
            id: blog.id
        })
    }
    catch (e) {
        c.status(411)
        return c.json({ message: "Error while creating blog" })
    }
})

blogRoute.put('/', async (c) => {
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate())
    const body = await c.req.json();
    try {
        const blog = await prisma.post.update({
            data: {
                title: body.title,
                content: body.content,
            },
            where: {
                id: body.id
            }
        })
        return c.json({
            id: blog.id
        })
    }
    catch (e) {
        c.status(411)
        return c.json({ message: "Error while updating blog" })
    }
})

blogRoute.get('/bulk', async (c) => {
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate())
    try {
        const blogs = await prisma.post.findMany({
            select:{
                id: true,
                title: true,
                content: true,
                publishedDate: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        })
        return c.json({
            blogs
        })
    } catch (e) {
        
        c.status(411)
        return c.json({ message: "Error while fetching blog" })
    }
})

blogRoute.get('/:id', async (c) => {
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate())
    const id = await c.req.param("id")
    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id
            },
            select:{
                id: true,
                title: true,
                content: true,
                publishedDate: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    } catch (e) {
        c.status(411)
        return c.json({ message: "Error while fetching blog" })
    }
})