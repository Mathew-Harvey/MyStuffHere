import os
import json
import sys
from PIL import Image

# Check for required Pillow functionality
try:
    from PIL import ImageDraw, ImageFont
    PILLOW_FEATURES = True
except ImportError:
    PILLOW_FEATURES = False
    print("Warning: ImageDraw or ImageFont not available. Speech bubbles will be simplified.")

# Settings
width, height = 16, 24  # Character dimensions
scale = 10  # Scale factor
output_dir = "pixel_art_frames"
os.makedirs(output_dir, exist_ok=True)

# Color palette with shading
colors = {
    "skin_light": (255, 220, 180, 255),
    "skin_medium": (255, 204, 153, 255),
    "skin_dark": (200, 150, 100, 255),
    "hair": (50, 30, 10, 255),
    "eyes": (0, 0, 0, 255),
    "mouth_neutral": (160, 82, 45, 255),
    "mouth_happy": (255, 0, 0, 255),
    "mouth_angry": (128, 0, 0, 255),
    "mouth_sad": (100, 50, 50, 255),
    "mouth_frustrated": (180, 20, 20, 255),
    "mouth_satisfied": (200, 100, 50, 255),
    "clothes_light": (100, 100, 255, 255),
    "clothes_medium": (0, 0, 255, 255),
    "clothes_dark": (0, 0, 150, 255),
    "transparent": (0, 0, 0, 0),
    "water": (0, 191, 255, 255),
    "brick": (178, 34, 34, 255),
    "brick_highlight": (205, 92, 92, 255),
    "brick_shadow": (139, 0, 0, 255),
    "speech_bubble": (255, 255, 255, 255),
    "speech_text": (0, 0, 0, 255),
}

# Facial expressions
expressions = {
    "neutral": colors["mouth_neutral"],
    "happy": colors["mouth_happy"],
    "angry": colors["mouth_angry"],
    "sad": colors["mouth_sad"],
    "frustrated": colors["mouth_frustrated"],
    "satisfied": colors["mouth_satisfied"],
    "surprised": colors["mouth_neutral"]
}

# Hair pattern
hair_pattern = [
    (4, 3), (5, 2), (6, 1), (7, 1), (8, 1), (9, 2), (10, 3),
    (5, 4), (6, 3), (9, 4), (10, 4)
]

# Frame definitions (arm and leg positions)
frames = [
    {"name": "walking1", "left_arm": [(4,17), (4,18), (5,17), (5,18)], "right_arm": [(10,17), (10,18), (11,17), (11,18)], 
     "left_leg": [(6,20), (6,21), (7,20), (7,21)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "walking2", "left_arm": [(5,17), (5,18), (6,17), (6,18)], "right_arm": [(9,17), (9,18), (10,17), (10,18)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,20), (8,21), (9,20), (9,21)]},
    {"name": "standing", "left_arm": [(4,17), (4,18), (5,17), (5,18)], "right_arm": [(10,17), (10,18), (11,17), (11,18)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "bending", "left_arm": [(4,19), (4,20), (5,19), (5,20)], "right_arm": [(10,19), (10,20), (11,19), (11,20)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "reaching_up", "left_arm": [(4,15), (4,16), (5,15), (5,16)], "right_arm": [(10,15), (10,16), (11,15), (11,16)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "holding", "left_arm": [(5,18), (5,19), (6,18), (6,19)], "right_arm": [(9,18), (9,19), (10,18), (10,19)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "dropping", "left_arm": [(4,18), (4,19), (5,18), (5,19)], "right_arm": [(10,18), (10,19), (11,18), (11,19)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "reaction", "left_arm": [(4,15), (4,16), (5,15), (5,16)], "right_arm": [(10,15), (10,16), (11,15), (11,16)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "telling_joke1", "left_arm": [(5,17), (5,18), (6,17), (6,18)], "right_arm": [(10,15), (10,16), (11,15), (11,16)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "telling_joke2", "left_arm": [(4,17), (4,18), (5,17), (5,18)], "right_arm": [(9,16), (9,17), (10,16), (10,17)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
    {"name": "telling_joke3", "left_arm": [(5,18), (5,19), (6,18), (6,19)], "right_arm": [(9,18), (9,19), (10,18), (10,19)], 
     "left_leg": [(6,21), (6,22), (7,21), (7,22)], "right_leg": [(8,21), (8,22), (9,21), (9,22)]},
]

# Function to determine shade based on position
def get_shade(x, y, part):
    intensity = x + y
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
    return colors[part]

# Function to create a pile of bricks
def create_brick_pile(width=24, height=12):
    img = Image.new("RGBA", (width, height), colors["transparent"])
    pixels = img.load()
    
    brick_width, brick_height = 4, 2
    
    brick_positions = [
        (2, 8), (6, 8), (10, 8), (14, 8), (18, 8),
        (4, 6), (8, 6), (12, 6), (16, 6),
        (6, 4), (10, 4), (14, 4),
        (8, 2), (12, 2),
        (10, 0)
    ]
    
    for bx, by in brick_positions:
        for x in range(bx, bx + brick_width):
            for y in range(by, by + brick_height):
                if 0 <= x < width and 0 <= y < height:
                    if x == bx or y == by:
                        pixels[x, y] = colors["brick_highlight"]
                    elif x == bx + brick_width - 1 or y == by + brick_height - 1:
                        pixels[x, y] = colors["brick_shadow"]
                    else:
                        pixels[x, y] = colors["brick"]
    
    img = img.resize((width * scale, height * scale), Image.NEAREST)
    return img

# Function to draw character
def draw_character(frame, emotion, special_state=None, variation=0):
    img = Image.new("RGBA", (width, height), colors["transparent"])
    pixels = img.load()

    hair_variations = [
        hair_pattern,
        [(x+1, y) for x, y in hair_pattern],
        [(x-1, y) for x, y in hair_pattern],
        [(x, y-1) for x, y in hair_pattern],
        [(x, y+1) for x, y in hair_pattern],
    ]
    
    for x in range(4, 12):
        for y in range(5, 15):
            pixels[x, y] = get_shade(x, y, "skin")
    
    current_hair = hair_variations[variation]
    for hx, hy in current_hair:
        if 0 <= hx < width and 0 <= hy < height:
            pixels[hx, hy] = colors["hair"]
    
    eye_variations = [
        [(6, 9), (9, 9)],
        [(6, 8), (9, 8)],
        [(6, 10), (9, 10)],
        [(5, 9), (8, 9)],
        [(7, 9), (10, 9)],
    ]
    
    for ex, ey in eye_variations[variation]:
        if 0 <= ex < width and 0 <= ey < height:
            pixels[ex, ey] = colors["eyes"]

    if emotion == "happy":
        mouths = [
            [(7, 12), (8, 12), (7, 13), (8, 13)],
            [(7, 11), (8, 11), (7, 12), (8, 12)],
            [(7, 13), (8, 13), (7, 14), (8, 14)],
            [(6, 12), (7, 12), (6, 13), (7, 13)],
            [(8, 12), (9, 12), (8, 13), (9, 13)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions[emotion]
    elif emotion == "angry":
        mouths = [
            [(7, 12), (8, 12)],
            [(7, 11), (8, 11)],
            [(7, 13), (8, 13)],
            [(6, 12), (7, 12)],
            [(8, 12), (9, 12)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions[emotion]
    elif emotion == "sad":
        mouths = [
            [(7, 14), (8, 14)],
            [(7, 13), (8, 13)],
            [(7, 15), (8, 15)],
            [(6, 14), (7, 14)],
            [(8, 14), (9, 14)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions[emotion]
    elif emotion == "frustrated":
        mouths = [
            [(7, 12), (8, 12), (7, 13), (8, 13)],
            [(7, 11), (8, 11), (7, 12), (8, 12)],
            [(7, 13), (8, 13), (7, 14), (8, 14)],
            [(6, 12), (7, 12), (6, 13), (7, 13)],
            [(8, 12), (9, 12), (8, 13), (9, 13)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions[emotion]
    elif emotion == "satisfied":
        mouths = [
            [(7, 13), (8, 13), (6, 12), (9, 12)],
            [(7, 12), (8, 12), (6, 11), (9, 11)],
            [(7, 14), (8, 14), (6, 13), (9, 13)],
            [(6, 13), (7, 13), (5, 12), (8, 12)],
            [(8, 13), (9, 13), (7, 12), (10, 12)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions[emotion]
    elif emotion == "surprised":
        mouths = [
            [(7, 11), (8, 11), (7, 12), (8, 12)],
            [(7, 10), (8, 10), (7, 11), (8, 11)],
            [(7, 12), (8, 12), (7, 13), (8, 13)],
            [(6, 11), (7, 11), (6, 12), (7, 12)],
            [(8, 11), (9, 11), (8, 12), (9, 12)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions[emotion]
    else:
        mouths = [
            [(7, 12), (8, 12)],
            [(7, 11), (8, 11)],
            [(7, 13), (8, 13)],
            [(6, 12), (7, 12)],
            [(8, 12), (9, 12)],
        ]
        for mx, my in mouths[variation]:
            if 0 <= mx < width and 0 <= my < height:
                pixels[mx, my] = expressions["neutral"]

    for x in range(6, 10):
        for y in range(15, 20):
            pixels[x, y] = get_shade(x, y, "clothes")

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

    if special_state == "wet":
        water_pixels = [(5, 4), (10, 5), (7, 7), (8, 11)]
        for wx, wy in water_pixels:
            if 0 <= wx < width and 0 <= wy < height:
                pixels[wx, wy] = colors["water"]

    return img

# Modified function to create a larger speech bubble without text
def create_speech_bubble(bubble_width=250, bubble_height=150, pointer_pos=(70, 150)):
    img = Image.new("RGBA", (bubble_width, bubble_height), colors["transparent"])
    
    if not PILLOW_FEATURES:
        pixels = img.load()
        for x in range(10, bubble_width - 20):
            for y in range(10, bubble_height - 30):
                pixels[x, y] = colors["speech_bubble"]
        for x in range(pointer_pos[0] - 15, pointer_pos[0] + 15):
            for y in range(bubble_height - 30, pointer_pos[1]):
                if abs(pointer_pos[0] - x) * (pointer_pos[1] - (bubble_height - 30)) // 15 == y - (bubble_height - 30):
                    pixels[x, y] = colors["speech_bubble"]
        return img
    
    draw = ImageDraw.Draw(img)
    pillow_version = tuple(map(int, Image.__version__.split('.')))
    has_rounded_rect = pillow_version >= (8, 2, 0)
    
    if has_rounded_rect:
        draw.rounded_rectangle(
            [(0, 0), (bubble_width - 20, bubble_height - 30)],
            fill=colors["speech_bubble"],
            outline=colors["speech_text"],
            width=2,
            radius=15
        )
    else:
        draw.rectangle(
            [(0, 0), (bubble_width - 20, bubble_height - 30)],
            fill=colors["speech_bubble"],
            outline=colors["speech_text"],
            width=2
        )
    
    draw.polygon(
        [
            pointer_pos,
            (pointer_pos[0] - 20, pointer_pos[1] - 30),
            (pointer_pos[0] + 20, pointer_pos[1] - 30)
        ],
        fill=colors["speech_bubble"],
        outline=colors["speech_text"]
    )
    
    return img

# Function to create a joke telling sequence with larger empty speech bubbles
def create_joke_telling_sequence(joke_text):
    joke_frames = []
    joke_frame_names = ["telling_joke1", "telling_joke2", "telling_joke3"]
    emotions = ["neutral", "happy", "satisfied"]
    
    joke_frames_data = [next(f for f in frames if f["name"] == name) for name in joke_frame_names]
    
    for i, (frame, emotion) in enumerate(zip(joke_frames_data, emotions)):
        char_img = draw_character(frame, emotion)
        char_img = char_img.resize((width * scale, height * scale), Image.NEAREST)
        
        full_img = Image.new("RGBA", (350, 290), colors["transparent"])
        full_img.paste(char_img, (20, 290 - char_img.height), char_img)
        
        # Use larger empty speech bubble for all frames
        bubble = create_speech_bubble(bubble_width=250, bubble_height=150, pointer_pos=(70, 150))
        full_img.paste(bubble, (80, 10), bubble)
        
        joke_frames.append(full_img)
    
    return joke_frames

# Function to save an image if it doesn't already exist
def save_if_not_exists(img, filename):
    if not os.path.exists(filename):
        img.save(filename)
        return True
    return False

# Main execution
if __name__ == "__main__":
    brick_pile = create_brick_pile()
    if save_if_not_exists(brick_pile, f"{output_dir}/brick_pile.png"):
        print(f"Brick pile created!")
    else:
        print(f"Brick pile already exists, skipping.")

    print("Generating character frames...")
    
    for frame in frames:
        if frame["name"] in ["walking1", "walking2"]:
            for var in range(5):
                img = draw_character(frame, "neutral", variation=var)
                img = img.resize((width * scale, height * scale), Image.NEAREST)
                filename = f"{output_dir}/man_{frame['name']}_var{var}.png"
                if save_if_not_exists(img, filename):
                    print(f"Created {filename}")

    standing_frame = next(f for f in frames if f["name"] == "standing")
    for emotion in expressions.keys():
        if emotion not in ["surprised"]:
            for var in range(5):
                img = draw_character(standing_frame, emotion, variation=var)
                img = img.resize((width * scale, height * scale), Image.NEAREST)
                filename = f"{output_dir}/man_standing_{emotion}_var{var}.png"
                if save_if_not_exists(img, filename):
                    print(f"Created {filename}")

    for frame in frames:
        if frame["name"] in ["bending", "reaching_up", "holding", "dropping"]:
            for var in range(5):
                img = draw_character(frame, "neutral", variation=var)
                img = img.resize((width * scale, height * scale), Image.NEAREST)
                filename = f"{output_dir}/man_{frame['name']}_var{var}.png"
                if save_if_not_exists(img, filename):
                    print(f"Created {filename}")

    reaction_frame = next(f for f in frames if f["name"] == "reaction")
    for var in range(5):
        img_surprised = draw_character(reaction_frame, "surprised", variation=var)
        img_surprised = img_surprised.resize((width * scale, height * scale), Image.NEAREST)
        filename = f"{output_dir}/man_surprised_var{var}.png"
        if save_if_not_exists(img_surprised, filename):
            print(f"Created {filename}")

        img_wet = draw_character(reaction_frame, "frustrated", special_state="wet", variation=var)
        img_wet = img_wet.resize((width * scale, height * scale), Image.NEAREST)
        filename = f"{output_dir}/man_wet_var{var}.png"
        if save_if_not_exists(img_wet, filename):
            print(f"Created {filename}")

    try:
        with open("dataJokes.json", "r") as f:
            jokes_data = json.load(f)
        print("Loaded jokes from dataJokes.json")
    except FileNotFoundError:
        print("dataJokes.json not found, using default joke")
        jokes_data = [{"id": 644, "joke": "Why do pirates not know the alphabet? They always get lost at C."}]
    except json.JSONDecodeError:
        print("Error parsing dataJokes.json, using default joke")
        jokes_data = [{"id": 644, "joke": "Why do pirates not know the alphabet? They always get lost at C."}]
    
    for i, joke_data in enumerate(jokes_data[:3]):
        joke_text = joke_data["joke"]
        print(f"Creating joke sequence {i+1}: {joke_text}")
        joke_frames = create_joke_telling_sequence(joke_text)
        
        for j, frame in enumerate(joke_frames):
            filename = f"{output_dir}/man_joke{i+1}_frame{j+1}.png"
            if save_if_not_exists(frame, filename):
                print(f"Created {filename}")
    
    print(f"All frames saved in '{output_dir}'!")