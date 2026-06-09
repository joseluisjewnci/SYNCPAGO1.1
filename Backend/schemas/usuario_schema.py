from pydantic import BaseModel, EmailStr
from typing import Optional
 
class UsuarioRegistro(BaseModel):
    nombre:   str
    correo:   EmailStr
    # FIX: celular añadido como campo opcional (el frontend lo envía)
    celular:  Optional[str] = None
    password: str
 
class UsuarioLogin(BaseModel):
    correo:   EmailStr
    password: str
 
class UsuarioRespuesta(BaseModel):
    nombre: str
    correo: str
    celular: Optional[str] = None
 