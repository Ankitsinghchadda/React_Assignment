Copy the JSON contents from the given link, it contains a multi-dimensional array of
objects.Context:
The provided data contains array of User object, this user object contains “deep_childrens” array,
which contains multiple objects of User.Assignment:
Your job is to add “level” field to each User object, based on the User object’s depth.
Add a “total_staked” field to each User object, based on the sum of staked_amount from all pools in
a User object.In the frontend we should be able to filter the User’s based on their level.
Data to be shown in the frontend: \* Total User’s on a level (Default to all levels), We should be
able to filter it by level

- Total Staked amount on a level (Default to all levels), We should be able to filter it by level
