from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import declarative_base
 
Base = declarative_base()
 
class Usuario(Base):
 
    __tablename__ = "usuarios"
 
    id_usuario = Column(Integer, primary_key=True, index=True)
 
    nombre = Column(String, nullable=False)
 
    correo = Column(String, unique=True, nullable=False, index=True)
 
    # FIX: campo celular añadido (el frontend lo envía en el registro)
    celular = Column(String, nullable=True)
 
    password_hash = Column(String, nullable=False)
 
    activo = Column(Boolean, default=True)
 