import json

#
#   Fetch photos in photos.json of the businesses whose business_id is in db.json
#
# with open('db.json', 'r') as business_json_file:
#     business_data = json.load(business_json_file)

# with open('photos.json', 'r') as photo_json_file:
#     photo_data = json.load(photo_json_file)

# photo_dictionary = {}

# for photo in photo_data['photos']:
#     if photo['business_id'] in photo_dictionary:
#         photo_dictionary[photo['business_id']].append(photo)
#     else:
#         photo_dictionary[photo['business_id']] = []
#         photo_dictionary[photo['business_id']].append(photo)

# new_photo_data = {
#     "photos": []
# }
# for business in business_data['business']:
#     if business['business_id'] in photo_dictionary:
#         for photo in photo_dictionary[business['business_id']]:
#             new_photo_data["photos"].append(photo)

# with open('photo.json', 'w') as new_photo_json_file:
#     json.dump(new_photo_data, new_photo_json_file)

#
#   Filter businesses whose RestaurantsTakeOut attribute is True
#
# with open('businesses.json', 'r', encoding='utf8') as business_json_file:
#     business_data = json.load(business_json_file)

# businesses_with_takeout = {
#     "business": []
# }
# for business in business_data['business']:
#     if business['attributes']:
#         if business['attributes'].get('RestaurantsTakeOut') == 'True':
#             businesses_with_takeout["business"].append(business)

# with open('business.json', 'w') as new_business_json_file:
#     json.dump(businesses_with_takeout, new_business_json_file)

#
#   Fetch a photo whose label is "inside" and append it to the corresponding business in business.json
#
photo_dict = {}

with open('db.json', 'r') as business_json_file:
    business_data = json.load(business_json_file)

for photo in business_data['photos']:
    if photo.get('label') == 'inside' and photo['business_id'] not in photo_dict:
        photo_dict[photo['business_id']] = photo['photo_id']

for business in business_data['business']:
    if business['business_id'] in photo_dict:
        business['thumbnail'] = "https://s3-media0.fl.yelpcdn.com/bphoto/" + photo_dict[business['business_id']] + "/l.jpg"

with open('db.json', 'w') as new_business_json_file:
    json.dump(business_data, new_business_json_file)