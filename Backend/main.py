from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
 
from database import engine
from models.usuario import Base
from routers.auth import router as auth_router
 
# Crea las tablas en la BD si no existen
Base.metadata.create_all(bind=engine)
 
app = FastAPI(title="SyncPago API", version="1.0.0")
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],         # En producción: poner la URL del frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
app.include_router(auth_router)
 
@app.get("/")
def inicio():
    return {"mensaje": "API SyncPago funcionando"}
 