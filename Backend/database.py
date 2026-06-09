from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
 
# Cambia "password" por tu contraseña real de PostgreSQL
DATABASE_URL = "postgresql://postgres:password@localhost/SYNCPAGO"
 
engine = create_engine(DATABASE_URL)
 
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
 
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
 