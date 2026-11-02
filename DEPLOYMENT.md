# Deployment Guide: Vercel (Frontend) & Render (Backend)

This repository is pre-configured and deployment-ready for **Vercel** (Vite + React frontend) and **Render** (Node.js + Express backend).

---

## 1. Backend Deployment on Render

### Steps:
1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New → Web Service**.
2. Connect your GitHub repository.
3. Configure the service settings:
   - **Name**: `vristo-backend` (or your preferred name)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/health`

4. Add **Environment Variables** in the Render settings:
   | Key | Value / Example | Notes |
   | :--- | :--- | :--- |
   | `NODE_ENV` | `production` | Production mode |
   | `MONGO_URI` | `mongodb+srv://<username>:<password>@cluster0.mongodb.net/` | Your MongoDB Atlas connection string |
   | `KEY` | `your_secret_jwt_key_random_string` | Secret key used to sign JWT tokens |
   | `CLIENT_URL` | `https://<your-app>.vercel.app` | Your Vercel frontend URL for CORS (can be comma-separated) |

5. Click **Create Web Service**.
   - Render will build and deploy your backend.
   - Once deployed, copy your backend URL (e.g., `https://vristo-backend.onrender.com`).

*(Alternative: You can also deploy via Render Blueprint using the included `render.yaml` file by choosing **New → Blueprint**).*

---

## 2. Frontend Deployment on Vercel

### Steps:
1. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New → Project**.
2. Import your GitHub repository.
3. Configure the project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (project root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. Add **Environment Variables** in Vercel:
   | Key | Value / Example |
   | :--- | :--- |
   | `VITE_API_BASE_URL` | `https://<your-render-backend-name>.onrender.com/api/user` |

   *(Important: Ensure `/api/user` is appended to your Render URL).*

5. Click **Deploy**.
   - Vercel will build the frontend with the `vercel.json` SPA rewrite rules and connect it to your live Render backend.

---

## 3. Local Development

- **Frontend**:
  ```bash
  npm install
  npm run dev
  # Runs at http://localhost:5173
  ```

- **Backend**:
  ```bash
  cd backend
  npm install
  npm run dev
  # Runs at http://localhost:4000
  ```

