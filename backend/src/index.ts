import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRoutes } from './routes/user'
import { blogRoute } from './routes/blog'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.use(cors());
app.route('/api/v1', userRoutes);
app.route('/api/v1/blog', blogRoute);


export default app
