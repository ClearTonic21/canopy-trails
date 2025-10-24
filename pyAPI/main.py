import json
from dataclasses import dataclass, field

from fastapi import FastAPI, HTTPException, Response

app = FastAPI()


@dataclass
class Canopy:
  id: str
  name: str
  tags: list[str] = field(default_factory=list)
  description: str = ""


canopies_collection: dict[str, Canopy] = {}

with open("canopy.json", encoding="utf8") as file:
  canopies_json = json.load(file)
  for canopy_json in canopies_json:
    canopy = Canopy(**canopy_json)
    canopies_collection[canopy.id] = canopy


@app.get("/")
def read_root() -> Response:
  return Response("The server is running.")

@app.get("/canopies/{canopy_id}", response_model=Canopy)
def read_item(canopy_id: str) -> Canopy:
  if canopy_id not in canopies_collection:
    raise HTTPException(status_code=404, detail="Canopy not found")
  return canopies_collection[canopy_id]