from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import dogs, adoptions, accounts
from authenticator import authenticator


app = FastAPI()
app.include_router(dogs.router, tags=["Dogs"])
app.include_router(adoptions.router, tags=["Adoptions"])
app.include_router(authenticator.router, tags=["Accounts"])
app.include_router(accounts.router, tags=["Accounts"])

origins = [
    "http://localhost:8000",
    "http://localhost:3000",
    "https://whisker-watchers.gitlab.io",
    "https://whisker-watchers.gitlab.io/pawsitive-outcome",
    "https://pawsitive-service.sept-ct-1.mod3projects.com",
    os.environ.get("REACT_APP_PAWSITIVE_SERVICE_API_HOST", None),
    os.environ.get("PUBLIC_URL", None),
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
