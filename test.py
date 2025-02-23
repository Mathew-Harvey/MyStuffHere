import os
from PIL import Image

# Settings
width, height = 16, 24  # Character dimensions
scale = 10  # Scale factor
output_dir = "pixel_art_frames"
os.makedirs(output_dir, exist_ok=True)

# Color palette with shading
colors = {
    "skin_light": (255, 220, 180),
    "skin_medium": (255, 204, 153),
    "skin_dark": (200, 150, 100),
    "hair": (50, 30, 10),
    "eyes": (0, 0, 0),
    "mouth_neutral": (160, 82, 45),
    "mouth_happy": (255, 0, 0),
    "mouth_angry": (128, 0, 0),
    "mouth_sad": (100, 50, 50),
    "mouth_frustrated": (180, 20, 20),
    "mouth_satisfied": (200, 100, 50),
    "clothes_light": (100, 100, 255),
    "clothes_medium": (0, 0, 255),
    "clothes_dark": (0, 0, 150),
    "background": (200, 200, 200),
    "water": (0, 191, 255)
}

# Facial expressions
expressions = {
    "neutral": colors["mouth_neutral"],
    "happy": colors["mouth_happy"],
    "angry": colors["mouth_angry"],
    "sad": colors["mouth_sad"],
    "frustrated": colors["mouth_frustrated"],
    "satisfied": colors["mouth_satisfied"],
    "surprised": colors["mouth_neutral"]  # Wide mouth defined in drawing
}

# Hair pattern
hair_pattern = [
    (4, 3), (5, 2), (6, 1), (7, 1), (8, 1), (9, 2), (10, 3),
    (5, 4), (6, 3), (9, 4), (10, 4)
]

# Frame definitions (arm and leg positions)
frames = [
    # Walking frames
    {"name": "walking1", "left_arm": [(4,17), (4,18), (5,17), (5,18)], "right_arm": [(10,17), (10,18), (11,17), (11,18)], 
     "left_leg": [(6,20), (6,21), (7,20), (7,21)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "walking2", "left_arm": [(5,17), (5,18), (6,17), (6,18)], "right_arm": [(9,17), (9,18), (10,17), (10,18)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,20), (8,21), (9,20), (9,21)]},
    # Standing frame
    {"name": "standing", "left_arm": [(4,17), (4,18), (5,17), (5,18)], "right_arm": [(10,17), (10,18), (11,17), (11,18)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    # Action frames
    {"name": "bending", "left_arm": [(4,19), (4,20), (5,19), (5,20)], "right_arm": [(10,19), (10,20), (11,19), (11,20)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "reaching_up", "left_arm": [(4,15), (4,16), (5,15), (5,16)], "right_arm": [(10,15), (10,16), (11,15), (11,16)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "holding", "left_arm": [(5,18), (5,19), (6,18), (6,19)], "right_arm": [(9,18), (9,19), (10,18), (10,19)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "dropping", "left_arm": [(4,18), (4,19), (5,18), (5,19)], "right_arm": [(10,18), (10,19), (11,18), (11,19)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    # Reaction frame (arms up for 'wet' and 'surprised')
    {"name": "reaction", "left_arm": [(4,15), (4,16), (5,15), (5,16)], "right_arm": [(10,15), (10,16), (11,15), (11,16)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
]

# Function to determine shade based on position (top-left light source)
def get_shade(x, y, part):
    intensity = x + y  # Simple light calculation
    if part == "skin":
        if intensity <= 20:
            return colors["skin_light"]
        elif intensity <= 24:
            return colors["skin_medium"]
        else:
            return colors["skin_dark"]
    elif part == "clothes":
        if intensity <= 26:
            return colors["clothes_light"]
        elif intensity <= 29:
            return colors["clothes_medium"]
        else:
            return colors["clothes_dark"]
    return colors[part]  # Default for non-shaded parts

# Function to draw character
def draw_character(frame, emotion, special_state=None):
    img = Image.new("RGB", (width, height), colors["background"])
    pixels = img.load()

    # Head (8x10, adjusted proportions)
    for x in range(4, 12):
        for y in range(5, 15):
            pixels[x, y] = get_shade(x, y, "skin")
    for hx, hy in hair_pattern:
        if 0 <= hx < width and 0 <= hy < height:
            pixels[hx, hy] = colors["hair"]
    pixels[6, 9] = colors["eyes"]
    pixels[9, 9] = colors["eyes"]

    # Mouth based on emotion
    if emotion == "happy":
        pixels[7, 12] = expressions[emotion]
        pixels[8, 12] = expressions[emotion]
        pixels[7, 13] = expressions[emotion]
        pixels[8, 13] = expressions[emotion]
    elif emotion == "angry":
        pixels[7, 12] = expressions[emotion]
        pixels[8, 12] = expressions[emotion]
    elif emotion == "sad":
        pixels[7, 14] = expressions[emotion]
        pixels[8, 14] = expressions[emotion]
    elif emotion == "frustrated":
        pixels[7, 12] = expressions[emotion]
        pixels[8, 12] = expressions[emotion]
        pixels[7, 13] = expressions[emotion]
        pixels[8, 13] = expressions[emotion]
    elif emotion == "satisfied":
        pixels[7, 13] = expressions[emotion]
        pixels[8, 13] = expressions[emotion]
        pixels[6, 12] = expressions[emotion]
        pixels[9, 12] = expressions[emotion]
    elif emotion == "surprised":
        pixels[7, 11] = expressions[emotion]
        pixels[8, 11] = expressions[emotion]
        pixels[7, 12] = expressions[emotion]
        pixels[8, 12] = expressions[emotion]
    else:  # neutral
        pixels[7, 12] = expressions["neutral"]
        pixels[8, 12] = expressions["neutral"]

    # Torso
    for x in range(6, 10):
        for y in range(15, 20):
            pixels[x, y] = get_shade(x, y, "clothes")

    # Arms and legs with shading
    for ax, ay in frame["left_arm"]:
        if 0 <= ax < width and 0 <= ay < height:
            pixels[ax, ay] = get_shade(ax, ay, "skin")
    for ax, ay in frame["right_arm"]:
        if 0 <= ax < width and 0 <= ay < height:
            pixels[ax, ay] = get_shade(ax, ay, "skin")
    for lx, ly in frame["left_leg"]:
        if 0 <= lx < width and 0 <= ly < height:
            pixels[lx, ly] = get_shade(lx, ly, "clothes")
    for lx, ly in frame["right_leg"]:
        if 0 <= lx < width and 0 <= ly < height:
            pixels[lx, ly] = get_shade(lx, ly, "clothes")

    # Special state: Wet (add water drops)
    if special_state == "wet":
        water_pixels = [(5, 4), (10, 5), (7, 7), (8, 11)]
        for wx, wy in water_pixels:
            if 0 <= wx < width and 0 <= wy < height:
                pixels[wx, wy] = colors["water"]

    return img

# Generate frames
# Walking frames (neutral)
for frame in frames:
    if frame["name"] in ["walking1", "walking2"]:
        img = draw_character(frame, "neutral")
        img = img.resize((width * scale, height * scale), Image.NEAREST)
        img.save(f"{output_dir}/man_{frame['name']}.png")

# Standing frames (all emotions)
standing_frame = next(f for f in frames if f["name"] == "standing")
for emotion in expressions.keys():
    if emotion not in ["surprised"]:  # Surprised is a reaction state
        img = draw_character(standing_frame, emotion)
        img = img.resize((width * scale, height * scale), Image.NEAREST)
        img.save(f"{output_dir}/man_standing_{emotion}.png")

# Action frames (neutral)
for frame in frames:
    if frame["name"] in ["bending", "reaching_up", "holding", "dropping"]:
        img = draw_character(frame, "neutral")
        img = img.resize((width * scale, height * scale), Image.NEAREST)
        img.save(f"{output_dir}/man_{frame['name']}.png")

# Reaction frames
reaction_frame = next(f for f in frames if f["name"] == "reaction")
img_surprised = draw_character(reaction_frame, "surprised")
img_surprised = img_surprised.resize((width * scale, height * scale), Image.NEAREST)
img_surprised.save(f"{output_dir}/man_surprised.png")

img_wet = draw_character(reaction_frame, "frustrated", special_state="wet")
img_wet = img_wet.resize((width * scale, height * scale), Image.NEAREST)
img_wet.save(f"{output_dir}/man_wet.png")

print(f"All frames saved in '{output_dir}'!")