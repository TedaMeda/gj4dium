import { Hono } from "hono";
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const userRoutes =  new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

userRoutes.post('/signup', async (c) => {
  const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate())
  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    
    return c.json({
      jwt: token
    })
  }
  catch (e) {
    c.status(411);
    return c.json({ message: "error while sign up" })
  }
})

userRoutes.post('/signin', async (c) => {
  const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate())
  const body = await c.req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password
      }
    });
    if (!user) {
      c.status(403)
      return c.json({ message: "user not found" })
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token
    })
  }
  catch (e) {
    c.status(411);
    return c.json({ message: "error while sign in" })
  }
})
