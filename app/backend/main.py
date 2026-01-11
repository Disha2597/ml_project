from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, validator
from typing import Optional, List
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import cosine_similarity
import joblib
import os
from datetime import datetime

app = FastAPI(title = "HomePulse API", version = "1.0.0")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RoommateInput(BaseModel):
    """Input model for roommate matching"""
    name : str
    sex : str
    budget : str
    location_pref : str
    commute_pref : int
    cleaning_freq : int # 1-5 scale
    dishes : str # "Yes" or "No"
    noise_bother : str # "yes" or "no"
    noise_time : Optional[str] = "" # "9pm", "10pm", etc.
    study_hours : int
    invite_people : str # "9pm", "10pm", etc.

@validator('budget')
def budget_must_be_positive(cls, v):
    if v < 0:
        raise ValueError('Budget must be positive')
    return v

@validator('commute_pref', 'cleaning_freq')
def must_be_1_to_5(cls, v):
    if v < 1 or v > 5:
            raise ValueError('Must be between 1 and 5')
    return v

@validator('study_hours')
def 