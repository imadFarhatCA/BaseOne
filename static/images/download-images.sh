#!/bin/bash
BASE="https://www.baseone.it/wp-content/uploads/2021"
cd "$(dirname "$0")"

curl -L "$BASE/07/Swimming-in-Bue-Marino.jpg"                          -o hero-cave.jpg
curl -L "$BASE/07/Darkness-and-light-at-Grotta-del-Fico-scaled.jpg"    -o divider-cave.jpg
curl -L "$BASE/07/Bue-Marino-main-passage-scaled.jpg"                  -o hero-diving.jpg
curl -L "$BASE/07/Speleothemes-in-Bue-Marino-scaled.jpg"               -o divider-diving.jpg
curl -L "$BASE/07/DPV-training-in-ow.jpg"                              -o hero-training.jpg
curl -L "$BASE/07/Documenting-Bue-Marino-scaled.jpg"                   -o divider-training.jpg
curl -L "$BASE/07/Air-and-water-underground-scaled.jpg"                -o hero-exploration.jpg
curl -L "$BASE/07/Huge-room-in-Bue-Marino-Ramo-Nord.jpg"               -o divider-exploration.jpg
curl -L "$BASE/07/Set-up-for-heavy-gear.jpg"                           -o hero-facility.jpg
curl -L "$BASE/07/Dive-rib.jpg"                                        -o divider-facility.jpg
curl -L "$BASE/07/Comfort-before-the-dive.jpg"                         -o hero-about.jpg
curl -L "$BASE/07/Reflections-in-Bue-Marino-Ramo-Nord-scaled.jpg"      -o divider-about.jpg
curl -L "$BASE/07/Bue-Marino-blue-colour-scaled.jpg"                   -o hero-plan.jpg

echo "Done."
