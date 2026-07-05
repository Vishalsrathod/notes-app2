# Quick Start Guide

## 5 Minute Setup

### Step 1: Clone and Install
```bash
git clone <repository-url>
cd notes-app
npm install
cd frontend && npm install && cd ..
```

### Step 2: Setup MongoDB
Choose one option:

**Option A: Local MongoDB**
- Download MongoDB from https://www.mongodb.com/try/download/community
- Install and start MongoDB
- Keep .env as is

**Option B: MongoDB Atlas (Cloud)**
- Go to https://www.mongodb.com/cloud/atlas
- Create a free account
- Create a cluster
- Copy connection string
- Update MONGODB_URI in .env file

### Step 3: Run Application
```bash
npm run dev
```

That's it! 🎉

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Common Commands

```bash
# Install dependencies
npm install
cd frontend && npm install && cd ..

# Run both server and client
npm run dev

# Run only backend
npm run server

# Run only frontend
npm run client

# Build frontend for production
cd frontend && npm run build
```

## Common Issues

**Q: Backend not connecting to MongoDB?**
A: 
1. Check MongoDB is running
2. Check MONGODB_URI in .env file
3. For Atlas, whitelist your IP address

**Q: Frontend showing blank page?**
A: 
1. Check backend is running on port 5000
2. Open browser console (F12) to check errors
3. Try clearing cache and refreshing

**Q: Can't start app?**
A: 
1. Delete node_modules: `rm -rf node_modules frontend/node_modules`
2. Reinstall: `npm install && cd frontend && npm install && cd ..`
3. Make sure ports 5000 and 3000 are free

## Next Steps

1. Try creating some notes in the app
2. Check how data is stored in MongoDB
3. Review the code to understand how it works
4. Try making your own modifications
5. Deploy to a platform like Heroku or Vercel

Happy Coding! 💻
