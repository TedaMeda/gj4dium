# Backend Setup Guide

## Environment Configuration

This project uses Cloudflare Workers with sensitive configuration stored in `wrangler.jsonc` for production and `.env` for local development.

### Setup Steps:

1. **For Cloudflare Workers (Production):**
   
   **Copy the wrangler template file:**
   ```bash
   cp wrangler.template.jsonc wrangler.jsonc
   ```

   **Update `wrangler.jsonc` with your actual values:**
   - Replace `YOUR_DATABASE_URL_HERE` with your actual Prisma database URL
   - Replace `YOUR_JWT_SECRET_HERE` with a strong JWT secret

   **Example `wrangler.jsonc`:**
   ```jsonc
   {
     "$schema": "node_modules/wrangler/config-schema.json",
     "name": "gj4diam-backend",
     "main": "src/index.ts",
     "compatibility_date": "2025-06-24",
     "vars": {
       "DATABASE_URL": "prisma://your-actual-database-url",
       "JWT_SECRET": "your-strong-jwt-secret"
     }
   }
   ```

2. **For Local Development:**
   
   **Copy the environment template file:**
   ```bash
   cp .env.template .env
   ```

   **Update `.env` with your actual values:**
   ```bash
   # Database Configuration
   DATABASE_URL="your-actual-database-url"
   
   # JWT Configuration
   JWT_SECRET="your-strong-jwt-secret"
   ```

### Security Notes:

- The `wrangler.jsonc` and `.env` files are gitignored to prevent committing sensitive data
- Use the `wrangler.template.jsonc` and `.env.template` as references for the file structure
- For production, consider using Cloudflare's secret management features
- Never commit actual database URLs or JWT secrets to version control

### Alternative: Using .dev.vars for Cloudflare Workers

For local development with Wrangler, you can also use a `.dev.vars` file:

```bash
# .dev.vars
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
```

This file is automatically gitignored and will be used by Wrangler for local development.

### Generating a Strong JWT Secret

You can generate a strong JWT secret using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Database URL Examples

- **Prisma Accelerate:** `prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY`
- **Local PostgreSQL:** `postgresql://username:password@localhost:5432/database_name`
- **Supabase:** `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres` 