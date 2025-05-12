#!/bin/sh

# بناء الفرونت
cd frontend
npm install
npm run build

# نسخ ملفات الفرونت المبنية إلى الباك اند
cp -r build ../backend/build

# تشغيل الباك اند بـ gunicorn
cd ../backend
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
